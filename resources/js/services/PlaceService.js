
const PlaceService = {};

PlaceService.district = (division) => {
    console.log('division :>> ', division);
    let disctList = '';
    if(division == 'Barishal'){
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Barguna">বরগুনা জেলা</option><option value="Barishal">বরিশাল জেলা</option><option value="Bhola">ভোলা জেলা</option><option value="Jhalokati">ঝালকাঠি জেলা</option><option value="Patuakhali">পটুয়াখালী জেলা</option><option value="Pirojpur">পিরোজপুর জেলা</option>';
     }
     // set Chattogram division districts
     else if(division == 'Chattogram') {
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Bandarban">বান্দরবান</option><option value="Chandpur">চাঁদপুর</option><option value="Chattogram">চট্টগ্রাম</option><option value="Comilla">কুমিল্লা</option><option value="Cox\'s Bazar">কক্সবাজার</option><option value="Feni">ফেনী</option><option value="Khagrachhari">খাগড়াছড়ি</option><option value="Noakhali">নোয়াখালী</option><option value="Rangamati">রাঙ্গামাটি</option><option value="Noakhali">লক্ষ্মীপুর</option><option value="Brahmanbaria">ব্রাহ্মণবাড়িয়া</option>'; 
     }
     // set Dhaka division districts
     else if(division == 'Dhaka') {
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Dhaka">ঢাকা</option><option value="Faridpur">ফরিদপুর</option><option value="Gazipur">গাজীপুর</option><option value="Gopalganj">গোপালগঞ্জ</option><option value="Kishoreganj">কিশোরগঞ্জ</option><option value="Madaripur">মাদারীপুর</option><option value="Manikganj">মানিকগঞ্জ</option><option value="Munshiganj">মুন্সিগঞ্জ</option><option value="Narayanganj">নারায়ণগঞ্জ</option><option value="Narsingdi">নরসিংদী</option><option value="Rajbari">রাজবাড়ী</option><option value="Shariatpur">শরীয়তপুর</option><option value="Tangail">টাঙ্গাইল</option>';
     }
     // set Khulna division districts
     else if(division == 'Khulna') {
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Jessore">যশোর</option><option value="Satkhira">সাতক্ষীরা</option><option value="Meherpur">মেহেরপুর</option><option value="Narail">নড়াইল</option><option value="Chuadanga">চুয়াডাঙ্গা</option><option value="Kushtia">কুষ্টিয়া</option><option value="Magura">মাগুরা</option><option value="Khulna">খুলনা</option><option value="Bagerhat">বাগেরহাট</option><option value="Jhenaidah">ঝিনাইদহ</option>'; 
     }
     // set Mymensingh division districts
     else if(division == 'Mymensingh') { 
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Sherpur">শেরপুর</option><option value="Mymensingh">ময়মনসিংহ</option><option value="Jamalpur">জামালপুর</option><option value="Netrokona">নেত্রকোণা</option>';
     }
     // set Rajshahi division districts
     else if(division == 'Rajshahi') {
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Sirajganj">সিরাজগঞ্জ</option><option value="Pabna">পাবনা</option><option value="Bogra">বগুড়া</option><option value="Rajshahi">রাজশাহী</option><option value="Natore">নাটোর</option><option value="Joypurhat">জয়পুরহাট</option><option value="Chapainawabganj">চাঁপাইনবাবগঞ্জ</option><option value="Naogaon">নওগাঁ</option>'; 
     }
     // set Rangpur division districts
     else if(division == 'Rangpur') {
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Panchagarh">পঞ্চগড়</option><option value="Dinajpur">দিনাজপুর</option><option value="Lalmonirhat">লালমনিরহাট</option><option value="Nilphamari">নীলফামারী</option><option value="Gaibandha">গাইবান্ধা</option><option value="Thakurgaon">ঠাকুরগাঁও</option><option value="Rangpur">রংপুর</option><option value="Kurigram">কুড়িগ্রাম</option>';
     }
     // set Sylhet division districts
     else if(division == 'Sylhet'){
        disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Sylhet">সিলেট</option><option value="Moulvibazar">মৌলভীবাজার</option><option value="Habiganj">হবিগঞ্জ</option><option value="Sunamganj">সুনামগঞ্জ</option>';
     }
     return district;
}

export default PlaceService;