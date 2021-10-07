<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Twilio\Rest\Client;

use Laravel\Fortify\Rules\Password;

use Illuminate\Support\Facades\Validator;
class UsersController extends Controller
{
    public function __construct(User $user) {
        $this->user = $user;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request()->ajax()) {
            if(request()->access_to) {
                $user = $this->user->getAdmin();
                return $this->sendResponse($user);
            } else if(request()->all) {
                $users = $this->user->get();
                return $this->sendResponse($users);
            }
            $user = auth()->user();
            if(empty($user)) {
                $user = ['data'=>"not found"];
            }
            return $this->sendResponse($user);
        }
        $allusers = $this->user->getAllUsers()
        ->where('role','!=','sadmin')
        ->where('role','!=','admin');
        return view('backend.manage_users.index',compact('allusers'));
    }

    public function authuser()
    {
        $user = Auth::user();
        // dd($user);
        return $this->sendResponse($user);
    }

    public function alltransport()
    {
        $users = $this->user->getAllTransports();
        return $this->sendResponse($users);
    }


    public function AllAdmin()
    {
        // $alladmin = User::where(['role'=>'admin','access_to'=>'0'])->get();
        $alladmin = User::where(['role'=>'admin'])->get();
        return view('backend.superadmin.accessadmin',compact('alladmin'));
    }

    public function AddAdmin()
    {
        // $alladmin = User::where(['role'=>'admin','access_to'=>'0'])->get();
        // $alladmin = User::where(['role'=>'admin'])->get();
        return view('backend.superadmin.addnewadmin');
    }
    

    public function viewadmin($id)
    {
        $viewadmin = User::find($id);
        // dd($viewadmin);
        return view('backend.superadmin.adminview',compact('viewadmin'));
    }
    public function seller()
    {
        $allsellers = $this->user->getAllUsers()
        ->where('role','seller');
        return view('backend.manage_users.seller',compact('allsellers'));
    }
    public function buyer()
    {
        $allbuyers = $this->user->getAllUsers()
        ->where('role','buyer');
        return view('backend.manage_users.buyer',compact('allbuyers'));
    }

    public function viewuser($id)
    {
        $viewuser = User::find($id);
        // dd($viewadmin);
        return view('backend.manage_users.userprofileview',compact('viewuser'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.manage_users.add');
    }

    public function deleteUserById($id)
	{
		$data=User::find($id);
        $data->delete();

        $notification=array(
            'messege'=>'User Successfully Deleted',
            'alert-type'=>'success'
             );
             return Redirect()->back()->with($notification);
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(request()->ajax()) {
            
            if(request()->logout) {
                $user = Auth::logout();
                // dd($user);
                return $this->sendResponse($user);
            }
            $input = request()->all();
            // $input['password']=md5 ($input['password']);
            // dd($input);
            // $input["password"] = Hash::make($input['password']);
            $user = Auth::attempt($input);
            // dd($user);
            if($user == false) {
                // dd($user);
                return $this->sendError(['error'=>'অনুগ্রহপূর্বক আবার চেষ্টা করুন']);
            }
            else {
                return $this->sendResponse($user);
            }
        }
        $user['id']=$request->access_to;
        $user['access_to']=Auth::user()->id;
       $this->user->accessTo($user,$user['id']);
       $notification=array(
        'messege'=>'profile updated',
        'alert-type'=>'info'
         );
         return Redirect()->back()->with($notification);
    }

    public function location()
    {
        if(request()->ajax()) {
                $input = request()->all();
                $id = Auth::user()->id;
                $data = $this->user->where('id',$id)->update($input);
                return $this->sendResponse($data);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $buyer = User::findorfail($id);
        // dd($id);
        return $this->sendResponse($buyer);
    }

    public function myprofile()
    {
        $userId = Auth::user()->id;
        $userinfo = User::where('user_id', $userId)->get();
        return view('backend.dashboard',compact('userinfo'));
    }
    public function myorder()
    {
        if (Auth::user()->access_to == "99") {
            $notification=array(
                'messege'=>'you have wait for Admin access',
                'alert-type'=>'warning'
                 );
                 return Redirect()->back()->with($notification);     
        } 
        else
        {
        $userId = Auth::user()->id;
        $order = Payment::where('seller_id', $userId)->get();
        return view('backend.manage_posts.mysells',compact('order'));
        }
    }
    public function buyerorderlist()
    {   
        $userId = Auth::user()->id;
        $buyerorder = Payment::where('buyer_id', $userId)->get();
        return view('backend.manage_posts.buyerorder',compact('buyerorder')); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function notify(Request $request)
    {
        $input = $request->all();
        // dd($input);
        //first create twillow account
        $account_sid = "ACafa4ae42d3b869067506ad0299c9d4bf"; //set your Twillow SID
        $auth_token = "9b2f02f73409807efa2bb323ac0ac568"; //set your Twillow Auth token
        $twilio_number = "+17027494790"; // set your twillo number
        $client = new Client($account_sid, $auth_token);
        $client->messages->create('+880'.$input['mobile'], ['from' => $twilio_number, 'body' => $input['comments']]);
    }

    public function newuser(Request $request)
    {
        $input= $request->all();
        if($input['role'] == 'farmer'){

            $this->validate($request, [
                'fid_front_img' => ['required', 'image', 'max:2048'],
                'farmer_id_no' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
                'name' => ['required', 'string', 'max:20'],
                'email' => ['nullable','email','max:255',Rule::unique(User::class),],
                'address' => ['required', 'string'],
                'password' => ['required', 'string', new Password, 'confirmed'],
                'role' => ['required', 'string', 'max:10'],
                'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
                'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
                'profile_img' => ['image', 'max:2048'],
                'nid_front_img' => ['required', 'image', 'max:2048'],
                ]);
        }

        elseif($input['role'] == 'seller'){
            $this->validate($request, [
                'trade_lisence_no' => ['required', 'string', 'min:7', 'max:7', 'unique:users'],
                'name' => ['required', 'string', 'max:20'],
                'email' => ['nullable','email','max:255',Rule::unique(User::class),],
                'address' => ['required', 'string'],
                'password' => ['required', 'string', new Password, 'confirmed'],
                'role' => ['required', 'string', 'max:10'],
                'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
                'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
                'profile_img' => ['nullable', 'image', 'max:2048'],
                'nid_front_img' => ['required', 'image', 'max:2048'],
                ]);
        }

        elseif($input['role'] == 'transport'){
            $this->validate($request, [
                'vehicle_license_no' => ['required', 'string', 'min:15', 'max:15', 'unique:users'],
                'name' => ['required', 'string', 'max:20'],
                'email' => ['nullable','email','max:255',Rule::unique(User::class),],
                'address' => ['required', 'string'],
                'password' => ['required', 'string', new Password, 'confirmed'],
                'role' => ['required', 'string', 'max:10'],
                'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
                'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
                'profile_img' => ['nullable', 'image', 'max:2048'],
                'nid_front_img' => ['required', 'image', 'max:2048'],
                ]);
        }
        elseif($input['role'] == 'buyer')
        {
            $this->validate($request, [
                'name' => ['required', 'string', 'max:20'],
                'email' => ['nullable','email','max:255',Rule::unique(User::class),],
                'address' => ['required', 'string'],
                'password' => ['required', 'string', new Password, 'confirmed'],
                'role' => ['required', 'string', 'max:10'],
                'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
                'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
                'profile_img' => ['nullable', 'image', 'max:2048'],
                'nid_front_img' => ['required', 'image', 'max:2048'],
                ]);
        }
        
            // dd($input);
            if(empty($input['profile_img']))
            {
                $input['profile_img']='';
            }
            else
            {
                $imageName =time().'.'.$input['profile_img']->extension();
                $input['profile_img']->storeAs('public/profile', $imageName);
                $input['profile_img'] =$imageName;
            }

            //only for farmers
            
            if(empty($input['fid_front_img']))
            {
                $input['fid_front_img']='';
            }
            else
            {
                $imageName =time().'.'.$input['fid_front_img']->extension();
                $input['fid_front_img']->storeAs('public/fidcard', $imageName);
                $input['fid_front_img'] =$imageName;
            }

             //only for farmers
            
            if(empty($input['farmer_id_no']))
            {
                $input['farmer_id_no']='';
            }

            if(empty($input['vehicle_license_no']))
            {
                $input['vehicle_license_no']='';
            }
            if(empty($input['trade_lisence_no']))
            {
                $input['trade_lisence_no']='';
            }
            $imageName =time().'.'.$input['nid_front_img']->extension();
            $input['nid_front_img']->storeAs('public/nidcard', $imageName);
            $input['nid_front_img'] =$imageName;
            // dd($input);
            $token = "9b2f02f73409807efa2bb323ac0ac568";
            $twilio_sid = "ACafa4ae42d3b869067506ad0299c9d4bf";
            $twilio_verify_sid = "VA349a8a97c4a95d3562a227fbd07c6dd4";
            $twilio = new Client($twilio_sid, $token);
            $twilio->verify->v2->services($twilio_verify_sid)
                ->verifications
                ->create('+880'.$input['mobile'], "sms");

                $input['password']=md5 ($input['password']);
                $input['password_confirmation']=md5 ($input['password_confirmation']);
            User::create([
                'name' => $input['name'],
                'role' => $input['role'],
                'nid' => $input['nid'],
                'mobile' => $input['mobile'],
                'email' => $input['email'],
                'birth_date' => $input['birth_date'],
                'address' => $input['address'],
                'password' => ($input['password']),           
                'profile_img' => $input['profile_img'],
                'nid_front_img' => $input['nid_front_img'],
                //Only For Sellers
                'trade_lisence_no' => $input['trade_lisence_no'],
                //Only For Farmesr
                'fid_front_img' => $input['fid_front_img'],
                'farmer_id_no' => $input['farmer_id_no'],
                //Only For Transport Owners
                'vehicle_license_no' => $input['vehicle_license_no'],

            ]);
            // dd($input);
        return redirect()->route('verify')->with(['mobile' => $input['mobile']]);
    }

    public function verify(Request $request)
    {
        $data = $request->validate([
            'verification_code' => ['required', 'numeric'],
            'mobile' => ['required', 'string'],
        ]);
        /* Get credentials from .env */
        $token = "9b2f02f73409807efa2bb323ac0ac568";
        $twilio_sid = "ACafa4ae42d3b869067506ad0299c9d4bf";
        $twilio_verify_sid = "VA349a8a97c4a95d3562a227fbd07c6dd4";
        $twilio = new Client($twilio_sid, $token);
        $verification = $twilio->verify->v2->services($twilio_verify_sid)
            ->verificationChecks
            ->create($data['verification_code'], array('to' => '+880'.$data['mobile']));
        if ($verification->valid) {
            $user = tap(User::where('mobile', $data['mobile']))->update(['access_to' => '99']);
            /* Authenticate user */
            Auth::login($user->first());
            return redirect()->route('dashboard')->with(['message' => 'Phone number verified']);
        }
        return back()->with(['mobile' => $data['mobile'], 'error' => 'Invalid verification code entered!']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function countUsers()
    {
        $user =$this->user->countallUser();
        return $this->sendResponse($user);
    }

    public function accessadmin()
    { 
        $user = request()->all();
        $user['access_to']=Auth::user()->id;
        $data = $this->user->accessTo($user,$user['id']);
        
        return $this->sendResponse($data);
        // dd($input);  
        // $user = $this->user->
        
    }
}