import React, { Component } from 'react'
import Card from './card'
import './Homepage.css'
// import States from './states.js'
// import District from './districts'
// import Cookies from 'universal-cookie';
import './options.css'
import logo from './../img/white_logo.png'

// const cookies = new Cookies();

const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh (UT)','Chhattisgarh','Dadra and Nagar Haveli (UT)','Daman and Diu (UT)','Delhi (NCT)','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep (UT)','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry (UT)','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']

const SD = {  
    "states":[{"state":"Andhra Pradesh","districts":["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]},{"state":"Arunachal Pradesh","districts":["Tawang","West Kameng","East Kameng","Papum Pare","Kurung Kumey","Kra Daadi","Lower Subansiri","Upper Subansiri","West Siang","East Siang","Siang","Upper Siang","Lower Siang","Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding"]},{"state":"Assam","districts":["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]},{"state":"Bihar","districts":["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]},{"state":"Chandigarh (UT)","districts":["Chandigarh"]},{"state":"Chhattisgarh","districts":["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]},{"state":"Dadra and Nagar Haveli (UT)","districts":["Dadra & Nagar Haveli"]},{"state":"Daman and Diu (UT)","districts":["Daman","Diu"]},{"state":"Delhi (NCT)","districts":["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara","South Delhi","South East Delhi","South West  Delhi","West Delhi"]},{"state":"Goa","districts":["North Goa","South Goa"]},{"state":"Gujarat","districts":["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"]},{"state":"Haryana","districts":["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]},{"state":"Himachal Pradesh","districts":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul &amp; Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"]},{"state":"Jammu and Kashmir","districts":["Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]},{"state":"Jharkhand","districts":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"]},{"state":"Karnataka","districts":["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"]},{"state":"Kerala","districts":["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]},{"state":"Lakshadweep (UT)","districts":["Agatti","Amini","Androth","Bithra","Chethlath","Kavaratti","Kadmath","Kalpeni","Kilthan","Minicoy"]},{"state":"Madhya Pradesh","districts":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]},{"state":"Maharashtra","districts":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]},{"state":"Manipur","districts":["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]},{"state":"Meghalaya","districts":["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]},{"state":"Mizoram","districts":["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]},{"state":"Nagaland","districts":["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]},{"state":"Odisha","districts":["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"]},{"state":"Puducherry (UT)","districts":["Karaikal","Mahe","Pondicherry","Yanam"]},{"state":"Punjab","districts":["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"]},{"state":"Rajasthan","districts":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"]},{"state":"Sikkim","districts":["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]},{"state":"Tamil Nadu","districts":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]},{"state":"Telangana","districts":["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"]},{"state":"Tripura","districts":["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]},{"state":"Uttarakhand","districts":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]},{"state":"Uttar Pradesh","districts":["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi (Chatrapati Sahuji Mahraj Nagar)","Amroha (J.P. Nagar)","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kanshiram Nagar (Kasganj)","Kaushambi","Kushinagar (Padrauna)","Lakhimpur - Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","RaeBareli","Rampur","Saharanpur","Sambhal (Bhim Nagar)","Sant Kabir Nagar","Shahjahanpur","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]},{"state":"West Bengal","districts":["Alipurduar","Bankura","Birbhum","Burdwan (Bardhaman)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]}]
}

// const dist = (state)=>{
//     const districts = SD.states[states.lastIndexOf(state)].districts
//     return districts
// }

// window.cookies.onChanged.addListener(console.log(cookies));

const dist = (state)=>{
    const districts = SD.states[states.lastIndexOf(state)].districts
    return districts
}

