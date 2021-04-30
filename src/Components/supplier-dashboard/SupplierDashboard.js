import React, { Component } from 'react'
import './../Homepage.css'
// import SupplierForm from '../SupplierForm/SupplierForm'
import './SupplierDashboard.css'
import './../options.css'
import './../SupplierForm/SupplierForm.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh (UT)','Chhattisgarh','Dadra and Nagar Haveli (UT)','Daman and Diu (UT)','Delhi (NCT)','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep (UT)','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry (UT)','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']

const SD = {  
    "states":[{"state":"Andhra Pradesh","districts":["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"]},{"state":"Arunachal Pradesh","districts":["Tawang","West Kameng","East Kameng","Papum Pare","Kurung Kumey","Kra Daadi","Lower Subansiri","Upper Subansiri","West Siang","East Siang","Siang","Upper Siang","Lower Siang","Lower Dibang Valley","Dibang Valley","Anjaw","Lohit","Namsai","Changlang","Tirap","Longding"]},{"state":"Assam","districts":["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"]},{"state":"Bihar","districts":["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"]},{"state":"Chandigarh (UT)","districts":["Chandigarh"]},{"state":"Chhattisgarh","districts":["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari","Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba","Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]},{"state":"Dadra and Nagar Haveli (UT)","districts":["Dadra & Nagar Haveli"]},{"state":"Daman and Diu (UT)","districts":["Daman","Diu"]},{"state":"Delhi (NCT)","districts":["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara","South Delhi","South East Delhi","South West  Delhi","West Delhi"]},{"state":"Goa","districts":["North Goa","South Goa"]},{"state":"Gujarat","districts":["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh","Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan","Porbandar","Rajkot","Sabarkantha (Himmatnagar)","Surat","Surendranagar","Tapi (Vyara)","Vadodara","Valsad"]},{"state":"Haryana","districts":["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]},{"state":"Himachal Pradesh","districts":["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul &amp; Spiti","Mandi","Shimla","Sirmaur (Sirmour)","Solan","Una"]},{"state":"Jammu and Kashmir","districts":["Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"]},{"state":"Jharkhand","districts":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"]},{"state":"Karnataka","districts":["Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur","Chikkamagaluru (Chikmagalur)","Chitradurga","Dakshina Kannada","Davangere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi (Gulbarga)","Kodagu","Kolar","Koppal","Mandya","Mysuru (Mysore)","Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)","Udupi","Uttara Kannada (Karwar)","Vijayapura (Bijapur)","Yadgir"]},{"state":"Kerala","districts":["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]},{"state":"Lakshadweep (UT)","districts":["Agatti","Amini","Androth","Bithra","Chethlath","Kavaratti","Kadmath","Kalpeni","Kilthan","Minicoy"]},{"state":"Madhya Pradesh","districts":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"]},{"state":"Maharashtra","districts":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]},{"state":"Manipur","districts":["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]},{"state":"Meghalaya","districts":["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"]},{"state":"Mizoram","districts":["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"]},{"state":"Nagaland","districts":["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"]},{"state":"Odisha","districts":["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"]},{"state":"Puducherry (UT)","districts":["Karaikal","Mahe","Pondicherry","Yanam"]},{"state":"Punjab","districts":["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"]},{"state":"Rajasthan","districts":["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"]},{"state":"Sikkim","districts":["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]},{"state":"Tamil Nadu","districts":["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]},{"state":"Telangana","districts":["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"]},{"state":"Tripura","districts":["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"]},{"state":"Uttarakhand","districts":["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]},{"state":"Uttar Pradesh","districts":["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi (Chatrapati Sahuji Mahraj Nagar)","Amroha (J.P. Nagar)","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur (Panchsheel Nagar)","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kanshiram Nagar (Kasganj)","Kaushambi","Kushinagar (Padrauna)","Lakhimpur - Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","RaeBareli","Rampur","Saharanpur","Sambhal (Bhim Nagar)","Sant Kabir Nagar","Shahjahanpur","Shamali (Prabuddh Nagar)","Shravasti","Siddharth Nagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]},{"state":"West Bengal","districts":["Alipurduar","Bankura","Birbhum","Burdwan (Bardhaman)","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]}]
}

const dist = (state)=>{
    const districts = SD.states[states.lastIndexOf(state)].districts
    return districts
}

export default class SupplierDashboard extends Component {

    
constructor(props){
            super(props)
            this.state = {
            showform:false,
            render:[
                {
                    Id : 'kuch toh bhi',
                    city: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10',
                }
                ,
                {
                    Id : 'kuch toh bhi',
                    city: 'Akola',
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
                    city: 'Akola',
                    quantity:'80',
                    shopName:'Shivh`s oxygen',
                    address:'Kala chabutra, patli gali, timbaktu ',
                    cost:'12000',
                    phoneNo1:'8695432138',
                    phoneNo2:'6381365485',
                    lastUpdate:'10:25',
                    reportedBy:'10'
                }
            ],
            editcard:[],
            district:'Reset district',
            stateName: '',
            districts: [],
        }
    }

    handleChange = async(event) => {
        let val = event.target.value
        await this.setState({district: val})
        // console.log(this.state.district)
    }
    
    myChangeHandler = async(event) => {
        let val = event.target.value
        await this.setState({stateName: val})
        await this.setState({district:'Reset district'})
        var districts = dist(this.state.stateName)
        await this.setState({districts:districts})
    }

    
    handleform = () => {
        this.setState({
            showform:true
        })
    }
    
    handledelete = (Id,index) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [],
            childrenElement: () => <div />,
            customUI: ({ onClose }) => {
              return (
                <div >
                  <h1>Are you sure?</h1>
                  <h5>You want to delete this card</h5>
                  <div style={{height:'10px'}}></div>
                  <div style={{display:'flex'}}>
                    <button className={'report-btn'} style={{width:'120px',background:''}} onClick={onClose}>No</button>
                    <div style={{width:'20px'}}></div>
                    <button className={'report-btn'} style={{width:'120px',background:''}} onClick={() => {this.delete(Id,index);onClose()}}>Yes</button>
                  </div>
                </div>
              );
            },
            closeOnEscape: true,
            closeOnClickOutside: true,
            willUnmount: () => {},
            afterClose: () => {},
            onClickOutside: () => {},
            onKeypressEscape: () => {},
            overlayClassName: "overlay-custom-class-name"
        })
        // (window.confirm('Are you sure you wish to delete this item?'))? null : null
    }

    delete = async (Id,index) =>{
        const result = await fetch(`https://oxynet.herokuapp.com/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        console.log(Id,index)
        var render = this.state.render
        render.splice(index, 1)
        if (result.status == 'ok'){
            this.setState({render: render})
        }else{alert(result.error)}
    }
    
    handlecancel = () => {
        this.setState({
            showform:false
        })
    }

    

    logout = ()=>{
        window.location.assign('./')
    }

    render() {
        return (
            <div className="homepage-whole">
                {this.state.showform? 
                    <div style={{margin:'auto'}}>
                        <div>
                            <div className="supplier-form-whole" style={{margin: 'auto'}}>
                                <div className="form-inside">
                                    <form>
                                    {/* <div style={{height:'30px'}}></div> */}
                                    <div className="select-field">
                                    <select name="state" id="state" className="select-supply" placeholder="Select State" defaultValue="">
                                        {/* <option value="" disabled >Select Your Item</option> */}
                                        <option value="Andhra Pradesh">Oxygen Cylinder</option>
                                    </select>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <input defaultValue={this.state.editcard.quantity} type="text" className="in-input" placeholder="Quantity (eg. 100 Oxygen Cylinders)" required></input>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <input defaultValue={this.state.editcard.cost} type="text" className="in-input" placeholder="Cost (MRP) per cylinder" required></input>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <input defaultValue={this.state.editcard.phone1} type="number" className="in-input" placeholder="10 digit Phone Number" required></input>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <input defaultValue={this.state.editcard.phone2} type="number" className="in-input" placeholder="Alternate Phone Number" ></input>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <input defaultValue={this.state.editcard.shopname} type="text" className="in-input" placeholder="Shop Name" required></input>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <input defaultValue={this.state.editcard.shopadd} type="text" className="in-input" placeholder="Shop Address" required></input>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field" >
                                        <select className="in-input" name="stateName" id="state" defaultValue={this.state.editcard.state} onChange={this.myChangeHandler} required>
                                            <option value="" disabled >Select state</option>
                                            {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                                        </select>
                                    </div>
                                    <div style={{height:'30px'}}></div>
                                    <div className="input-field">
                                        <select className="in-input" name="district" id="district" value={this.state.disrtict} onChange={this.handleChange} required>
                                            <option>{(this.state.district === 'Reset district') ? 'Select district' :'Reset district'}</option>
                                            { this.state.districts.map((district,index) => (<option key={index}>{district}</option>)) }
                                        </select>
                                    </div>
                                    </form>
                                    <button className="save-btn" style={{border:'none'}}>
                                        Save
                                    </button>
                                </div> 
                            </div>
                        </div>
                        {/* <SupplierForm></SupplierForm> */}
                        {this.state.showform ? <div onClick={this.handlecancel}>
                            <button type="button" className="report-btn" onClick={this.handleform} style={{width:'50%',height:'50px'}}>Cancel</button>
                        </div>: null}
                    </div>
                                  :
                    <div>
                    <div className="top-ribbon" style={{padding:'15px 10%',height:'100%'}}>
                        <div className="name">Oxynet</div>
                        <div style={{width:'80%',height:'5px'}}></div>
                        <button className="click-here-btn" onClick={this.logout} style={{background:'white',border:'0'}}><font style={{color:'blue'}}>Logout</font></button>
                    </div>
                    <div className="row row-class">
                        {this.state.render.map((obj,index)=>{return(
                            <div className="col-md-3 cards" style={{width: '100%',padding:'15px 0'}} >
                            <div className="card-inside">
                                <div className="card-name">{obj.shopName}</div>
                                <div className="card-add">{obj.address}</div>
                                <div className="av">
                                    <div className="card-avail">
                                        <div className="avail">Availaibility</div>
                                        <div className="avail"><h1>{obj.quantity}</h1></div>
                                        <div className="avail">Last updated at: {obj.lastUpdate}</div>
                                        <div style={{'color':'white','fontSize':'15px'}}>Oxygen Cylinders</div>
                                    </div>
                                </div>
                                <div className="rate">Rs . {obj.cost} / Cylinder</div>
                                <div className="phone">
                                    <div className="phone-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg></div>
                                    <div className="phone-detail">
                                        <a href={`tel:`+obj.phoneNo1}>
                                            <font style={{'color':'blue'}}>
                                                +91-{obj.phoneNo1}
                                            </font>
                                        </a> , 
                                        <a href={`tel:`+obj.phoneNo2}>
                                            <font style={{'color':'blue'}}>
                                                +91-{obj.phoneNo2}
                                            </font>
                                        </a>
                                    </div>    
                                </div>
                                <div className="service">
                                    <button type="button" className="report-btn" onClick={()=>{this.handledelete(obj.Id,index)}} style={{width:'80px'}}>Delete</button>
                                    <div style={{width:'50px'}}></div>
                                    <button type="button" className="report-btn" onClick={this.handleform} style={{width:'80px',background:'green'}}>Edit</button>
                                </div>
                                <div style={{height:'5px'}}></div>
                                <font>
                                    Reported by {obj.reportedBy}
                                </font>
                                {/* ({obj.reportedBy > 20})? <div>
                                    <div style={{height:'5px'}}></div>
                                    <div style={{borderRadius:'15px',padding: '5px 0',background: '#ff2a2a'}}>
                                        <h1 style={{color:'white'}}>Suspended</h1>
                                    </div>
                                </div> : null */}
                            </div>
                         </div>
                        )
                        })}
                            <div className="col-md-3 btn-box">
                                 <div className="inside-btn">
                                     <div className="add-btn" onClick={this.handleform}>
                                         <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                                             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                         </svg>
                                     </div>
                                 </div>
                             </div>
                    </div>
                    </div>
                }
            </div>
        )
    }
}