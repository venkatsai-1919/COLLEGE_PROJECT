import React from 'react';
import styled from 'styled-components';
const FooterWrapper = styled.footer`
  background: transparent;
  color: #fff;
  padding: 0.5rem 3rem;  
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s;

  &:hover {
    color: #00ffaa;
  }
`;

const Company = styled.div`
  text-align: center;
  padding-right:5rem;
`;

function Footer() {
  const socialMediaLinks = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <FooterWrapper>
      <SocialLinks>
        {socialMediaLinks.map((link, index) => (
          <SocialLink key={index} href={link.url}>
            {link.name}
          </SocialLink>
        ))}
      </SocialLinks>
      <Company>
        <p> @ 219X1A05A5_VENKATA SAI</p>
      </Company>
    </FooterWrapper>
  );
}

export default Footer;
