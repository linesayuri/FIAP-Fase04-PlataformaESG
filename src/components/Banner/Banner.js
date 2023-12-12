import styled from "styled-components";
import { Spaces } from "../../shared/DesignTokens";

import banner from "../../assets/images/banner.png";
import buttonbannerleft from "../../assets/icons/button-banner-left.png";
import buttonbannerright from "../../assets/icons/button-banner-right.png";

export const BannerWrapper = styled.section`
  width: 100%;
  height: 400px;
  padding-left: ${Spaces.TWELVE};
  padding-right: ${Spaces.TWELVE};
  padding-top: ${Spaces.FIVE};
  display: flex;
  justify-content: space-around;
  align-itens: center;
  cursor: pointer;
`;

const ButtonBannerLeft = styled.img.attrs({
  src: buttonbannerleft,
  alt: '"',
})`
  height: 40px;
`;

const Banner = styled.img.attrs({
  src: banner,
  alt: '"',
})`
  height: 400px;
`;

const ButtonBannerRight = styled.img.attrs({
  src: buttonbannerright,
  alt: '"',
})`
  height: 40px;
`;

export function BannerMain() {
  return (
    <BannerWrapper>
      <div>
        <ButtonBannerLeft />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <ButtonBannerRight />
      </div>
    </BannerWrapper>
  );
}
