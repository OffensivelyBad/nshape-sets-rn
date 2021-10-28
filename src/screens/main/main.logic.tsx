/**
*
* Main
*
*/

import * as React from "react";
import Base from "../../components/base";
import MainLayout from "./main.layout";

type Props = {};

const MainLogic = (_props: Props) => {
  return (
    <Base>
      <MainLayout />
    </Base>
  );
};

export default MainLogic;