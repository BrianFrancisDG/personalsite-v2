import React from "react"
import "../styles/styles.scss"


//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutSection from "../components/aboutSection"
import SubText from "../components/subText"

const IndexPage = () => (
  <div className="grid">
    <Header />
    <Banner />
    <SubText />
    {/* <AboutSection /> */}
  </div>
)

export default IndexPage
