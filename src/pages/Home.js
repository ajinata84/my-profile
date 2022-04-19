import React from "react";
import SectionCard from "../components/SectionCard";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { Text, Box, Container, Center, useColorMode } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container p={0}>
      <Box height={"30px"}></Box>
      <SectionCard title="About" delay={0.3}>
        <Text fontWeight={500}>
          Anda bisa memanggil saya Aji, saya berdomisili di kota Malang, Jawa
          Timur. Fresh Graduate dari SMK Telkom Malang. <br />
          <br />
          Saya bermotivasi untuk membuat app melalui framework ReactJS dan juga
          bisa membuat REST Api menggunakan NodeJS dan Express, tidak hanya
          membuat aplikasi saja, saya juga dapat mendesain aplikasi juga.
        </Text>
      </SectionCard>
      <MyButton />
      <SectionCard title="Bio" delay={0.4}>
        <div
          style={{
            fontWeight: 500,
            display: "list-item",
            listStyle: "none",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span>2005</span>
            <span style={{ marginLeft: "10px", fontWeight: 400 }}>
              Lahir di kota Malang, Jawa Timur
            </span>
          </div>
          <br />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <span>2021 Juli - September</span>
            <span style={{ marginLeft: "10px", fontWeight: 400 }}>
              Magang sebagai anggota Tim Validasi ODP Telkom Daerah Malang Kota
            </span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span>2022</span>
            <span style={{ marginLeft: "10px", fontWeight: 400 }}>
              Lulus sebagai siswa SMK Telkom Malang jurusan Rekayasa Perangkat
              Lunak
            </span>
          </div>
        </div>
      </SectionCard>
      <SectionCard title="Expertise" delay={0.5}>
        <div
          style={{
            fontWeight: 500,
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span>ReactJS</span>
            <span style={{ marginLeft: "10px", fontWeight: 400 }}>
              Chakra-UI, Bootstrap, Framer-Motion
            </span>
          </div>
          <br />
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span>NodeJS</span>
            <span style={{ marginLeft: "10px", fontWeight: 400 }}>
              Express, MySQL, Sequelize
            </span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span>Design</span>
            <span style={{ marginLeft: "10px", fontWeight: 400 }}>
              Figma, Photoshop
            </span>
          </div>
        </div>
      </SectionCard>
      <SectionCard title="Hobi Saya 💛" delay={0.6}>
        <Text fontWeight={500}>
          Sadboy 💔, Bersepeda 🚴‍♀️, Mendengarkan Musik 🎧, Ngoding 💻, Bermain 🎮
        </Text>
      </SectionCard>
      <SectionCard title="Sertifikasi" delay={0.7}>
        <div
          style={{
            fontWeight: 500,
          }}
        >
          <ul>
            <li
              key={1}
              style={{
                display: "list-item",
                alignItems: "center",
                listStyle: "none",
              }}
            >
              <span>Oracle Academy</span>
              <span style={{ marginLeft: "10px", fontWeight: 400 }}>
                Java Foundations & Fundamentals
              </span>
            </li>
            <li
              style={{
                display: "list-item",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
                listStyle: "none",
              }}
            >
              <span>MTA</span>
              <span style={{ marginLeft: "10px", fontWeight: 400 }}>
                Programming With Javascript
              </span>
            </li>
            <li
              style={{
                display: "list-item",
                alignItems: "center",
                listStyle: "none",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <span>TOEIC - 2020</span>
              <span style={{ marginLeft: "10px", fontWeight: 400 }}>765</span>
            </li>
            <li
              style={{
                display: "list-item",
                alignItems: "center",
                listStyle: "none",
              }}
            >
              <span>TOEFL - 2021 </span>
              <span style={{ marginLeft: "10px", fontWeight: 400 }}>-</span>
            </li>
          </ul>
        </div>
      </SectionCard>
      <SectionCard title="Media Sosial" delay={0.8}>
        <div
          style={{
            fontWeight: 500,
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <VscGithub size={"25px"} />
            <span style={{ marginLeft: "10px" }}>@ajinata84</span>
          </div>
          <br />
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <AiOutlineInstagram size={"25px"} />
            <span style={{ marginLeft: "10px" }}>@ajinata84</span>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
}

const MyButton = () => {
  const { colorMode } = useColorMode();

  return (
    <Center>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.2, type: "spring" },
        }}
        exit={{
          y: -20,
          opacity: 0,
          transition: { duration: 1, delay: 0.2, type: "spring" },
        }}
      >
        <NavLink to={"/projects"}>
          <Box
            bg={colorMode === "light" ? "#97baff" : "#2B3E66"}
            transition="150ms"
            _hover={{
              background: colorMode === "light" ? "#2F5198" : "#2F5198",
            }}
            mt={"20px"}
            justifyContent="center"
            display={"flex"}
            borderRadius="2px"
          >
            <Text fontWeight={500} color={"white"} my="5px" mx="30px">
              Projek Saya
            </Text>
          </Box>
        </NavLink>
      </motion.div>
    </Center>
  );
};
