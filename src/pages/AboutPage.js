import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";

import ImageOne from "../assets/images/img-1.png";
import ImageTwo from "../assets/images/img-2.png";
import ImageThree from "../assets/images/img-3.png";

export default function About() {
  return (
    <>
      <Header />
      <Section>
        <Title>ABOUT</Title>
        <Row>
          <Image src={ImageOne} alt="" />
          <Description>
            Vaksinasi adalah pemberian Vaksin dalam rangka menimbulkan atau
            meningkatkan kekebalan seseorang secara aktif terhadap suatu
            penyakit, sehingga apabila suatu saat terpajan dengan penyakit
            tersebut tidak akan sakit atau hanya mengalami sakit ringan dan
            tidak menjadi sumber penularan.
          </Description>
        </Row>
        <RowReverse>
          <Image src={ImageTwo} alt="" />
          <DescriptionReverse>
            Pelayanan vaksinasi COVID-19 dilaksanakan di Fasilitas Pelayanan
            Kesehatan milik Pemerintah Pusat, Pemerintah Daerah Provinsi,
            Pemerintah Daerah Kabupaten/Kota atau milik masyarakat/swasta yang
            memenuhi persyaratan
          </DescriptionReverse>
        </RowReverse>
        <Row>
          <Image src={ImageThree} alt="" />
          <Description>
            Upaya-upaya pengadaan vaksin ini dilakukan melalui perjanjian
            bilateral dan perjanjian multilateral seperti COVAX Facility bersama
            GAVI dan WHO, ataupun donasi yang diberikan oleh negara-negara
            sahabat. Ada 6 jenis vaksin COVID-19 yang akan digunakan di
            Indonesia, yakni Sinovac, AstraZeneca, Sinopharm, Moderna, Pfizer,
            dan Novavax.
          </Description>
        </Row>
      </Section>
      <Footer />
    </>
  );
}

const Section = styled.div`
  margin: 50px 20px 50px 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const RowReverse = styled(Row)`
  flex-direction: row-reverse;
`;

const Image = styled.img`
  width: 300px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
`;

const Description = styled.p`
  width: 600px;
`;

const DescriptionReverse = styled(Description)`
  text-align: end;
`;

const Title = styled.h1`
  margin: auto;
  width: 36px;
`;
