"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStore } from "@/store/useStore";
import { formCheckoutSchema } from "@/schemas";
import { createOrder } from "@/actions/order";
import { formatToNumber, formatToString } from "@/hook/useCurrency";
import { Helmet } from "react-helmet";

export default function Checkout() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  const handlePrice = (price: number, quantity: number) => {
    let totalPrice = 0;
    cart.forEach((item) => {
      const unique = Number(formatToNumber(price.toString()));
      totalPrice = unique * quantity;
    });
    const format = formatToString(totalPrice.toString());
    return format;
  };
  const total = useStore((state) =>
    state.cart.reduce(
      (sum, item) =>
        sum + Number(formatToNumber(item.price.toString())) * item.quantity,
      0
    )
  );
  const handleTotalPrice = (total: number) => {
    const format = formatToString(total.toString());
    return format;
  };
  const form = useForm<z.infer<typeof formCheckoutSchema>>({
    resolver: zodResolver(formCheckoutSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formCheckoutSchema>) => {
    const order = {
      formValues: values,
      total: total,
      cart: cart,
    };

    const result = {
      name: order.formValues.username,
      phone: order.formValues.phone,
      email: order.formValues.email,
      address: order.formValues.address,
      items_id: order.cart.map((item) => item.id),
      items_name: order.cart.map((item) => item.name),
      items_price: order.cart.map((item) => item.price.toString()),
      items_quantity: order.cart.map((item) => item.quantity.toString()),
    };
    createOrder(result);
  };
  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <meta name="description" content="Đơn hàng của bạn" />
      </Helmet>
      <div className="bg-slate-400 pt-[120px]">
        <div className=" container flex lg:items-start justify-center gap-8 p-10  md:flex-col lg:flex-row md:items-end max-md:flex-col max-md:hidden">
          <div className="lg:basis-2/3 h-min bg-white rounded-2xl md:w-full">
            <div
              className="grid grid-rows-1 px-8 text-[18px]  gap-6 py-6 border-b-[1px] border-black content-center "
              style={{
                gridTemplateColumns: "minmax(0, 1fr) 8fr 4fr 3fr 5fr 1fr",
              }}
            >
              <input className="w-4" type="checkbox" />
              <p className="">Tất cả sản phẩm</p>
              <p className="">Đơn giá </p>
              <p className="">Số lượng</p>
              <p className="">Số tiền</p>
              <CiTrash class="w-[25px] h-[25px]" />
            </div>
            {cart.map((product) => (
              <>
                <div
                  className="grid grid-cols-6 grid-rows-1 px-8 text-[18px]  gap-6 py-10 content-center"
                  style={{
                    gridTemplateColumns: "minmax(0, 1fr) 8fr 4fr 3fr 5fr 1fr",
                  }}
                >
                  <input className="w-4 " type="checkbox" />
                  <div className="flex items-center justify-start flex-auto gap-6">
                    <Image
                      src={product.image || ""}
                      width={50}
                      height={50}
                      alt=""
                    ></Image>
                    <div>
                      <p className="text-[15px] font-semibold">
                        {product.name}
                      </p>
                      <p className="text-[15px]">
                        Mã sản phẩm: {product.id_product}
                      </p>
                    </div>
                  </div>
                  <p className="text-[15px]">{product.price} </p>
                  <div className="flex items-start justify-between gap-2">
                    <button
                      onClick={() => decreaseQuantity(product.id_product)}
                      className=" w-5 h-5 hover:bg-orange-500 border-black border-[1px] flex items-center justify-center"
                    >
                      -
                    </button>
                    <p className="text-[15px]">{product.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(product.id_product)}
                      className="w-5 h-5 hover:bg-orange-500 border-black border-[1px] flex items-center justify-center "
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[15px]">
                    {handlePrice(product.price, product.quantity)}
                  </p>
                  <CiTrash
                    onClick={() => removeFromCart(product.id_product)}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </>
            ))}
          </div>
          <div className="lg:basis-1/3 bg-white p-6 rounded-2xl md:basis-full md:w-1/2 md:">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tên Khách hàng" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Số điện thoại" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Địa chỉ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <div className="flex items-center justify-between py-6 border-b-[1px]">
                    <p>Tạm tính </p>
                    <p className=" text-[18px] font-semibold">
                      {" "}
                      {handleTotalPrice(total)} VNĐ
                    </p>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <p>Tổng</p>
                    <div className=" flex flex-col items-end">
                      <p className="text-[25px] text-orange-600 font-semibold">
                        {handleTotalPrice(total)} VNĐ
                      </p>
                      <span>(Chưa bao gồm VAT)</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Đặt hàng
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className=" container hidden lg:items-start justify-center gap-8 p-10  md:flex-col lg:flex-row md:items-end max-md:flex-col max-md:flex">
          <div className="lg:basis-2/3 h-min bg-white rounded-2xl md:w-full">
            <div
              className="grid grid-rows-1 px-7 text-[18px]  gap-6 py-6 border-b-[1px] border-black content-center "
              style={{
                gridTemplateColumns: "minmax(0, 1fr)  8fr 1fr",
              }}
            >
              <input className="w-4" type="checkbox" />
              <p className="">Tất cả sản phẩm</p>
              <p className="max-md:hidden">Đơn giá </p>
              <p className="max-md:hidden">Số lượng</p>
              <p className="max-md:hidden">Số tiền</p>
              <CiTrash class="w-[25px] h-[25px]" />
            </div>
            {cart.map((product) => (
              <>
                <div className="flex flex-col items-center  text-[18px]  border-b-[1px] border-black gap-2 py-10 ">
                  <div
                    className="grid grid-rows-1 px-6 text-[18px]   items-center  "
                    style={{
                      gridTemplateColumns: "minmax(0, 1fr)  8fr 1fr",
                    }}
                  >
                    <input className="w-4 " type="checkbox" />
                    <div className="flex items-center justify-start flex-auto gap-2 mr-5 ">
                      <Image
                        src={product.image || ""}
                        width={50}
                        height={50}
                        alt=""
                      ></Image>
                      <div className="text-center">
                        <p className="text-[15px] font-semibold ">
                          {product.name}
                        </p>
                        <p className="text-[13px] ">
                          Mã sản phẩm: {product.id_product}
                        </p>
                      </div>
                    </div>
                    <CiTrash
                      onClick={() => removeFromCart(product.id_product)}
                      className="w-[20px] h-[20px]"
                    />
                  </div>

                  <p className="text-[25px] font-semibold text-orange-500">
                    {product.price} VNĐ
                  </p>
                  <div className="flex items-start justify-between gap-2">
                    <button
                      onClick={() => decreaseQuantity(product.id_product)}
                      className=" w-5 h-5 hover:bg-orange-500 border-black border-[1px] flex items-center justify-center"
                    >
                      -
                    </button>
                    <p className="text-[15px]">{product.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(product.id_product)}
                      className="w-5 h-5 hover:bg-orange-500 border-black border-[1px] flex items-center justify-center "
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="lg:basis-1/3 bg-white p-6 rounded-2xl md:basis-full md:w-1/2 md:">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-[12px]"
                          placeholder="Tên Khách hàng"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-[12px]"
                          placeholder="Số điện thoại"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-[12px]"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-[12px]"
                          placeholder="Địa chỉ"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <div className="flex items-center justify-between py-6 border-b-[1px]">
                    <p>Tạm tính </p>
                    <p className=" text-[18px] font-semibold">
                      {" "}
                      {handleTotalPrice(total)} VNĐ
                    </p>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <p>Tổng</p>
                    <div className=" flex flex-col items-end">
                      <p className="text-[25px] text-orange-600 font-semibold">
                        {handleTotalPrice(total)} VNĐ
                      </p>
                      <span>(Chưa bao gồm VAT)</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Đặt hàng
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
