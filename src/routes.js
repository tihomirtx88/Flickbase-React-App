import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import Header from "./components/navigation/header";
import MainLayout from "./hoc/mainLayout";
import Auth from "./components/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
