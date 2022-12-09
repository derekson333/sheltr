import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
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
    return <About />;
  };

  const renderFooter = () => {
    return <Footer />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header id='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Header currentPage={currentPage} pageChange={handlePageChange}/>
        </nav>
      </header>
      {renderContent()}
      {renderFooter()}
    </div>
  );
}
