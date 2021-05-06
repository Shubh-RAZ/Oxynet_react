import './App.css';
import Homepage from './Components/Homepage';
// import About from './Components/about_us/about'
import {Route, BrowserRouter as Router} from 'react-router-dom'
// import Alert from './alert'
import SupplierDashboard from './Components/supplier-dashboard/SupplierDashboard'
import Login from './Login'
import Fpw from './Fpw'
import ResetPassword from './ResetPassword'
import Signup_P from './Signup_P'
import Report from './Components/Report';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/report" component={Report}/>
        <Route exact path="/dashboard" component={SupplierDashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/Fpw" component={Fpw}  />
        <Route exact path="/ResetPassword" component={ResetPassword}  />
        <Route exact path="/Signup" component={Signup_P}  />
      {/* <Alert></Alert> */}
      {/* <About></About> */}
      </Router>
    </div>
  )
}

export default App