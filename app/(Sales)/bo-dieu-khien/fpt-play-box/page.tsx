"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
export default function Page() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const fetchData = async () => {
    try {
      const res = await fetchProduct();
      setProducts(res as unknown as ProductData[]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    
    fetchData();
  }, []);
  
  const [selectedOptions, setSelectedOptions] = useState({
    id_product: "PPLBS001",
  });

  const handleChange = (event: any) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.value,
    });
  };

  const option = products.find(
    (item) => item.id_product === selectedOptions.id_product
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };
  console.log(products);
  return (
    <>
      <Helmet>
        <title>FPT Play Box S</title>
        <meta
          name="description"
          content="Thiết bị điều khiển trung tâm FPT Smart Home"
        />
      </Helmet>
      <div className="">
        <div className="text-center flex flex-col  bg-slate-100 pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px]">
          <div className="container">
            <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
              Thiết bị FPT Smart Home
            </h4>
            <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[30px]">
              Thiết bị điều khiển trung tâm FPT Smart Home
            </h2>
            <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col max-lg:px-20 max-md:px-0 max-md:gap-4">
              <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
                {option ? (
                  <Image
                    src={option?.image ?? ""}
                    width={1000}
                    height={500}
                    alt=""
                    priority
                  />
                ) : (
                  <div className="bg-white w-[585px] h-[585px] max-md:w-full"></div>
                )}
              </div>
              <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px] ">
                <div className="flex flex-col items-center pt-[50px] max-md:pt-[30px]">
                  <h1 className="text-[27px] font-semibold">FPT Play Box S</h1>
                  <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 ">
                    <h4 className=" flex items-center">
                      Thương hiệu:
                      <p className="font-semibold">FPT Smart Home</p>
                    </h4>
                    <h4>Mã Sản phẩm: {option?.id_product} </h4>
                  </div>
                </div>

                <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                  <p className="text-[50px] font-bold max-md:text-[40px]">
                    {option?.price} VNĐ
                  </p>
                  <p className="-mt-4 text-[12px] max-md:text-[10px] max-md:mt-[0px]">
                    (Chưa bao gồm VAT)
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[18px] text-slate-600 font-medium mb-4 px-6 max-md:text-[14px]">
                    Thời gian bảo hành sản phẩm là 24 tháng tính từ ngày mua
                    hàng.
                  </p>
                  <div className="flex items-center justify-center gap-2 w-full">
                    <Button
                      onClick={() => option && handleAddToCart(option)}
                      className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white"
                    >
                      <Link href="/checkout"> Mua ngay</Link>
                    </Button>
                    <Button
                      onClick={() => option && handleAddToCart(option)}
                      className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white"
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
          <div className="container  pb-[100px] max-md:pb-[50px]">
            <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
              FPT Play Box S
            </h4>
            <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[40px]">
              Thông số kỹ thuật
            </h2>
            <div className="flex items-center justify-center gap-6 w-full max-lg:flex-col  max-lg:px-10 max-md:px-2">
              <Image
                className="rounded-2xl basis-1/2 w-full"
                src="/assets/images/product/thumnail/google-assistance-device.png"
                width={300}
                height={300}
                alt=""
              />
              <div className="basis-1/2 w-full">
                <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[13px]">
                  <p>CPU</p>
                  <p>Amlogic 905X3</p>
                </div>
                <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[13px]">
                  <p>GPU</p>
                  <p>Mali G31 MP2</p>
                </div>
                <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[13px]">
                  <p>Wireless</p>
                  <p>AP6398S</p>
                </div>
                <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[13px]">
                  <p>BLUETOOTH</p>
                  <p>5.0</p>
                </div>
                <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[13px]">
                  <p>RAM</p>
                  <p>02 GB</p>
                </div>
                <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[13px]">
                  <p>ROM</p>
                  <p>16 GB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
