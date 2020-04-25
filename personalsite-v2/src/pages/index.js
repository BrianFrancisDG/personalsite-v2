import React from "react"
import "../styles/styles.scss"


//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutSection from "../components/aboutSection"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutSection />
  </div>
)

export default IndexPage
