import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const ResumeModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ResumeContent = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const ResumeHeader = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.cardBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ResumeViewer = styled.iframe`
  width: 100%;
  height: calc(100% - 70px);
  border: none;
`;

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume: React.FC<ResumeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ResumeModal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ResumeContent
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ResumeHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <DownloadButton 
            href="./resume/Shrikesh Uday Shetty Resume.pdf"
            download="Shrikesh_Shetty_Resume.pdf"
          >
            <FaDownload /> Download Resume
          </DownloadButton>
        </ResumeHeader>
        <ResumeViewer src="./resume/Shrikesh Uday Shetty Resume.pdf" />
      </ResumeContent>
    </ResumeModal>
  );
};

export default Resume;
