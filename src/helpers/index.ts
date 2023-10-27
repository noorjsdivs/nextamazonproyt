export const getProducts = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/amazonpro", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export const getPhones = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/phone",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Phones");
  }

  return res.json();
};
export const getPhoneCases = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/phone case",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Phones");
  }

  return res.json();
};
export const getWatches = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/watch",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Phones");
  }

  return res.json();
};
export const getAccessories = async () => {
  const res = await fetch(
    "https://jsonserver.reactbd.com/amazonpro/category/accessories",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Phones");
  }

  return res.json();
};
