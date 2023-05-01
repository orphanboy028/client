import { createContext, useEffect, useState } from "react";
import {
  createProduct,
  getUserProducts,
  getUserSingleProduct,
  updateProductSpacfification,
  updateOnlyProductImage,
  updateBiasieDetails,
  deActivateProduct,
  ActivateProduct,
  DeleteProduct,
  SendSingleproductEnqiires,
  productEnquires,
  SingleproductEnquires,
} from "../Actions/UserAuth/ProductAction";
import {
  getAllProductsAction,
  getSingleProductsAction,
  getSeachProductsAction,
  SuperAdminproductEnquires,
} from "../Actions/ProductActions/ProductActions";
import { useRouter } from "next/router";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const router = useRouter();
  const [sendingEmail, setsendingEmail] = useState(false);
  const [productIMageFile, setproductIMageFile] = useState("");
  const [prductIMagePreview, setprductIMagePreview] = useState(null);
  const [loading, setloading] = useState(false);
  const [userAllProducts, setuserAllProducts] = useState([]);
  const [productId, setproductId] = useState("");
  const [usersingleProduct, setusersingleProduct] = useState({});
  const [allProducts, setallProducts] = useState([]);
  const [singleProduct, setsingleProduct] = useState({});
  const [productEnquiresList, setproductEnquiresList] = useState([]);
  const [productEnquireDetail, setproductEnquireDetail] = useState({});
  const [superAdminProductEnquireList, setsuperAdminProductEnquireList] =
    useState([]);
  const [allProductForSEO, setallProductForSEO] = useState([]);

  // Handel CHange for image
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setprductIMagePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
      setproductIMageFile(selectedFile);
    }
  };

  const CreateBasicProduct = async (inputdata, token) => {
    try {
      const formData = new FormData();
      formData.append("images", productIMageFile);
      formData.append("name", inputdata.name);
      formData.append("price", inputdata.price);
      formData.append("unit", inputdata.unit);
      formData.append("description", inputdata.description);
      const result = await createProduct(formData, token);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const updateOnlyProductImageAction = async (token, slug) => {
    try {
      console.log(productIMageFile);
      const formData = new FormData();
      formData.append("images", productIMageFile);
      console.log(formData);
      const result = await updateOnlyProductImage(formData, token, slug);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const userProduct = async (token, userId) => {
    try {
      if (userId !== undefined) {
        const result = await getUserProducts(token, userId);
        // console.log(result.data.Userproduct);
        setuserAllProducts(result.data.Userproduct);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const singleUserProduct = async (token, slug) => {
    try {
      if (slug !== undefined) {
        console.log(slug);
        const result = await getUserSingleProduct(token, slug);
        // console.log(result.data.singleProduct);
        setusersingleProduct(result.data.singleProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateSpacification = async (originalData, token, slug) => {
    console.log(originalData);
    try {
      if (slug !== undefined) {
        const result = await updateProductSpacfification(
          originalData,
          token,
          slug
        );
        return result;
      }
    } catch (error) {
      return error.response;
    }
  };

  const updateBiasieDetailsActon = async (originalData, token, slug) => {
    console.log(originalData);
    try {
      if (slug !== undefined) {
        const result = await updateBiasieDetails(originalData, token, slug);
        return result;
      }
    } catch (error) {
      return error.response;
    }
  };

  // Produts Actions
  const DeleteProductAction = async (data, token) => {
    try {
      const result = await DeleteProduct(data, token);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const ActivateProductAction = async (data, token) => {
    try {
      const result = await ActivateProduct(data, token);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const deActivateProductAction = async (data, token) => {
    try {
      const result = await deActivateProduct(data, token);
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const SendSingleproductEnqiiresAction = async (data, token, slug) => {
    try {
      const result = await SendSingleproductEnqiires(data, token, slug);
      console.log("conatxt Api");
      return result;
    } catch (error) {
      return error.response;
    }
  };

  // handelEdit for Re-direct to single product for Edit
  const handelEdit = (id, slug) => {
    setproductId(id);
    // console.log(productId);
    router.push(`/user-admin/edit-product/${slug}`);
  };

  const productEnquiresAction = async (token) => {
    try {
      const result = await productEnquires(token);

      setproductEnquiresList(result.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const SingleproductEnquiresAction = async (token, slug) => {
    try {
      if (slug) {
        const result = await SingleproductEnquires(token, slug);

        setproductEnquireDetail(result.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Super Admin Product Enquire List
  const SuperAdminproductEnquiresAction = async (token) => {
    try {
      const result = await SuperAdminproductEnquires(token);

      setsuperAdminProductEnquireList(result.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const SuperAdmingetAllProductsAction = async () => {
    try {
      const result = await getAllProductsAction();
      // console.log(result);
      setallProductForSEO(result.data.allProducts);
    } catch (error) {}
  };

  return (
    <ProductContext.Provider
      value={{
        productIMageFile,
        setproductIMageFile,
        prductIMagePreview,
        setprductIMagePreview,
        handleImageChange,
        CreateBasicProduct,
        userProduct,
        userAllProducts,
        handelEdit,
        singleUserProduct,
        usersingleProduct,
        updateSpacification,
        allProducts,
        singleProduct,
        setallProducts,
        setsingleProduct,
        updateOnlyProductImageAction,
        updateBiasieDetailsActon,
        DeleteProductAction,
        ActivateProductAction,
        deActivateProductAction,
        SendSingleproductEnqiiresAction,
        sendingEmail,
        setsendingEmail,
        productEnquiresAction,
        productEnquiresList,
        SingleproductEnquiresAction,
        productEnquireDetail,
        setproductEnquireDetail,
        SuperAdminproductEnquiresAction,
        superAdminProductEnquireList,
        SuperAdmingetAllProductsAction,
        allProductForSEO,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
