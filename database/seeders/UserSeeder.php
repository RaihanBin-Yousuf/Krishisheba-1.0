<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $all_users=[
            [ "name" => "RAIHAN", "email" => "raihancox12@gmail.com", "mobile" => "01816064616","nid" => "5106894768","birth_date" => "02-07-1997","role" => "admin","password" => bcrypt('12121212')],
            [ "name" => "EMTIYAZ", "email" => "emtiyaz12@gmail.com", "mobile" => "01816064617","nid" => "345677544567","birth_date" => "10-11-2019","role" => "seller","password" =>  bcrypt('12121212')],
            [ "name" => "ROBIN", "email" => "robin12@gmail.com", "mobile" => "01816064618","nid" => "5106894769","birth_date" => "12-11-2017","role" => "buyer","password" =>  bcrypt('12121212')],
            [ "name" => "ABISHEK", "email" => "abishek12@gmail.com", "mobile" => "01816064619","nid" => "345775445756","birth_date" => "11-10-2010","role" => "transport","password" =>  bcrypt('12121212')],
            [ "name" => "SRABONY", "email" => "srabony@gmail.com", "mobile" => "01816064666","nid" => "51068094768","birth_date" => "02-08-1997","role" => "seller","password" => bcrypt('12121212')],
            [ "name" => "SANU", "email" => "sanu@gmail.com", "mobile" => "01816064777","nid" => "3456775445698","birth_date" => "10-12-2019","role" => "seller","password" =>  bcrypt('12121212')],
            [ "name" => "HOBAIB", "email" => "hobaib@gmail.com", "mobile" => "01816064888","nid" => "51068947659","birth_date" => "12-1-2017","role" => "seller","password" =>  bcrypt('12121212')],
            [ "name" => "SALMAN", "email" => "salman@gmail.com", "mobile" => "01816064999","nid" => "3456775445756","birth_date" => "11-11-2010","role" => "seller","password" =>  bcrypt('12121212')],
        ];

        foreach($all_users as $users) {
            $user = new User();
            $user->name = $users['name'];
            $user->email = $users['email'];
            $user->mobile = $users['mobile'];
            $user->nid = $users['nid'];
            $user->birth_date = $users['birth_date'];
            $user->role = $users['role'];
            $user->password = $users['password'];
            // $user->timestamps = $users['timestamps'];
            $user->save();
        }
    }
}
