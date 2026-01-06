import styled from "styled-components";
import { theme } from "../../../../styles";

const RangeStepsStyle = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.25rem;

  .currentStep {
    pointer-events: none;
    color: ${theme.colors.bgPrimary};
  }

  span {
    width: 1.5rem;

    @media (max-width: 425px) {
      &:not(:first-child):not(:last-child) {
        display: none;
      }
    }

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`;

export default RangeStepsStyle;
