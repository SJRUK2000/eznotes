import styled from '@emotion/styled';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
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
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ScrollButton = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #e0e0e0;
  }

  &:focus {
    outline: 2px solid #007bff;
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