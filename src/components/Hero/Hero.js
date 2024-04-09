import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          SHREY KORADIA <br />
          SDE-1
        </SectionTitle>
        <SectionText>
          Sometimes I write code , mostly it is shitty at first glance but it
          does wonder though when it renders; mostly it looks good after
          iterations. I know I know, your are keen to know What do I do mainly, most
          of my time goes in developing products in React codebase from scratch (
          :/ I hope it was true, but I also debug applications a lot when I
          write test-cases and storybook)
          <br />I am SDE-1 Frontend @radicalloop, Where I practically work in
          React.js && Nextjs, but I also do backend developmnet in Node.js &&
          Express.js also develop some rest api's in Django Rest Framework.
          <br />A Mixed Reality and Cyber Enthusiast, building products from
          scratch
        </SectionText>
        <Button onClick={props.handleClick}>Show More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
