import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby"

const AboutSection = () => {

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
        }
    `)

    return(
        <div className="aboutSection">
            <div className="container">
                <div className="innerBlurb">
                    <div className="content">
                        <h3>Ability To Create</h3>
                        <p>
                            Lorenaslkjsdlfgkjgflkjfglkjsdglkjdlskf
                            jaslkdjgalkfsdgjdlfkgjaldkfjglakrdfj
                            Lorenaslkjsdlfgkjgflkjfglkjsdglkjdlskf
                            jaslkdjgalkfsdgjdlfkgjaldkfjglakrdfj
                            Lorenaslkjsdlfgkjgflkjfglkjsdglkjdlskf
                            jaslkdjgalkfsdgjdlfkgjaldkfjglakrdfj
                            Lorenaslkjsdlfgkjgflkjfglkjsdglkjdlskf
                            jaslkdjgalkfsdgjdlfkgjaldkfjglakrdfj
                            Lorenaslkjsdlfgkjgflkjfglkjsdglkjdlskf
                            jaslkdjgalkfsdgjdlfkgjaldkfjglakrdfj
                        </p>
                        <div className="buttonRow">
                            <Link to="/work">View Projects</Link>
                        </div>

                    </div>
                    <div className="images">
                        <div className="topRight">
                            <Img fluid={data.poppinShades.childImageSharp.fluid} />
                        </div>
                        <div className="bottomLeft">
                            <Img fluid={data.diamonds.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blackBox"></div>
            <div className="blackBox overlay"></div>
        </div>
    )
}

export default AboutSection