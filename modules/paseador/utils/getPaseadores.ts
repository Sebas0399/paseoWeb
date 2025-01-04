import axios from "axios"
export default () => {
  return axios.get("http://localhost:9090/paseadores")
}
