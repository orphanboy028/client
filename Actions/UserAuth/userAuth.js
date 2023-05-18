import axios from "axios";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { API } from "../../config";
console.log(API);

// Define the encryption key and data to be encrypted
const encryptionKey = "my-secret-key";

//////////////////////////////////
///////// For TOP
// set Cookies for otp Url
export const setCookies = (key, value) => {
  Cookies.set(key, value, { expires: 1 });
};

// Get Cookies for OTP URL
export const getCookies = (key) => {
  return Cookies.get("otpUrlToken");
};

// Redict to OTP Page
export const otpAuth = (data, cb) => {
  setCookies("otpUrlToken", data.UrlToken);
  cb();
};

// ////////////////////////////////////////////////////
//////////// For Login User
// set Cookies for login User
export const setLoginCookies = (key, value) => {
  Cookies.set(key, value, { expires: 1 });
};

export const getLoginCookies = (key) => {
  return Cookies.get("jwt");
};

// set token in LocalStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (data, cb) => {
  const userData = JSON.stringify(data.user);
  // Encrypt the data using AES encryption
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();
  console.log("Encrypted user data:", encryptedData);
  setLocalStorage("user", encryptedData);
  setLoginCookies("jwt", data.token);

  cb();
};

export const getEncryptedData = (encryptedUserData) => {
  try {
    if (encryptedUserData) {
      const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      const userData = JSON.parse(decryptedData);
      return userData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const isAuth = () => {
  if (process.browser) {
    const cookichecked = getLoginCookies("jwt");
    if (cookichecked) {
      if (localStorage.getItem("user")) {
        return getEncryptedData(JSON.parse(localStorage.getItem("user")));
      } else {
        return false;
      }
    }
  }
};

// Signup Api
export const singUpNewAccount = async (data) => {
  try {
    const res = await axios.post(`${API}/api/V1/industry/auth/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

// Submit OTP
export const submitOTP = async (data, token) => {
  console.log(data);
  try {
    const res = await axios.post(
      `${API}/api/V1/industry/auth/verify-otp/${token}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    // console.log(error.response);
    return error.response;
  }
};

// LoginApi
export const loginAccount = async (clData) => {
  try {
    const res = await axios.post(`${API}/api/V1/industry/auth/login`, clData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

// super-Admin Login
export const SuperAdminlogin = async (clData) => {
  try {
    const res = await axios.post(
      `${API}/api/V1/industy/super-admin/login-super-admin`,
      clData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
