import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageOne from "../assets/images/img-1.jpg";
import ImageTwo from "../assets/images/img-2.jpg";
import ImageThree from "../assets/images/img-3.jpg";

export default function About() {
  return (
    <>
      {/* <Header /> */}
      <Section>
        <Row>
          <Image src={ImageOne} alt="" />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et dignissim risus. Aliquam at dignissim diam, vitae convallis
            dolor. Nam ligula eros, ullamcorper ut posuere sed, vulputate in
            metus. Sed eget tellus lacus.
          </Description>
        </Row>
        <RowReverse>
          <Image src={ImageTwo} alt="" />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et dignissim risus. Aliquam at dignissim diam, vitae convallis
            dolor. Nam ligula eros, ullamcorper ut posuere sed, vulputate in
            metus. Sed eget tellus lacus.
          </Description>
        </RowReverse>
        <Row>
          <Image src={ImageThree} alt="" />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et dignissim risus. Aliquam at dignissim diam, vitae convallis
            dolor. Nam ligula eros, ullamcorper ut posuere sed, vulputate in
            metus. Sed eget tellus lacus.
          </Description>
        </Row>
      </Section>
      {/* <Footer /> */}
    </>
  );
}

const Section = styled.div`
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const RowReverse = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: row-reverse;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  margin: 30px;
  border-radius: 20px;
`;

const Description = styled.p`
  width: 600px;
`;
