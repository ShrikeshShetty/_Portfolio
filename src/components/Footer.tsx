import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #888;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <Copyright>
          © {currentYear} Shrikesh Shetty. All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
