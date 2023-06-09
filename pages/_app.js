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
import { SEOContextProvider } from "../ContaxtApi/SEOContaxApi";
import { SuperAdminCategoriesContextProvider } from "../ContaxtApi/superAdminContext/CategoriesContaxApi";
import { BannerContextProvider } from "../ContaxtApi/superAdminContext/BannerContextApi";
import { EXternalApiProvider } from "../ContaxtApi/ExternalConaxt/ExternalContaxtApi";
import { CreateEnquireProvider } from "../ContaxtApi/CreateEnquiresContext";
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <SEOContextProvider>
        <AppUilsContextProvider>
          <BusinessContextProvider>
            <ProductContextProvider>
              <ProductFormContextProvider>
                <CategriesContextProvider>
                  <EnquiryContextProvider>
                    <SuperAdminCategoriesContextProvider>
                      <BannerContextProvider>
                        <EXternalApiProvider>
                          <CreateEnquireProvider>
                            <Component {...pageProps} />
                          </CreateEnquireProvider>
                        </EXternalApiProvider>
                      </BannerContextProvider>
                    </SuperAdminCategoriesContextProvider>
                  </EnquiryContextProvider>
                </CategriesContextProvider>
              </ProductFormContextProvider>
            </ProductContextProvider>
          </BusinessContextProvider>
        </AppUilsContextProvider>
      </SEOContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
