/**
*
* Button
*
*/

import * as React from "react";
import ButtonLayout from "./button.layout";

type APIResponse = {
result: object;
};

type Props = {};

type State = {
loading: boolean;
error?: string;
};

const UI_TESTING = true;

const ButtonLogic = (props: Props) => {
return (
<ButtonLayout />
);
};

export default ButtonLogic;