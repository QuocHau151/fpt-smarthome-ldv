import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
export const getInfoUser = async (id: string) => {
  try {
    const user = await db.user.findMany({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    });
    return user;
  } catch {
    return null;
  }
};
export const getPartnerById = async (id: string) => {
  try {
    const partners = await db.partner.findUnique({
      where: { id }, // Add the 'id' property with a default value
    });
    return partners;
  } catch {
    return null;
  }
};
export const getContactById = async (id: string) => {
  try {
    const contacts = await db.contact.findUnique({
      where: { id }, // Add the 'id' property with a default value
    });
    return contacts;
  } catch {
    return null;
  }
};
export const getBrandShopById = async (id: string) => {
  try {
    const brandShops = await db.brandShop.findUnique({
      where: { id }, // Add the 'id' property with a default value
    });
    return brandShops;
  } catch {
    return null;
  }
};
