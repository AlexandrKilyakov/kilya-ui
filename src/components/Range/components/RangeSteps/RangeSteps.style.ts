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
      &:not(:first-child, :last-child) {
        display: none;
      }
    }
  }
`;

export default RangeStepsStyle;
