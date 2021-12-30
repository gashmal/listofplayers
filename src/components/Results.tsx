import React from "react";
import { Title } from "../ui/Title";

export const Results = ({ results = 0 }) => (
  <Title>{`(L1) ${results} résultat${results > 1 ? "s" : ""}`}</Title>
);
