// The Card to be exported goes here
import React from "react";
import { CardDescription, CardTitle, CardIcon, CardTextContainer } from "./elements";

export const Card = ({ title, description, icon, ...props }) => {
  return (
    <>
      <CardIcon icon={icon} />
      <CardTextContainer {...props}>
      <CardTitle {...props}>{title}</CardTitle>
      <CardDescription {...props}>{description}</CardDescription>
      </CardTextContainer>
    </>
  );
};
