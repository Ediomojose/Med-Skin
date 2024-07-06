import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import main from "../pages/home/Home";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <main>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </main>
  );
};

export default PageWrapper;
