import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaCalendar, FaPhone, FaMapMarker, FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const AboutSection = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.background};

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 474px) 1fr;
  gap: 60px;
  align-items: start;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  max-width: 474px;
  height: auto;
  aspect-ratio: 474/526;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    max-width: 400px;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const PersonalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    flex-shrink: 0;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
    gap: 10px;
  }
`;

const InfoContent = styled.div`
  flex: 1;
  min-width: 0; // Prevents text overflow
`;

const InfoLabel = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-bottom: 4px;
`;

const InfoValue = styled.span`
  display: block;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  word-break: break-word; // Ensures long text wraps properly
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow};

  h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }
`;

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(value * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    controls.start({ opacity: 1 });
    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, controls]);

  return <span>{count}+</span>;
};

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <Title>About Me</Title>
        <ContentWrapper>
          <ImageWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="./images/profile-about.png" alt="Profile" />
          </ImageWrapper>
          <InfoWrapper>
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              I'm a passionate Computer Science student with a strong foundation in full-stack development. 
              I love building web applications and solving complex problems through code. 
              My journey in tech has equipped me with diverse skills in both frontend and backend technologies.
            </Description>
            
            <PersonalInfo>
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaCalendar />
                <InfoContent>
                  <InfoLabel>Birthday</InfoLabel>
                  <InfoValue>March 9, 2006</InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaPhone />
                <InfoContent>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue>+91 7045332855</InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaMapMarker />
                <InfoContent>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>Harigram, Panvel, Navi Mumbai, India</InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FaGraduationCap />
                <InfoContent>
                  <InfoLabel>Degree</InfoLabel>
                  <InfoValue>B.Sc Computer Science</InfoValue>
                </InfoContent>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <MdEmail />
                <InfoContent>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>shrikeshshetty1234@gmail.com</InfoValue>
                </InfoContent>
              </InfoItem>
            </PersonalInfo>

            <Stats>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3><AnimatedNumber value={10} /></h3>
                <p>Projects</p>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3><AnimatedNumber value={10} /></h3>
                <p>Technologies</p>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <h3><AnimatedNumber value={2} /></h3>
                <p>Years Coding</p>
              </StatItem>
            </Stats>
          </InfoWrapper>
        </ContentWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
