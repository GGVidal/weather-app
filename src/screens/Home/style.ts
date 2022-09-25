import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../../components/Button";

export const LinearGradientContainer = styled(LinearGradient).attrs({
  colors: ["#FFF", "#feb054"],
})`
  flex: 1;
  padding-horizontal: 36px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const TextContainer = styled.View`
  margin-top: 50px;
  align-items: center;
`;

export const SubtitleContainer = styled.View`
  margin-top: 6px;
  align-items: center;
`;

export const BeginButtonContainer = styled.View`
  margin-top: 160px;
`;
