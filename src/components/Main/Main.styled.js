import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #EAEEF6;
`;
export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
export const LoadingMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  color: #94A6BE;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;