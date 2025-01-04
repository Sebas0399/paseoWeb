import axios from "axios";
export default (paseo: any) => {
  return axios.post("http://localhost:9090/paseo", paseo);
};
