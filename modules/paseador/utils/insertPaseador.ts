import axios from "axios";
export default (paseador: any) => {
  return axios.post("http://localhost:9090/paseadores", paseador);
};
