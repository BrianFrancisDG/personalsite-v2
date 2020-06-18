import React from "react";
import "../styles/styles.scss";
import { Helmet } from "react-helmet";


//Import Components
import Header from "../components/header"
import MainText from "../components/mainText"
import SubText from "../components/subText"
import Buttons from "../components/buttons"

const IndexPage = () => (
  <div className="grid">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hi, I'm Brian! | Brian Francis De Guzman</title>
    </Helmet>
    <Header />
    <MainText />
    <SubText />
    <Buttons />
  </div>
)

export default IndexPage
