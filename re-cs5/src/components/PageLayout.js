import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
