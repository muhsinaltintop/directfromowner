const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    cache: "default", // 'no-store' yerine 'default' kullanmayı düşünebilirsiniz
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const finalOptions = { ...defaultOptions, ...options };
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      // API'den dönen hata mesajını loglayın
      const errorDetail = await res.text(); 
      throw new Error(`Error: ${res.status} ${res.statusText} - ${errorDetail}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const getLogo = async () => {
  try {
    const data = await fetchData("/logos?populate=*");
    return data?.data;
  } catch (error) {
    console.error("Error fetching logo:", error);
    throw error;
  }
};

const getSlide = async () => {
  try {
    const data = await fetchData("/sliders?populate=*");
    return data?.data;
  } catch (error) {
    console.error("Error fetching slide:", error);
    throw error;
  }
};

const getProperty = async () => {
  try {
    const data = await fetchData("/properties?populate=*");
    return data?.data;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw error;
  }
};

const getSingleProperty = async (id) => {
  try {
    const data = await fetchData(`/properties/${id}?populate=*`);
    return data?.data;
  } catch (error) {
    console.error("Error fetching single property:", error);
    throw error;
  }
};

export { getLogo, getSlide, getProperty, getSingleProperty };
