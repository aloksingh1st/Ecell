import React from 'react'
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Module Imports

import Initiative from "./components/Initiative"
import Header from './components/homeComponents/Header';
import Home from './components/Home';
import About from "./components/About"
import Blogs from "./components/blogs"
import Connect from "./components/Connect"
import Team from "./components/team"
import Gallary from "./components/Gallary"
import Contact from "./components/Contact"
import Footer from './components/homeComponents/Footer';
import ApplyPage from "./components/forms/ApplyPage"
import ConnectForm from './components/ConnectComponent/ConnectForm';
// import Admin from './components/blogs/Admin';
// import Home from './components/blogs/Sidebar';
import HomeBlog from './components/blogs/HomeBlog';
import Mainblog from './components/blogs/Mainblog';
// import Login from './components/blogs/login';


function App() {

  // const [isAuth, setIsAuth] = useState(false)
  return (
    <>

   <BrowserRouter>
   <Header></Header> 
  


        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/initiatives" element={<Initiative></Initiative>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/connect" element={<Connect></Connect>}></Route>
          <Route path="/team" element={<Team></Team>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/applyPage" element={<ApplyPage></ApplyPage>}></Route>
          <Route path="/gallary" element={<Gallary></Gallary>}></Route>

          {/* <Route path="/blogs/admin" element={<Login setIsAuth={setIsAuth}></Login>}></Route> */}
          <Route path="/connectForm" element={<ConnectForm></ConnectForm>}></Route>
          <Route path="/blogs/Home" element={<HomeBlog></HomeBlog>}></Route>
          <Route path="/blogs/Create" element={<HomeBlog></HomeBlog>}></Route>
          <Route path="/blogs/View" element={<HomeBlog></HomeBlog>}></Route>
          <Route path="/blogs/View/name" element={<Mainblog></Mainblog>}></Route>
          
          
        </Routes>

        <Footer></Footer>
   </BrowserRouter>
  </>
  );
}

export default App;
