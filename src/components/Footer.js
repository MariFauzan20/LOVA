import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>LOVA</FooterLinkTitle>
              <FooterLink to="#">
                We provide vaccine locations to protect us together
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Pages</FooterLinkTitle>
              <FooterLink to="#">Location</FooterLink>
              <FooterLink to="#">About</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Explore Us</FooterLinkTitle>
              <FooterLink to="#">Privacy</FooterLink>
              <FooterLink to="#">Terms & Conditions</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Connect Us</FooterLinkTitle>
              <FooterLink to="#">support@lova.id</FooterLink>
              <FooterLink to="#">021-2208-1996</FooterLink>
              <FooterLink to="#">LOVA, Kemang, Jakarta</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #101522;
`;

const FooterWrap = styled.div`
  padding: 44px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 28px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #0d6efd;
    transition: 0.3s ease-out;
  }
`;
