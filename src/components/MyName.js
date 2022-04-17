import React from "react";
import { motion } from "framer-motion";
import { Box, Stack, Container } from "@chakra-ui/react";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function MyName() {
  return (
    <>
      <Container justifyContent={{ base: "center", md: undefined }} my="23px">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: undefined }}
        >
          <Box maxHeight={{ base: "80px", md: "80px" }} overflow="hidden">
            <motion.span
              className="myname first"
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.04,
                  staggerDirection: 1,
                },
              }}
            >
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.6 },
                }}
              >
                P
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.45 },
                }}
              >
                r
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.3 },
                }}
              >
                a
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.15 },
                }}
              >
                s
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition },
                }}
              >
                h
              </motion.span>
            </motion.span>
          </Box>
          <Box maxHeight={{ base: "80px", md: "80px" }} overflow="hidden">
            <motion.span className="myname last">
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition },
                }}
              >
                A
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.1 },
                }}
              >
                j
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.2 },
                }}
              >
                i
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.3 },
                }}
              >
                n
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.4 },
                }}
              >
                a
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.5 },
                }}
              >
                t
              </motion.span>
              <motion.span
                className="myname"
                initial={{ y: 80 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ...transition, delay: 0.6 },
                }}
              >
                a
              </motion.span>
            </motion.span>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
