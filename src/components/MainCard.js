import React from "react";
import { Box, Container } from "@chakra-ui/react";
import CattoImg from "../assets/images/catto.png";
import Section from "./Section";

export default function MainCard() {
  return (
    <Section duration={1} delay={0.3}>
      <Container>
        <Box>
          <img src={CattoImg} alt="" />
        </Box>
        <span className="jobku">ReactJS / NodeJS Developer</span>
      </Container>
    </Section>
  );
}
