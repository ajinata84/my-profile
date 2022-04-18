import React from "react";
import Section from "./Section";
import { Container, Heading, Box, useColorMode } from "@chakra-ui/react";

export default function SectionCard({ children, title, delay = 0 }) {
  const { colorMode } = useColorMode();

  return (
    <Section duration={0.3} delay={delay}>
      <Container alignItems={"start"} flexDirection={"column"} flex={1}>
        <Heading
          size={"md"}
          as="h4"
          fontWeight={500}
          my={title ? "15px" : "0px"}
        >
          {title}
        </Heading>
        <Box
          display="flex"
          bg={colorMode === "light" ? "white" : "#1A202C"}
          p="20px"
          borderRadius={"3px"}
        >
          {children}
        </Box>
      </Container>
    </Section>
  );
}
