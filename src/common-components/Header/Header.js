import styled from "styled-components";
import { Flex, Box } from "reflexbox";
import {
  Colors,
  Spaces,
  FontFamilies,
  FontWeights,
  FontSizes,
} from "../../shared/DesignTokens";
import logostepsforfuture from "../../assets/images/logo-stepsforfuture.png";
import { Button } from "../button/Button";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${Colors.PURPLE};
  display: flex;
  justify-content: space-around;
  padding-left: ${Spaces.ELEVEN};
  padding-right: ${Spaces.ELEVEN};
  align-items: center;
  @media (min-width: 1024px) {
    height: 60px;
  }
`;

const Logo = styled.img.attrs({
  src: logostepsforfuture,
  alt: 'Logo do "Steps for Future"',
})`
  height: 54px;
`;

export function Header() {
  return (
    <Wrapper>
        <Logo />
        <Button>Entrar</Button>
        <Button ghost={true}>Cadastrar</Button>
    </Wrapper>
  );
}