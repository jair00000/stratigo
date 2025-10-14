import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar stays at the top */}
      <Navbar />
      
      {/* Main page content */}
      <main className="flex-1 w-full">
        {children}
      </main>
      
      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
