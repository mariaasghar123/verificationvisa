const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://verifypassword-ghjg.vercel.app"; // Vercel backend URL

export default BASE_URL;