import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconComponent } from './IconComponent';

const ContactSection = styled.section`
  padding: 100px 0;
  background: #0a0a0a;
  color: #fff;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #15cdfc;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.2rem;

  &:hover {
    color: #15cdfc;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <Title>Get In Touch</Title>
        <ContactGrid>
          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactLink href="mailto:shrikeshshetty1234@gmail.com">
              <IconComponent icon={FaEnvelope} />
              shrikeshshetty1234@gmail.com
            </ContactLink>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactLink href="https://www.linkedin.com/in/shrikesh-shetty-3a6695295/" target="_blank" rel="noopener noreferrer">
              <IconComponent icon={FaLinkedin} />
              LinkedIn Profile
            </ContactLink>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactLink href="https://github.com/ShrikeshShetty" target="_blank" rel="noopener noreferrer">
              <IconComponent icon={FaGithub} />
              GitHub Profile
            </ContactLink>
          </ContactCard>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
