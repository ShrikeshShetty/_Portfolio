import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaHandsHelping } from 'react-icons/fa';

const ExtraCurricularSection = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 50px;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  padding: 30px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ActivityLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 15px;
  object-fit: cover;
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const ActivityContent = styled.div`
  color: ${({ theme }) => theme.text};
`;

const BulletList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;

  li {
    margin-bottom: 8px;
  }
`;

const ExtraCurricular: React.FC = () => {
  return (
    <ExtraCurricularSection id="extracurricular">
      <Container>
        <Title>Extra Curricular Activities</Title>
        <ActivitiesGrid>
          <ActivityCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ActivityHeader>
              <ActivityLogo src="./images/msa-logo.jpg" alt="MSA Logo" />
              <ActivityTitle>Mathematics And Statistics Association</ActivityTitle>
            </ActivityHeader>
            <ActivityContent>
              <strong>Technical Team Head - Navi Mumbai, Panvel</strong>
              <BulletList>
                <li>Handling Technical Activities (Webinars, Seminars)</li>
                <li>Mailing Activities such as Providing Certificates for Attendees</li>
                <li>Software Handling</li>
                <li>Organizing Meets</li>
              </BulletList>
            </ActivityContent>
          </ActivityCard>

          <ActivityCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ActivityHeader>
              <ActivityLogo src="./images/robin-hood-logo.png" alt="Robin Hood Army Logo" style={{height:"30px",width:"150px",borderRadius:"0px"}} />
              <ActivityTitle>Robin Hood Army Collaboration</ActivityTitle>
            </ActivityHeader>
            <ActivityContent>
              <strong>Social Activity - 30 hours</strong>
              <BulletList>
                <li>Visiting Slum areas and spending time with residents</li>
                <li>Conducting Teaching Sessions for children facing financial barriers to education</li>
                <li>Organizing Sports Sessions to develop interest in sports</li>
                <li>Providing Food Facility</li>
              </BulletList>
            </ActivityContent>
          </ActivityCard>
        </ActivitiesGrid>
      </Container>
    </ExtraCurricularSection>
  );
};

export default ExtraCurricular;
