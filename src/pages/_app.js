import React from "react";
import Head from "next/head";
import appData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>website is under maintainance</h1>
    </>
  );
}

export default MyApp;
