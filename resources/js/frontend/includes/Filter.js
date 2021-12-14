import React, { Component } from 'react';
import CategoryService from '../../services/CategoryService';
import SubcateoryService from '../../services/SubcateoryService';
import ManagePostService from '../../services/ManagePostService';
import Pagination from '../../components/Paginations';
const { toBengaliNumber} = require('bengali-number');
export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorieslist: [],
            subCategorieslist: [],
            districtList: [],
            ['category_id']: 0,
            ['sub_category_id']: 0,
            postProduct: [],
            divisionList : [{name : 'Barishal', value : 'বরিশাল'},{name : 'Chattogram', value : 'চট্টগ্রাম'},{name : 'Dhaka', value : 'ঢাকা'},{name : 'Khulna', value : 'খুলনা'},{name : 'Mymensingh', value : 'ময়মনসিংহ'},{name : 'Rajshahi', value : 'রাজশাহী'},{name : 'Rangpur', value : 'রংপুর'},{name : 'Sylhet', value : 'সিলেট'}],
            query: {
                product_name: this.props.data.product.name,
                category: '',
                sub_category: '',
                divisions: '',
                district: '',
                thana: '',
                sub_category: '',
                production_type: '',
                start_price: 0,
                end_price: 0,
            },
        };
        this.page = 1;
        this.limit = 10;
        this.count = 0;
        this.sort = 'id';
        this.sortdirection = 'desc';
        this.query = '';
        this.handlePageChange = this.handlePageChange.bind(this);
        this.categorySelect = this.categorySelect.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.getSubCategories = this.getSubCategories.bind(this);
        this.subcategorySelect = this.subcategorySelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getDistrictList = this.getDistrictList.bind(this);
        this.getThanaList = this.getThanaList.bind(this);
        this.getPost = this.getPost.bind(this);

    }

    componentDidMount() {
        this.getCategories();
        this.getPost();
    }

    handlePageChange(event) {
        const target = event.target;
        const page = target.getAttribute('data-page');
        const lastPage = Math.ceil(this.count / this.limit);
        if ( 1 <= page && page <= lastPage && page != this.page ) {
            this.page = page;
            this.getPost();
        }
    }

   async getPost() {
        const getposts = await ManagePostService.paginate({
            query : this.state.query,
            sort : this.sort,
            direction : this.sortdirection,
            page: this.page,
            limit: this.limit,
        });
        console.log('getPosts :>> ', getposts);
        this.page = getposts.current_page;
        this.limit = getposts.per_page;
        this.count = getposts.total;
        this.setState({ ['postProduct']: getposts.data})

    }

    async getCategories() {
        const res = await CategoryService.dropdown({"product_id": this.props.data.product.id});
        this.setState({
            ['categorieslist']: res,
            ['category_id']: 0,
            ['sub_category_id']: 0

        });
    }

    async getSubCategories(categoryId) {
        console.log('categoryId :>> ', categoryId);
        const res = await SubcateoryService.dropdown({"category_id": categoryId});
        let category = await CategoryService.details(categoryId);
        if(categoryId=='নির্বাচন করুন'){
            category.name='';
        }
        console.log('category.name :>> ', category);
        this.setState({
            ['subCategorieslist']: res,
            query : {
                ...this.state.query,
                ['category']: category.name,
                ['sub_category']: '',
            }
        },()=>{this.getPost();});
        // this.getPost();
    }

    categorySelect(event) {
        const target = event.target;
        // this.getCategories(target.value);
    }

    subcategorySelect(event) {
        const target = event.target;
         this.getSubCategories(target.value);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            query :{
                ...this.state.query,
              [name] : value
              }
        },()=>{this.getPost();});
        
    }

   getDistrictList(e) {
        let division ='';
        if(division == 'নির্বাচন করুন') {
            division = '';
        } else {
            division = e.target.value;
        }

        let districtList = '';
        if(division == 'Barishal'){
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Barguna">বরগুনা জেলা</option><option value="Barishal">বরিশাল জেলা</option><option value="Bhola">ভোলা জেলা</option><option value="Jhalokati">ঝালকাঠি জেলা</option><option value="Patuakhali">পটুয়াখালী জেলা</option><option value="Pirojpur">পিরোজপুর জেলা</option>';
        }
        // set Chattogram division districts
        else if(division == 'Chattogram') {
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Bandarban">বান্দরবান</option><option value="Chandpur">চাঁদপুর</option><option value="Chattogram">চট্টগ্রাম</option><option value="Comilla">কুমিল্লা</option><option value="Cox\'s Bazar">কক্সবাজার</option><option value="Feni">ফেনী</option><option value="Khagrachhari">খাগড়াছড়ি</option><option value="Noakhali">নোয়াখালী</option><option value="Rangamati">রাঙ্গামাটি</option><option value="Noakhali">লক্ষ্মীপুর</option><option value="Brahmanbaria">ব্রাহ্মণবাড়িয়া</option>'; 
        }
        // set Dhaka division districts
        else if(division == 'Dhaka') {
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Dhaka">ঢাকা</option><option value="Faridpur">ফরিদপুর</option><option value="Gazipur">গাজীপুর</option><option value="Gopalganj">গোপালগঞ্জ</option><option value="Kishoreganj">কিশোরগঞ্জ</option><option value="Madaripur">মাদারীপুর</option><option value="Manikganj">মানিকগঞ্জ</option><option value="Munshiganj">মুন্সিগঞ্জ</option><option value="Narayanganj">নারায়ণগঞ্জ</option><option value="Narsingdi">নরসিংদী</option><option value="Rajbari">রাজবাড়ী</option><option value="Shariatpur">শরীয়তপুর</option><option value="Tangail">টাঙ্গাইল</option>';
        }
        // set Khulna division districts
        else if(division == 'Khulna') {
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Jessore">যশোর</option><option value="Satkhira">সাতক্ষীরা</option><option value="Meherpur">মেহেরপুর</option><option value="Narail">নড়াইল</option><option value="Chuadanga">চুয়াডাঙ্গা</option><option value="Kushtia">কুষ্টিয়া</option><option value="Magura">মাগুরা</option><option value="Khulna">খুলনা</option><option value="Bagerhat">বাগেরহাট</option><option value="Jhenaidah">ঝিনাইদহ</option>'; 
        }
        // set Mymensingh division districts
        else if(division == 'Mymensingh') { 
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Sherpur">শেরপুর</option><option value="Mymensingh">ময়মনসিংহ</option><option value="Jamalpur">জামালপুর</option><option value="Netrokona">নেত্রকোণা</option>';
        }
        // set Rajshahi division districts
        else if(division == 'Rajshahi') {
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Sirajganj">সিরাজগঞ্জ</option><option value="Pabna">পাবনা</option><option value="Bogra">বগুড়া</option><option value="Rajshahi">রাজশাহী</option><option value="Natore">নাটোর</option><option value="Joypurhat">জয়পুরহাট</option><option value="Chapainawabganj">চাঁপাইনবাবগঞ্জ</option><option value="Naogaon">নওগাঁ</option>'; 
        }
        // set Rangpur division districts
        else if(division == 'Rangpur') {
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Panchagarh">পঞ্চগড়</option><option value="Dinajpur">দিনাজপুর</option><option value="Lalmonirhat">লালমনিরহাট</option><option value="Nilphamari">নীলফামারী</option><option value="Gaibandha">গাইবান্ধা</option><option value="Thakurgaon">ঠাকুরগাঁও</option><option value="Rangpur">রংপুর</option><option value="Kurigram">কুড়িগ্রাম</option>';
        }
        // set Sylhet division districts
        else if(division == 'Sylhet'){
            districtList = '<option disabled selected>নির্বাচন করুন</option><option value="Sylhet">সিলেট</option><option value="Moulvibazar">মৌলভীবাজার</option><option value="Habiganj">হবিগঞ্জ</option><option value="Sunamganj">সুনামগঞ্জ</option>';
        }
        document.getElementById("district").innerHTML= districtList;
        
        this.setState({
            query: {
                ...this.state.query,
              ['divisions']: division,
              ['district']: '',
              ['thana']: '',
              }
        },()=>{this.getPost();});
        
    }

    getThanaList(event) {
        let districtName = '';
        let thanaList = '';
        if(districtName == 'নির্বাচন করুন') {
            districtName = '';
        } else {
            districtName = event.target.value;
        }
        
        // set Barguna division thana
        if(districtName == 'Barguna') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Amtali">আমতলী</option><option value="Bamna">বামনা</option><option value="Barguna Sadar">বরগুনা সদর</option><option value="Betagi">বেতাগী</option><option value="Patharghata">পাথরঘাটা</option><option value="Taltali">তালতলী</option>';
        }
        
        // set Barishal division thana
        else if(districtName == 'Barishal') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Agailjhara">আগৈলঝাড়া</option><option value="Babuganj">বাবুগঞ্জ</option><option value="Bakerganj">বাকেরগঞ্জ</option><option value="Banaripara">বানারীপাড়া</option><option value="Gaurnadi">গৌরনদী</option><option value="Hizla">হিজলা</option><option value="Barisal Sadar">বরিশাল সদর</option><option value="Mehendiganj">মেহেন্দিগঞ্জ</option><option value="Muladi">মুলাদী</option><option value="Wazirpur">উজিরপুর</option>';
        }
        
        // set Bhola division thana
        else if(districtName == 'Bhola') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bhola sadar">ভোলা সদর</option><option value="Burhanuddin">বোরহানউদ্দিন</option><option value="Lalmohan">লালমোহন</option><option value="Tazumuddin">তজুমদ্দিন</option><option value="Manpura">মনপুরা</option><option value="Char Fasson">চরফ্যাশন</option>';
        }
        
        
        // set Jhalakathi division thana
        else if(districtName == 'Jhalokati') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jhalakathi sadar">ঝালকাঠী সদর</option><option value="Kanthalia">কাঁঠালিয়া</option><option value="Nalchity">নলছিটি</option><option value="Rajapur">রাজাপুর</option>';
        }
        
        // set Patuakhali division thana
        else if(districtName == 'Patuakhali') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bauphal">বাউফল</option><option value="Galachipa">গলাচিপা</option><option value="Dashmina">দশমিনা</option><option value="Kalapara">কলাপাড়া</option><option value="Mirzaganj">মির্জাগঞ্জ</option><option value="Patuakhali Sadar">পটুয়াখালী সদর</option><option value="Dumki">দুমকি</option><option value="Rangabali">রাঙ্গাবালী</option>';
        }
        
        // set Pirojpur division thana
        else if(districtName == 'Pirojpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bhandaria">ভাণ্ডারিয়া</option><option value="Indurkani">ইন্দুরকানী</option><option value="Kawkhali">কাউখালী</option><option value="Mathbaria">মঠবাড়িয়া</option><option value="Nazirpur">নাজিরপুর</option><option value="Nesarabad">নেছারাবাদ</option><option value="Pirojpur Sadar">পিরোজপুর সদর</option>';
        }
        
        // set Bandarban division thana
        else if(districtName == 'Bandarban') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Ali Kadam">আলীকদম</option><option value="Bandarban Sadar">বান্দরবান সদর</option><option value="Lama">লামা</option><option value="Naikhongchhari">নাইক্ষ্যংছড়ি</option><option value="Rowangchhari">রোয়াংছড়ি</option><option value="Ruma">রুমা</option><option value="Thanchi">থানচি</option>';
        }
        
        // set Brahmanbaria division thana
        else if(districtName == 'Brahmanbaria') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Brahmanbaria Sadar">ব্রাহ্মণবাড়িয়া সদর</option><option value="Kasba">কসবা</option><option value="Akhaura">আখাউড়া</option><option value="Ashuganj">আশুগঞ্জ</option><option value="Bancharampur">বাঞ্ছারামপুর</option><option value="Bijoynagar">বিজয় নগর</option><option value="Nasirnagar">নাসিরনগর</option><option value="Nabinagar">নবীনগর</option><option value="Sarail">সরাইল</option>';
        }
        
        // set Chandpur division thana
        else if(districtName == 'Chandpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chandpur Sadar">চাঁদপুর সদর</option><option value="Faridganj">ফরিদগঞ্জ</option><option value="Haimchar">হাইমচর</option><option value="Hajiganj">হাজীগঞ্জ</option><option value="Kachua">কচুয়া</option><option value="Matlab Dakshin">মতলব দক্ষিণ</option><option value="Matlab Uttar">মতলব উত্তর</option><option value="Shahrasti">শাহরাস্তি</option>';
        }
        
        // set Chattogram division thana
        else if(districtName == 'Chattogram') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Anwara">আনোয়ারা</option><option value="Banshkhali">বাঁশখালী</option><option value="Boalkhali">বোয়ালখালী</option><option value="Chandanaish">চন্দনাইশ</option><option value="Fatikchhari">ফটিকছড়ি</option><option value="Hathazari">হাটহাজারী</option><option value="Karnaphuli">কর্ণফুলী</option><option value="Lohagara">লোহাগড়া</option><option value="Mirsharai">মীরসরাই</option><option value="Patiya">পটিয়া</option><option value="Rangunia">রাঙ্গুনিয়া</option><option value="Raozan">রাউজান</option><option value="Sandwip">সন্দ্বীপ</option><option value="Satkania">সাতকানিয়া</option><option value="Sitakunda">সীতাকুণ্ড</option>';
        }
        
        // set Comilla division thana
        else if(districtName == 'Comilla') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Barura">বরুড়া</option><option value="Brahmanpara">ব্রাহ্মণপাড়া</option><option value="Burichong">বুড়িচং</option><option value="Comilla Sadar">কুমিল্লা সদর</option><option value="Comilla Sadar Dakshin">কুমিল্লা সদর দক্ষিণ</option><option value="Chandina">চান্দিনা</option><option value="Chauddagram">চৌদ্দগ্রাম</option><option value="Daudkandi">দাউদকান্দি</option><option value="Debidwar">দেবিদ্বার</option><option value="Homna">হোমনা</option><option value="Laksam">লাকসাম</option><option value="Lalmai">লালমাই</option><option value="Monohorgonj">মনোহরগঞ্জ</option><option value="Meghna">মেঘনা</option><option value="Muradnagar">মুরাদনগর</option><option value="Nangalkot">নাংগলকোট</option><option value="Titas">তিতাস</option>';
        }
        
        // set Cox\'s Bazar division thana
        else if(districtName == 'Cox\'s Bazar') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Cox\'s Bazar Sadar">কক্সবাজার সদর</option><option value="Chakaria">চকোরিয়া</option><option value="Kutubdia">কুতুবদিয়া</option><option value="Maheshkhali">মহেশখালী</option><option value="Ramu">রামু</option><option value="Teknaf">টেকনাফ</option><option value="Ukhia ">উখিয়া</option><option value="Pekua">পেকুয়া</option>';
        }
        
        // set Feni division thana
        else if(districtName == 'Feni') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chhagalnaiya">ছাগলনাইয়া</option><option value="Feni Sadar">ফেনী সদর</option><option value="Daganbhuiyan">দাগনভূঞা</option><option value="Sonagazi">সোনাগাজী</option><option value="Parshuram">পরশুরাম</option><option value="Fulgazi">ফুলগাজী</option>';
        }
        
        // set Khagrachhari division thana
        else if(districtName == 'Khagrachhari') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Khagrachhari Sadar">খাগড়াছড়ি সদর</option><option value="Dighinala">দীঘিনালা</option><option value="Lakshmichhari">লক্ষ্মীছড়ি</option><option value="Mahalchhari">মহালছড়ি</option><option value="Manikchhari">মানিকছড়ি</option><option value="Matiranga">মাটিরাঙ্গা</option><option value="Panchhari">পানছড়ি</option><option value="Ramgarh">রামগড়</option><option value="Guimara">গুইমারা</option>';
        }
        
        // set Lakshmipur division thana
        else if(districtName == 'Lakshmipur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Lakshmipur Sadar">লক্ষ্মীপুর সদর</option><option value="Ramganj">রামগঞ্জ</option><option value="Raipur">রায়পুর</option><option value="Ramgati">রামগতি</option><option value="Kamalnagar">কমলনগর</option>';
        }
        
        // set Noakhali division thana
        else if(districtName == 'Noakhali') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Senbagh">সেনবাগ</option><option value="Begumganj">বেগমগঞ্জ</option><option value="Chatkhil">চাটখিল</option><option value="Companiganj">কোম্পানীগঞ্জ</option><option value="Noakhali Sadar">নোয়াখালী সদর</option><option value="Hatiya">হাতিয়া</option><option value="Kabirhat">কবিরহাট</option><option value="Sonaimuri">সোনাইমুড়ি</option><option value="Suborno Char">সুবর্ণচর</option>';
        }
        
        // set Rangamati division thana
        else if(districtName == 'Rangamati') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Rangamati Sadar">রাঙ্গামাটি সদর</option><option value="Belaichhari">বিলাইছড়ি</option><option value="Bagaichhari">বাঘাইছড়ি</option><option value="Barkal">বরকল</option><option value="Juraichhari">জুরাছড়ি</option><option value="Rajasthali">রাজস্থলী</option><option value="Kaptai">কাপ্তাই</option><option value="Langadu">লংগদু</option><option value="Naniarchar">নানিয়ারচর</option><option value="Kaukhali">কাউখালী</option>';
        }
        
        // set Dhaka division thana
        else if(districtName == 'Dhaka') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Adabar">আদাবর</option><option value="Badda">বাড্ডা</option><option value="Birampur">বিরামপুর</option><option value="Bangsal">বংশাল</option><option value="Bimanbandar">বিমানবন্দর</option><option value="Cantonment">ক্যান্টনমেন্ট</option><option value="Chowkbazar">চকবাজার</option><option value="Darus Salam">দারুস সালাম</option><option value="Demra">ডেমরা</option><option value="Dhanmondi">ধানমন্ডি</option><option value="Gendaria">গেন্ডারিয়া</option><option value="Gulshan">গুলশান</option><option value="Hazaribagh">হাজারীবাগ</option><option value="Kadamtali">কদমতলী</option><option value="Kafrul">কাফরুল</option><option value="Kalabagan">কলাবাগান</option><option value="Kamrangirchar">কামরাঙ্গীরচর</option><option value="Khilgaon">খিলগাঁও</option><option value="Khilkhet">খিলক্ষেত</option><option value="Kotwali">কোতোয়ালী</option><option value="Lalbagh">লালবাগ</option><option value="Mirpur Model">মিরপুর মডেল</option><option value="Mohammadpur">মোহাম্মদপুর</option><option value="Motijheel">মতিঝিল</option><option value="New Market">নিউ মার্কেট</option><option value="Pallabi">পল্লবী</option><option value="Paltan">পল্টন</option><option value="Ramna">রমনা</option><option value="Rampura">রামপুরা</option><option value="Sabujbagh">সবুজবাগ</option><option value="Shah Ali">শাহ আলী</option><option value="Shahbag">শাহবাগ</option><option value="Sher-e-Bangla Nagar">শেরে-বাংলা নগর</option><option value="Shyampur">শ্যামপুর</option><option value="Sutrapur">সূত্রাপুর</option><option value="Tejgaon">তেজগাঁও</option><option value="Tejgaon Industrial Area">তেজগাঁও শিল্পাঞ্চল এলাকা</option><option value="Turag">তুরাগ</option><option value="Uttar Khan">উত্তরখান</option><option value="Uttara">উত্তরা</option><option value="VataraWari">যাত্রাবাড়ী</option>';
        }
        
        // // set Dhaka division thana
        // else if(districtName == 'Dhaka') {
        //  thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Dhamrai">ধামরাই</option><option value="Dohar">দোহার</option><option value="Keraniganj">কেরানীগঞ্জ</option><option value="Nawabganj">নবাবগঞ্জ</option><option value="Sa">সাভার</option>';
        // }
        
        // set Faridpur division thana
        else if(districtName == 'Faridpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Alfadanga">আলফাডাঙ্গা</option><option value="Bhanga">ভাঙ্গা</option><option value="Boalmari">বোয়ালমারী</option><option value="Charbhadrasan">চরভদ্রাসন</option><option value="Faridpur Sadar">ফরিদপুর সদর</option><option value="Madhukhali">মধুখালী</option><option value="Nagarkanda">নগরকান্দা</option><option value="Sadarpur">সদরপুর</option><option value="Saltha">সালথা</option>';
        }
        
        // set Gazipur division thana
        else if(districtName == 'Gazipur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Gazipur Sadar">গাজীপুর সদর</option><option value="Kaliakair">কালিয়াকৈর</option><option value="Kapasia">কাপাসিয়া</option><option value="Sreepur">শ্রীপুর</option><option value="Kaliganj">কালীগঞ্জ</option>';
        }
        
        // set Gopalganj division thana
        else if(districtName == 'Gopalganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Gopalganj Sadar">গোপালগঞ্জ সদর</option><option value="Kashiani">কাশিয়ানী</option><option value="Kotalipara">কোটালীপাড়া</option><option value="Muksudpur">মুকসুদপুর</option><option value="Tungipara">টুঙ্গিপাড়া</option>';
        }
        
        // set Jamalpur division thana
        else if(districtName == 'Jamalpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jamalpur Sadar">জামালপুর সদর</option><option value="Dewanganj">দেওয়ানগঞ্জ</option><option value="Baksiganj">বকশীগঞ্জ</option><option value="Islampur">ইসলামপুর</option><option value="Madarganj">মাদারগঞ্জ</option><option value="Melandaha">মেলান্দহ</option><option value="Sarishabari">সরিষাবাড়ি</option>';
        }
        
        // set Kishoreganj division thana
        else if(districtName == 'Kishoreganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Kishoreganj Sadar">কিশোরগঞ্জ সদর</option><option value="Kuliarchar">কুলিয়ারচর</option><option value="Hossainpur">হোসেনপুর</option><option value="Pakundia">পাকুন্দিয়া</option><option value="Bajitpur">বাজিতপুর</option><option value="Austagram">অষ্টগ্রাম</option><option value="Karimganj">করিমগঞ্জ</option><option value="Katiadi">কটিয়াদি</option><option value="Tarail">তাড়াইল</option><option value="Itna">ইটনা</option><option value="Nikli">নিকলী</option><option value="Mithamain">মিঠামইন</option><option value="Bhairab">ভৈরব</option>';
        }
        
        // set Madaripur division thana
        else if(districtName == 'Madaripur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Madaripur Sadar">মাদারীপুর সদর</option><option value="Kalkini">কালকিনি</option><option value="Rajoir">রাজৈর</option><option value="Shibchar">শিবচর</option>';
        }
        
        // set Manikganj division thana
        else if(districtName == 'Manikganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Manikganj Sadar">মানিকগঞ্জ সদর</option><option value="Singair">সিঙ্গাইর</option><option value="Shivalaya">শিবালয়</option><option value="Saturia">সাটুরিয়া</option><option value="Harirampur">হরিরামপুর</option><option value="Ghior">ঘিওর</option><option value="Daulatpur">দৌলতপুর</option>';
        }
        
        // set Munshiganj division thana
        else if(districtName == 'Munshiganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Munshiganj Sadar">মুন্সিগঞ্জ সদর</option><option value="Lohajang">লৌহজং</option><option value="Sreenagar">শ্রীনগর</option><option value="Sirajdikhan">সিরাজদিখান</option><option value="Tongibari">টংগিবাড়ী</option><option value="Gazaria">গজারিয়া</option>';
        }
        
        // set Narayanganj division thana
        else if(districtName == 'Narayanganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Narayanganj Sadar">নারায়ণগঞ্জ সদর</option><option value="Bandar">বন্দর</option><option value="Sonargaon">সোনারগাঁও</option><option value="Araihazar">আড়াইহাজার</option><option value="Rupganj">রূপগঞ্জ</option>';
        }
        
        // set Narsingdi division thana
        else if(districtName == 'Narsingdi') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Narsingdi Sadar">নরসিংদী সদর</option><option value="Palash">পলাশ</option><option value="Belabo">বেলাবো</option><option value="Monohardi">মনোহরদী</option><option value="Raipura">রায়পুরা</option><option value="Shibpur">শিবপুর</option>';
        }
        
        // set Rajbari division thana
        else if(districtName == 'Rajbari') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Rajbari Sadar">রাজবাড়ী সদর</option><option value="Baliakandi">বালিয়াকান্দি</option><option value="Goalanda">গোয়ালন্দ</option><option value="Pangsha">পাংশা</option><option value="Kalukhali">কালুখালী</option>';
        }
        
        // set Shariatpur division thana
        else if(districtName == 'Shariatpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Shariatpur Sadar">শরীয়তপুর সদর</option><option value="Damudya">ডামুড্যা</option><option value="Naria">নড়িয়া</option><option value="Zanjira">জাজিরা</option><option value="Bhedarganj">ভেদরগঞ্জ</option><option value="Gosairhat">গোসাইরহাট</option><option value="Shakhipur">সখিপুর</option>';
        }
        
        // set Tangail division thana
        else if(districtName == 'Tangail') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Tangail Sadar">টাঙ্গাইল সদর</option><option value="Sakhipur">সখিপুর</option><option value="Basail">বাসাইল</option><option value="Madhupur">মধুপুর</option><option value="Ghatail">ঘাটাইল</option><option value="Kalihati">কালিহাতি</option><option value="Nagarpur">নাগরপুর</option><option value="Mirzapur">মির্জাপুর</option><option value="Gopalpur">গোপালপুর</option><option value="Delduar">দেলদুয়ার</option><option value="Bhuapur">ভূঞাপুর</option><option value="Dhanbari">ধনবাড়ী</option>';
        }
        
        // set Jessore division thana
        else if(districtName == 'Jessore') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jessore Sadar">যশোর সদর</option><option value="Abhaynagar">অভয়নগর</option><option value="Bagherpara">বাঘারপাড়া</option><option value="Chaugachha">চৌগাছা</option><option value="Jhikargachha">ঝিকরগাছা</option><option value="Keshabpur">কেশবপুর</option><option value="Manirampur">মনিরামপুর</option><option value="Sharsha">শার্শা</option>';
        }
        
        // set Satkhira division thana
        else if(districtName == 'Satkhira') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Satkhira Sadar">সাতক্ষীরা সদর</option><option value="Assasuni">আশাশুনি</option><option value="Debhata">দেবহাটা</option><option value="Tala">তালা</option><option value="Kalaroa">কলারোয়া</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Shyamnagar">শ্যামনগর</option>';
        }
        
        // set Meherpur division thana
        else if(districtName == 'Meherpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Meherpur Sadar">মেহেরপুর সদর</option><option value="Mujibnagar">মুজিবনগর</option><option value="Gangni">গাংনী</option>';
        }
        
        // set Narail division thana
        else if(districtName == 'Narail') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Narail Sadar">নড়াইল সদর</option><option value="Kalia">কালিয়া</option><option value="Lohagara">লোহাগড়া</option>';
        }
        
        // set Chuadanga division thana
        else if(districtName == 'Chuadanga') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chuadanga Sadar">চুয়াডাঙ্গা সদর</option><option value="Alamdanga">আলমডাঙ্গা</option><option value="Jibannagar">জীবননগর</option><option value="Damurhuda">দামুড়হুদা</option>';
        }
        
        // set Kushtia division thana
        else if(districtName == 'Kushtia') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Kushtia Sadar">কুষ্টিয়া সদর</option><option value="Bheramara">ভেড়ামারা</option><option value="Daulatpur">দৌলতপুর</option><option value="Khoksa">খোকসা</option><option value="Kumarkhali">কুমারখালী</option><option value="Mirpur">মিরপুর</option>';
        }
        
        // set Magura division thana
        else if(districtName == 'Magura') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Magura Sadar">মাগুরা সদর</option><option value="Mohammadpur">মহম্মদপুর</option><option value="Shalikha">শালিখা</option><option value="Sreepur">শ্রীপুর</option>';
        }
        
        // set khulna division thana
        else if(districtName == 'Khulna') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Koyra">কয়রা</option><option value="Batiaghata">বটিয়াঘাটা</option><option value="Dacope">দাকোপ</option><option value="Dighalia">দিঘলিয়া</option><option value="Dumuria">ডুমুরিয়া</option><option value="Paikgachha">পাইকগাছা</option><option value="Phultala">ফুলতলা</option><option value="Rupsa">রূপসা</option><option value="Terokhada">তেরখাদা</option>';
        }
        
        // set Bagerhat division thana
        else if(districtName == 'Bagerhat') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bagerhat Sadar">বাগেরহাট সদর</option><option value="Chitalmari">চিতলমারী</option><option value="Fakirhat">ফকিরহাট</option><option value="Kachua">কচুয়া</option><option value="Mollahat">মোল্লাহাট</option><option value="Mongla">মোংলা</option><option value="Morrelganj">মোড়েলগঞ্জ</option><option value="Rampal">রামপাল</option><option value="Sarankhola">শরণখোলা</option>';
        }
        
        // set Jhenaidah division thana
        else if(districtName == 'Jhenaidah') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jhenaidah Sadar">ঝিনাইদহ সদর</option><option value="Maheshpur">মহেশপুর</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Kotchandpur">কোটচাঁদপুর</option><option value="Shailkupa">শৈলকুপা</option><option value="Harinakunda">হরিণাকুন্ড</option>';
        }
        
        // set Sherpur division thana
        else if(districtName == 'Sherpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sherpur Sadar">শেরপুর সদর</option><option value="Nalitabari">নালিতাবাড়ী</option><option value="Sreebardi">শ্রীবদী</option><option value="Jhenaigati">ঝিনাইগাতী</option><option value="Nakla">নকলা</option>';
        }
        
        // set Mymensingh division thana
        else if(districtName == 'Mymensingh') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Mymensingh Sadar">ময়মনসিংহ সদর</option><option value="Bhaluka">ভালুকা</option><option value="Trishal">ত্রিশাল</option><option value="Haluaghat">হালুয়াঘাট</option><option value="Muktagacha">মুক্তাগাছা</option><option value="Dhobaura">ধোবাউড়া</option><option value="Fulbaria">ফুলবাড়িয়া</option><option value="Gaffargaon">গফরগাঁও</option><option value="Gauripur">গৌরীপুর</option><option value="Ishwarganj">ঈশ্বরগঞ্জ</option><option value="Nandail">নান্দাইল</option><option value="Phulpur">ফুলপুর</option><option value="Tara Khanda">তারাকান্দা</option>';
        }
        
        // set Jamalpur division thana
        else if(districtName == 'Jamalpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jamalpur Sadar">জামালপুর সদর</option><option value="Dewanganj">দেওয়ানগঞ্জ</option><option value="Baksiganj">বকশীগঞ্জ</option><option value="Islampur">ইসলামপুর</option><option value="Madarganj">মাদারগঞ্জ</option><option value="Melandaha">মেলান্দহ</option><option value="Sarishabari">সরিষাবাড়ি</option>';
        }
        
        // set Netrokona division thana
        else if(districtName == 'Netrokona') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Netrokona Sadar">নেত্রকোণা সদর</option><option value="Atpara">আটপাড়া</option><option value="Barhatta">বারহাট্টা</option><option value="Durgapur">দুর্গাপুর</option><option value="Kalmakanda">কলমাকান্দা</option><option value="Kendua">কেন্দুয়া</option><option value="Khaliajuri">খালিয়াজুড়ি</option><option value="Madan">মদন</option><option value="Mohanganj">মোহনগঞ্জ</option><option value="Purbadhala">পূর্বধলা</option>';
        }
        
        // set Sirajganj division thana
        else if(districtName == 'Sirajganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sirajganj Sadar">সিরাজগঞ্জ সদর</option><option value="Kazipur">কাজীপুর</option><option value="Ullahpara">উল্লাপাড়া</option><option value="Shahjadpur">শাহজাদপুর</option><option value="Raiganj">রায়গঞ্জ</option><option value="Kamarkhanda">কামারখন্দ</option><option value="Tarash">তাড়াশ</option><option value="Belkuchi">বেলকুচি</option><option value="Chauhali">চৌহালি</option>';
        }
        
        // set Pabna division thana
        else if(districtName == 'Pabna') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Pabna Sadar">পাবনা সদর</option><option value="Atgharia">আটঘরিয়া</option><option value="Bera">বেড়া</option><option value="Bhangura">ভাঙ্গুড়া</option><option value="Chatmohar">চাটমোহর</option><option value="Faridpur">ফরিদপুর</option><option value="Ishwardi">ঈশ্বরদী</option><option value="Santhia">সাঁথিয়া</option><option value="Sujanagar">সুজানগর</option>';
        }
        
        // set Bogra division thana
        else if(districtName == 'Bogra') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bogra Sadar">বগুড়া সদর</option><option value="Adamdighi">আদমদিঘী</option><option value="Sherpur">শেরপুর</option><option value="Dhunat">ধুনট</option><option value="Dhupchanchia">দুপচাঁচিয়া</option><option value="Gabtali">গাবতলী</option><option value="Kahaloo">কাহালু</option><option value="Nandigram">নন্দীগ্রাম</option><option value="Shajahanpur">শাজাহানপুর</option><option value="Sariakandi">সারিয়াকান্দি</option><option value="Shibganj">শিবগঞ্জ</option><option value="Sonatala">সোনাতলা</option>';
        }
        
        // set Rajshahi division thana
        else if(districtName == 'Rajshahi') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bagha">বাঘা</option><option value="Bagmara">বাগমারা</option><option value="Charghat">চারঘাট</option><option value="Durgapur">দুর্গাপুর</option><option value="Godagari">গোদাগাড়ী</option><option value="Mohanpur">মোহনপুর</option><option value="Paba">পবা</option><option value="Puthia">পুঠিয়া</option><option value="Tanore">তানোর</option>';
        }
        
        // set Natore division thana
        else if(districtName == 'Natore') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Natore Sadar">নাটোর সদর</option><option value="Gurudaspur">গুরুদাসপুর</option><option value="Baraigram">বড়াইগ্রাম</option><option value="Bagatipara">বাগাতিপাড়া</option><option value="Lalpur">লালপুর</option><option value="Singra">সিংড়া</option><option value="Naldanga">নলডাঙ্গা</option>';
        }
        
        // set Joypurhat division thana
        else if(districtName == 'Joypurhat') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Joypurhat Sadar">জয়পুরহাট সদর</option><option value="Akkelpur">আক্কেলপুর</option><option value="Kalai">কালাই</option><option value="Khetlal">ক্ষেতলাল</option><option value="Panchbibi">পাঁচবিবি</option>';
        }
        
        // set Chapainawabganj division thana
        else if(districtName == 'Chapainawabganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chapainawabganj Sadar">চাঁপাইনবাবগঞ্জ সদর</option><option value="Bholahat">ভোলাহাট</option><option value="Gomastapur">গোমস্তাপুর</option><option value="Nachole">নাচোল</option><option value="Shibganj">শিবগঞ্জ</option>';
        }
        
        // set Naogaon division thana
        else if(districtName == 'Naogaon') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Naogaon Sadar">নওগাঁ সদর</option><option value="Badalgachhi">বদলগাছি</option><option value="Dhamoirhat">ধামইরহাট</option><option value="Manda">মান্দা</option><option value="Mohadevpur">মহাদেবপুর</option><option value="Niamatpur">নিয়ামতপুর</option><option value="Patnitala">পত্নীতলা</option><option value="Porsha">পোরশা</option><option value="Raninagar">রাণীনগর</option><option value="Sapahar">সাপাহার</option>';
        }
        
        // set Sylhet division thana
        else if(districtName == 'Sylhet') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sylhet Sadar">সিলেট সদর</option><option value="Balaganj">বালাগঞ্জ</option><option value="Beanibazar">বিয়ানীবাজার</option><option value="Bishwanath">বিশ্বনাথ</option><option value="Companiganj">কোম্পানীগঞ্জ</option><option value="Dakshin Surma">দক্ষিণ সুরমা</option><option value="Fenchuganj">ফেঞ্চুগঞ্জ</option><option value="Golapganj">গোলাপগঞ্জ</option><option value="Gowainghat">গোয়াইনঘাট</option><option value="Jaintiapur">জৈন্তাপুর</option><option value="Kanaighat">কানাইঘাট</option><option value="Osmani Nagar">ওসমানীনগর</option>';
        }
        
        // set Moulvibazar division thana
        else if(districtName == 'Moulvibazar') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Moulvibazar Sadar">মৌলভীবাজার সদর</option><option value="Kamalganj">কমলগঞ্জ</option><option value="Kulaura">কুলাউড়া</option><option value="Rajnagar">রাজনগর</option><option value="Sreemangal">শ্রীমঙ্গল</option><option value="Barlekha">বড়লেখা</option><option value="Juri">জুড়ী</option>';
        }
        
        // set Habiganj division thana
        else if(districtName == 'Habiganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Habiganj Sadar">হবিগঞ্জ সদর</option><option value="Ajmiriganj">আজমিরীগঞ্জ</option><option value="Baniachang">বানিয়াচং</option><option value="Bahubal">বাহুবল</option><option value="Chunarughat">চুনারুঘাট</option><option value="Lakhai">লাখাই</option><option value="Madhabpur">মাধবপুর</option><option value="Nabiganj">নবীগঞ্জ</option><option value="Sayestaganj">শায়েস্তাগঞ্জ</option>';
        }
        
        // set Sunamganj division thana
        else if(districtName == 'Sunamganj') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sunamganj Sadar">সুনামগঞ্জ সদর</option><option value="Bishwampur">বিশ্বম্ভরপুর</option><option value="Chhatak">ছাতক</option><option value="Dakshin Sunamganj">দক্ষিণ সুনামগঞ্জ</option><option value="Derai">দিরাই</option><option value="Dowarabazar">দোয়ারাবাজার</option><option value="Jagannathpur">জগন্নাথপুর</option><option value="Jamalganj">জামালগঞ্জ</option><option value="Sullah">শাল্লা</option><option value="Tahirpur">তাহিরপুর</option><option value="Dharampasha">ধর্মপাশা</option>';
        }
        
        // set Panchagarh division thana
        else if(districtName == 'Panchagarh') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Panchagarh Sadar">পঞ্চগড় সদর</option><option value="Debiganj">দেবীগঞ্জ</option><option value="Boda">বোদা</option><option value="Atwari">আটোয়ারী</option><option value="Tetulia">তেঁতুলিয়া</option>';
        }
        
        // set Dinajpur division thana
        else if(districtName == 'Dinajpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Dinajpur Sadar">দিনাজপুর সদর</option><option value="Biral">বিরল</option><option value="Birampur">বিরামপুর</option><option value="Birganj">বীরগঞ্জ</option><option value="Bochaganj">বোচাগঞ্জ</option><option value="Chirirbandar">চিরিরবন্দর</option><option value="Ghoraghat">ঘোড়াঘাট</option><option value="Hakimpur">হাকিমপুর</option><option value="Kaharole">কাহারোল</option><option value="Khansama">খানসামা</option><option value="Nawabganj">নবাবগঞ্জ</option><option value="Fulbari">ফুলবাড়ী</option>';
        }
        
        // set Lalmonirhat division thana
        else if(districtName == 'Lalmonirhat') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Lalmonirhat Sadar">লালমনিরহাট সদর</option><option value="Aditmari">আদিতমারী</option><option value="Hatibandha">হাতীবান্ধা</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Patgram">পাটগ্রাম</option>';
        }
        
        // set Nilphamari division thana
        else if(districtName == 'Nilphamari') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Nilphamari Sadar">নীলফামারী সদর</option><option value="Saidpur">সৈয়দপুর</option><option value="Kishoreganj">কিশোরগঞ্জ</option><option value="Dimla">ডিমলা</option><option value="Domar">ডোমার</option><option value="Jaldhaka">জলঢাকা</option>';
        }
        
        // set Gaibandha division thana
        else if(districtName == 'Gaibandha') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Gaibandha Sadar">নীলফামারী সদর</option><option value="Gobindaganj">গোবিন্দগঞ্জ</option><option value="Fulchhari">ফুলছড়ি</option><option value="Palashbari">পলাশবাড়ী</option><option value="Sadullapur">সাদুল্লাপুর</option><option value="Sundarganj">সুন্দরগঞ্জ</option><option value="Saghata">সাঘাটা</option>';
        }
        
        // set Thakurgaon division thana
        else if(districtName == 'Thakurgaon') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Thakurgaon Sadar">ঠাকুরগাঁও সদর</option><option value="Baliadangi">বালিয়াডাঙ্গী</option><option value="Haripur">হরিপুর</option><option value="Pirganj">পীরগঞ্জ</option><option value="Ranisankail">রাণীশংকৈল</option>';
        }
        
        // set Rangpur division thana
        else if(districtName == 'Rangpur') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Rangpur Sadar">রংপুর সদর</option><option value="Badarganj">বদরগঞ্জ</option><option value="Mithapukur">মিঠাপুকুর</option><option value="Gangachara">গংগাচড়া</option><option value="Kaunia">কাউনিয়া</option><option value="Pirgacha">পীরগাছা</option><option value="Pirganj">পীরগঞ্জ</option><option value="Taraganj">তারাগঞ্জ</option>';
        }
        
        // set Kurigram division thana
        else if(districtName == 'Kurigram') {
         thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Kurigram Sadar">কুড়িগ্রাম সদর</option><option value="Bhurungamari">ভুরুঙ্গামারী</option><option value="Char Rajibpur">চর রাজিবপুর</option><option value="Chilmari">চিলমারী</option><option value="Nageshwari">নাগেশ্বরী</option><option value="Phulbari">ফুলবাড়ী</option><option value="Rajarhat">রাজারহাট</option><option value="Raomari">রৌমারী</option><option value="Ulipur">উলিপুর</option>';
        }
        this.setState({
            query : {
              ...this.state.query,
            ['district'] : districtName,
            ['thana'] : '',
            }
        },()=>{this.getPost();});
        document.getElementById("police_station").innerHTML= thanaList;
        
    }

    render() {
        // console.log('this.state.query :>> ', this.state.query);
        let pdata = this.props.data.product;
        let categoryDropdown = [<option>নির্বাচন করুন</option>];
        if (this.state.categorieslist) {
                this.state.categorieslist.map(category=>(
                    categoryDropdown.push(<option key={category.id} value={category.id}>{category.name}</option>)
            ));
        }

        let subcategoryDropdown = [<option>নির্বাচন করুন</option>];
        if (this.state.subCategorieslist) {
                this.state.subCategorieslist.map(subcategory=>(
                    subcategoryDropdown.push(<option key={subcategory.id} value={subcategory.name}>{subcategory.name}</option>)
            ));
        };

        let divisionListDropdown = [<option>নির্বাচন করুন</option>];
        if (this.state.divisionList) {
                this.state.divisionList.map(division=>(
                    divisionListDropdown.push(<option key={division.name} value={division.name}>{division.value}</option>)
            ));
        };
        let managePostProductList = '';
        if(this.state.postProduct) {
        managePostProductList = this.state.postProduct.map(product=> (
            managePostProductList = <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="gf-product shop-grid-view-product">
                                            <div className="image">
                                                <a onClick={()=>this.props.viewDetails(product)}>
                                                    <span className="onsale">{product.user_role}</span>
                                                    <img src={"/storage/posts/"+product.product_image} width="200px" height="186px"/>
                                                </a>
                                                <div className="product-hover-icons">
                                                <a onClick={()=>this.props.addProduct(product)} data-tooltip="ব্যাগে যুক্ত করুন"> <span className="icon_cart_alt"></span></a>
                                                    <a href="#" data-tooltip="পছন্দের তালিকায় রাখুন"> <span className="icon_heart_alt"></span> </a>
                                                    <a onClick={()=>this.props.viewDetails(product)} data-tooltip="বিস্তারিত দেখুন" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-categories">
                                                    <a>পণ্য: {product.product_name}</a>
                                                </div>
                                                <div className="product-categories">
                                                    <a>পণ্যের প্রকার: {product.category} </a>
                                                </div>
                                                <h3 className="product-title"><a href="">মোট ওজন: {toBengaliNumber(product.total_weight)} {product.weight_unit} </a></h3>
                                                <div className="price-box">
                                                    <span className="discounted-price">১ {product.weight_unit} </span>
                                                    {product.discount_price > 0 ? <span className="main-price-filterpage">৳ {toBengaliNumber(product.price_per_unit)}</span>: ''}
                                                    <h5 className="discounted-price">৳ {toBengaliNumber(product.price_per_unit-(product.price_per_unit*(product.discount_price/100)))}</h5>
                                                    {/* <h5 className="discounted-price">১ {product.weight_unit}</h5> <span className="main-price">৳ {toBengaliNumber(product.price_per_unit)} </span> */}
                                                </div>
                                                <div className="product-place">
                                                    <span className="division">{product.divisions} {product.district} </span>
                                                </div>
                                            </div>	
                                        </div>
                                        <div className="gf-product shop-list-view-product">
                                            <div className="image">
                                                <a href="">
                                                    <span className="onsale">Sale!</span>
                                                    <img src={"/storage/product/"+pdata.product_img} width="270px" height="250px"/>
                                                </a>
                                                <div className="product-hover-icons">
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-categories">
                                                    <a>Fast Foods</a>,
                                                    <a>Vegetables</a>
                                                </div>
                                                <h3 className="product-title"><a href="">Ornare sed consequat nisl</a></h3>
                                                <div className="price-box mb-20">
                                                    <span className="main-price">$89.00</span>
                                                    <span className="discounted-price">$80.00</span>
                                                </div>
                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
                                                <div className="list-product-icons">
                                                    <a href="#"> <span className="icon_search"></span> </a>
                                                    <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                </div>
                                            </div>
                                        </div>		
                                    </div>
                            ));
        }
        return (
            <div>              
                <section>
                    <div className="shop-page-container mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 order-3 order-lg-2">
                                    <div className="sidebar-area">
                                        <div className="sidebar">
                                            <div className="row form-filter_product">
                                                <div className="col-md-12">
                                                    <a href="">
                                                    <img className="icn-arrow--left" src="/frontend-asset/market/icons/grey_arrow_down-d595d8db881c98fbae6ad8cec7f0727191deefa0327a7adebda0e52d64e7fd85.png" alt="Grey arrow down" />
                                                    পূর্বের পেজে ফিরে যান
                                                    </a>
                                                </div>
                                                <div className="col-sm-2 col-md-3 col-lg-2">
                                                    <img className="form-filter-image" src={"/storage/product/"+pdata.product_img} />
                                                </div>
                                                <div className="col-sm-6 col-md-9 col-lg-10">
                                                    <h4>{pdata.name}</h4>
                                                </div>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="name">পণ্যের প্রকারভেদ</label>
                                                <select name="category" onChange={this.subcategorySelect} id="search_2" className="form-control">
                                                    {categoryDropdown}
                                                </select>
                                            </div>
                                    
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="name">পণ্যের জাত</label>
                                                <select name="sub_category" onChange={this.handleInputChange} id="search_3" className="form-control">
                                                   {subcategoryDropdown}
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="name">উৎপাদনের ধরন</label>
                                                <select name="production_type" id="search_120" onChange={this.handleInputChange} className="form-control">
                                                    <option value="">নির্বাচন করুন</option>  
                                                    <option value="সমন্বিত উৎপাদনের">সমন্বিত উৎপাদনের</option>
                                                    <option value="জৈব উৎপাদনের">জৈব উৎপাদনের</option>
                                                    <option value="প্রচলিত উৎপাদনের">প্রচলিত উৎপাদনের </option>
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="control-label">বিভাগ</label> 
                                                <select name="divisions" id="divisions" className="form-control input-lg" onChange={this.getDistrictList}>
                                                    {divisionListDropdown}
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="control-label">জেলা</label> 
                                                <select className="form-control input-lg" name="district" onChange={this.getThanaList} id="district">
                                                    <option value="">নির্বাচন করুন</option>
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label htmlFor="field-5" className="control-label">থানা</label> 
                                                <select className="form-control input-lg" name="thana" id="police_station" onChange={this.handleInputChange}>
                                                    <option>নির্বাচন করুন</option>
                                                </select>
                                            </div>	
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="immediate_delivery">জরুরী বিতরণ</label>
                                                <input className="immediate-delivery-checkbox" type="checkbox" value="1" id="immediate_delivery_value" />
                                            </div>	
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="ppt">মূল্য পরিসীমা</label> (৳)<br/>
                                                <input type="number" min="1" name="start_price" id="interval_price_per_ton_start" className="form-interval" step="any" onChange={this.handleInputChange} />
                                                <span style={{fontSize: '10px'}}>থেকে</span>
                                                <input type="number" min="1" name="end_price" id="interval_price_per_ton_end" className="form-interval" step="any" onChange={this.handleInputChange} />
                                            </div>	
                                            {/* <div className="mb-15 form-group">
                                                <h3 className="sidebar-title">Filter By Price</h3>
                                                <div className="sidebar-price">
                                                    <div id="price-range"></div>
                                                    <input type="text" id="price-amount" readOnly/>
                                                </div>
                                            </div> */}
                                            {/* <div className="compare-btns">
                                                <a href="#" className="clear-all">Clear all</a>
                                                <a href="#" className="compare">Search</a>
                                            </div> */}
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-lg-8 order-1 order-lg-2 mb-sm-35 mb-xs-35">
                                    <div className="shop-header mb-35">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="view-mode-icons mb-xs-10">
                                                    <a className="active" href="#" data-target="grid"><i className="fa fa-th"></i></a>
                                                    <a href="#" data-target="list"><i className="fa fa-list"></i></a>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-8 col-md-8 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center">
                                                <div className="sort-by-dropdown d-flex align-items-center mb-xs-10">
                                                    <p className="mr-10">Sort By: </p>
                                                    <select name="sort-by" id="sort-by" className="nice-select">
                                                        <option value="0">Sort By Popularity</option>
                                                        <option value="0">Sort By Average Rating</option>
                                                        <option value="0">Sort By Newness</option>
                                                        <option value="0">Sort By Price: Low to High</option>
                                                        <option value="0">Sort By Price: High to Low</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="shop-product-wrap grid row no-gutters mb-35">
                                        {/* @foreach($allpaddy as $paddy) */}
                                            {managePostProductList}
                                        {/* @endforeach*/}
                                    </div>

                                    <div className="pagination-container">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* <div className="pagination-content text-center"> */}
                                                        <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
