import styled from "styled-components";
import {
  SectionContainer,
  SectionSubheading,
  SectionHeading,
} from "~/components";

export const MainImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  margin-top: 20rem;
`;

export const MainTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
`;

export const MainTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const MainDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
`;

export const MainContainerInner = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const MainInnerSectionContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 15rem;
  margin: 5rem auto;
  justify-content: center;
  width: 100%;
  background-image: url("./img/background.png");
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem auto;
  }
`;
