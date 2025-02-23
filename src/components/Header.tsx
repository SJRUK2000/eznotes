import styled from '@emotion/styled';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ScrollButton = styled.button`
  background: var(--bg-secondary);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-primary);

  &:hover {
    background: var(--bg-hover);
  }

  &:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }
`;

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderContainer>
      <Nav>
        <Title>EzNotes</Title>
        <ButtonGroup>
          <ThemeToggle />
          <ScrollButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <FaArrowUp />
          </ScrollButton>
          <ScrollButton
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            title="Scroll to bottom"
          >
            <FaArrowDown />
          </ScrollButton>
        </ButtonGroup>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 