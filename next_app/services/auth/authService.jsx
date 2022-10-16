import apiService from "../apiService";

const authToken = (data) => {
  return apiService.post("/auth/token/", data);
};
const authTokenVerify = (token) => {
  return apiService.post("/auth/token/verify/", token);
};

const authService = {
  authToken,
  authTokenVerify,
};
export default authService;
