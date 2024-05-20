import React from "react";
import { Outlet } from "react-router-dom";

//pages
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function RootLayout() {

  return (
    <div className="root-layout bg-DarkPurple">
      <header className="bg-DarkPurple bg-opacity-60 backdrop-blur-lg shadow-lg sticky top-0 w-full z-10">
        <Nav/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
