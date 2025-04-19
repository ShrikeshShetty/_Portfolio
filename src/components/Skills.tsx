import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaNpm, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaJava } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiPython, SiPhp } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.background};

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 20px;
  }
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  padding: 25px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 480px) {
    margin-bottom: 3px;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 120px;

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primary};
    flex-shrink: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
    min-width: 100px;

    svg {
      font-size: 1.1rem;
    }
  }
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  min-width: 45px;
  text-align: right;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    min-width: 40px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 6px;
  }
`;

const Progress = styled(motion.div)<{ $level: number }>`
  height: 100%;
  background: ${({ theme }) => theme.primary};
  width: ${({ $level }) => $level}%;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 50 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'JavaScript', icon: <FaJsSquare />, level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 65 },
        { name: 'Express.js', icon: <SiExpress />, level: 50 },
        { name: 'Python', icon: <SiPython />, level: 75 },
        { name: 'Java', icon: <FaJava />, level: 70 },
        { name: 'PHP', icon: <SiPhp />, level: 65 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'NPM', icon: <FaNpm />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'MySQL', icon: <FaDatabase />, level: 75 }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>My Skills</Title>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryTitle>
                {category.icon}
                {category.title}
              </CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <SkillHeader>
                      <SkillName>
                        {skill.icon}
                        {skill.name}
                      </SkillName>
                      <SkillLevel>{skill.level}%</SkillLevel>
                    </SkillHeader>
                    <ProgressBar>
                      <Progress
                        $level={skill.level}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
