import "../styles/globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";
import { UserContextProvider } from "../ContaxtApi/UserContaxApi";
import { AppUilsContextProvider } from "../ContaxtApi/AppUtilsContaxApi";
import { BusinessContextProvider } from "../ContaxtApi/BusinessContaxApi";
import { ProductContextProvider } from "../ContaxtApi/ProductContextApi";
import { ProductFormContextProvider } from "../ContaxtApi/ProductFormContextApi";
import { CategriesContextProvider } from "../ContaxtApi/CategoriesContaxApi";
import { EnquiryContextProvider } from "../ContaxtApi/EnquiryContaxApi";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <AppUilsContextProvider>
        <BusinessContextProvider>
          <ProductContextProvider>
            <ProductFormContextProvider>
              <CategriesContextProvider>
                <EnquiryContextProvider>
                  <Component {...pageProps} />
                </EnquiryContextProvider>
              </CategriesContextProvider>
            </ProductFormContextProvider>
          </ProductContextProvider>
        </BusinessContextProvider>
      </AppUilsContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
