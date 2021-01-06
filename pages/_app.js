import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/Header.css";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
