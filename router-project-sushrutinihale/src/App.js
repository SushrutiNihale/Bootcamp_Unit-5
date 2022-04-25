import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/employees/:id" element={
          <PrivateRoute>
            <EmployeeDetails />
          </PrivateRoute>
        }></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      {/* <Routes>
        
        
        
        <Route path="/employees/:id" element={ }></Route>
        
        
      </Routes> */}
    </div>
  );
}

export default App;



// import './App.css';
// import { Navbar } from './components/Navbar';
// import { DiscountBanner } from './components/DiscountBanner';
// import { Footer } from './components/Footer';
// import { Route, Routes } from 'react-router-dom'
// import { Store } from './components/Store';
// import { About } from './components/About';
// import { FAQ } from './components/FAQ';
// import { Contact } from './components/Contact';
// import { Planets } from './components/Products/Planets';

// function App() {
//   return (
//     <div className="App">
//       <DiscountBanner />
//       <Navbar />
//       <Routes>
//         <Route path={"/store"} element={<Store />}></Route>
//         <Route path={"/about"} element={<About />}></Route>
//         <Route path={"/contact"} element={<Contact />}></Route>
//         <Route path={"/faq"} element={<FAQ />}></Route>
//         <Route path={"/products/planets"} element={<Planets />}></Route>
//         {/* <Route path={"/products/:"} */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
