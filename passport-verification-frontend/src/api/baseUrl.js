const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://verifypassword-avy6.vercel.app/";

export default BASE_URL;