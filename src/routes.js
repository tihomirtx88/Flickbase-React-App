import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuth } from "./store/actions/users";
import { Loader } from "./utils/tools";
import { useEffect, useState } from "react";

import Home from "./components/home";
import Header from "./components/navigation/header";
import MainLayout from "./hoc/mainLayout";
import Auth from "./components/auth";
import Dashboard from "./components/dashboard/idnex";
import AdminArticles from "./components/dashboard/articles";
import AdminProfile from "./components/dashboard/profile";

import AuthGuard from "./hoc/authGuard";

const Router = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(isAuth());
  }, []);

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false);
    }
  }, [users]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MainLayout>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                }>
                  <Route path="profile" element={<AdminProfile/>}/>
                  <Route path="articles" element={<AdminArticles/>}/>
                </Route>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </MainLayout>
        </>
      )}
    </BrowserRouter>
  );
};

export default Router;
