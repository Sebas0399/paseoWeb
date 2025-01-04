import axios from "axios";
export default (perro: any) => {
  console.log(perro);
  return axios.post("http://localhost:9090/perros", perro);
};
