import * as z from "zod";
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  phone: z.string().min(1, {
    message: "Phone is required",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});
export const ProductSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  price: z.string().min(1, {
    message: "Price is required",
  }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
});
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  verify: z.string(),
  state: z.string(),
});
export const OrderSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  items_id: z.string().array(),
  items_name: z.string().array(),
  items_price: z.string().array(),
  items_quantity: z.string().array(),
});
export const formCheckoutSchema = z.object({
  username: z.string().min(2, {
    message: "Tên Khách hàng không được để trống",
  }),
  phone: z.string().min(2, {
    message: "Số điện thoại không được để trống",
  }),
  email: z.string().min(2, {
    message: "Email không được để trống",
  }),
  address: z.string().min(2, {
    message: "Địa chỉ không được để trống",
  }),
});
export const formContactSchema = z.object({
  name: z.string().min(2, {
    message: "Họ tên là bắt buộc.",
  }),
  email: z.string().min(2, {
    message: "Email là bắt buộc.",
  }),
  phone: z.string().min(2, {
    message: "Số điện thoại là bắt buộc.",
  }),
  title: z.string().min(2, {
    message: "Tiêu đề là bắt buộc.",
  }),
  address: z.string().min(2, {
    message: "Địa chỉ là bắt buộc.",
  }),
  description: z.string().min(2, {
    message: "Nội dung là bắt buộc.",
  }),
});
export const formPartnerSchema = z.object({
  name: z.string().min(2, {
    message: "Họ tên là bắt buộc.",
  }),
  email: z.string().min(2, {
    message: "Email là bắt buộc.",
  }),
  phone: z.string().min(2, {
    message: "Số điện thoại là bắt buộc.",
  }),
  address: z.string().min(2, {
    message: "Địa chỉ là bắt buộc.",
  }),
  note: z.string().min(2, {
    message: "Nội dung là bắt buộc.",
  }),
});
export const formBrandShopSchema = z.object({
  name: z.string().min(2, {
    message: "Họ tên là bắt buộc.",
  }),
  email: z.string().min(2, {
    message: "Email là bắt buộc.",
  }),
  phone: z.string().min(2, {
    message: "Số điện thoại là bắt buộc.",
  }),
  address: z.string().min(2, {
    message: "Địa chỉ là bắt buộc.",
  }),
  note: z.string().min(2, {
    message: "Nội dung là bắt buộc.",
  }),
});
export const formZaLoSchema = z.object({
  name: z.string().min(2, {
    message: "Xin hãy điền tên của bạn",
  }),
  phone: z.string().min(2, {
    message: "Xin hãy điền số điện thoại của bạn",
  }),
});
