import React from "react";

import Sky from "./Background/sky";
import Stars from "./Background/stars";
import Clouds from "./Background/clouds";
import Lightning from "./Background/lightning";
import DistantHills from "./Background/distantHills";
import Ground from "./Background/ground";
import Rain from "./Background/rain";
import Snow from "./Background/snow";
import InfoBox from "./Foreground/infobox";

import { Display } from "../styles/screen.styles";

export default function Screen(props) {
  //Limit size of screen if on a desktop
  const newProps = { ...props };
  if (newProps.width >= 700) {
    newProps.width = 360;
    newProps.height = 640;
  }

  return (
    <Display>
      <Sky {...newProps} />
      <Stars {...newProps} />
      <Clouds {...newProps} />
      <DistantHills {...newProps} />
      <Ground {...newProps} />
      <Lightning {...newProps} />
      <Rain {...newProps} />
      <Snow {...newProps} />
      <InfoBox {...newProps} />
    </Display>
  );
}
