import "./App.css";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ManageItems from "./components/Pages/ManageItems/ManageItems";
import MyItems from "./components/Pages/MyItems/MyItems";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import AddItem from "./components/Pages/AddItem/AddItem";
import RequireAuth from "./components/Pages/RequireAuth/RequireAuth";
import EmailVerification from "./components/Pages/EmailVerification/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateItem from "./components/Pages/UpdateItem/UpdateItem";
import Blog from "./components/Pages/Blog/Blog";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/manageItems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/updateItem/:itemId"
          element={
            <RequireAuth>
              <UpdateItem></UpdateItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/emailVerification"
          element={<EmailVerification></EmailVerification>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route> 
        <Route path="*" element={<NotFound></NotFound>}></Route>  
      </Routes>
      <Footer></Footer>     
      <ToastContainer />
    </div>
  );
}

export default App;
