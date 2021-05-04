<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $allusers = $this->user->getAllUsers()
        ->where('role','!=','sadmin')
        ->where('role','!=','admin');
        return view('backend.manage_users.index',compact('allusers'));
    }
    public function AllAdmin()
    {
        $alladmin = User::where(['role'=>'admin','access_to'=>'0'])->get();
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
        $allsellers = User::where('role','seller')->get();
        return view('backend.manage_users.seller',compact('allsellers'));
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
        $user['id']=$request->access_to;
        $user['access_to']=1;
       $this->user->accessToAdmin($user,$user['id']);
       return view('backend.superadmin.adminview');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $viewadmin = User::find($id);
        // dd($viewadmin);
        return view('backend.superadmin.adminview',compact('viewadmin'));
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
