import React from "react";
import "bulma/css/bulma.css";
import { Hero } from "../components/basic-page";
import { homeTitle, homeSubtitle } from "../constants/constants";

export default function Home() {
  return <Hero title={homeTitle} subtitle={homeSubtitle} />;
}
