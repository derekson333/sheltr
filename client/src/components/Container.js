import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import Footer from "./Footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderContent = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Adopt") {
      return <Adopt />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Donate") {
      return <Donate />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    return <About />;
  };

  const renderFooter = () => {
    return <Footer />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Header currentPage={currentPage} pageChange={handlePageChange} />
        </nav>
      </header>
      
      <div id='content'>
      {renderContent()}
      </div>
      {renderFooter()}
      </>
  );
}
