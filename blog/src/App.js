import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Category from "./components/Category";
import DetailNews from "./components/DetailPostNews";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useEffect } from "react";
import {
  actFetchCategoriesAsync,
  actFetchNewsAsync,
  actFetchTheLoaiAsync,
} from "./store/post/action";
import { useDispatch } from "react-redux";
import { actFetchMeAsync } from "./store/auth/action";
import { ACCESS_TOKEN } from "./constants";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchNewsAsync());
    dispatch(actFetchCategoriesAsync());
    dispatch(actFetchTheLoaiAsync());
    dispatch(actFetchMeAsync(localStorage.getItem(ACCESS_TOKEN)));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Routes>
          <Route path="/category/:id" element={<Category />}></Route>
          <Route path="/DetailNews/:id" element={<DetailNews />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
