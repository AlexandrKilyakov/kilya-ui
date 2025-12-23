import styled, { css, keyframes } from "styled-components";
import { theme } from "../../styles";

const dropdownAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const dropdownDisappear = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
`;

const dropupAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const dropupDisappear = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(0.5rem);
  }
`;

export const SelectContainer = styled.div<{ $disabled?: boolean }>`
  position: relative;
  width: 100%;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const SelectButton = styled.button<{ $isOpen?: boolean }>`
  font-family: ${theme.select.typography.fontFamily};
  font-size: ${theme.select.typography.fontSize};
  font-weight: ${theme.select.typography.fontWeight};
  line-height: ${theme.select.typography.lineHeight};
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${theme.select.colors.backgroundColor};
  color: ${theme.select.colors.text};
  border: 0.0625rem solid ${theme.select.colors.borderColor};
  border-radius: ${theme.select.radius};
  padding: ${theme.select.padding};
  gap: ${theme.select.gap};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.select.colors.hover.borderColor};
    background-color: ${theme.select.colors.hover.backgroundColor};
  }

  &:focus {
    outline: none;
    border-color: ${theme.select.colors.focus.borderColor};
    box-shadow: ${theme.select.colors.focus.shadow};
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      position: relative;
      z-index: 10;
      border-color: ${theme.select.colors.focus.borderColor};

      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const SelectDropdown = styled.ul<{
  $direction: "top" | "bottom";
  $isActive: boolean;
  $isAnimating: boolean;
  $maxHeight?: string;
}>`
  list-style: none;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  ${({ $direction }) =>
    $direction === "top"
      ? "bottom: calc(100% + 0.5rem);"
      : "top: calc(100% + 0.5rem);"}

  display: flex;
  flex-direction: column;
  background-color: ${theme.dropdown.colors.backgroundColor};
  border: 0.0625rem solid ${theme.dropdown.colors.borderColor};
  border-radius: ${theme.select.radius};
  box-shadow: ${theme.dropdown.colors.shadow};

  max-height: ${({ $maxHeight }) => $maxHeight || "50vh"};
  overflow-y: auto;
  z-index: 20;

  ${({ $direction, $isActive, $isAnimating }) => {
    if (!$isAnimating) return "";

    if ($direction === "top") {
      return $isActive
        ? css`
            animation: ${dropupAppear} 0.1s ease-out forwards;
          `
        : css`
            animation: ${dropupDisappear} 0.1s ease-in forwards;
          `;
    } else {
      return $isActive
        ? css`
            animation: ${dropdownAppear} 0.1s ease-out forwards;
          `
        : css`
            animation: ${dropdownDisappear} 0.1s ease-in forwards;
          `;
    }
  }}
`;

export const SelectOption = styled.li<{ $isSelected?: boolean }>`
  font-family: ${theme.select.typography.fontFamily};
  font-size: 0.875rem;
  font-weight: ${theme.select.typography.fontWeight};
  line-height: ${theme.select.typography.lineHeight};
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 0.0625rem solid ${theme.select.colors.option.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${theme.select.colors.hover.option.backgroundColor};
    color: ${theme.select.colors.hover.option.color};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${theme.select.colors.option.selected.backgroundColor};
      color: ${theme.select.colors.option.selected.color};
      font-weight: var(--option-selected-font-weight, 500);
    `}
`;

export const SelectContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

export const SelectImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  object-fit: cover;
`;

export const ArrowIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  path {
    stroke: currentColor;
  }
`;
