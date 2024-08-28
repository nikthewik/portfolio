// Libraries
import { Link } from "react-router-dom";
// Components
import Main from "../components/Main/Main";
import HomeText from "../components/HomeText/HomeText";

function Home() {
  return (
    <Main isCentered={false}>
      <HomeText />
      <div>
        <Link to="/aboutme">ENTER THE VOID</Link>
      </div>
    </Main>
  );
}

export default Home;
