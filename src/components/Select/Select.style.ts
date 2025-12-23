import styled, { css, keyframes } from "styled-components";
import { theme } from "../../styles";

const dropdownAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
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
    transform: translateY(-8px);
  }
`;

const dropupAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
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
    transform: translateY(8px);
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
  text-align: start;
  line-height: 1.375;
  font-size: ${theme.typography.button.fontSize};
  font-weight: ${theme.typography.button.fontWeight};
  font-family: ${theme.typography.button.fontFamily};

  width: 100%;
  background-color: ${theme.colors.bgWhite};
  border: 1px solid ${theme.colors.brDefault};
  border-radius: ${theme.radius.input};
  padding: ${theme.padding.button};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  color: ${theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.hover.brDefault};
    background-color: ${theme.colors.hover.bgDefault};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.focused.bgPrimary};
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      position: relative;
      z-index: 10;
      border-color: ${theme.colors.focused.bgPrimary};

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
  margin: 0;
  padding: 0;

  position: absolute;
  left: 0;
  right: 0;
  ${({ $direction }) =>
    $direction === "top"
      ? "bottom: calc(100% + 0.5rem);"
      : "top: calc(100% + 0.5rem);"}

  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bgWhite};
  border: 1px solid ${theme.colors.brDefault};
  border-radius: ${theme.radius.input};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

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
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid ${theme.colors.brDefault};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${theme.colors.hover.bgDefault};
    color: ${theme.colors.hover.link};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${theme.colors.focused.bgDefault};
      color: ${theme.colors.bgPrimary};
      font-weight: 500;
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
  border-radius: 50%;
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
