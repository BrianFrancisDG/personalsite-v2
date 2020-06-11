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

        
        // <div className="banner">
        //     <div className="container">
        //         <div className="row">
        //             <div className="sideBackground left">
        //             </div>
        //             <div className="mainText">
        //                 Brian De Guzman
        //             </div>
        //             <div className="centerBackground">
        //             </div>
        //             <div className="sideBackground right">
        //             </div>
        //         </div>
        //         {/* <div className="scroll">
        //             <span>Scroll Down</span>
        //         </div> */}
        //         {/* <a class="btn-large" href="#">Button Large</a> */}
        //     </div>
        //     {/* <div className="fixedMisc">
        //         Software Engineer
        //     </div> */}

        // </div>
    )
}

export default Banner