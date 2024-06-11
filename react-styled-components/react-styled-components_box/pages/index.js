import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  const Div = styled.div`
    display: flex;
  `;
  return (
    <Div>
      <Div>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
      </Div>
      <Div>
        <BoxWithStyledComponents />
        <BoxWithStyledComponents $blackbox="isBlack" />
      </Div>
    </Div>
  );
}
