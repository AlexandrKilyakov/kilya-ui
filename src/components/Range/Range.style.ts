import styled, { css } from "styled-components";
import { theme } from "../../styles";
import Input from "../Input";

const RangeContainer = styled.div`
  user-select: none;
  margin-bottom: 1.25rem;
`;

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

const RangeBody = styled.label<{ $hasSteps?: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  ${({ $hasSteps }) =>
    $hasSteps &&
    css`
      display: grid;
    `}
`;

// Контейнер для шагов с сеткой
const RangeStepContainer = styled.div<{ $stepsCount: number }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $stepsCount }) => $stepsCount}, 1fr);
  gap: 0.25rem;
  overflow: hidden;
  padding-top: 1.5rem;

  // Скрываем последний шаг на мобильных, если их много
  @media (max-width: 30rem) {
    .range-step-number:last-child {
      display: none;
    }
  }
`;

const RangeNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  letter-spacing: 0em;
  font-size: 0.75rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.text};
  transition: color 0.2s ease-in-out;
  user-select: none;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    color: ${theme.colors.hover.bgPrimary};
  }

  &:active {
    color: ${theme.colors.pressed.bgPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focused.bgPrimary};
    outline-offset: 2px;
  }
`;

const RangeStepNumber = styled.span<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  letter-spacing: 0em;
  font-size: 0.75rem;
  font-family: ${theme.typography.fontFamily};
  color: ${({ $isActive }) =>
    $isActive ? theme.colors.bgPrimary : theme.colors.text};
  transition: all 0.2s ease-in-out;
  user-select: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  &:hover {
    color: ${theme.colors.hover.bgPrimary};
  }

  &:active {
    color: ${theme.colors.pressed.bgPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focused.bgPrimary};
    outline-offset: 2px;
  }

  &:first-of-type {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

const RangeStepInput = styled(Input)`
  grid-column: 1/-1;
`;

export {
  RangeContainer,
  Header,
  Title,
  Calculation,
  RangeBody,
  RangeNumber,
  RangeStepContainer,
  RangeStepNumber,
  RangeStepInput,
};
