import React from "react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div);
const Section = ({ children, delay = 0, duration = 1 }) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: duration, delay: delay, type: "spring" },
      }}
      exit={{
        y: -20,
        opacity: 0,
        transition: { duration: duration, delay: delay, type: "spring" },
      }}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
