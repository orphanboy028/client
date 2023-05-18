import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? "http://indiamart.com"
  : "http://192.168.42.212:5000";

export const App_Name = publicRuntimeConfig.App_Name;
