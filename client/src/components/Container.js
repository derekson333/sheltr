import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import About from "./pages/About";
import Footer from "./Footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderContent = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    return <About />;
  };

  const renderFooter = () => {
    return <Footer />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Header />
          <Nav currentPage={currentPage} pageChange={handlePageChange} />
        </nav>
      </header>
      {renderContent()}
      {renderFooter()}
    </div>
  );
}