export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            district:'Reset district',
            stateName: '',
            districts: [],
            response:[],
            render:[],
            searching: false
        }
    }

    handleChange = async(event) => {
        await this.setState({searching : true})
        let val = event.target.value
        await this.setState({render: []})
        await this.setState({district: val})
        if(this.state.district ==''){
            await this.setState({district:''})
        }
        // console.log(this.state.district)
        let filterBydistrict = this.state.response.filter(
            card => {
                if(card.district == this.state.district){
                    return(card)
                }
            }
        )
        if(val !== 'Reset district'){
            this.setState({render: filterBydistrict})
        }else{ 
            this.setState({render: this.state.response})
        }
    }

    myChangeHandler = async(event) => {
        let val = event.target.value
        await this.setState({stateName: val})
        await this.setState({render: []})
        await this.setState({district:'Reset district'})
        var districts = []
        districts = dist(this.state.stateName)
        await this.setState({districts:districts})
        const result = await fetch(`https://oxynet.herokuapp.com/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        // await this.setState({render:result})
        if(result.status==='ok'){
            await this.setState({render:
            [
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    district: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
                ,

            ]
            })
        }
        await this.setState({searching : true})
        await this.setState({response: this.state.render})
    }

    login = ()=>{window.location.assign('./login')}

    render() {
        return (
            <div className="homepage-whole">
                <div className="top-ribbon">
                    {/* <div>
                        <img src={logo} />
                    </div> */}
                    <div className="name">Oxynet</div>
                    <div className="state-city">
                        <div className="state">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            {/* <States  /> */}
                            <select name="stateName" id="state" className="select" defaultValue="" onChange={this.myChangeHandler}>
                                <option value="" disabled >Select state</option>
                                {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                            </select>
                        </div>

                        <div className="state city">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            {/* <District state={this.state.stateName}/> */}
                            <select name="district" id="district" value={this.state.disrtict} className="select" onChange={this.handleChange}>
                                <option>{(this.state.district === 'Reset district') ? 'Select district' :'Reset district'}</option>
                                { this.state.districts.map((district,index) => (<option key={index}>{district}</option>)) }
                            </select>
                        </div>
                    </div>
                </div>

                <div>

                </div>

                <div className="supplier">
                    <div style={{'paddingLeft':'25px'}}>
                        <div className="supplier-heading">OXYGEN CYLINDERS - {this.state.render.length} results</div>
                    </div>
                    <div className="supplier-info" style={{paddingLeft:'50px'}} >
                        <div className="supplier-quote">Are you a supplier ?</div>
                        <div className="click-here-btn" onClick={this.login}>Click Here</div>
                    </div>
                </div>

                {
                    (!this.state.searching)? 
                    <div>
                    <div style={{'margin':'auto','maxWidth':'80vw','width':'500px', 'textAlign':'justify'}}>
                        <br/><br/>
                        <br/><br/>
                        {/* <h1 style={{'textAlign':'center'}}>
                            Alert!
                        </h1> */}
                        <font style={{'textAlign':'center'}}>
                            <h4>
                                By using this website you understand and agree....
                            </h4>
                        </font>
                        <br></br>
                        <font>
                            OXYNET shall under no circumstances be held liable for any direct, indirect, incidental, consequential, or any other damages arising out of the use of the oxygen availability information Platform. There is no assurance by OXYNET of any specified outcomes of the use of the oxygen availability Information Platform. The users understand that by using any data or information provided on the oxygen availability information platform shall be at their own risk and that oxynet is not responsible for any consequences for offering such data/information.
                        </font>
                        <br/><br/>
                    </div>
                </div>:<div/>
                }

                <div className="card-start">
                    <div className="row" style={{}}>
                        {this.state.render.map((obj,index)=>{
                            return(
                                <Card  
                                    key={index}
                                    Id={obj.Id} 
                                    quantity={obj.quantity} 
                                    shopName={obj.shopName} 
                                    address={obj.address} 
                                    cost={obj.cost} 
                                    phoneNo1={obj.phoneNo1} 
                                    phoneNo2={obj.phoneNo2}
                                    lastUpdate={obj.lastUpdate}
                                    reportedBy={obj.reportedBy}
                                />
                            )
                        })}
                        {/* <Card _Id={'3893e8993e83'} quantity={'hlo'} shopName={'hlo'} address={'hlo'} cost={'hlo'} phoneNo1={'hlo'} phoneNo2={'hlo'}/> */}
                    </div>
                </div>
            </div>
        )
    }
}