import React from "react";
import { Container } from "@chakra-ui/react";
import SectionCard from "../components/SectionCard";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  return (
    <Container p={0}>
      <SectionCard title={"Kontak Saya"}>
        <div
          style={{
            fontWeight: 500,
            display: "list-item",
            listStyle: "none",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <BsWhatsapp size={"25px"} />
            <span style={{ marginLeft: "10px" }}>+(62) 8510-5686-313</span>
          </div>
          <br />
          <br />
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <SiGmail size={"25px"} />
            <span style={{ marginLeft: "10px" }}>ajinata89@gmail.com</span>
          </div>
          <br />
          <br />
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <GoLocation size={"25px"} />
            <span style={{ marginLeft: "10px" }}>Malang, Jawa Timur</span>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
}
