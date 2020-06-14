import React from "react"
import "../styles/styles.scss"


//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import SubText from "../components/subText"
import Buttons from "../components/buttons"

const IndexPage = () => (
  <div className="grid">
    <Header />
    <Banner />
    <SubText />
    <Buttons />
  </div>
)

export default IndexPage
