import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 75px 0 30px; /* Padding in pixels */
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 55px 0 30px; /* Adjusted padding for smaller screens */
  }
`;

export const Content = styled("p")`
  padding: 12px 0;
  font-size: 20px; /* Font size in pixels */
`;

export const ContentWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Gap in pixels */

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled("div")`
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 20px; /* Padding in pixels */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 320px; /* Max-width in pixels */
  flex: 1;

  h6 {
    margin-bottom: 16px; /* Margin in pixels */
    font-size: 1px; /* Font size in pixels */
  }

  p {
    margin: 0;
    font-size: 10px; /* Font size in pixels */
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;
