const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    :  
        "https://googlevisa.com";

export default BASE_URL;