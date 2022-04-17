import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import SectionCard from "../components/SectionCard";
import { FaHardHat } from "react-icons/fa";

export default function Projects() {
  return (
    <Container p={0}>
      <Box height={"30px"}></Box>
      <SectionCard>
        <Text fontWeight={500}>
          <FaHardHat /> <br />
          Work In Progress
        </Text>
      </SectionCard>
    </Container>
  );
}
