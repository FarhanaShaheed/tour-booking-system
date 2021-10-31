import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Login/Login';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Register from './Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllBookings from './Pages/AllBookings/AllBookings';
import AboutUs from './Pages/About Us/AboutUs';
import MyBooking from './Pages/MyBooking/MyBooking';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
       <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <PrivateRoute path="/register/:name">
          <Register></Register>
        </PrivateRoute>
        <Route path="/userBookings">
          <MyBooking></MyBooking>
        </Route>
        <Route path="/aboutus">
           <AboutUs></AboutUs>
        </Route>
        <Route path="/myBookings">
          <AllBookings></AllBookings>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
