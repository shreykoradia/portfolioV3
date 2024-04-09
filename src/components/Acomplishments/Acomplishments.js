import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 3,
    text: "Open Source Projects Contributed from Scratch ",
  },
  {
    number: 2,
    text: "Postion at Masters-app Hackathon at national level by GIT",
  },
  { number: 4, text: "Position at GDSC Hackathon At Amity University" },
  { number: 1, text: "Finalist at Smart India Hackathon'22 " },
  { number: "12K+", text: "Readers on Blog, Monthly 3K+ Readers on Dev.to " },
  {
    number: "300+⬇️",
    text: "React Menu Portal, a package wrapper for React-Select",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
