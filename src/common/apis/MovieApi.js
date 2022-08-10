import axios from "axios";
//import base uri instance and merged uri with the desired needed uri
export default axios.create({ baseURL: "https://www.omdbapi.com/" });
