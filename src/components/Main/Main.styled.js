import styled, { keyframes } from "styled-components";

const pulseSquare = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.3) translateY(0);
  }
  50% {
    opacity: 1;
    transform: scale(1) translateY(-8px);
  }
`;

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
  flex-direction: column;
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

export const LoaderDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 24px;
`;

export const LoaderSquare = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: ${({ $bg }) => $bg || "#565EEF"};
  animation: ${pulseSquare} 1.4s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;