import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";
import { UserContextProvider } from "../ContaxtApi/UserContaxApi";
import { AppUilsContextProvider } from "../ContaxtApi/AppUtilsContaxApi";
import { BusinessContextProvider } from "../ContaxtApi/BusinessContaxApi";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <AppUilsContextProvider>
        <BusinessContextProvider>
          <Component {...pageProps} />
        </BusinessContextProvider>
      </AppUilsContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
