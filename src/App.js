import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { NotFound } from "./NotFound";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Header } from "./common-components/Header/Header";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { MyData } from "./components/Mydata/MyData";



function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/mydata" element={<MyData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
