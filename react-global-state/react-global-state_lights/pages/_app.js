import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialStates = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];
export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialStates);
  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
    /* setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );*/
  }
  const lightsOnCount = lights.filter(({ isOn }) => isOn === true).length;
  const isDimmed = lightsOnCount === 0;
  function turnAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }
  function turnAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }
  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsOnCount={lightsOnCount}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
