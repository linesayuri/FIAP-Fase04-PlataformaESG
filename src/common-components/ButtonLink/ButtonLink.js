import styled from "styled-components";
import {
  Colors,
  FontFamilies,
  FontWeights,
  FontSizes,
} from "../../shared/DesignTokens";

export const ButtonLink = styled.a`
font-family: ${FontFamilies.PRIMARY};
font-size: ${FontSizes.THREE};
font-weight: ${FontWeights.REGULAR};
color: ${Colors.PURPLE};
cursor: pointer;

&: hover {
color: ${Colors.DARKBLUE};
}

`;
