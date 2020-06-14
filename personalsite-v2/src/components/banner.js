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
        <div className="mainText">
            Hi,I'm Brian!
        </div>
    )
}

export default Banner