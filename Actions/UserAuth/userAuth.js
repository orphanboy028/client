import axios from "axios";
import Cookies from "js-cookie";

// set Cookies
export const setCookies = (key, value) => {
  Cookies.set(key, value, { expires: 1 });
};

// Get Cookies
export const getCookies = (key) => {
  return Cookies.get("otpUrlToken");
};

export const otpAuth = (data, cb) => {
  setCookies("otpUrlToken", data.UrlToken);
  cb();
};

// Signup Api
export const singUpNewAccount = async (data) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:5000/api/V1/industry/auth/register",
      data,
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

// Submit OTP
export const submitOTP = async (data, token) => {
  console.log(data);
  try {
    const res = await axios.post(
      `http://127.0.0.1:5000/api/V1/industry/auth/verify-otp/${token}`,
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
