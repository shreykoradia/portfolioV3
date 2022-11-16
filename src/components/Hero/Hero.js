import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        SHREY KORADIA <br />
          Full Stack  Developer
        </SectionTitle>
        <SectionText>
       Hello World! , I am SHREY a Fourth Year UnderGrad at GTU from India , I love creating stuff for web and also i am cybersecurity, AI and Mixed Reality enthusiast
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;