import dotenv from "dotenv";

dotenv.config();

const config = {
  ANYDO_TOKEN: process.env.REACT_ANYDO_TOKEN || "",
};

export default config;
