import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner = () => {

    const data = useStaticQuery(graphql`
        query {
            poppinShades: file(relativePath: { eq: "poppin-shades.png" }) {
                childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
                }
            }

            diamonds: file(relativePath: { eq: "diamonds.png" }) {
                childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
                }
            }

            orange: file(relativePath: { eq: "sexy-orange.png" }) {
                childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
                }
            }



        }
    `)

    return(
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="sideBackground left">
                        <Img fluid={data.diamonds.childImageSharp.fluid} />
                    </div>
                    <div className="mainText">
                        Brian Francis De Guzman
                    </div>
                    <div className="centerBackground">
                        <Img fluid={data.poppinShades.childImageSharp.fluid} />
                    </div>
                    <div className="sideBackground right">
                        <Img fluid={data.orange.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
            <div className="fixedMisc">
                Software Engineer
            </div>

        </div>
    )
}

export default Banner