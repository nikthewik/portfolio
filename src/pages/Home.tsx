// Libraries
import React from "react";
import { Helmet } from "react-helmet";
// Components
import Main from "../components/Main/Main";
import HomeText from "../components/HomeText/HomeText";
// Images
import Preview from "../assets/img/preview-portfolio.jpg";

function Home(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>NikTheWik | Developer</title>
        {/* OPEN GRAPH PROTOCOL */}
        {/* Facebook */}
        <meta property="og:url" content="https://nikthewik.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NikTheWik | Developer" />
        <meta
          property="og:description"
          content="My portfolio site to show my skills and projects as a developer."
        />
        <meta property="og:image:secure_url" content={Preview} />
        <meta
          property="og:image:alt"
          content="Homepage of NikTheWik's portfolio"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nikthewik.netlify.app" />
        <meta property="twitter:url" content="https://nikthewik.netlify.app/" />
        <meta name="twitter:title" content="NikTheWik | Developer" />
        <meta
          name="twitter:description"
          content="My portfolio site to show my skills and projects as a developer."
        />
        <meta name="twitter:image" content={Preview} />
      </Helmet>
      <Main isCenter>
        <HomeText />
      </Main>
    </>
  );
}

export default Home;
