import styled from '@emotion/styled';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled.button`
  position: relative;
  width: 56px;
  height: 28px;
  border-radius: 14px;
  background: ${props => props.theme === 'dark' ? '#365475' : '#87CEEB'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  padding: 2px;
  border: none;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
  }
`;

const Slider = styled.div<{ isDark: boolean }>`
  position: absolute;
  left: ${props => props.isDark ? '30px' : '2px'};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.isDark ? '#1a1a1a' : '#ffffff'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const IconContainer = styled.div<{ isDark: boolean }>`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 6px;
  color: ${props => props.isDark ? '#ffffff' : '#000000'};
  font-size: 14px;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      theme={theme}
    >
      <IconContainer isDark={theme === 'dark'}>
        <FaSun />
        <FaMoon />
      </IconContainer>
      <Slider isDark={theme === 'dark'} />
    </ToggleButton>
  );
};

export default ThemeToggle; 