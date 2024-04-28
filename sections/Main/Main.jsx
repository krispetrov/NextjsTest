import React from "react";

import {
  MainContainer,
  MainContainerInner,
  MainDescription,
  MainImageContainer,
  MainInnerSectionContainer,
  MainTextContainer,
  MainTitle,
} from "../Main/elements";
import Image from "next/dist/client/image";
import { CardSection, CardSimple } from "../../collections/Card/elements";
import { Card } from "../../collections";




export const Main = ({ image, title, description, cards, ...props }) => {
  return (
    <MainContainer>
      <MainContainerInner {...props}>
        <MainTextContainer>
          <MainTitle>{title}</MainTitle>
          <MainDescription> {description}</MainDescription>
        </MainTextContainer>
        <MainInnerSectionContainer>
          <MainImageContainer>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </MainImageContainer>
          <CardSection {...props}>
            {cards.map((card, index) => (
              <CardSimple
                key={index}
                color={card.color}
                width={card.width}
                height={card.height}
              >
                <Card
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              </CardSimple>
            ))}
          </CardSection>
        </MainInnerSectionContainer>
      </MainContainerInner>
    </MainContainer>
  );
}
