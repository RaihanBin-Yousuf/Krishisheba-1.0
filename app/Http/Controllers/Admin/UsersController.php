<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
