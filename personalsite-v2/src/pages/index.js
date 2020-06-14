import React from "react"
import "../styles/styles.scss"


//Import Components
import Header from "../components/header"
import MainText from "../components/mainText"
import SubText from "../components/subText"
import Buttons from "../components/buttons"

const IndexPage = () => (
  <div className="grid">
    <Header />
    <MainText />
    <SubText />
    <Buttons />
  </div>
)

export default IndexPage
