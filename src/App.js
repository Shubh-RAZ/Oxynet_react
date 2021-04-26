import './App.css';
import Homepage from './Components/Homepage';
import About from './Components/about_us/about'
import Supplier_dashboard from './Components/supplier-dashboard/Supplier_dashboard';
import Supplier_form from './Components/Suuplier_Form/Supplier_form';

function App() {
  return (
    <div className="App">
     {/* <Homepage></Homepage> 
     <About></About> */}
     <Supplier_dashboard></Supplier_dashboard> 
    
    </div>
  );
}

export default App;
