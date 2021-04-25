import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryServices from '../services/CategoryService';
import PostService from '../services/PostService';
import ProductServices from '../services/ProductServices';
import SubcateoryService from '../services/SubcateoryService';
class Create extends Component {
    constructor(props) {
        super(props);
        function addDays(dateObj, numDays) {
            dateObj.setDate(dateObj.getDate() + numDays);
            return dateObj;
         }
        const curr = new Date();
        curr.setDate(curr.getDate());
        let dateNow = curr.toISOString().substr(0,10);
        const nextDate = addDays(curr , 10); 
        let datethen = nextDate.toISOString().substr(0,10);
        
        this.state = {
            submitshowoff: false,
            productslist: [],
            categorieslist: [],
            subCategorieslist: [],
            divisionList : [{name : 'Barishal', value : 'বরিশাল'},{name : 'Chattogram', value : 'চট্টগ্রাম'},{name : 'Dhaka', value : 'ঢাকা'},{name : 'Khulna', value : 'খুলনা'},{name : 'Mymensingh', value : 'ময়মনসিংহ'},{name : 'Rajshahi', value : 'রাজশাহী'},{name : 'Rangpur', value : 'রংপুর'},{name : 'Sylhet', value : 'সিলেট'}],
            post : {
                product_id : '',
                total_weight : 1,
                weight_unit : 1,
                price_per_unit : 1,
                advance_payment : 1,
                category_id : 0,
                sub_category_id : 0,
                production_type : '',
                product_production_year : dateNow,
                packaging_method : '',
                initial_delivery_date : dateNow,
                final_delivery_date : dateNow,
                offer_end_date : datethen,
                own_vehicle : '',
                divisions : '',
                district : '',
                thana : '',
                villege : '',
                comments : '',
                product_image : '',
                }
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.categorySelect = this.categorySelect.bind(this);
            this.getCategories = this.getCategories.bind(this);
            this.getSubCategories = this.getSubCategories.bind(this);
            this.subcategorySelect = this.subcategorySelect.bind(this);
            this.divisionsList = this.divisionsList.bind(this);
            this.thanaList = this.thanaList.bind(this);
            this.onSubmitShowoff = this.onSubmitShowoff.bind(this);
        }

        componentDidMount() {
            this.getProduct();
        }

        onSubmitShowoff() {
            this.state.submitshowoff ? 
            this.setState({ ['submitshowoff'] : false }) : this.setState({ ['submitshowoff'] : true }) 
         }

        categorySelect(event) {
            const target = event.target;
            this.getCategories(target.value);
        }

        subcategorySelect(event) {
            const target = event.target;
             this.getSubCategories(target.value);
        }

        async getCategories(productId) {
            const res = await CategoryServices.dropdown({"product_id": productId});
            this.setState({
                ['categorieslist']: res,
                post : {
                    ...this.state.post,
                    ['product_id'] : productId,
                    ['category_id'] : 0,
                    ['sub_category_id'] : 0
                }
            });
        }

        async getSubCategories(categoryId) {
            const res = await SubcateoryService.dropdown({"category_id": categoryId});
            this.setState({
                ['subCategorieslist']: res,
                post : {
                    ...this.state.post,
                    ['category_id'] : categoryId,
                    ['sub_category_id'] : 0
                }
            });
        }

        async getProduct() {
            const res = await ProductServices.dropdown();
            this.setState({
                ['productslist']: res,
            });
        }

        handleInputChange(event) {
            const target = event.target;
            let value = target.type === 'checkbox' ? ( target.checked ? target.value : 0 ) : target.value;
            const name = target.name;
            if (name == 'product_image') {
                value = target.files[0];
            };
            this.setState({
                  post :{
                    ...this.state.post,
                  [name]: value
                  }
            });
        }
    
        async handleSubmit(event) {
            event.preventDefault();
            const cpost = this.state.post;
            let formdata = new FormData();
            Object.keys(cpost).map(key => {
                formdata.append(key, cpost[key]);
            });
            const res = await PostService.save(formdata);
            // if (res.success) {
            //     this.props.showForm(null);
            // }
        }
        divisionsList(event) {
            // get value from division lists
             let diviList = event.target.value;
             this.setState({
                post :{
                  ...this.state.post,
                ['divisions']: diviList,
                ['district'] : '',
                ['thana'] : '',
                }
            });
             let disctList = '';
            // set barishal division districts
            if(diviList == 'Barishal'){
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Barguna">বরগুনা জেলা</option><option value="Barishal">বরিশাল জেলা</option><option value="Bhola">ভোলা জেলা</option><option value="Jhalokati">ঝালকাঠি জেলা</option><option value="Patuakhali">পটুয়াখালী জেলা</option><option value="Pirojpur">পিরোজপুর জেলা</option>';
            }
            // set Chattogram division districts
            else if(diviList == 'Chattogram') {
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Bandarban">বান্দরবান</option><option value="Chandpur">চাঁদপুর</option><option value="Chattogram">চট্টগ্রাম</option><option value="Comilla">কুমিল্লা</option><option value="Cox\'s Bazar">কক্সবাজার</option><option value="Feni">ফেনী</option><option value="Khagrachhari">খাগড়াছড়ি</option><option value="Noakhali">নোয়াখালী</option><option value="Rangamati">রাঙ্গামাটি</option><option value="Noakhali">লক্ষ্মীপুর</option><option value="Brahmanbaria">ব্রাহ্মণবাড়িয়া</option>'; 
            }
            // set Dhaka division districts
            else if(diviList == 'Dhaka') {
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Dhaka">ঢাকা</option><option value="Faridpur">ফরিদপুর</option><option value="Gazipur">গাজীপুর</option><option value="Gopalganj">গোপালগঞ্জ</option><option value="Kishoreganj">কিশোরগঞ্জ</option><option value="Madaripur">মাদারীপুর</option><option value="Manikganj">মানিকগঞ্জ</option><option value="Munshiganj">মুন্সিগঞ্জ</option><option value="Narayanganj">নারায়ণগঞ্জ</option><option value="Narsingdi">নরসিংদী</option><option value="Rajbari">রাজবাড়ী</option><option value="Shariatpur">শরীয়তপুর</option><option value="Tangail">টাঙ্গাইল</option>';
            }
            // set Khulna division districts
            else if(diviList == 'Khulna') {
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Jessore">যশোর</option><option value="Satkhira">সাতক্ষীরা</option><option value="Meherpur">মেহেরপুর</option><option value="Narail">নড়াইল</option><option value="Chuadanga">চুয়াডাঙ্গা</option><option value="Kushtia">কুষ্টিয়া</option><option value="Magura">মাগুরা</option><option value="Khulna">খুলনা</option><option value="Bagerhat">বাগেরহাট</option><option value="Jhenaidah">ঝিনাইদহ</option>'; 
            }
            // set Mymensingh division districts
            else if(diviList == 'Mymensingh') { 
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Sherpur">শেরপুর</option><option value="Mymensingh">ময়মনসিংহ</option><option value="Jamalpur">জামালপুর</option><option value="Netrokona">নেত্রকোণা</option>';
            }
            // set Rajshahi division districts
            else if(diviList == 'Rajshahi') {
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Sirajganj">সিরাজগঞ্জ</option><option value="Pabna">পাবনা</option><option value="Bogra">বগুড়া</option><option value="Rajshahi">রাজশাহী</option><option value="Natore">নাটোর</option><option value="Joypurhat">জয়পুরহাট</option><option value="Chapainawabganj">চাঁপাইনবাবগঞ্জ</option><option value="Naogaon">নওগাঁ</option>'; 
            }
            // set Rangpur division districts
            else if(diviList == 'Rangpur') {
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Panchagarh">পঞ্চগড়</option><option value="Dinajpur">দিনাজপুর</option><option value="Lalmonirhat">লালমনিরহাট</option><option value="Nilphamari">নীলফামারী</option><option value="Gaibandha">গাইবান্ধা</option><option value="Thakurgaon">ঠাকুরগাঁও</option><option value="Rangpur">রংপুর</option><option value="Kurigram">কুড়িগ্রাম</option>';
            }
            // set Sylhet division districts
            else if(diviList == 'Sylhet'){
               disctList = '<option disabled selected>নির্বাচন করুন</option><option value="Sylhet">সিলেট</option><option value="Moulvibazar">মৌলভীবাজার</option><option value="Habiganj">হবিগঞ্জ</option><option value="Sunamganj">সুনামগঞ্জ</option>';
            }
            //  set/send districts name to District lists from division
            document.getElementById("distr").innerHTML= disctList;
            }
            
        thanaList(event) {
            let DisList = event.target.value;
            let thanaList = '';
            this.setState({
                post : {
                  ...this.state.post,
                ['district'] : DisList,
                ['thana'] : '',
                }
            });
            // set Barguna division thana
            if(DisList == 'Barguna') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Amtali">আমতলী</option><option value="Bamna">বামনা</option><option value="Barguna Sadar">বরগুনা সদর</option><option value="Betagi">বেতাগী</option><option value="Patharghata">পাথরঘাটা</option><option value="Taltali">তালতলী</option>';
            }
            
            // set Barishal division thana
            else if(DisList == 'Barishal') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Agailjhara">আগৈলঝাড়া</option><option value="Babuganj">বাবুগঞ্জ</option><option value="Bakerganj">বাকেরগঞ্জ</option><option value="Banaripara">বানারীপাড়া</option><option value="Gaurnadi">গৌরনদী</option><option value="Hizla">হিজলা</option><option value="Barisal Sadar">বরিশাল সদর</option><option value="Mehendiganj">মেহেন্দিগঞ্জ</option><option value="Muladi">মুলাদী</option><option value="Wazirpur">উজিরপুর</option>';
            }
            
