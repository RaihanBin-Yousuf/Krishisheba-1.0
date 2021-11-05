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
<<<<<<< Updated upstream
            [ "name" => "RAIHAN", "email" => "raihancox12@gmail.com", "mobile" => "01816064616","nid" => "5106894768","birth_date" => "02-07-1997","role" => "sadmin","address" => "cox's Bazar barmese market","password" => md5('12121212'),"profile_img"=>"raihan.jpg", "lat"=>22.3609389, "lng"=>91.8568732],
            [ "name" => "RAIHAN UDDIN", "email" => "raihanuddin200983@gmail.com", "mobile" => "01817273489","nid" => "510689475568","birth_date" => "02-07-1997","role" => "admin","address" => "cox's Bazar","password" => md5('12121212'),"profile_img"=>"team-1.jpg", "lat"=>22.3598423, "lng"=>91.8564492],
            [ "name" => "EMTIYAZ", "email" => "emtiyaz12@gmail.com", "mobile" => "01816064617","nid" => "345677544567","birth_date" => "10-11-2019","role" => "admin","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-2.jpg", "lat"=>22.3595222, "lng"=>91.8566486],
            [ "name" => "ROBIN", "email" => "robin12@gmail.com", "mobile" => "01816064618","nid" => "5106894769","birth_date" => "12-11-2017","role" => "farmer","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-3.jpg", "lat"=>22.359761, "lng"=>91.8555076],
            [ "name" => "ABISHEK", "email" => "abishek12@gmail.com", "mobile" => "01816064619","nid" => "345775445756","birth_date" => "11-10-2010","role" => "farmer","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-4.jpg", "lat"=>22.3606898, "lng"=>91.8571316],
            [ "name" => "SRABONY", "email" => "srabony@gmail.com", "mobile" => "01816064666","nid" => "51068094768","birth_date" => "02-08-1997","role" => "admin","address" => "chattogram","password" => md5('12121212'),"profile_img"=>"team-5.jpg", "lat"=>22.3599161, "lng"=>91.8552747],
            [ "name" => "SANU MARMA", "email" => "sanu@gmail.com", "mobile" => "01816064777","nid" => "34567754456985","birth_date" => "10-12-2019","role" => "admin","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-6.jpg", "lat"=>22.3599161, "lng"=>91.8552747],
            [ "name" => "HOBAIB", "email" => "hobaib@gmail.com", "mobile" => "01816064888","nid" => "510689476595","birth_date" => "12-1-2017","role" => "seller","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"team-7.jpg", "lat"=>22.3601664, "lng"=>91.852],
            [ "name" => "SALMAN", "email" => "salman@gmail.com", "mobile" => "01816064999","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "seller","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg", "lat"=>22.3601664, "lng"=>91.852],
            [ "name" => "BURHAN", "email" => "burhan@gmail.com", "mobile" => "01816064866","nid" => "510689476595","birth_date" => "12-1-2017","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-2.jpg", "lat"=>22.3596106, "lng"=>91.8524182],
            [ "name" => "RIDWAN", "email" => "ridwan@gmail.com", "mobile" => "01816064977","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-3.jpg", "lat"=>22.3599245, "lng"=>91.8520889],
            [ "name" => "ABSER", "email" => "abser@gmail.com", "mobile" => "01816064899","nid" => "5106894765956","birth_date" => "12-1-2017","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-4.jpg", "lat"=>22.3596205, "lng"=>91.8520813],
            [ "name" => "FAYSAL", "email" => "faysal@gmail.com", "mobile" => "01816064944","nid" => "345677544575656","birth_date" => "11-11-2010","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg", "lat"=>22.3596205, "lng"=>91.8520813],
=======
<<<<<<< Updated upstream
            [ "name" => "RAIHAN", "email" => "raihancox12@gmail.com", "mobile" => "01816064616","nid" => "5106894768","birth_date" => "02-07-1997","role" => "sadmin","address" => "cox's Bazar barmese market","password" => bcrypt('12121212'),"profile_img"=>"raihan.jpg", "lat"=>22.3609389, "lng"=>91.8568732],
            [ "name" => "RAIHAN UDDIN", "email" => "raihanuddin200983@gmail.com", "mobile" => "01817273489","nid" => "510689475568","birth_date" => "02-07-1997","role" => "admin","address" => "cox's Bazar","password" => bcrypt('12121212'),"profile_img"=>"team-1.jpg", "lat"=>22.3598423, "lng"=>91.8564492],
            [ "name" => "EMTIYAZ", "email" => "emtiyaz12@gmail.com", "mobile" => "01816064617","nid" => "345677544567","birth_date" => "10-11-2019","role" => "admin","address" => "chattogram","password" =>  bcrypt('12121212'),"profile_img"=>"team-2.jpg", "lat"=>22.3595222, "lng"=>91.8566486],
            [ "name" => "ROBIN", "email" => "robin12@gmail.com", "mobile" => "01816064618","nid" => "5106894769","birth_date" => "12-11-2017","role" => "farmer","address" => "chattogram","password" =>  bcrypt('12121212'),"profile_img"=>"team-3.jpg", "lat"=>22.359761, "lng"=>91.8555076],
            [ "name" => "ABISHEK", "email" => "abishek12@gmail.com", "mobile" => "01816064619","nid" => "345775445756","birth_date" => "11-10-2010","role" => "farmer","address" => "chattogram","password" =>  bcrypt('12121212'),"profile_img"=>"team-4.jpg", "lat"=>22.3606898, "lng"=>91.8571316],
            [ "name" => "SRABONY", "email" => "srabony@gmail.com", "mobile" => "01816064666","nid" => "51068094768","birth_date" => "02-08-1997","role" => "admin","address" => "chattogram","password" => bcrypt('12121212'),"profile_img"=>"team-5.jpg", "lat"=>22.3599161, "lng"=>91.8552747],
            [ "name" => "SANU MARMA", "email" => "sanu@gmail.com", "mobile" => "01816064777","nid" => "34567754456985","birth_date" => "10-12-2019","role" => "admin","address" => "chattogram","password" =>  bcrypt('12121212'),"profile_img"=>"team-6.jpg", "lat"=>22.3599161, "lng"=>91.8552747],
            [ "name" => "HOBAIB", "email" => "hobaib@gmail.com", "mobile" => "01816064888","nid" => "510689476595","birth_date" => "12-1-2017","role" => "seller","address" => "Cox's Bazar","password" =>  bcrypt('12121212'),"profile_img"=>"team-7.jpg", "lat"=>22.3601664, "lng"=>91.852],
            [ "name" => "SALMAN", "email" => "salman@gmail.com", "mobile" => "01816064999","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "seller","address" => "Cox's Bazar","password" =>  bcrypt('12121212'),"profile_img"=>"images-1.jpg", "lat"=>22.3601664, "lng"=>91.852],
            [ "name" => "BURHAN", "email" => "burhan@gmail.com", "mobile" => "01816064866","nid" => "510689476595","birth_date" => "12-1-2017","role" => "buyer","address" => "Cox's Bazar","password" =>  bcrypt('12121212'),"profile_img"=>"images-2.jpg", "lat"=>22.3596106, "lng"=>91.8524182],
            [ "name" => "RIDWAN", "email" => "ridwan@gmail.com", "mobile" => "01816064977","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "buyer","address" => "Cox's Bazar","password" =>  bcrypt('12121212'),"profile_img"=>"images-3.jpg", "lat"=>22.3599245, "lng"=>91.8520889],
            [ "name" => "ABSER", "email" => "abser@gmail.com", "mobile" => "01816064899","nid" => "5106894765956","birth_date" => "12-1-2017","role" => "buyer","address" => "Cox's Bazar","password" =>  bcrypt('12121212'),"profile_img"=>"images-4.jpg", "lat"=>22.3596205, "lng"=>91.8520813],
            [ "name" => "FAYSAL", "email" => "faysal@gmail.com", "mobile" => "01816064944","nid" => "345677544575656","birth_date" => "11-11-2010","role" => "buyer","address" => "Cox's Bazar","password" =>  bcrypt('12121212'),"profile_img"=>"images-1.jpg", "lat"=>22.3596205, "lng"=>91.8520813],
=======
            [ "name" => "RAIHAN", "email" => "raihancox12@gmail.com", "mobile" => "01816064616","nid" => "5106894768","birth_date" => "02-07-1997","role" => "sadmin","address" => "cox's Bazar barmese market","password" => md5('12121212'),"profile_img"=>"raihan.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3609389, "lng"=>91.8568732],
            [ "name" => "RAIHAN UDDIN", "email" => "raihanuddin200983@gmail.com", "mobile" => "01817273489","nid" => "510689475568","birth_date" => "02-07-1997","role" => "admin","address" => "cox's Bazar","password" => md5('12121212'),"profile_img"=>"team-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3598423, "lng"=>91.8564492],
            [ "name" => "EMTIYAZ", "email" => "emtiyaz12@gmail.com", "mobile" => "01816064617","nid" => "345677544567","birth_date" => "10-11-2019","role" => "admin","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-2.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3595222, "lng"=>91.8566486],
            [ "name" => "MD SHAHALAM", "email" => "shahalam@gmail.com", "mobile" => "01816064618","nid" => "5106894769","birth_date" => "12-11-1970","role" => "farmer","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"farmer-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.366362, "lng"=>91.843139],
            [ "name" => "MD SUKKUR", "email" => "sukkur@gmail.com", "mobile" => "01816064619","nid" => "345775445756","birth_date" => "11-10-1980","role" => "farmer","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"farmer-2.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3606898, "lng"=>91.8571316],
            [ "name" => "SRABONY", "email" => "srabony@gmail.com", "mobile" => "01816064666","nid" => "51068094768","birth_date" => "02-08-1997","role" => "admin","address" => "chattogram","password" => md5('12121212'),"profile_img"=>"team-5.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3599161, "lng"=>91.8552747],
            [ "name" => "SANU MARMA", "email" => "sanu@gmail.com", "mobile" => "01816064777","nid" => "34567754456985","birth_date" => "10-12-2019","role" => "admin","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-6.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3599161, "lng"=>91.8552747],
            [ "name" => "HOBAIB", "email" => "hobaib@gmail.com", "mobile" => "01816064888","nid" => "510689476595","birth_date" => "12-1-2017","role" => "seller","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"team-7.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.443142, "lng"=>91.983248],
            [ "name" => "SALMAN", "email" => "salman@gmail.com", "mobile" => "01816064999","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "seller","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.442178, "lng"=>91.972063],
            [ "name" => "BURHAN", "email" => "burhan@gmail.com", "mobile" => "01816064866","nid" => "510689476595","birth_date" => "12-1-2017","role" => "seller","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-2.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3596106, "lng"=>91.8524182],
            [ "name" => "RIDWAN", "email" => "ridwan@gmail.com", "mobile" => "01816064977","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-3.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3599245, "lng"=>91.8520889],
            [ "name" => "ABSER", "email" => "abser@gmail.com", "mobile" => "01816064899","nid" => "5106894765956","birth_date" => "12-1-2017","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-4.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3596205, "lng"=>91.8520813],
            [ "name" => "FAYSAL", "email" => "faysal@gmail.com", "mobile" => "01816064944","nid" => "345677544575656","birth_date" => "11-11-2010","role" => "buyer","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3596205, "lng"=>91.8520813],

            //transport users seller 8
            [ "name" => "Md.RIDWAN", "email" => "ridwan22@gmail.com", "mobile" => "01816164977","nid" => "34567754457565","birth_date" => "11-11-2010","role" => "transport","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-3.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.442973, "lng"=>91.984685],
            [ "name" => "Md.ABSER", "email" => "abser22@gmail.com", "mobile" => "01816164899","nid" => "5206894765956","birth_date" => "12-1-2017","role" => "transport","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-4.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.441215, "lng"=>91.981391],
            [ "name" => "Md.FAYSAL", "email" => "faysal22@gmail.com", "mobile" => "01816164944","nid" => "35677544575656","birth_date" => "11-11-2010","role" => "transport","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.440875, "lng"=>91.984299],

             //transport users seller 9
             [ "name" => "Md.harun", "email" => "harun@gmail.com", "mobile" => "01816164477","nid" => "34567764457565","birth_date" => "11-11-2010","role" => "transport","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-3.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.445517, "lng"=>91.969818],
             [ "name" => "Md.rohim", "email" => "rohim@gmail.com", "mobile" => "01816164499","nid" => "5206895765956","birth_date" => "12-1-2017","role" => "transport","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-4.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.444588, "lng"=>91.975343],
             [ "name" => "Md.korim", "email" => "korim@gmail.com", "mobile" => "01816164544","nid" => "35677574575656","birth_date" => "11-11-2010","role" => "transport","address" => "Cox's Bazar","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>21.442753, "lng"=>91.976225],
            //transport users seller 4
            [ "name" => "Md.rakib", "email" => "rakib@gmail.com", "mobile" => "01735827557","nid" => "3456764457565","birth_date" => "11-11-2010","role" => "transport","address" => "CHITTAGONG","password" =>  md5('12121212'),"profile_img"=>"images-3.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.367543, "lng"=>91.843504],
            [ "name" => "Md.rana", "email" => "rana@gmail.com", "mobile" => "01735827567","nid" => "520689765956","birth_date" => "12-1-2017","role" => "transport","address" => "CHITTAGONG","password" =>  md5('12121212'),"profile_img"=>"images-4.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.366362, "lng"=>91.845038],
            [ "name" => "Md.ratul", "email" => "ratul@gmail.com", "mobile" => "01735827457","nid" => "3567574575656","birth_date" => "11-11-2010","role" => "transport","address" => "CHITTAGONG","password" =>  md5('12121212'),"profile_img"=>"images-1.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.367468, "lng"=>91.841229],
            [ "name" => "ROBIN", "email" => "robin12@gmail.com", "mobile" => "01816064818","nid" => "51068947669","birth_date" => "12-11-2000","role" => "admin","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-3.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.366362, "lng"=>91.843139],
            [ "name" => "ABISHEK", "email" => "abishek12@gmail.com", "mobile" => "01816064819","nid" => "3457754457576","birth_date" => "11-10-2001","role" => "admin","address" => "chattogram","password" =>  md5('12121212'),"profile_img"=>"team-4.jpg","nid_front_img"=>"niddemo.jpg", "fid_front_img"=>"fiddemo.jpg", "lat"=>22.3606898, "lng"=>91.8571316],
>>>>>>> Stashed changes
>>>>>>> Stashed changes
        ];

        foreach($all_users as $users) {
            $user = new User();
            $user->name = $users['name'];
            $user->email = $users['email'];
            $user->mobile = $users['mobile'];
            $user->address = $users['address'];
            $user->nid = $users['nid'];
            $user->birth_date = $users['birth_date'];
            $user->role = $users['role'];
            $user->password = $users['password'];
            $user->profile_img = $users['profile_img'];
            $user->nid_front_img = $users['nid_front_img'];
            $user->fid_front_img = $users['fid_front_img'];
            $user->lat = $users['lat'];
            $user->lng = $users['lng'];
            $user->amount = 0;
            // $user->timestamps = $users['timestamps'];
            $user->save();
        }
    }
}