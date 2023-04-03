import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";
import { UserContextProvider } from "../ContaxtApi/UserContaxApi";
import { AppUilsContextProvider } from "../ContaxtApi/AppUtilsContaxApi";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <AppUilsContextProvider>
        <Component {...pageProps} />
      </AppUilsContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
