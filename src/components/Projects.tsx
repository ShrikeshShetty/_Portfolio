import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaCode, FaPause } from 'react-icons/fa';
import ProjectFilters, { ProjectFilter } from './ProjectFilters';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};
  position: relative;
`;

const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 60px;
`;

const ProjectsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const ProjectCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
  
  &:nth-child(even) {
    grid-template-columns: 0.8fr 1.2fr;
    
    @media (max-width: 968px) {
      grid-template-columns: 1fr;
    }
    
    .project-content {
      order: -1;
      
      @media (max-width: 968px) {
        order: 0;
      }
    }
  }
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`;

const PlayButtonOverlay = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  border: none;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  
  svg {
    font-size: 24px;
    margin-left: 4px;
  }
`;

const VideoOverlay = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${props => props.$isPlaying ? 0 : 0.3});
  transition: background 0.3s ease;
  cursor: pointer;
  z-index: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const TechBadge = styled.span`
  padding: 8px 16px;
  background: rgba(21, 205, 252, 0.1);
  color: ${({ theme }) => theme.primary};
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ViewCodeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.primary};
  color: #000;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  
  svg {
    font-size: 18px;
  }
`;

interface ProjectProps {
  videoId: string;
  title: string;
  category: ProjectFilter;
  githubUrl: string;
}

const Project: React.FC<ProjectProps> = ({ videoId, title, category, githubUrl }) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getTechStack = (title: string) => {
    if (title.toLowerCase().includes('php')) return ['PHP', 'MySQL', 'HTML', 'CSS'];
    if (title.toLowerCase().includes('jsp')) return ['JSP', 'Servlet', 'MySQL', 'Java'];
    if (title.toLowerCase().includes('python')) return ['Python', 'Tkinter', 'SQLite'];
    return ['HTML', 'CSS', 'JavaScript'];
  };

  const handlePlay = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo' }),
        '*'
      );
      setIsPlaying(true);
    }
  };

  const handleViewCode = () => {
    window.open(githubUrl, '_blank');
  };

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <VideoContainer>
        <VideoWrapper>
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&showinfo=0&enablejsapi=1&controls=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <VideoOverlay $isPlaying={isPlaying} onClick={handlePlay} />
          {!isPlaying && (
            <PlayButtonOverlay
              onClick={handlePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlay />
            </PlayButtonOverlay>
          )}
        </VideoWrapper>
      </VideoContainer>
      <div className="project-content">
        <ProjectTitle>{title}</ProjectTitle>
        <TechStack>
          {getTechStack(title).map((tech, index) => (
            <TechBadge key={index}>{tech}</TechBadge>
          ))}
        </TechStack>
        <ViewCodeButton
          onClick={handleViewCode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCode /> View Code
        </ViewCodeButton>
      </div>
      <AnimatePresence>
        {showFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullscreen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
          >
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setShowFullscreen(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              <FaTimes />
            </motion.button>
            <iframe
              width="90vw"
              height="80vh"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ProjectCard>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const projects: ProjectProps[] = [
    { 
      videoId: '5vnG8m-a1Cs',
      title: 'Online Examination System using php and mysql',
      category: 'PHP',
      githubUrl: 'https://github.com/ShrikeshShetty/Major-Project-Online-Examination-System.'
    },
    { 
      videoId: '4itE09G3Q64',
      title: 'Drug Store Management System using jsp, servlet and mysql',
      category: 'Java',
      githubUrl: 'https://github.com/ShrikeshShetty/Pharmacy-Drug-Mangement-System'
    },
    { 
      videoId: 'HkhvCMPXL20',
      title: 'Cab Booking System using jsp and plsql',
      category: 'Java',
      githubUrl: 'https://github.com/ShrikeshShetty/Cab-Booking'
    },
    { 
      videoId: 'qZ81iMLvVBo',
      title: 'First Website: Automatic Quote Generator using html,css and javascript',
      category: 'Frontend',
      githubUrl: 'https://github.com/ShrikeshShetty/Quote-Generator'
    },
    { 
      videoId: 'qDQjLhunwG0',
      title: 'Portfolio Manager using python',
      category: 'Python',
      githubUrl: 'https://github.com/ShrikeshShetty/Portfolio-Manager'
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <Title>Featured Projects</Title>
        <ProjectFilters 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
        <ProjectsWrapper
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <Project
                key={project.title}
                {...project}
              />
            ))}
          </AnimatePresence>
        </ProjectsWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
