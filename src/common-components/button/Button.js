import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    Spaces,
    FontFamilies,
    FontWeights,
    FontSizes,
} from '../../shared/DesignTokens';

export const Button = styled.button`
border-radius: ${BorderRadiuses.ONE};
border-style: solid;
border-color: ${(props) => (props.ghost ? Colors.WHITE : Colors.DARKBLUE)};
width: 10%;
height: 40px;
font-family: ${FontFamilies.PRIMARY};
font-size: ${FontSizes.TWO}
font-weight: ${FontWeights.BOLD};
background-color: ${(props) => (props.ghost ? Colors.PURPLE : Colors.DARKBLUE)};
color: ${Colors.WHITE};
padding: ${Spaces.ONE_HALF};
cursor: pointer;

&: hover {
background-color: ${Colors.WHITE};
color: ${(props) => (props.ghost ? Colors.PURPLE : Colors.DARKBLUE)};
}

`;