import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "./index";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const withRealField = () => <Button title="Smart Button" />;
