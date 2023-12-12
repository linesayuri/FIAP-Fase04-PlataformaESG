import styled from "styled-components";
import {
  Spaces,
} from "../../shared/DesignTokens";

import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { TextOne } from "../../common-components/TextOne/TextOne";

export const RankingWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  text-align: center;
  padding-top: ${Spaces.TEN};
  padding-left: ${Spaces.TWELVE};
  padding-right: ${Spaces.TWELVE};
`;

export function Ranking() {
  return (
    <RankingWrapper>
      <div>
        <HeadingOne>Ranking</HeadingOne>
      </div>
      <div>
        <HeadingTwo>1.</HeadingTwo>
        <TextOne>Marcos André Silveira</TextOne>
      </div>
      <div>
        <HeadingTwo>2.</HeadingTwo>
        <TextOne>Fabiana Oliveira</TextOne>
      </div>
      <div>
        <HeadingTwo>3.</HeadingTwo>
        <TextOne>Milene Santos de Paula</TextOne>
      </div>
    </RankingWrapper>
  );
}
