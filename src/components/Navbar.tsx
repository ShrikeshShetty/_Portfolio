import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon, FaFileAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Resume from './Resume';

const Nav = styled.nav`
  background: ${({ theme }) => theme.navBackground};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const NavMenu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    background: ${({ theme }) => theme.navBackground};
    transition: all 0.3s ease;
    padding: 40px 0;
    gap: 40px;
    margin-left: 0;
  }
`;

const NavLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

const ResumeButton = styled.button`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  return (
    <>
      <Nav>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu $isOpen={isOpen}>
          <NavLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={closeMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={-80}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <ResumeButton onClick={() => setShowResume(true)}>
            <FaFileAlt /> Resume
          </ResumeButton>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavMenu>
      </Nav>
      <AnimatePresence>
        {showResume && <Resume isOpen={showResume} onClose={() => setShowResume(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
