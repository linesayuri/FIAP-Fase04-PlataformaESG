import styled from 'styled-components';
import {
  Colors,
  Spaces,
} from '../../shared/DesignTokens';

import iconcaminhada from "../../assets/icons/icon-caminhada.png";
import iconcampanhas from "../../assets/icons/icon-campanhas.png";
import icontroquesuasmoedas from "../../assets/icons/icon-troquesuasmoedas.png";
import iconconquistas from "../../assets/icons/icon-conquistas.png";
import iconprofile from "../../assets/icons/icon-profile.png";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Link } from 'react-router-dom';

export const MenuWrapper = styled.menu`
  width: 100%;
  height: 80px;
  background-color: ${Colors.MEDIUMGRAY};
  display: flex;
  justify-content: space-around;
  align-itens: center;
  padding-left: ${Spaces.TWELVE};
  padding-right: ${Spaces.TWELVE};
  padding-top: ${Spaces.TWO};
  cursor: pointer;
  margin-top: ${Spaces.NONE};
`;

const IconCaminhada = styled.img.attrs({
  src: iconcaminhada,
  alt: 'Caminhada"',
})`
  height: 45px;
  padding-right: ${Spaces.THREE}; 
`;

const IconCampanhas = styled.img.attrs({
  src: iconcampanhas,
  alt: 'Campanhas"',
})`
  height: 45px;
  padding-right: ${Spaces.THREE};
`;

const IconTroquesuasmoedas = styled.img.attrs({
  src: icontroquesuasmoedas,
  alt: 'Troque suas moedas"',
})`
  height: 45px;
  padding-right: ${Spaces.THREE};
`;

const IconConquistas = styled.img.attrs({
  src: iconconquistas,
  alt: 'Conquistas"',
})`
  height: 45px;
  padding-right: ${Spaces.THREE};
`;


const IconProfile = styled.img.attrs({
  src: iconprofile,
  alt: 'Profile"',
})`
  height: 45px;
  padding-right: ${Spaces.THREE};
`;


export function MenuOne() {
  return (
    <MenuWrapper>
      <div>
        <IconCaminhada />
        <ButtonLink>Caminhada</ButtonLink>
      </div>
      <div>
        <IconCampanhas />
        <ButtonLink>Campanhas</ButtonLink>
      </div>
      <div>
        <IconTroquesuasmoedas />
        <ButtonLink>Troque suas Moedas</ButtonLink>
      </div>
      <div>
        <IconConquistas />
        <ButtonLink>Conquistas</ButtonLink>
      </div>
      <div>
        <IconProfile />
        <ButtonLink> 
          <Link to="/myaccount">Perfil</Link> 
        </ButtonLink>
      </div>
    </MenuWrapper>
  );
}
