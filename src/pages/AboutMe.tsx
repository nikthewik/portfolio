// Libraries
import React from "react";
import { Helmet } from "react-helmet";
// Components
import Main from "../components/Main/Main";
import PageText from "../components/PageText/PageText";
import MyPhoto from "../components/MyPhoto/MyPhoto";
import MultiColoredText from "../components/MultiColoredText/MultiColoredText";
import Scrollbar from "../components/Scrollbar/Scrollbar";
// Styles
import "simplebar-react/dist/simplebar.min.css";
import ContactLinks from "../components/ContactLinks/ContactLinks";

function AboutMe(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>About Me | NikTheWik</title>
      </Helmet>
      <Main>
        <Scrollbar>
          <PageText title="About Me">
            <MyPhoto />

            <span>
              Hi,
              <br />
              I'm Nicola Pavoni but you can call me{" "}
              <b>
                <MultiColoredText style={""}>NikTheWik</MultiColoredText>
              </b>
              .
              <br />
              I'm a
              <b>
                <MultiColoredText style={""}>
                  {" "}
                  Front-End Developer{" "}
                </MultiColoredText>
              </b>
              passionate about technology, curious by nature and methodical by
              choice.
            </span>
            <br />
            <span>
              A
              <b>
                <MultiColoredText style={""}> sensible nerd </MultiColoredText>
              </b>
              and a
              <b>
                <MultiColoredText style={""}>
                  {" "}
                  creative tinkerer{" "}
                </MultiColoredText>
              </b>
              with a lot of interests. It's no coincidence that I have a
              background in the film industry as an Assistant Film Editor.
            </span>
            <br />
            <span>
              Today, I leverage my experience and technical studies to develop
              web interfaces that blend
              <b>
                <MultiColoredText style={""}> aesthetics </MultiColoredText>
              </b>
              and
              <b>
                <MultiColoredText style={""}> functionality</MultiColoredText>
              </b>
              .
            </span>
          </PageText>
          <ContactLinks />
        </Scrollbar>
      </Main>
    </>
  );
}

export default AboutMe;
