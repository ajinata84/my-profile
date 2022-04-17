import React from "react";
import { Box, Image, Container } from "@chakra-ui/react";
import Section from "./Section";

export default function MainCard() {
  return (
    <Section duration={1} delay={0.3}>
      <Container>
        <Box>
          <Image src="/catto.png"></Image>
        </Box>
        <span className="jobku">ReactJS / NodeJS Developer</span>
      </Container>
    </Section>
  );
}
