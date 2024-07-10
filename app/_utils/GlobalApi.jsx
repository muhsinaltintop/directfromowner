const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    cache: "no-store",
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
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const getLogo = async () => {
  const data = await fetchData("/logos?populate=*", {
    next: { tags: ["logo"] },
  });
  return data.data;
};

const getSlide = async () => {
  const data = await fetchData("/sliders?populate=*", {
    next: { tags: ["slider"] },
  });
  return data.data;
};

const getProperty = async () => {
  const data = await fetchData("/properties?populate=*", {
    next: { tags: ["property"] },
  });
  return data.data;
};

export { getLogo, getSlide, getProperty };
