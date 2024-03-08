"use server";

import { formatToString } from "@/hook/useCurrency";
import { db } from "@/lib/db";

export const fetchProduct = async () => {
  try {
    const products = await db.product.findMany();
    products.forEach((product) => {
      if (product.price !== null) {
        product.price = formatToString(product.price);
      }
    });
    return products;
  } catch (error) {
    return "failed to fetch product";
  }
};
