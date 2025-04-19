import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { IconComponent } from './IconComponent';

const EducationSection = styled.section`
  padding: 100px 0;
  background: #010606;
`;

const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #15cdfc;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: #15cdfc;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media screen and (max-width: 768px) {
      left: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;

  &:nth-child(odd) {
    left: 0;
  }
  &:nth-child(even) {
    left: 50%;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 10px 20px;

    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  word-wrap: break-word;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #15cdfc;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const TimelineSchool = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TimelineYear = styled.p`
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const TimelineScore = styled.p`
  color: #fff;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <EducationContainer>
        <Title>Education</Title>
        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TimelineContent>
              <TimelineTitle>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                  <IconComponent icon={FaGraduationCap} />
                </div>
                Bachelor of Science in Computer Science
              </TimelineTitle>
              <TimelineSchool>Pillai College of Arts, Commerce and Science</TimelineSchool>
              <TimelineYear>2023 – Present</TimelineYear>
              <TimelineScore>SGPA: 9.45, 9.55, 9.14</TimelineScore>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TimelineContent>
              <TimelineTitle>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                  <IconComponent icon={FaGraduationCap} />
                </div>
                HSC – PCM with IT
              </TimelineTitle>
              <TimelineSchool>Changu Kana Thakur College</TimelineSchool>
              <TimelineYear>2022</TimelineYear>
              <TimelineScore>Score: 64% | IT Marks: 81/100</TimelineScore>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;
