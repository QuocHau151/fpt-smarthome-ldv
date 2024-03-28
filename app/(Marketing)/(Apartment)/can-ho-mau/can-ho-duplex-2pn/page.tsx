"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import data from "@/data/data-solution.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
export default function CanHo2PN() {
  const [isOpen, setIsOpen] = useState(1);

  const [selected, setSelected] = useState<string>("CDL2PN");
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    // Tạo một object rỗng để lưu trữ giá trị ban đầu
    const initialQuantities: Record<string, number> = {};

    data.forEach((item) => {
      item.disc.forEach((product) => {
        product.items.forEach((items) => {
          initialQuantities[`${product.title}-${items.name}-${item.id}`] = 1;
        });
      });
    });

    return initialQuantities;
  });
  const increase = (name: string, title: string, id: string) => {
    const key = `${title}-${name}-${id}`;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [key]: prevQuantities[key] + 1,
    }));
  };

  const decrease = (name: string, title: string, id: string) => {
    const key = `${title}-${name}-${id}`;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [key]: prevQuantities[key] > 0 ? prevQuantities[key] - 1 : 0,
    }));
  };

  const resultMoney = (
    price: number,
    title: string,
    name: string,
    id: string
  ) => {
    const result = price * quantities[`${title}-${name}-${id}`];

    return result;
  };
  const calculateTotalForId = (id: string) => {
    let total = 0;
    data.forEach((item) => {
      if (item.id === id) {
        item.disc.forEach((product) => {
          product.items.forEach((item) => {
            total += resultMoney(item.price, product.title, item.name, id);
          });
        });
      }
    });
    return total;
  };
  return (
    <>
      <div className="bg-gray-100">
        <div className=" container pt-[170px] pb-[50px] max-lg:pt-[120px] max-md:pt-[100px] ">
          <h5 className="text-center text-[16px] font-medium text-gray-500 mb-[-4px]">
            Tham khảo FPT Smart Home
          </h5>
          <h1 className="text-[35px] font-semibold text-center max-md:text-[30px] ">
            Nhà Phố 3 Tầng
          </h1>
          <Tabs className="flex items-center justify-center">
            <Tab key="phong-khach" title="Phòng khách" className="my-[20px]">
              <div className="relative w-full lg:block hidden pb-10">
                <Image
                  src="/assets/images/apartment/np3t/phong-khach-1.jpg"
                  width={700}
                  height={700}
                  quality={100}
                  alt="Nhà Phố 3 Tầng"
                  className=""
                />

                <div className=" line-straight max-w-[1px] top-0 left-[780px]"></div>
                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer top-[260px] left-[571px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className=" line-pk-1  top-[269px] left-[595px]"></div>
                      <div className=" absolute right-14 top-0  max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold mt-[-40px]">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer top-[192px] left-[445px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className=" line-pk-2  top-[202px] left-[469px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer top-[190px] left-[223px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className="  line-pk-3  top-[200px] left-[247px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 4 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886013-CTCU-Athena-Den-CN4.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className="pointer top-[50px] left-[364px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className="  line-pk-4  top-[61px] left-[388px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Chuyển Động
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến chuyển động (máy phát hiện chuyển động) đây
                          là thiết bị điện thông minh với khả năng phát hiện các
                          chuyển động vật lý, từ đó bật hoặc tắt chức năng của
                          các thiết bị liên quan trong hệ thống.
                        </p>
                        <Image
                          src="/assets/images/product/1687941235-ava.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 940.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(5)}>
                  <div className="pointer top-[164px] left-[281px]"></div>
                  {isOpen === 5 && (
                    <>
                      <div className="  line-pk-5  top-[200px] left-[247px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm biến cửa
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng
                          biệt, được sử dụng để lắp đặt chủ yếu tại các khu vực
                          cửa phòng, cửa ra vào,...
                        </p>
                        <Image
                          src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 890.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="relative w-[710px] lg:hidden flex flex-col items-center justify-center  mx-auto  max-md:hidden">
                <Image
                  src="/assets/images/apartment/np3t/phong-khach-1.jpg"
                  width={750}
                  height={750}
                  quality={100}
                  alt="phòng khách"
                />

                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer top-[262px] left-[577px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className="  top-[28px] left-[42px]"></div>
                      <div className="  max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer top-[176px] left-[68px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer top-[197px] left-[260px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className="pointer top-[50px] left-[368px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Chuyển Động
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến chuyển động (máy phát hiện chuyển động) đây
                          là thiết bị điện thông minh với khả năng phát hiện các
                          chuyển động vật lý, từ đó bật hoặc tắt chức năng của
                          các thiết bị liên quan trong hệ thống.
                        </p>
                        <Image
                          src="/assets/images/product/1687941235-ava.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 940.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(5)}>
                  <div className="pointer top-[152px] left-[283px]"></div>
                  {isOpen === 5 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Cửa
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng
                          biệt, được sử dụng để lắp đặt chủ yếu tại các khu vực
                          cửa phòng, cửa ra vào,...
                        </p>
                        <Image
                          src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 890.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="relative w-[360px] hidden max-md:flex flex-col items-center justify-center  mx-auto  ">
                <Image
                  src="/assets/images/apartment/np3t/phong-khach-1.jpg"
                  width={1000}
                  height={1000}
                  quality={100}
                  alt="phòng khách"
                />
                <div onClick={() => setIsOpen(1)}>
                  <div className=" pointer-md top-[133px] left-[292px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className="  line-pk-md-1  top-[145px] left-[296px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer-md top-[91px] left-[34px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className="  line-pk-md-2  top-[104px] left-[38px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer-md top-[100px] left-[132px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className="  line-pk-md-3  top-[113px] left-[136px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className="pointer-md top-[30px] left-[188px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className="  line-pk-md-4  top-[42px] left-[192px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Chuyển Động
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến chuyển động (máy phát hiện chuyển động) đây
                          là thiết bị điện thông minh với khả năng phát hiện các
                          chuyển động vật lý, từ đó bật hoặc tắt chức năng của
                          các thiết bị liên quan trong hệ thống.
                        </p>
                        <Image
                          src="/assets/images/product/1687941235-ava.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 940.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(5)}>
                  <div className="pointer-md top-[80px] left-[145px]"></div>
                  {isOpen === 5 && (
                    <>
                      <div className="  line-pk-md-5  top-[93px] left-[149px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Cửa
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng
                          biệt, được sử dụng để lắp đặt chủ yếu tại các khu vực
                          cửa phòng, cửa ra vào,...
                        </p>
                        <Image
                          src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 890.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Tab>
            <Tab key="pn1" title="Phòng ngủ 1" className="my-[20px]">
              <div className="relative w-full lg:block hidden">
                <Image
                  src="/assets/images/apartment/1pn/phong-ngu-1.jpg"
                  width={700}
                  height={700}
                  quality={100}
                  alt="phòng ngủ 1"
                  className=""
                />

                <div className=" line-straight max-w-[1px] top-0 left-[780px]"></div>
                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer top-[20px] left-[20px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className=" line-1  top-[28px] left-[42px]"></div>
                      <div className=" absolute right-14 top-0  max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Bộ điều khiển hồng ngoại
                        </h1>
                        <p className="px-6 text-justify">
                          Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                          khiển thông minh của FPT Smart Home. Thiết bị sử dụng
                          sóng hồng ngoại để điều khiển các thiết bị như điều
                          hoà, TV, quạt… thay thế cho các loại remote truyền
                          thống.
                        </p>
                        <Image
                          src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className="mt-[-30px]"
                        />
                        <h3 className="text-[22px] font-semibold mt-[-40px]">
                          Giá: 690.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer top-[225px] left-[155px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className=" line-2  top-[234px] left-[163px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer top-[215px] left-[335px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className="  line-3  top-[225px] left-[355px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className="pointer top-[50px] left-[425px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className="  line-4  top-[61px] left-[444px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Chuyển Động
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến chuyển động (máy phát hiện chuyển động) đây
                          là thiết bị điện thông minh với khả năng phát hiện các
                          chuyển động vật lý, từ đó bật hoặc tắt chức năng của
                          các thiết bị liên quan trong hệ thống.
                        </p>
                        <Image
                          src="/assets/images/product/1687941235-ava.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 940.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(5)}>
                  <div className="pointer top-[215px] left-[563px]"></div>
                  {isOpen === 5 && (
                    <>
                      <div className="  line-5  top-[224px] left-[584px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Cửa
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng
                          biệt, được sử dụng để lắp đặt chủ yếu tại các khu vực
                          cửa phòng, cửa ra vào,...
                        </p>
                        <Image
                          src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 890.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(6)}>
                  <div className=" pointer top-[275px] left-[650px]"></div>
                  {isOpen === 6 && (
                    <>
                      <div className="  line-6  top-[285px] left-[670px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="relative w-[710px] lg:hidden flex flex-col items-center justify-center  mx-auto  max-md:hidden">
                <Image
                  src="/assets/images/apartment/1pn/phong-ngu-1.jpg"
                  width={750}
                  height={750}
                  quality={100}
                  alt="phòng ngủ 1"
                />

                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer top-[20px] left-[20px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className="  top-[28px] left-[42px]"></div>
                      <div className="  max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Bộ điều khiển hồng ngoại
                        </h1>
                        <p className="px-6 text-justify">
                          Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                          khiển thông minh của FPT Smart Home. Thiết bị sử dụng
                          sóng hồng ngoại để điều khiển các thiết bị như điều
                          hoà, TV, quạt… thay thế cho các loại remote truyền
                          thống.
                        </p>
                        <Image
                          src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className="mt-[-30px]"
                        />
                        <h3 className="text-[30px] font-semibold mt-[-40px]">
                          Giá: 690.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer top-[225px] left-[155px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer top-[215px] left-[335px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className="pointer top-[50px] left-[425px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Chuyển Động
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến chuyển động (máy phát hiện chuyển động) đây
                          là thiết bị điện thông minh với khả năng phát hiện các
                          chuyển động vật lý, từ đó bật hoặc tắt chức năng của
                          các thiết bị liên quan trong hệ thống.
                        </p>
                        <Image
                          src="/assets/images/product/1687941235-ava.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 940.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(5)}>
                  <div className="pointer top-[215px] left-[563px]"></div>
                  {isOpen === 5 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Cửa
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng
                          biệt, được sử dụng để lắp đặt chủ yếu tại các khu vực
                          cửa phòng, cửa ra vào,...
                        </p>
                        <Image
                          src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 890.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(6)}>
                  <div className=" pointer top-[275px] left-[650px]"></div>
                  {isOpen === 6 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="relative w-[360px] hidden max-md:flex flex-col items-center justify-center  mx-auto  ">
                <Image
                  src="/assets/images/apartment/1pn/phong-ngu-1.jpg"
                  width={1000}
                  height={1000}
                  quality={100}
                  alt="phòng ngủ 1"
                />

                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer-md top-[10px] left-[10px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className="  line-md-1  top-[20px] left-[15px]"></div>
                      <div className="  max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Bộ điều khiển hồng ngoại
                        </h1>
                        <p className="px-6 text-justify">
                          Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                          khiển thông minh của FPT Smart Home. Thiết bị sử dụng
                          sóng hồng ngoại để điều khiển các thiết bị như điều
                          hoà, TV, quạt… thay thế cho các loại remote truyền
                          thống.
                        </p>
                        <Image
                          src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className="mt-[-30px]"
                        />
                        <h3 className="text-[30px] font-semibold mt-[-40px]">
                          Giá: 690.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer-md top-[130px] left-[75px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className="  line-md-2  top-[141px] left-[79px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer-md top-[120px] left-[170px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className="  line-md-3  top-[132px] left-[174px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className="pointer-md top-[30px] left-[220px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className="  line-md-4  top-[42px] left-[224px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Chuyển Động
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến chuyển động (máy phát hiện chuyển động) đây
                          là thiết bị điện thông minh với khả năng phát hiện các
                          chuyển động vật lý, từ đó bật hoặc tắt chức năng của
                          các thiết bị liên quan trong hệ thống.
                        </p>
                        <Image
                          src="/assets/images/product/1687941235-ava.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 940.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(5)}>
                  <div className="pointer-md top-[120px] left-[290px]"></div>
                  {isOpen === 5 && (
                    <>
                      <div className="  line-md-5  top-[131px] left-[294px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Cảm Biến Cửa
                        </h1>
                        <p className="px-6 text-justify">
                          Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng
                          biệt, được sử dụng để lắp đặt chủ yếu tại các khu vực
                          cửa phòng, cửa ra vào,...
                        </p>
                        <Image
                          src="/assets/images/product/1668508037-Cam-Bien-Cua-Thong-Minh1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 890.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(6)}>
                  <div className=" pointer-md top-[140px] left-[330px]"></div>
                  {isOpen === 6 && (
                    <>
                      <div className="  line-md-6  top-[152px] left-[334px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Tab>
            <Tab key="pn3" title="Phòng ngủ 3" className="my-[20px]">
              <div className="relative w-full lg:block hidden">
                <Image
                  src="/assets/images/apartment/3pn/phong-ngu-3.jpg"
                  width={700}
                  height={700}
                  quality={100}
                  alt="phòng ngủ 3"
                  className=""
                />
                <div className=" line-straight max-w-[1px] top-0 left-[780px]"></div>
                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer top-[135px] left-[617px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className=" line-pn3-1  top-[145px] left-[640px]"></div>
                      <div className=" absolute right-14 top-0  max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Bộ điều khiển hồng ngoại
                        </h1>
                        <p className="px-6 text-justify">
                          Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                          khiển thông minh của FPT Smart Home. Thiết bị sử dụng
                          sóng hồng ngoại để điều khiển các thiết bị như điều
                          hoà, TV, quạt… thay thế cho các loại remote truyền
                          thống.
                        </p>
                        <Image
                          src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className="mt-[-30px]"
                        />
                        <h3 className="text-[22px] font-semibold mt-[-40px]">
                          Giá: 690.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer top-[297px] left-[192px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className=" line-pn3-2  top-[307px] left-[217px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer top-[310px] left-[611px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className="  line-pn3-3  top-[320px] left-[636px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className=" pointer top-[405px] left-[62px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className="  line-pn3-4  top-[415px] left-[87px]"></div>
                      <div className=" absolute right-14 top-0 max-w-[360px] flex flex-col items-center justify-center gap-3 ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[22px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="relative w-[710px] lg:hidden flex flex-col items-center justify-center  mx-auto  max-md:hidden">
                <Image
                  src="/assets/images/apartment/3pn/phong-ngu-3.jpg"
                  width={750}
                  height={750}
                  quality={100}
                  alt="phòng ngủ 3"
                />

                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer top-[222px] left-[403px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className="  top-[28px] left-[42px]"></div>
                      <div className="  max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Bộ điều khiển hồng ngoại
                        </h1>
                        <p className="px-6 text-justify">
                          Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                          khiển thông minh của FPT Smart Home. Thiết bị sử dụng
                          sóng hồng ngoại để điều khiển các thiết bị như điều
                          hoà, TV, quạt… thay thế cho các loại remote truyền
                          thống.
                        </p>
                        <Image
                          src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className="mt-[-30px]"
                        />
                        <h3 className="text-[30px] font-semibold mt-[-40px]">
                          Giá: 690.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer top-[307px] left-[187px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer top-[307px] left-[575px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(4)}>
                  <div className=" pointer top-[414px] left-[52px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="relative w-[320px] hidden max-md:flex flex-col items-center justify-center  mx-auto  ">
                <Image
                  src="/assets/images/apartment/3pn/phong-ngu-3.jpg"
                  width={1000}
                  height={1000}
                  quality={100}
                  alt="phòng ngủ 3"
                />

                <div className="" onClick={() => setIsOpen(1)}>
                  <div className="pointer-md top-[104px] left-[181px]"></div>
                  {isOpen === 1 && (
                    <>
                      <div className="  line-pn3-md-1  top-[116px] left-[185px]"></div>
                      <div className="  max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Bộ điều khiển hồng ngoại
                        </h1>
                        <p className="px-6 text-justify">
                          Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều
                          khiển thông minh của FPT Smart Home. Thiết bị sử dụng
                          sóng hồng ngoại để điều khiển các thiết bị như điều
                          hoà, TV, quạt… thay thế cho các loại remote truyền
                          thống.
                        </p>
                        <Image
                          src="/assets/images/product/1689753231-Bo-Dieu-Khien-Hong-Ngoai-final-3.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className="mt-[-30px]"
                        />
                        <h3 className="text-[30px] font-semibold mt-[-40px]">
                          Giá: 690.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>

                <div onClick={() => setIsOpen(2)}>
                  <div className="pointer-md top-[137px] left-[87px]"></div>
                  {isOpen === 2 && (
                    <>
                      <div className="  line-pn3-md-2  top-[149px] left-[91px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 1 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886061-CTCU-Athena-Den-CN.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 1.990.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(3)}>
                  <div className="pointer-md top-[137px] left-[256px]"></div>
                  {isOpen === 3 && (
                    <>
                      <div className="  line-pn3-md-3  top-[150px] left-[260px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px]">
                        <h1 className=" text-center text-[25px] font-semibold">
                          Công tắc cảm ứng 2 nút Chữ Nhật
                        </h1>
                        <p className="px-6 text-justify">
                          Công tắc cảm ứng (Touch switch) là loại công tắc chỉ
                          cần chạm nhẹ ngón tay lên mặt kính là có thể bật/ tắt
                          các thiết bị điện trong gia đình
                        </p>
                        <Image
                          src="/assets/images/product/1693886051-CTCU-Athena-Den-CN1.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.290.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <div onClick={() => setIsOpen(4)}>
                  <div className=" pointer-md top-[186px] left-[28px]"></div>
                  {isOpen === 4 && (
                    <>
                      <div className="  line-pn3-md-4  top-[199px] left-[33px]"></div>
                      <div className=" max-w-[600px] flex flex-col items-center justify-center gap-3 mt-[50px] ">
                        <h1 className=" text-center text-[25px] font-semibold">
                          FPT Play Box S
                        </h1>
                        <p className="px-6 text-justify">
                          Điều khiển tất cả thiết bị bằng giọng nói. Mang cả vũ
                          trụ điện ảnh trên khắp Thế Giới đến ngay tại ngôi nhà
                          thân yêu của bạn
                        </p>
                        <Image
                          src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                          width={250}
                          height={200}
                          quality={100}
                          alt=""
                          className=""
                        />
                        <h3 className="text-[30px] font-semibold ">
                          Giá: 2.400.000 VNĐ
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      <div className="container flex flex-col  pt-[50px] pb-[100px] max-md:pb-[30px] ">
        <Tabs
          aria-label="Dynamic tabs"
          items={data}
          className="flex justify-center"
          selectedKey={selected}
          onSelectionChange={(e) => setSelected(e as string)}
        >
          {data.map((items, index) => (
            <Tab key={items.id} title={items.name} className=" ">
              <Card>
                <CardBody>
                  <Table className="relative max-h-[500px]">
                    <TableHeader>
                      <TableColumn>Khu vực</TableColumn>
                      <TableColumn className="w-[350px]">
                        Tên sản phẩm
                      </TableColumn>
                      <TableColumn className="w-[140px] max-md:hidden">
                        Đơn giá
                      </TableColumn>
                      <TableColumn className="w-[140px]">Số lượng</TableColumn>
                      <TableColumn className="w-[140px]">
                        Thành tiền
                      </TableColumn>
                    </TableHeader>
                    <TableBody>
                      {items.disc.map((product, index) => (
                        <TableRow
                          key={index}
                          className="border-[1px] border-black"
                        >
                          <TableCell className="max-w-[100px] max-md:min-w-[100px]">
                            {product.title}
                          </TableCell>
                          <TableCell className="border-[1px] border-black">
                            {product.items.map((item, index) => (
                              <div
                                key={index}
                                className="py-4 max-md:min-w-[300px]"
                              >
                                {item.name}
                              </div>
                            ))}
                          </TableCell>
                          <TableCell className="max-md:hidden">
                            {product.items.map((item, index) => (
                              <div
                                key={index}
                                className="py-4 flex items-center justify-center"
                              >
                                {item.price.toLocaleString()}
                              </div>
                            ))}
                          </TableCell>
                          <TableCell className=" border-[1px] border-black ">
                            {product.items.map((item, index) => (
                              <div
                                key={index}
                                className=" flex items-center justify-center gap-2 py-4"
                              >
                                <button
                                  onClick={() =>
                                    decrease(item.name, product.title, items.id)
                                  }
                                >
                                  -
                                </button>
                                {
                                  quantities[
                                    `${product.title}-${item.name}-${items.id}`
                                  ]
                                }
                                <button
                                  onClick={() =>
                                    increase(item.name, product.title, items.id)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>
                            {product.items.map((item, index) => (
                              <div
                                key={index}
                                className="py-4 flex items-center justify-center"
                              >
                                {resultMoney(
                                  item.price,
                                  product.title,
                                  item.name,
                                  items.id
                                ).toLocaleString()}
                              </div>
                            ))}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="text-center py-5 px-4">
                    <h1 className="text-[30px] font-semibold text-red-700 max-md:text-[25px]">
                      Tổng tiền:{" "}
                      {calculateTotalForId(items.id).toLocaleString()} VNĐ
                    </h1>
                    <h3 className="text-[20px] font-semibold max-md:text-[15px]">
                      Lưu ý:
                    </h3>
                    <h4 className="max-md:text-[15px]">
                      Bảng báo giá chỉ tham khảo chưa bao gồm VAT và chi phí lắp
                      đặt.
                    </h4>
                    <h4 className="max-md:text-[15px]">
                      Số Lượng Thiết Bị sẽ tùy thuộc vào thực tế công trình.
                    </h4>
                    <h4 className="max-md:text-[15px]">
                      Chi phí có thể giảm hoặc tăng tùy theo thực tế
                    </h4>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </div>
      <div className="w-full pb-[100px] py-10 px-10 bg-gray-100 flex flex-col items-center justify-center gap-6 max-lg:mt-[50px] max-md:mt-[-10px] max-md:px-4">
        <div>
          <h5 className="text-center text-[16px] font-medium text-gray-500 mb-[-4px]">
            Tham khảo FPT Smart Home
          </h5>
          <h1 className="text-center text-[35px] font-semibold mb-8 max-md:text-[30px] px-10">
            Toàn cảnh Phòng khách
          </h1>
        </div>

        <Image
          src="/assets/images/apartment/np3t/phong-khach-1.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng khách"
          className=""
        />
        <Image
          src="/assets/images/apartment/np3t/phong-khach-2.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng khách"
          className=""
        />
        <Image
          src="/assets/images/apartment/np3t/phong-khach-3.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng khách"
          className=""
        />
        <Image
          src="/assets/images/apartment/np3t/phong-khach-4.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng khách"
          className=""
        />
      </div>
      <div className="w-full pb-[100px] py-10 px-10 bg-gray-100 flex flex-col items-center justify-center gap-6 max-lg:mt-[50px] max-md:mt-[-10px] max-md:px-4">
        <div>
          <h5 className="text-center text-[16px] font-medium text-gray-500 mb-[-4px]">
            Tham khảo FPT Smart Home
          </h5>
          <h1 className="text-center text-[35px] font-semibold mb-8 max-md:text-[30px] px-10">
            Toàn cảnh Phòng Ngủ 1
          </h1>
        </div>

        <Image
          src="/assets/images/apartment/1pn/phong-ngu-2.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 1"
          className=""
        />
        <Image
          src="/assets/images/apartment/1pn/phong-ngu-4.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 1"
          className=""
        />
        <Image
          src="/assets/images/apartment/1pn/phong-ngu-5.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 1"
          className=""
        />
        <Image
          src="/assets/images/apartment/1pn/phong-ngu-6.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 1"
          className=""
        />
      </div>
      <div className="w-full pb-[100px] py-10 px-10 bg-gray-100 flex flex-col items-center justify-center gap-6 max-lg:mt-[50px] max-md:mt-[-10px] max-md:px-4">
        <div>
          <h5 className="text-center text-[16px] font-medium text-gray-500 mb-[-4px]">
            Tham khảo FPT Smart Home
          </h5>
          <h1 className="text-center text-[35px] font-semibold mb-8 max-md:text-[30px] px-10">
            Toàn cảnh Phòng Ngủ 2
          </h1>
        </div>

        <Image
          src="/assets/images/apartment/3pn/phong-ngu-1.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 2"
          className=""
        />
        <Image
          src="/assets/images/apartment/3pn/phong-ngu-2.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 2"
          className=""
        />
        <Image
          src="/assets/images/apartment/3pn/phong-ngu-3.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 2"
          className=""
        />
        <Image
          src="/assets/images/apartment/3pn/phong-ngu-4.jpg"
          width={1000}
          height={1000}
          quality={100}
          alt="Toàn cảnh Phòng Ngủ 2"
          className=""
        />
      </div>
      <div className=" bg-white py-[100px]">
        <div className="container">
          <div className="text-center flex flex-col items-center justify-center ">
            <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
              Tham khảo FPT Smart Home
            </h4>
            <h2 className=" text-[48px] text-slate-800 font-semibold max-w-[800px] mb-[50px] text-center max-md:text-[25px]">
              Tham khảo những căn hộ khác
            </h2>
          </div>
          <Carousel
            className="flex items-center justify-center max-md:mx-10"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="flex items-center justify-start gap-2  ">
              <CarouselItem className="basis-1/3 max-md:basis-full flex flex-col items-center gap-8">
                <div className=" w-[350px] h-[350px] overflow-hidden ">
                  <Image
                    src="/assets/images/apartment/1pn/phong-ngu-6.jpg"
                    width={468}
                    height={468}
                    alt=" Căn hộ 1 Phòng Ngủ"
                    className="object-fill"
                  />
                </div>

                <h2 className="text-center text-h5 font-semibold">
                  Căn hộ 1 Phòng Ngủ
                </h2>
                <Button className="bg-white border-[2px] border-orange-500 text-orange-500 hover:bg-gray-100">
                  <Link href="/can-ho-mau/can-ho-1pn">Xem thêm</Link>
                </Button>
              </CarouselItem>
              <CarouselItem className=" basis-1/3 max-md:basis-full flex flex-col items-center gap-8">
                <div className=" w-[350px] h-[350px] overflow-hidden">
                  <Image
                    src="/assets/images/apartment/2pn/phong-ngu-6.png"
                    width={468}
                    height={468}
                    alt="Căn hộ 2 phòng ngủ"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-center text-h5 font-semibold">
                  Căn hộ 2 phòng ngủ
                </h2>
                <Button className="bg-white border-[2px] border-orange-500 text-orange-500 hover:bg-gray-100">
                  <Link href="/can-ho-mau/can-ho-2pn">Xem thêm</Link>
                </Button>
              </CarouselItem>
              <CarouselItem className="basis-1/3 max-md:basis-full flex flex-col items-center gap-8">
                <div className=" w-[350px] h-[350px] overflow-hidden">
                  <Image
                    src="/assets/images/apartment/3pn/phong-ngu-2.jpg"
                    width={468}
                    height={468}
                    alt="Căn hộ 3 phòng ngủ"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-center text-h5 font-semibold">
                  Căn hộ 3 phòng ngủ
                </h2>
                <Button className="bg-white border-[2px] border-orange-500 text-orange-500 hover:bg-gray-100">
                  <Link href="/can-ho-mau/can-ho-3pn">Xem thêm</Link>
                </Button>
              </CarouselItem>
              <CarouselItem className=" basis-1/3 max-md:basis-full flex flex-col items-center gap-8">
                <div className=" w-[350px] h-[350px] overflow-hidden">
                  <Image
                    src="/assets/images/apartment/np3t/phong-khach-4.jpg"
                    width={468}
                    height={468}
                    alt="Nhà phố 3 tầng"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-center text-h5 font-semibold">
                  Nhà phố 3 tầng
                </h2>
                <Button className="bg-white border-[2px] border-orange-500 text-orange-500 hover:bg-gray-100">
                  <Link href="/can-ho-mau/nha-pho-3-tang">Xem thêm</Link>
                </Button>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
