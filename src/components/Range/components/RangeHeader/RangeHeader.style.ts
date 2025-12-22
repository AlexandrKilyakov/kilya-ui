import styled from "styled-components";
import { theme } from "../../../../styles";

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.span`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  font-weight: ${theme.typography.label.fontWeight};
  color: ${theme.colors.text};
  margin-right: auto;
  flex-shrink: 0;
`;

const Calculation = styled.span`
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.label.fontSize};
  font-weight: ${theme.typography.label.fontWeight};
  color: ${theme.colors.text};
  opacity: 0.7;
  flex-shrink: 0;
`;

export { Header, Title, Calculation };
