// Libraries
import React from "react";
// Components
import Main from "../components/Main/Main";
import HomeText from "../components/HomeText/HomeText";
import HomeBtn from "../components/HomeBtn/HomeBtn";

function Home(): React.ReactElement {
  return (
    <Main>
      <HomeText />
      <HomeBtn />
    </Main>
  );
}

export default Home;
