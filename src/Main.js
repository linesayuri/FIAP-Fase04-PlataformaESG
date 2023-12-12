import React from "react";
import { MenuOne } from "./common-components/MenuOne/MenuOne";
import { BannerMain } from "./components/Banner/Banner";
import { Ranking } from "./components/Ranking/Ranking";

const Main = () => {
  return (
    <>
      <div>
        <MenuOne />
      </div>
      <div>
        <BannerMain />
      </div>
      <div>
        <Ranking />
      </div>
    </>
  );
};

export { Main };