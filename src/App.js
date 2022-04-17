import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Box, Center, useColorMode } from "@chakra-ui/react";
import MainSection from "./pages/MainSection";

export default function App() {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Box height={"40px"}></Box>
        <Center>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            className="maincontainer"
            style={{
              position: "fixed",
              zIndex: -1,
              background: colorMode === "light" ? "#F6F6F6" : "#273247",
              width: 650,
            }}
          >
            <Container
              justifySelf={"center"}
              className="maincontainer"
              flexDirection={"column"}
              bg={colorMode === "light" ? "#F6F6F6" : "#273247"}
              zIndex={-1}
              position={"fixed"}
            ></Container>
          </motion.div>
          <Container
            p={"5px"}
            margin={"40px"}
            mt={0}
            alignItems={"start"}
            alignSelf={"center"}
            display="flex"
            flexDirection={"column"}
          >
            <MainSection />
            <div>
              <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </div>
          </Container>
        </Center>
      </AnimatePresence>
    </>
  );
}
