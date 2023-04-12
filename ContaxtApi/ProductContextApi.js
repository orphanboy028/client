import { createContext, useEffect, useState } from "react";
import {
  createProduct,
  getUserProducts,
  getUserSingleProduct,
  updateProductSpacfification,
} from "../Actions/UserAuth/ProductAction";
import { useRouter } from "next/router";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const router = useRouter();
  const [productIMageFile, setproductIMageFile] = useState("");
  const [prductIMagePreview, setprductIMagePreview] = useState(null);
  const [loading, setloading] = useState(false);
  const [userAllProducts, setuserAllProducts] = useState([]);
  const [productId, setproductId] = useState("");
  const [usersingleProduct, setusersingleProduct] = useState({});
  // Handel CHange for image
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
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
      formData.append("description", inputdata.description);
      const result = await createProduct(formData, token);
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
        console.log(result);
      }
    } catch (error) {}
  };

  // handelEdit for Re-direct to single product for Edit
  const handelEdit = (id, slug) => {
    setproductId(id);
    // console.log(productId);
    router.push(`/user-admin/edit-product/${slug}`);
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
