import axios from "axios";

export const getIPData = (userIp) => {
  return axios.get("http://localhost:8080/ip/info/" + userIp);
};

export const getUserIP = () => {
  return axios.get("http://localhost:8080/ip/user");
};
