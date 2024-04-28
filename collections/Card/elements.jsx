// Styled elements for the Card go here
import styled from "styled-components";

export const CardSection = styled((props) => <div {...props} />)`
display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  max-width: 1920px;
  box-sizing: border-box;
  margin-left: 6rem;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }

`;

export const CardSimple = styled((props) => <div {...props} />)`
display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  min-height: 14rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  border: 3px solid transparent;
  box-sizing: border-box;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  transform: scale(1, 1);

  &:hover {
    border: 3px solid #007fff;
    cursor: pointer;
    max-width: 100%;
    transform: scale(1);
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  @media only screen and (max-width: 375px) {
    display: flex;
    min-height: 8rem;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 414px) {
    display: flex;
    min-height: 8rem;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
`;

export const CardTitle = styled((props) => <div {...props} />)`
font-family: Poppins;
  font-size: 1.5rem;
  line-height: 4.375rem;
  font-weight: 600;
  margin-left: 2.5rem;

  ${CardSimple}:hover & {
    text-decoration: underline;
    color: #007fff;
  }

  @media (max-width: 375px) {
    font-family: Poppins;
    font-size: 1rem;
    line-height: 2rem;
    font-weight: 400;
    margin-left: 2.5rem;
  }

  @media (max-width: 414px) {
    font-family: Poppins;
    font-size: 1.2rem;
    line-height: 4.375rem;
    font-weight: 600;
    margin-left: 2.5rem;
    padding-top: 1rem;
  }
  }
`;

export const CardTextContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: start;
  margin-top: 2rem;
`;

export const CardDescription = styled((props) => <div {...props} />)`
font-family: Poppins;
  font-size: 1.2rem;
  line-height: 1.7rem;
  font-weight: 500;
  margin-left: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: 400;
    padding-bottom: 2rem;
  }

  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-size: 0.8rem;
    line-height: 0.9rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768) {
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-size: 0.8rem;
    line-height: 0.9rem;
    font-weight: 400;
  }
 `;

export const CardIcon = styled(({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 24 24"
  >
    <path d={props.icon} />
  </svg>
)) `
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 4rem;
  max-height: 5rem;
  margin-left: 1.5rem;

  @media (max-width: 375px) {
    max-width: 2rem;
    max-height: 3rem;
    margin-left: 0rem;
  }

  @media (max-width: 414px) {
    max-width: 2rem;
    max-height: 3rem;
    margin-left: 1rem;
  }
`;
