import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  padding: 0 20px;
`;

interface FilterButtonProps {
  $isActive: boolean;
}

const FilterButton = styled(motion.button)<FilterButtonProps>`
  padding: 10px 20px;
  border-radius: 25px;
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.primary : theme.cardBackground};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.background : theme.text};
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    transform: translateY(-2px);
  }
`;

export type ProjectFilter = 'All' | 'Frontend' | 'Backend' | 'Full Stack' | 'Python' | 'Java' | 'PHP';

interface ProjectFiltersProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ activeFilter, onFilterChange }) => {
  const filters: ProjectFilter[] = ['All', 'Python', 'Java', 'PHP'];

  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          $isActive={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default ProjectFilters;
