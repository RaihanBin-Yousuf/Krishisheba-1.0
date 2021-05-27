<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
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
        $account_sid = "ACfbe5df71eebfa889982ce06258186e8c"; //set your Twillow SID
        $auth_token = "03a327a3e028d01f85fad7e0a2fd4dc0"; //set your Twillow Auth token
        $twilio_number = "+17472325099"; // set your twillo number
        $client = new Client($account_sid, $auth_token);
        $client->messages->create('+880'.$input['mobile'], ['from' => $twilio_number, 'body' => $input['comments']]);
    }

    public function newuser(Request $request)
    {
        $input= $request->all();
        $this->validate($request, [
            'name' => ['required', 'string'],
            'password' => ['required', 'string', new Password, 'confirmed'],
            'role' => ['required', 'string', 'max:10'],
            'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
            'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
            'profile_img' => ['nullable', 'image', 'max:2048'],
            'nid_front_img' => ['required', 'image', 'max:2048'],
            ]);
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

            $imageName =time().'.'.$input['nid_front_img']->extension();
            $input['nid_front_img']->storeAs('public/nidcard', $imageName);
            $input['nid_front_img'] =$imageName;
            // dd($input);
            $token = "03a327a3e028d01f85fad7e0a2fd4dc0";
            $twilio_sid = "ACfbe5df71eebfa889982ce06258186e8c";
            $twilio_verify_sid = "VAf85b8c91235b361f166646e1e19e52d2";
            $twilio = new Client($twilio_sid, $token);
            $twilio->verify->v2->services($twilio_verify_sid)
                ->verifications
                ->create('+880'.$input['mobile'], "sms");

            
            User::create([
                'name' => $input['name'],
                'role' => $input['role'],
                'nid' => $input['nid'],
                'mobile' => $input['mobile'],
                'email' => $input['email'],
                'birth_date' => $input['birth_date'],
                'address' => $input['address'],
                'password' => Hash::make($input['password']),           
                'profile_img' => $input['profile_img'],
                'nid_front_img' => $input['nid_front_img'],
                
            ]);
        return redirect()->route('verify')->with(['mobile' => $input['mobile']]);
    }

    public function verify(Request $request)
    {
        $data = $request->validate([
            'verification_code' => ['required', 'numeric'],
            'mobile' => ['required', 'string'],
        ]);
        /* Get credentials from .env */
        $token = "03a327a3e028d01f85fad7e0a2fd4dc0";
        $twilio_sid = "ACfbe5df71eebfa889982ce06258186e8c";
        $twilio_verify_sid = "VAf85b8c91235b361f166646e1e19e52d2";
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
}