            // set Bhola division thana
            else if(DisList == 'Bhola') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bhola sadar">ভোলা সদর</option><option value="Burhanuddin">বোরহানউদ্দিন</option><option value="Lalmohan">লালমোহন</option><option value="Tazumuddin">তজুমদ্দিন</option><option value="Manpura">মনপুরা</option><option value="Char Fasson">চরফ্যাশন</option>';
            }
            
            
            // set Jhalakathi division thana
            else if(DisList == 'Jhalokati') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jhalakathi sadar">ঝালকাঠী সদর</option><option value="Kanthalia">কাঁঠালিয়া</option><option value="Nalchity">নলছিটি</option><option value="Rajapur">রাজাপুর</option>';
            }
            
            // set Patuakhali division thana
            else if(DisList == 'Patuakhali') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bauphal">বাউফল</option><option value="Galachipa">গলাচিপা</option><option value="Dashmina">দশমিনা</option><option value="Kalapara">কলাপাড়া</option><option value="Mirzaganj">মির্জাগঞ্জ</option><option value="Patuakhali Sadar">পটুয়াখালী সদর</option><option value="Dumki">দুমকি</option><option value="Rangabali">রাঙ্গাবালী</option>';
            }
            
            // set Pirojpur division thana
            else if(DisList == 'Pirojpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bhandaria">ভাণ্ডারিয়া</option><option value="Indurkani">ইন্দুরকানী</option><option value="Kawkhali">কাউখালী</option><option value="Mathbaria">মঠবাড়িয়া</option><option value="Nazirpur">নাজিরপুর</option><option value="Nesarabad">নেছারাবাদ</option><option value="Pirojpur Sadar">পিরোজপুর সদর</option>';
            }
            
            // set Bandarban division thana
            else if(DisList == 'Bandarban') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Ali Kadam">আলীকদম</option><option value="Bandarban Sadar">বান্দরবান সদর</option><option value="Lama">লামা</option><option value="Naikhongchhari">নাইক্ষ্যংছড়ি</option><option value="Rowangchhari">রোয়াংছড়ি</option><option value="Ruma">রুমা</option><option value="Thanchi">থানচি</option>';
            }
            
            // set Brahmanbaria division thana
            else if(DisList == 'Brahmanbaria') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Brahmanbaria Sadar">ব্রাহ্মণবাড়িয়া সদর</option><option value="Kasba">কসবা</option><option value="Akhaura">আখাউড়া</option><option value="Ashuganj">আশুগঞ্জ</option><option value="Bancharampur">বাঞ্ছারামপুর</option><option value="Bijoynagar">বিজয় নগর</option><option value="Nasirnagar">নাসিরনগর</option><option value="Nabinagar">নবীনগর</option><option value="Sarail">সরাইল</option>';
            }
            
            // set Chandpur division thana
            else if(DisList == 'Chandpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chandpur Sadar">চাঁদপুর সদর</option><option value="Faridganj">ফরিদগঞ্জ</option><option value="Haimchar">হাইমচর</option><option value="Hajiganj">হাজীগঞ্জ</option><option value="Kachua">কচুয়া</option><option value="Matlab Dakshin">মতলব দক্ষিণ</option><option value="Matlab Uttar">মতলব উত্তর</option><option value="Shahrasti">শাহরাস্তি</option>';
            }
            
            // set Chattogram division thana
            else if(DisList == 'Chattogram') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Anwara">আনোয়ারা</option><option value="Banshkhali">বাঁশখালী</option><option value="Boalkhali">বোয়ালখালী</option><option value="Chandanaish">চন্দনাইশ</option><option value="Fatikchhari">ফটিকছড়ি</option><option value="Hathazari">হাটহাজারী</option><option value="Karnaphuli">কর্ণফুলী</option><option value="Lohagara">লোহাগড়া</option><option value="Mirsharai">মীরসরাই</option><option value="Patiya">পটিয়া</option><option value="Rangunia">রাঙ্গুনিয়া</option><option value="Raozan">রাউজান</option><option value="Sandwip">সন্দ্বীপ</option><option value="Satkania">সাতকানিয়া</option><option value="Sitakunda">সীতাকুণ্ড</option>';
            }
            
            // set Comilla division thana
            else if(DisList == 'Comilla') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Barura">বরুড়া</option><option value="Brahmanpara">ব্রাহ্মণপাড়া</option><option value="Burichong">বুড়িচং</option><option value="Comilla Sadar">কুমিল্লা সদর</option><option value="Comilla Sadar Dakshin">কুমিল্লা সদর দক্ষিণ</option><option value="Chandina">চান্দিনা</option><option value="Chauddagram">চৌদ্দগ্রাম</option><option value="Daudkandi">দাউদকান্দি</option><option value="Debidwar">দেবিদ্বার</option><option value="Homna">হোমনা</option><option value="Laksam">লাকসাম</option><option value="Lalmai">লালমাই</option><option value="Monohorgonj">মনোহরগঞ্জ</option><option value="Meghna">মেঘনা</option><option value="Muradnagar">মুরাদনগর</option><option value="Nangalkot">নাংগলকোট</option><option value="Titas">তিতাস</option>';
            }
            
            // set Cox\'s Bazar division thana
            else if(DisList == 'Cox\'s Bazar') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Cox\'s Bazar Sadar">কক্সবাজার সদর</option><option value="Chakaria">চকোরিয়া</option><option value="Kutubdia">কুতুবদিয়া</option><option value="Maheshkhali">মহেশখালী</option><option value="Ramu">রামু</option><option value="Teknaf">টেকনাফ</option><option value="Ukhia ">উখিয়া</option><option value="Pekua">পেকুয়া</option>';
            }
            
            // set Feni division thana
            else if(DisList == 'Feni') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chhagalnaiya">ছাগলনাইয়া</option><option value="Feni Sadar">ফেনী সদর</option><option value="Daganbhuiyan">দাগনভূঞা</option><option value="Sonagazi">সোনাগাজী</option><option value="Parshuram">পরশুরাম</option><option value="Fulgazi">ফুলগাজী</option>';
            }
            
            // set Khagrachhari division thana
            else if(DisList == 'Khagrachhari') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Khagrachhari Sadar">খাগড়াছড়ি সদর</option><option value="Dighinala">দীঘিনালা</option><option value="Lakshmichhari">লক্ষ্মীছড়ি</option><option value="Mahalchhari">মহালছড়ি</option><option value="Manikchhari">মানিকছড়ি</option><option value="Matiranga">মাটিরাঙ্গা</option><option value="Panchhari">পানছড়ি</option><option value="Ramgarh">রামগড়</option><option value="Guimara">গুইমারা</option>';
            }
            
            // set Lakshmipur division thana
            else if(DisList == 'Lakshmipur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Lakshmipur Sadar">লক্ষ্মীপুর সদর</option><option value="Ramganj">রামগঞ্জ</option><option value="Raipur">রায়পুর</option><option value="Ramgati">রামগতি</option><option value="Kamalnagar">কমলনগর</option>';
            }
            
            // set Noakhali division thana
            else if(DisList == 'Noakhali') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Senbagh">সেনবাগ</option><option value="Begumganj">বেগমগঞ্জ</option><option value="Chatkhil">চাটখিল</option><option value="Companiganj">কোম্পানীগঞ্জ</option><option value="Noakhali Sadar">নোয়াখালী সদর</option><option value="Hatiya">হাতিয়া</option><option value="Kabirhat">কবিরহাট</option><option value="Sonaimuri">সোনাইমুড়ি</option><option value="Suborno Char">সুবর্ণচর</option>';
            }
            
            // set Rangamati division thana
            else if(DisList == 'Rangamati') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Rangamati Sadar">রাঙ্গামাটি সদর</option><option value="Belaichhari">বিলাইছড়ি</option><option value="Bagaichhari">বাঘাইছড়ি</option><option value="Barkal">বরকল</option><option value="Juraichhari">জুরাছড়ি</option><option value="Rajasthali">রাজস্থলী</option><option value="Kaptai">কাপ্তাই</option><option value="Langadu">লংগদু</option><option value="Naniarchar">নানিয়ারচর</option><option value="Kaukhali">কাউখালী</option>';
            }
            
            // set Dhaka division thana
            else if(DisList == 'Dhaka') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Adabar">আদাবর</option><option value="Badda">বাড্ডা</option><option value="Birampur">বিরামপুর</option><option value="Bangsal">বংশাল</option><option value="Bimanbandar">বিমানবন্দর</option><option value="Cantonment">ক্যান্টনমেন্ট</option><option value="Chowkbazar">চকবাজার</option><option value="Darus Salam">দারুস সালাম</option><option value="Demra">ডেমরা</option><option value="Dhanmondi">ধানমন্ডি</option><option value="Gendaria">গেন্ডারিয়া</option><option value="Gulshan">গুলশান</option><option value="Hazaribagh">হাজারীবাগ</option><option value="Kadamtali">কদমতলী</option><option value="Kafrul">কাফরুল</option><option value="Kalabagan">কলাবাগান</option><option value="Kamrangirchar">কামরাঙ্গীরচর</option><option value="Khilgaon">খিলগাঁও</option><option value="Khilkhet">খিলক্ষেত</option><option value="Kotwali">কোতোয়ালী</option><option value="Lalbagh">লালবাগ</option><option value="Mirpur Model">মিরপুর মডেল</option><option value="Mohammadpur">মোহাম্মদপুর</option><option value="Motijheel">মতিঝিল</option><option value="New Market">নিউ মার্কেট</option><option value="Pallabi">পল্লবী</option><option value="Paltan">পল্টন</option><option value="Ramna">রমনা</option><option value="Rampura">রামপুরা</option><option value="Sabujbagh">সবুজবাগ</option><option value="Shah Ali">শাহ আলী</option><option value="Shahbag">শাহবাগ</option><option value="Sher-e-Bangla Nagar">শেরে-বাংলা নগর</option><option value="Shyampur">শ্যামপুর</option><option value="Sutrapur">সূত্রাপুর</option><option value="Tejgaon">তেজগাঁও</option><option value="Tejgaon Industrial Area">তেজগাঁও শিল্পাঞ্চল এলাকা</option><option value="Turag">তুরাগ</option><option value="Uttar Khan">উত্তরখান</option><option value="Uttara">উত্তরা</option><option value="VataraWari">যাত্রাবাড়ী</option>';
            }
            
            // // set Dhaka division thana
            // else if(DisList == 'Dhaka') {
            //  thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Dhamrai">ধামরাই</option><option value="Dohar">দোহার</option><option value="Keraniganj">কেরানীগঞ্জ</option><option value="Nawabganj">নবাবগঞ্জ</option><option value="Sa">সাভার</option>';
            // }
            
            // set Faridpur division thana
            else if(DisList == 'Faridpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Alfadanga">আলফাডাঙ্গা</option><option value="Bhanga">ভাঙ্গা</option><option value="Boalmari">বোয়ালমারী</option><option value="Charbhadrasan">চরভদ্রাসন</option><option value="Faridpur Sadar">ফরিদপুর সদর</option><option value="Madhukhali">মধুখালী</option><option value="Nagarkanda">নগরকান্দা</option><option value="Sadarpur">সদরপুর</option><option value="Saltha">সালথা</option>';
            }
            
            // set Gazipur division thana
            else if(DisList == 'Gazipur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Gazipur Sadar">গাজীপুর সদর</option><option value="Kaliakair">কালিয়াকৈর</option><option value="Kapasia">কাপাসিয়া</option><option value="Sreepur">শ্রীপুর</option><option value="Kaliganj">কালীগঞ্জ</option>';
            }
            
            // set Gopalganj division thana
            else if(DisList == 'Gopalganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Gopalganj Sadar">গোপালগঞ্জ সদর</option><option value="Kashiani">কাশিয়ানী</option><option value="Kotalipara">কোটালীপাড়া</option><option value="Muksudpur">মুকসুদপুর</option><option value="Tungipara">টুঙ্গিপাড়া</option>';
            }
            
            // set Jamalpur division thana
            else if(DisList == 'Jamalpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jamalpur Sadar">জামালপুর সদর</option><option value="Dewanganj">দেওয়ানগঞ্জ</option><option value="Baksiganj">বকশীগঞ্জ</option><option value="Islampur">ইসলামপুর</option><option value="Madarganj">মাদারগঞ্জ</option><option value="Melandaha">মেলান্দহ</option><option value="Sarishabari">সরিষাবাড়ি</option>';
            }
            
            // set Kishoreganj division thana
            else if(DisList == 'Kishoreganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Kishoreganj Sadar">কিশোরগঞ্জ সদর</option><option value="Kuliarchar">কুলিয়ারচর</option><option value="Hossainpur">হোসেনপুর</option><option value="Pakundia">পাকুন্দিয়া</option><option value="Bajitpur">বাজিতপুর</option><option value="Austagram">অষ্টগ্রাম</option><option value="Karimganj">করিমগঞ্জ</option><option value="Katiadi">কটিয়াদি</option><option value="Tarail">তাড়াইল</option><option value="Itna">ইটনা</option><option value="Nikli">নিকলী</option><option value="Mithamain">মিঠামইন</option><option value="Bhairab">ভৈরব</option>';
            }
            
            // set Madaripur division thana
            else if(DisList == 'Madaripur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Madaripur Sadar">মাদারীপুর সদর</option><option value="Kalkini">কালকিনি</option><option value="Rajoir">রাজৈর</option><option value="Shibchar">শিবচর</option>';
            }
            
            // set Manikganj division thana
            else if(DisList == 'Manikganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Manikganj Sadar">মানিকগঞ্জ সদর</option><option value="Singair">সিঙ্গাইর</option><option value="Shivalaya">শিবালয়</option><option value="Saturia">সাটুরিয়া</option><option value="Harirampur">হরিরামপুর</option><option value="Ghior">ঘিওর</option><option value="Daulatpur">দৌলতপুর</option>';
            }
            
            // set Munshiganj division thana
            else if(DisList == 'Munshiganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Munshiganj Sadar">মুন্সিগঞ্জ সদর</option><option value="Lohajang">লৌহজং</option><option value="Sreenagar">শ্রীনগর</option><option value="Sirajdikhan">সিরাজদিখান</option><option value="Tongibari">টংগিবাড়ী</option><option value="Gazaria">গজারিয়া</option>';
            }
            
            // set Narayanganj division thana
            else if(DisList == 'Narayanganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Narayanganj Sadar">নারায়ণগঞ্জ সদর</option><option value="Bandar">বন্দর</option><option value="Sonargaon">সোনারগাঁও</option><option value="Araihazar">আড়াইহাজার</option><option value="Rupganj">রূপগঞ্জ</option>';
            }
            
            // set Narsingdi division thana
            else if(DisList == 'Narsingdi') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Narsingdi Sadar">নরসিংদী সদর</option><option value="Palash">পলাশ</option><option value="Belabo">বেলাবো</option><option value="Monohardi">মনোহরদী</option><option value="Raipura">রায়পুরা</option><option value="Shibpur">শিবপুর</option>';
            }
            
            // set Rajbari division thana
            else if(DisList == 'Rajbari') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Rajbari Sadar">রাজবাড়ী সদর</option><option value="Baliakandi">বালিয়াকান্দি</option><option value="Goalanda">গোয়ালন্দ</option><option value="Pangsha">পাংশা</option><option value="Kalukhali">কালুখালী</option>';
            }
            
            // set Shariatpur division thana
            else if(DisList == 'Shariatpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Shariatpur Sadar">শরীয়তপুর সদর</option><option value="Damudya">ডামুড্যা</option><option value="Naria">নড়িয়া</option><option value="Zanjira">জাজিরা</option><option value="Bhedarganj">ভেদরগঞ্জ</option><option value="Gosairhat">গোসাইরহাট</option><option value="Shakhipur">সখিপুর</option>';
            }
            
            // set Tangail division thana
            else if(DisList == 'Tangail') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Tangail Sadar">টাঙ্গাইল সদর</option><option value="Sakhipur">সখিপুর</option><option value="Basail">বাসাইল</option><option value="Madhupur">মধুপুর</option><option value="Ghatail">ঘাটাইল</option><option value="Kalihati">কালিহাতি</option><option value="Nagarpur">নাগরপুর</option><option value="Mirzapur">মির্জাপুর</option><option value="Gopalpur">গোপালপুর</option><option value="Delduar">দেলদুয়ার</option><option value="Bhuapur">ভূঞাপুর</option><option value="Dhanbari">ধনবাড়ী</option>';
            }
            
            // set Jessore division thana
            else if(DisList == 'Jessore') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jessore Sadar">যশোর সদর</option><option value="Abhaynagar">অভয়নগর</option><option value="Bagherpara">বাঘারপাড়া</option><option value="Chaugachha">চৌগাছা</option><option value="Jhikargachha">ঝিকরগাছা</option><option value="Keshabpur">কেশবপুর</option><option value="Manirampur">মনিরামপুর</option><option value="Sharsha">শার্শা</option>';
            }
            
            // set Satkhira division thana
            else if(DisList == 'Satkhira') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Satkhira Sadar">সাতক্ষীরা সদর</option><option value="Assasuni">আশাশুনি</option><option value="Debhata">দেবহাটা</option><option value="Tala">তালা</option><option value="Kalaroa">কলারোয়া</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Shyamnagar">শ্যামনগর</option>';
            }
            
            // set Meherpur division thana
            else if(DisList == 'Meherpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Meherpur Sadar">মেহেরপুর সদর</option><option value="Mujibnagar">মুজিবনগর</option><option value="Gangni">গাংনী</option>';
            }
            
            // set Narail division thana
            else if(DisList == 'Narail') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Narail Sadar">নড়াইল সদর</option><option value="Kalia">কালিয়া</option><option value="Lohagara">লোহাগড়া</option>';
            }
            
            // set Chuadanga division thana
            else if(DisList == 'Chuadanga') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chuadanga Sadar">চুয়াডাঙ্গা সদর</option><option value="Alamdanga">আলমডাঙ্গা</option><option value="Jibannagar">জীবননগর</option><option value="Damurhuda">দামুড়হুদা</option>';
            }
            
            // set Kushtia division thana
            else if(DisList == 'Kushtia') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Kushtia Sadar">কুষ্টিয়া সদর</option><option value="Bheramara">ভেড়ামারা</option><option value="Daulatpur">দৌলতপুর</option><option value="Khoksa">খোকসা</option><option value="Kumarkhali">কুমারখালী</option><option value="Mirpur">মিরপুর</option>';
            }
            
            // set Magura division thana
            else if(DisList == 'Magura') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Magura Sadar">মাগুরা সদর</option><option value="Mohammadpur">মহম্মদপুর</option><option value="Shalikha">শালিখা</option><option value="Sreepur">শ্রীপুর</option>';
            }
            
            // set khulna division thana
            else if(DisList == 'Khulna') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Koyra">কয়রা</option><option value="Batiaghata">বটিয়াঘাটা</option><option value="Dacope">দাকোপ</option><option value="Dighalia">দিঘলিয়া</option><option value="Dumuria">ডুমুরিয়া</option><option value="Paikgachha">পাইকগাছা</option><option value="Phultala">ফুলতলা</option><option value="Rupsa">রূপসা</option><option value="Terokhada">তেরখাদা</option>';
            }
            
            // set Bagerhat division thana
            else if(DisList == 'Bagerhat') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bagerhat Sadar">বাগেরহাট সদর</option><option value="Chitalmari">চিতলমারী</option><option value="Fakirhat">ফকিরহাট</option><option value="Kachua">কচুয়া</option><option value="Mollahat">মোল্লাহাট</option><option value="Mongla">মোংলা</option><option value="Morrelganj">মোড়েলগঞ্জ</option><option value="Rampal">রামপাল</option><option value="Sarankhola">শরণখোলা</option>';
            }
            
            // set Jhenaidah division thana
            else if(DisList == 'Jhenaidah') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jhenaidah Sadar">ঝিনাইদহ সদর</option><option value="Maheshpur">মহেশপুর</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Kotchandpur">কোটচাঁদপুর</option><option value="Shailkupa">শৈলকুপা</option><option value="Harinakunda">হরিণাকুন্ড</option>';
            }
            
            // set Sherpur division thana
            else if(DisList == 'Sherpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sherpur Sadar">শেরপুর সদর</option><option value="Nalitabari">নালিতাবাড়ী</option><option value="Sreebardi">শ্রীবদী</option><option value="Jhenaigati">ঝিনাইগাতী</option><option value="Nakla">নকলা</option>';
            }
            
            // set Mymensingh division thana
            else if(DisList == 'Mymensingh') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Mymensingh Sadar">ময়মনসিংহ সদর</option><option value="Bhaluka">ভালুকা</option><option value="Trishal">ত্রিশাল</option><option value="Haluaghat">হালুয়াঘাট</option><option value="Muktagacha">মুক্তাগাছা</option><option value="Dhobaura">ধোবাউড়া</option><option value="Fulbaria">ফুলবাড়িয়া</option><option value="Gaffargaon">গফরগাঁও</option><option value="Gauripur">গৌরীপুর</option><option value="Ishwarganj">ঈশ্বরগঞ্জ</option><option value="Nandail">নান্দাইল</option><option value="Phulpur">ফুলপুর</option><option value="Tara Khanda">তারাকান্দা</option>';
            }
            
            // set Jamalpur division thana
            else if(DisList == 'Jamalpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Jamalpur Sadar">জামালপুর সদর</option><option value="Dewanganj">দেওয়ানগঞ্জ</option><option value="Baksiganj">বকশীগঞ্জ</option><option value="Islampur">ইসলামপুর</option><option value="Madarganj">মাদারগঞ্জ</option><option value="Melandaha">মেলান্দহ</option><option value="Sarishabari">সরিষাবাড়ি</option>';
            }
            
            // set Netrokona division thana
            else if(DisList == 'Netrokona') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Netrokona Sadar">নেত্রকোণা সদর</option><option value="Atpara">আটপাড়া</option><option value="Barhatta">বারহাট্টা</option><option value="Durgapur">দুর্গাপুর</option><option value="Kalmakanda">কলমাকান্দা</option><option value="Kendua">কেন্দুয়া</option><option value="Khaliajuri">খালিয়াজুড়ি</option><option value="Madan">মদন</option><option value="Mohanganj">মোহনগঞ্জ</option><option value="Purbadhala">পূর্বধলা</option>';
            }
            
            // set Sirajganj division thana
            else if(DisList == 'Sirajganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sirajganj Sadar">সিরাজগঞ্জ সদর</option><option value="Kazipur">কাজীপুর</option><option value="Ullahpara">উল্লাপাড়া</option><option value="Shahjadpur">শাহজাদপুর</option><option value="Raiganj">রায়গঞ্জ</option><option value="Kamarkhanda">কামারখন্দ</option><option value="Tarash">তাড়াশ</option><option value="Belkuchi">বেলকুচি</option><option value="Chauhali">চৌহালি</option>';
            }
            
            // set Pabna division thana
            else if(DisList == 'Pabna') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Pabna Sadar">পাবনা সদর</option><option value="Atgharia">আটঘরিয়া</option><option value="Bera">বেড়া</option><option value="Bhangura">ভাঙ্গুড়া</option><option value="Chatmohar">চাটমোহর</option><option value="Faridpur">ফরিদপুর</option><option value="Ishwardi">ঈশ্বরদী</option><option value="Santhia">সাঁথিয়া</option><option value="Sujanagar">সুজানগর</option>';
            }
            
            // set Bogra division thana
            else if(DisList == 'Bogra') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bogra Sadar">বগুড়া সদর</option><option value="Adamdighi">আদমদিঘী</option><option value="Sherpur">শেরপুর</option><option value="Dhunat">ধুনট</option><option value="Dhupchanchia">দুপচাঁচিয়া</option><option value="Gabtali">গাবতলী</option><option value="Kahaloo">কাহালু</option><option value="Nandigram">নন্দীগ্রাম</option><option value="Shajahanpur">শাজাহানপুর</option><option value="Sariakandi">সারিয়াকান্দি</option><option value="Shibganj">শিবগঞ্জ</option><option value="Sonatala">সোনাতলা</option>';
            }
            
            // set Rajshahi division thana
            else if(DisList == 'Rajshahi') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Bagha">বাঘা</option><option value="Bagmara">বাগমারা</option><option value="Charghat">চারঘাট</option><option value="Durgapur">দুর্গাপুর</option><option value="Godagari">গোদাগাড়ী</option><option value="Mohanpur">মোহনপুর</option><option value="Paba">পবা</option><option value="Puthia">পুঠিয়া</option><option value="Tanore">তানোর</option>';
            }
            
            // set Natore division thana
            else if(DisList == 'Natore') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Natore Sadar">নাটোর সদর</option><option value="Gurudaspur">গুরুদাসপুর</option><option value="Baraigram">বড়াইগ্রাম</option><option value="Bagatipara">বাগাতিপাড়া</option><option value="Lalpur">লালপুর</option><option value="Singra">সিংড়া</option><option value="Naldanga">নলডাঙ্গা</option>';
            }
            
            // set Joypurhat division thana
            else if(DisList == 'Joypurhat') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Joypurhat Sadar">জয়পুরহাট সদর</option><option value="Akkelpur">আক্কেলপুর</option><option value="Kalai">কালাই</option><option value="Khetlal">ক্ষেতলাল</option><option value="Panchbibi">পাঁচবিবি</option>';
            }
            
            // set Chapainawabganj division thana
            else if(DisList == 'Chapainawabganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Chapainawabganj Sadar">চাঁপাইনবাবগঞ্জ সদর</option><option value="Bholahat">ভোলাহাট</option><option value="Gomastapur">গোমস্তাপুর</option><option value="Nachole">নাচোল</option><option value="Shibganj">শিবগঞ্জ</option>';
            }
            
            // set Naogaon division thana
            else if(DisList == 'Naogaon') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Naogaon Sadar">নওগাঁ সদর</option><option value="Badalgachhi">বদলগাছি</option><option value="Dhamoirhat">ধামইরহাট</option><option value="Manda">মান্দা</option><option value="Mohadevpur">মহাদেবপুর</option><option value="Niamatpur">নিয়ামতপুর</option><option value="Patnitala">পত্নীতলা</option><option value="Porsha">পোরশা</option><option value="Raninagar">রাণীনগর</option><option value="Sapahar">সাপাহার</option>';
            }
            
            // set Sylhet division thana
            else if(DisList == 'Sylhet') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sylhet Sadar">সিলেট সদর</option><option value="Balaganj">বালাগঞ্জ</option><option value="Beanibazar">বিয়ানীবাজার</option><option value="Bishwanath">বিশ্বনাথ</option><option value="Companiganj">কোম্পানীগঞ্জ</option><option value="Dakshin Surma">দক্ষিণ সুরমা</option><option value="Fenchuganj">ফেঞ্চুগঞ্জ</option><option value="Golapganj">গোলাপগঞ্জ</option><option value="Gowainghat">গোয়াইনঘাট</option><option value="Jaintiapur">জৈন্তাপুর</option><option value="Kanaighat">কানাইঘাট</option><option value="Osmani Nagar">ওসমানীনগর</option>';
            }
            
            // set Moulvibazar division thana
            else if(DisList == 'Moulvibazar') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Moulvibazar Sadar">মৌলভীবাজার সদর</option><option value="Kamalganj">কমলগঞ্জ</option><option value="Kulaura">কুলাউড়া</option><option value="Rajnagar">রাজনগর</option><option value="Sreemangal">শ্রীমঙ্গল</option><option value="Barlekha">বড়লেখা</option><option value="Juri">জুড়ী</option>';
            }
            
            // set Habiganj division thana
            else if(DisList == 'Habiganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Habiganj Sadar">হবিগঞ্জ সদর</option><option value="Ajmiriganj">আজমিরীগঞ্জ</option><option value="Baniachang">বানিয়াচং</option><option value="Bahubal">বাহুবল</option><option value="Chunarughat">চুনারুঘাট</option><option value="Lakhai">লাখাই</option><option value="Madhabpur">মাধবপুর</option><option value="Nabiganj">নবীগঞ্জ</option><option value="Sayestaganj">শায়েস্তাগঞ্জ</option>';
            }
            
            // set Sunamganj division thana
            else if(DisList == 'Sunamganj') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Sunamganj Sadar">সুনামগঞ্জ সদর</option><option value="Bishwampur">বিশ্বম্ভরপুর</option><option value="Chhatak">ছাতক</option><option value="Dakshin Sunamganj">দক্ষিণ সুনামগঞ্জ</option><option value="Derai">দিরাই</option><option value="Dowarabazar">দোয়ারাবাজার</option><option value="Jagannathpur">জগন্নাথপুর</option><option value="Jamalganj">জামালগঞ্জ</option><option value="Sullah">শাল্লা</option><option value="Tahirpur">তাহিরপুর</option><option value="Dharampasha">ধর্মপাশা</option>';
            }
            
            // set Panchagarh division thana
            else if(DisList == 'Panchagarh') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Panchagarh Sadar">পঞ্চগড় সদর</option><option value="Debiganj">দেবীগঞ্জ</option><option value="Boda">বোদা</option><option value="Atwari">আটোয়ারী</option><option value="Tetulia">তেঁতুলিয়া</option>';
            }
            
            // set Dinajpur division thana
            else if(DisList == 'Dinajpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Dinajpur Sadar">দিনাজপুর সদর</option><option value="Biral">বিরল</option><option value="Birampur">বিরামপুর</option><option value="Birganj">বীরগঞ্জ</option><option value="Bochaganj">বোচাগঞ্জ</option><option value="Chirirbandar">চিরিরবন্দর</option><option value="Ghoraghat">ঘোড়াঘাট</option><option value="Hakimpur">হাকিমপুর</option><option value="Kaharole">কাহারোল</option><option value="Khansama">খানসামা</option><option value="Nawabganj">নবাবগঞ্জ</option><option value="Fulbari">ফুলবাড়ী</option>';
            }
            
            // set Lalmonirhat division thana
            else if(DisList == 'Lalmonirhat') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Lalmonirhat Sadar">লালমনিরহাট সদর</option><option value="Aditmari">আদিতমারী</option><option value="Hatibandha">হাতীবান্ধা</option><option value="Kaliganj">কালীগঞ্জ</option><option value="Patgram">পাটগ্রাম</option>';
            }
            
            // set Nilphamari division thana
            else if(DisList == 'Nilphamari') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Nilphamari Sadar">নীলফামারী সদর</option><option value="Saidpur">সৈয়দপুর</option><option value="Kishoreganj">কিশোরগঞ্জ</option><option value="Dimla">ডিমলা</option><option value="Domar">ডোমার</option><option value="Jaldhaka">জলঢাকা</option>';
            }
            
            // set Gaibandha division thana
            else if(DisList == 'Gaibandha') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Gaibandha Sadar">নীলফামারী সদর</option><option value="Gobindaganj">গোবিন্দগঞ্জ</option><option value="Fulchhari">ফুলছড়ি</option><option value="Palashbari">পলাশবাড়ী</option><option value="Sadullapur">সাদুল্লাপুর</option><option value="Sundarganj">সুন্দরগঞ্জ</option><option value="Saghata">সাঘাটা</option>';
            }
            
            // set Thakurgaon division thana
            else if(DisList == 'Thakurgaon') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Thakurgaon Sadar">ঠাকুরগাঁও সদর</option><option value="Baliadangi">বালিয়াডাঙ্গী</option><option value="Haripur">হরিপুর</option><option value="Pirganj">পীরগঞ্জ</option><option value="Ranisankail">রাণীশংকৈল</option>';
            }
            
            // set Rangpur division thana
            else if(DisList == 'Rangpur') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Rangpur Sadar">রংপুর সদর</option><option value="Badarganj">বদরগঞ্জ</option><option value="Mithapukur">মিঠাপুকুর</option><option value="Gangachara">গংগাচড়া</option><option value="Kaunia">কাউনিয়া</option><option value="Pirgacha">পীরগাছা</option><option value="Pirganj">পীরগঞ্জ</option><option value="Taraganj">তারাগঞ্জ</option>';
            }
            
            // set Kurigram division thana
            else if(DisList == 'Kurigram') {
             thanaList = '<option disabled selected>নির্বাচন করুন</option><option value="Kurigram Sadar">কুড়িগ্রাম সদর</option><option value="Bhurungamari">ভুরুঙ্গামারী</option><option value="Char Rajibpur">চর রাজিবপুর</option><option value="Chilmari">চিলমারী</option><option value="Nageshwari">নাগেশ্বরী</option><option value="Phulbari">ফুলবাড়ী</option><option value="Rajarhat">রাজারহাট</option><option value="Raomari">রৌমারী</option><option value="Ulipur">উলিপুর</option>';
            }
            document.getElementById("polic_sta").innerHTML= thanaList;
        }
    render() {
        console.log('post Data');
        console.log(this.state.post);
        let productDropdown = [];
        if (this.state.productslist) {
                this.state.productslist.map(product=>(
                    productDropdown.push(<option key={product.id} value={product.id}>{product.name}</option>)
            ));
        }

        let categoryDropdown = [<option>নির্বাচন করুন</option>];
        if (this.state.categorieslist) {
                this.state.categorieslist.map(category=>(
                    categoryDropdown.push(<option key={category.id} value={category.id}>{category.name}</option>)
            ));
        }

        let subcategoryDropdown = [<option>নির্বাচন করুন</option>];
        if (this.state.subCategorieslist) {
                this.state.subCategorieslist.map(subcategory=>(
                    subcategoryDropdown.push(<option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>)
            ));
        };
        let divisionListDropdown = [<option>নির্বাচন করুন</option>];
        if (this.state.divisionList) {
                this.state.divisionList.map(division=>(
                    divisionListDropdown.push(<option key={division.name} value={division.name}>{division.value}</option>)
            ));
        };
        return (<>
            <div className="custom-post-form">
                <form onSubmit={this.handleSubmit}>
                    <h4 className="h4post">পণ্য সম্পর্কে</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <h5 htmlFor="commidities">পণ্য</h5>
                            {/* <select className="form-control select2bs4" onChange={this.categorySelect} required="required"> */}
                            <select className="form-control select2bs4" onChange={this.categorySelect} >
                            <option disabled selected value="">নির্বাচন করুন</option>
                                {productDropdown}
                            </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <h5 htmlFor="">মোট ওজন* </h5>
                                <input className="form-control values-input" step="any" id="total-weight" type="number" value={this.state.post.total_weight} name="total_weight" onChange={this.handleInputChange}/>
                                {/* <input className="form-control values-input" step="any" required="required" id="total-weight" type="number" name="total_weight" /> */}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group" >
                                <h5 htmlFor="weight_unit">ওজন ইউনিট*</h5>
                                <select className="form-control" value={this.state.post.weight_unit} name="weight_unit" onChange={this.handleInputChange}>
                                <option disabled selected value="">নির্বাচন করুন</option>     
                                    <option value="মেট্রিক টন">মেট্রিক টন</option>
                                    <option value="টন">টন</option>
                                    <option value="টন">মণ</option> 
                                    <option value="কেজি">কেজি</option>
                                    <option value="পিস">পিস</option>
                                </select>
                            </div>
                        </div>
        
                        <div className="col-md-3">
                            <div className="form-group">
                                <h5 htmlFor="">ইউনিট প্রতি মূল্য (৳)*</h5>
                                <input className="form-control values-input" type="number" name="price_per_unit" value={this.state.post.price_per_unit}  onChange={this.handleInputChange}/>
                                {/* <input className="form-control values-input" value="0" required="required"  type="number" name="price_per_unit" /> */}
                            </div>
                        </div>
        
                        <div className="col-md-3">
                            <div className="form-group" >
                                <h5 htmlFor="advance_paid">অগ্রিম পরিশোধ (%)*</h5>
                                <select className="form-control"  name="advance_payment"  onChange={this.handleInputChange}>
                                    <option disabled selected value="">নির্বাচন করুন</option>
                                    <option value="0">0 (%)</option>
                                    <option value="5">5 (%)</option>
                                    <option value="10">10 (%)</option>
                                    <option value="15">15 (%)</option>
                                    <option value="20">20 (%)</option>
                                    <option value="25">25 (%)</option>
                                    <option value="30">30 (%)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">পণ্যের বিবরণ</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor="category"> পণ্যের প্রকার*</h5>
                                <select className="form-control" onChange={this.subcategorySelect}>
                                {/* <select className="form-control" onChange={this.subcategorySelect} required="required"> */}
                                    {categoryDropdown}
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor="sub_category">পণ্যের জাত সমূহ*</h5>
                                <select className="form-control" name="sub_category_id" onChange={this.handleInputChange}>
                                    {subcategoryDropdown}
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5>উৎপাদনের ধরন*</h5>
                                <select className="form-control" name="production_type" onChange={this.handleInputChange}>
                                    <option disabled selected value="">নির্বাচন করুন</option>
                                    <option value="প্রচলিত উৎপাদন">প্রচলিত উৎপাদন </option>
                                    <option value="জৈব উৎপাদন">জৈব উৎপাদন</option>
                                    <option value="রাসায়নিক উৎপাদন">রাসায়নিক উৎপাদন</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor=""> ফসল উৎপাদন সাল</h5>
                                <input className="form-control" onChange={this.handleInputChange} type="date"  value = {this.state.post.product_production_year}name="product_production_year"/>
                                {/* <input className="form-control" value="" type="date" name="product_production_year"required="required"/> */}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor="">প্যাকেজিং পদ্ধতি*</h5>
                                <select className="form-control" name="packaging_method" onChange={this.handleInputChange}>
                                <option disabled selected value="">নির্বাচন করুন</option>                         
                                    <option value="40 কেজি ব্যাগ">40 কেজি ব্যাগ</option>
                                    <option value="50 কেজি ব্যাগ">50 কেজি ব্যাগ</option>
                                    <option value="1 মেট্রিক টন">1 মেট্রিক টন</option>
                                    <option value="1 টন">1 টন</option>
                                    <option disabled>অন্য প্যাকেজিং পদ্ধতি(মন্তব্যে উল্লেখ করুন)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">অফার সম্পর্কে*</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="form-group"> 
                                    <h5 htmlFor="" className="control-h7">প্রাথমিক বিতরণ তারিখ*</h5> 
                                    <input type="date" className="form-control" onChange={this.handleInputChange} value={this.state.post.initial_delivery_date} name="initial_delivery_date"/> 
                                    {/* <input type="date" className="form-control" value="" required name="initial_delivery_date"/>  */}
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="form-group"> 
                                    <h5 htmlFor="finaldeliverydate" className="control-h7"> চূড়ান্ত বিতরণ তারিখ*</h5> 
                                    <input type="date" className="form-control" onChange={this.handleInputChange} value={this.state.post.final_delivery_date} name="final_delivery_date"/> 
                                    {/* <input type="date" className="form-control" value="" required name="final_delivery_date"/>  */}
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="form-group"> 
                                    <h5 htmlFor="" className="control-h7"> অফার শেষ হওয়ার তারিখ*</h5> 
                                    <input type="date" onChange={this.handleInputChange} className="form-control" value={this.state.post.offer_end_date} id="date" name="offer_end_date"/> 
                                    {/* <input type="date" className="form-control" id="date" value="" name="offer_end_date"required="required"/>  */}
                                </div> 
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">নিজস্ব যানবাহন আছে?*</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input id="own_vehicle-yes" className="own_vehicle" type="radio" name="own_vehicle" onChange={this.handleInputChange} value="1" /><span className="translation_missing" >  হ্যাঁ</span>
                                {this.state.post.own_vehicle ==0 ?
                                <input id="own_vehicle-no" className="own_vehicle" type="radio" name="own_vehicle" onChange={this.handleInputChange} checked value="0" />
                                :<input id="own_vehicle-no" className="own_vehicle" type="radio" name="own_vehicle" onChange={this.handleInputChange} value="0" />}
                                <span className="translation_missing" >  না</span> 
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">আরো কিছু তথ্য দিন</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 className="control-h7">বিভাগ*</h5> 
                                <select name="divisions" id="divisions" className="form-control input-lg" onChange={this.divisionsList}>
                                {/* <select name="divisions" id="divisions" required="required" className="form-control input-lg" onChange={this.divisionsList}> */}
                                    <option disabled>নির্বাচন করুন</option>
                                    {divisionListDropdown}
                                </select>
                            </div>
                        </div>

                        
                        <div className="col-md-4"> 
                            <div className="form-group">
                                <h5 className="control-h7">জেলা*</h5>
                                <select className="form-control input-lg" name="district" id="distr" onChange={this.thanaList}>
                                {/* <select className="form-control input-lg" name="district" id="distr" required="required" onChange={this.thanaList}> */}
                                    <option disabled>নির্বাচন করুন</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="form-group"> 
                                <h5 htmlFor="field-5" className="control-h7">থানা*</h5> 
                                <select className="form-control input-lg" onChange={this.handleInputChange} name="thana" id="polic_sta">
                                {/* <select className="form-control input-lg" defaultValue={'DEFAULT'} name="thana" id="polic_sta" required="required"> */}
                                <option disabled>নির্বাচন করুন</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <div className="row">
                        <div className="col-md-4">
                            <h5 htmlFor="address" className="control-h7">গ্রাম/মহল্লা*</h5> 
                            <input type="text" className="form-control" id="address" placeholder="গ্রাম/মহল্লা" onChange={this.handleInputChange} name="villege"/>
                            {/* <input type="text" className="form-control" id="address" placeholder="গ্রাম/মহল্লা" value=""  name="villege" required="required"/> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* <div className="form-group" style="margin-top: 10px;"> */}
                            <div className="form-group addtionalcmnt">
                                <h4 className="h4post" htmlFor="additional_comments">সংযোজিত মন্তব্য</h4>
                                <textarea className="form-control" onChange={this.handleInputChange} name="comments"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="h4post" htmlFor="files"> চিত্র আপলোড করুন:</h4>
                            <input type="file" onChange={this.handleInputChange} id="files" name="product_image"/>                     
                            {/* <input type="file" id="files" name="product_image" value="" required/>                      */}
                        </div>
                    </div>
                    {/* done  */}
                    <div className="row">
                        {/* <div className="col-md-9" style="margin-top:20px;"> */}
                        <div className="col-md-9 agricultre-demand">
                            <div className="form-group">
                            {/* <input name="" type="hidden" value="0" /> */}
                            <input className="inline-block" name="submitshowoff" type="checkbox" onClick={this.onSubmitShowoff} />
                            {/* <input name="" type="hidden" value="0" /><input className="inline-block" required="required" type="checkbox" value="1" /> */}
                            পণ্য কেনা বেচার জন্য <a className="link-green inline-block" target="_blank" href="#">কৃষিসেবার শর্তাবলীর সাথে</a> একমত পোষণ করছি
                            </div>
                        </div>
                        <div className="col-md-3">
                            {this.state.submitshowoff ? <button type="submit" className="btn btn-info btn-block">SUBMIT</button> : '' }
                        </div>
                    </div>
                </form>
            </div>
        </>)
    }
}
export default Create;

if (document.getElementById('react_manage_posts')) {
    ReactDOM.render(<Create />, document.getElementById('react_manage_posts'));
}
