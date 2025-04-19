import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconComponent } from './IconComponent';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  padding: 80px 20px;

  @media screen and (max-width: 768px) {
    padding: 100px 20px 40px;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #000 30%, transparent 70%);
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(#15cdfc11 1px, transparent 1px),
    linear-gradient(90deg, #15cdfc11 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 3;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
`;

const TextContent = styled.div``;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.1;

  span {
    color: #15cdfc;
    display: block;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 0;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 30px;
  line-height: 1.6;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin: 0 auto 30px;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #15cdfc;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    z-index: -1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    filter: grayscale(30%);
    object-fit: contain;
    
    @media screen and (max-width: 768px) {
      max-height: 400px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;



const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroBackground>
        <img src="./images/hero-bg-dark.jpg" alt="Background" />
      </HeroBackground>
      <GridOverlay />
      <HeroContent>
        <ContentWrapper>
          <TextContent>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span><b>Shrikesh Uday Shetty</b></span>
            </Title>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{fontSize:"40px"}}>Full Stack Developer</h1>
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I create elegant solutions to complex problems, specializing in full-stack
              development with modern technologies.
            </Subtitle>
            <SocialLinks
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SocialLink
                href="https://github.com/ShrikeshShetty"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconComponent icon={FaGithub} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/shrikesh-shetty-3a6695295/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconComponent icon={FaLinkedin} />
              </SocialLink>
              <SocialLink
                href="mailto:shrikeshshetty1234@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconComponent icon={FaEnvelope} />
              </SocialLink>
            </SocialLinks>
          </TextContent>
          <ImageWrapper
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src="./images/profile.jpg" alt="Profile" />
          </ImageWrapper>
        </ContentWrapper>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
