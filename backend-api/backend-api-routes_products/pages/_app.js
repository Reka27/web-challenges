import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    return response.json();
  });

/*const fetcher = async function myFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};*/
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
