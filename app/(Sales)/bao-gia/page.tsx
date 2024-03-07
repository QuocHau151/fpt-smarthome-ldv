"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Footer from "@/components/footer/page";
import { Helmet } from "react-helmet";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import data from "@/data/data-solution.json";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
interface TabItem {
  id: string;
  name: string;
  disc: Product[];
}

interface Product {
  title: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  price: number;
}

export default function BaoGia() {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");
  const [selected, setSelected] = useState<string>(param as string);
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
    console.log(quantities[`${title}-${name}-${id}`]);
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
      <Helmet>
        <title>Báo giá nhà thông minh</title>
        <meta
          name="description"
          content="Báo giá nhà thông minh cho các sản phẩm FPT Smart Home"
        />
      </Helmet>
      <div className="">
        <div className="bg-[url('/assets/images/thumnail/consultant-banner.webp')] w-full h-[700px] bg-cover bg-no-repeat bg-center mt-[123px] max-lg:mt-[70px] max-md:mt-[60px] relative max-lg:h-[500px] max-md:h-[200px] 2xl:h-[900px]">
          <div className="absolute right-[200px] top-[150px] max-w-[550px] max-lg:right-[50px]  max-lg:top-[50px] max-lg:max-w-[450px] max-md:hidden">
            <h1 className="text-orange-500 text-center text-[24px] font-semibold mb-6 max-lg:text-[18px] max-md:text-[15px] max-md:mb-2">
              ĐIỀU KHIỂN NGÔI NHÀ CỦA BẠN TỪ XA CHỈ VỚI MỘT CHẠM
            </h1>
            <h2 className="text-white text-center px-10 mb-[100px] max-lg:text-[15px] max-lg:mb-10 max-md:text-[10px] max-md:px-2 max-md:mb-2">
              Dễ dàng bật tắt - lập lịch hoạt động cho thiết bị với hệ thống Nhà
              thông minh FPT Smart Home
            </h2>
            <div className="bg-white max-w-[550px] h-min p-6 rounded-xl drop-shadow-lg max-lg:max-w-full">
              <h1 className="text-center text-slate-800 font-semibold text-[20px] border-b-[1px] border-black w-full pb-6 max-md:text-[15px] max-md:pb-2">
                NHẬN TƯ VẤN & BÁO GIÁ MIỄN PHÍ
              </h1>
              <div className="py-6 flex items-center justify-center gap-3 max-lg:text-[14px] max-md:flex-col">
                <Button className="flex items-center bg-slate-600 h-12">
                  <h1 className="px-4 border-r-[1px] border-white text-[20px] max-md:text-[12px]">
                    Zalo
                  </h1>

                  <h1 className="px-4 ">0901 237 451</h1>
                </Button>
                <Button className="flex items-center bg-slate-600 h-12">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 43 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5639 28.7852C32.285 28.4631 31.9401 28.2047 31.5526 28.0277C31.1651 27.8506 30.744 27.759 30.3179 27.759C29.8918 27.759 29.4708 27.8506 29.0833 28.0277C28.6957 28.2047 28.3508 28.4631 28.0719 28.7852C27.0219 29.8262 25.9719 30.8682 24.9389 31.9272C24.8927 31.9946 24.8337 32.0522 24.7651 32.0967C24.6966 32.1413 24.6199 32.1718 24.5395 32.1866C24.4591 32.2014 24.3766 32.2001 24.2967 32.1829C24.2168 32.1656 24.1411 32.1328 24.0739 32.0862C23.3939 31.7152 22.6739 31.4152 22.0179 31.0092C19.0259 29.0722 16.3722 26.6571 14.1629 23.8601C13.0133 22.4998 12.0653 20.9813 11.3479 19.3512C11.2703 19.2168 11.2437 19.059 11.2729 18.9066C11.3021 18.7542 11.3851 18.6173 11.5069 18.5212C12.5569 17.5062 13.5809 16.4651 14.6129 15.4211C14.9514 15.1407 15.2237 14.7889 15.4103 14.3909C15.597 13.9929 15.6933 13.5586 15.6924 13.119C15.6916 12.6795 15.5935 12.2455 15.4054 11.8483C15.2172 11.451 14.9435 11.1003 14.6039 10.8212C13.7839 9.99217 12.9629 9.18016 12.1419 8.35016C11.2949 7.50316 10.4559 6.65015 9.59992 5.80915C9.31874 5.49032 8.97279 5.23514 8.58518 5.06058C8.19757 4.88603 7.77721 4.79612 7.35211 4.79688C6.92701 4.79764 6.50695 4.88904 6.11997 5.06498C5.73298 5.24091 5.38796 5.49732 5.10791 5.81714C4.04891 6.85914 3.03392 7.92717 1.95792 8.95017C0.998194 9.8509 0.42263 11.0869 0.350924 12.4012C0.259046 14.5565 0.644899 16.7055 1.4809 18.6942C3.07214 22.8253 5.3686 26.6487 8.26792 29.9941C12.0805 34.5664 16.8217 38.2757 22.1769 40.8762C24.5672 42.1324 27.1859 42.8945 29.8769 43.1172C30.7731 43.2192 31.6806 43.105 32.5236 42.7842C33.3666 42.4634 34.1204 41.9452 34.7219 41.2732C35.6219 40.2672 36.6369 39.3492 37.5899 38.3871C37.9224 38.1068 38.19 37.7576 38.3741 37.3636C38.5582 36.9696 38.6545 36.5402 38.6562 36.1053C38.6579 35.6704 38.565 35.2404 38.384 34.8449C38.203 34.4495 37.9382 34.0981 37.6079 33.8152C35.9306 32.1305 34.2479 30.4508 32.5599 28.7762"
                      fill="white"
                    ></path>
                    <path
                      d="M30.878 21.7522L34.135 21.1962C33.6099 18.1449 32.1295 15.3391 29.9073 13.1833C27.6851 11.0274 24.8358 9.6327 21.77 9.2002L21.311 12.4752C23.6828 12.8078 25.8875 13.8854 27.6071 15.5525C29.3266 17.2196 30.472 19.3899 30.878 21.7502"
                      fill="white"
                    ></path>
                    <path
                      d="M35.9699 7.60046C32.2581 3.86154 27.4194 1.44747 22.1999 0.730469L21.7439 4.00046C26.1378 4.61856 30.222 6.61544 33.4083 9.70343C36.5946 12.7914 38.7185 16.8111 39.4739 21.1835L42.7299 20.6275C41.8817 15.687 39.5195 11.1321 35.9699 7.59247"
                      fill="white"
                    ></path>
                  </svg>

                  <h1 className="px-4 ">0901 237 451</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:block max-md:px-12 mb-10 md:hidden">
          <h1 className="text-orange-500 text-center text-[24px] font-semibold mb-6 max-lg:text-[18px] max-md:text-[15px] max-md:mb-2 ">
            ĐIỀU KHIỂN NGÔI NHÀ CỦA BẠN TỪ XA CHỈ VỚI MỘT CHẠM
          </h1>
          <h2 className="text-white text-center px-10 mb-[100px] max-lg:text-[15px] max-lg:mb-10 max-md:text-[10px] max-md:px-2 max-md:mb-2 max-md:text-black">
            Dễ dàng bật tắt - lập lịch hoạt động cho thiết bị với hệ thống Nhà
            thông minh FPT Smart Home
          </h2>
          <div className="bg-white max-w-[550px] h-min p-6 rounded-xl drop-shadow-lg max-lg:max-w-full">
            <h1 className="text-center text-slate-800 font-semibold text-[20px] border-b-[1px] border-black w-full pb-6 max-md:text-[15px] max-md:pb-2">
              NHẬN TƯ VẤN & BÁO GIÁ MIỄN PHÍ
            </h1>
            <div className="py-6 flex items-center justify-center gap-3 max-lg:text-[14px] max-md:flex-col">
              <Button className="w-[200px] flex items-center bg-slate-600 h-12">
                <h1 className="px-4 border-r-[1px] border-white text-[20px] max-md:text-[12px]">
                  Zalo
                </h1>
                <h1 className="px-4 ">0901 237 451</h1>
              </Button>
              <Button className=" w-[200px] flex items-center bg-slate-600 h-12">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 43 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.5639 28.7852C32.285 28.4631 31.9401 28.2047 31.5526 28.0277C31.1651 27.8506 30.744 27.759 30.3179 27.759C29.8918 27.759 29.4708 27.8506 29.0833 28.0277C28.6957 28.2047 28.3508 28.4631 28.0719 28.7852C27.0219 29.8262 25.9719 30.8682 24.9389 31.9272C24.8927 31.9946 24.8337 32.0522 24.7651 32.0967C24.6966 32.1413 24.6199 32.1718 24.5395 32.1866C24.4591 32.2014 24.3766 32.2001 24.2967 32.1829C24.2168 32.1656 24.1411 32.1328 24.0739 32.0862C23.3939 31.7152 22.6739 31.4152 22.0179 31.0092C19.0259 29.0722 16.3722 26.6571 14.1629 23.8601C13.0133 22.4998 12.0653 20.9813 11.3479 19.3512C11.2703 19.2168 11.2437 19.059 11.2729 18.9066C11.3021 18.7542 11.3851 18.6173 11.5069 18.5212C12.5569 17.5062 13.5809 16.4651 14.6129 15.4211C14.9514 15.1407 15.2237 14.7889 15.4103 14.3909C15.597 13.9929 15.6933 13.5586 15.6924 13.119C15.6916 12.6795 15.5935 12.2455 15.4054 11.8483C15.2172 11.451 14.9435 11.1003 14.6039 10.8212C13.7839 9.99217 12.9629 9.18016 12.1419 8.35016C11.2949 7.50316 10.4559 6.65015 9.59992 5.80915C9.31874 5.49032 8.97279 5.23514 8.58518 5.06058C8.19757 4.88603 7.77721 4.79612 7.35211 4.79688C6.92701 4.79764 6.50695 4.88904 6.11997 5.06498C5.73298 5.24091 5.38796 5.49732 5.10791 5.81714C4.04891 6.85914 3.03392 7.92717 1.95792 8.95017C0.998194 9.8509 0.42263 11.0869 0.350924 12.4012C0.259046 14.5565 0.644899 16.7055 1.4809 18.6942C3.07214 22.8253 5.3686 26.6487 8.26792 29.9941C12.0805 34.5664 16.8217 38.2757 22.1769 40.8762C24.5672 42.1324 27.1859 42.8945 29.8769 43.1172C30.7731 43.2192 31.6806 43.105 32.5236 42.7842C33.3666 42.4634 34.1204 41.9452 34.7219 41.2732C35.6219 40.2672 36.6369 39.3492 37.5899 38.3871C37.9224 38.1068 38.19 37.7576 38.3741 37.3636C38.5582 36.9696 38.6545 36.5402 38.6562 36.1053C38.6579 35.6704 38.565 35.2404 38.384 34.8449C38.203 34.4495 37.9382 34.0981 37.6079 33.8152C35.9306 32.1305 34.2479 30.4508 32.5599 28.7762"
                    fill="white"
                  ></path>
                  <path
                    d="M30.878 21.7522L34.135 21.1962C33.6099 18.1449 32.1295 15.3391 29.9073 13.1833C27.6851 11.0274 24.8358 9.6327 21.77 9.2002L21.311 12.4752C23.6828 12.8078 25.8875 13.8854 27.6071 15.5525C29.3266 17.2196 30.472 19.3899 30.878 21.7502"
                    fill="white"
                  ></path>
                  <path
                    d="M35.9699 7.60046C32.2581 3.86154 27.4194 1.44747 22.1999 0.730469L21.7439 4.00046C26.1378 4.61856 30.222 6.61544 33.4083 9.70343C36.5946 12.7914 38.7185 16.8111 39.4739 21.1835L42.7299 20.6275C41.8817 15.687 39.5195 11.1321 35.9699 7.59247"
                    fill="white"
                  ></path>
                </svg>
                <h1 className="px-4 ">0901 237 451</h1>
              </Button>
            </div>
          </div>
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
            <Tab key={items.id} title={items.name} className="">
              <Card>
                <CardBody>
                  <Table className="">
                    <TableHeader>
                      <TableColumn>Khu vực</TableColumn>
                      <TableColumn>Tên sản phẩm</TableColumn>
                      <TableColumn>Đơn giá</TableColumn>
                      <TableColumn>Số lượng</TableColumn>
                      <TableColumn>Thành tiền</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {items.disc.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell className="max-w-[150px] max-md:min-w-[100px]">
                            {product.title}
                          </TableCell>
                          <TableCell>
                            {product.items.map((item, index) => (
                              <div
                                key={index}
                                className="py-4  max-md:min-w-[300px]"
                              >
                                {item.name}
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>
                            {product.items.map((item, index) => (
                              <div key={index} className="py-4">
                                {item.price.toLocaleString()}
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>
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
                              <div key={index} className="py-4">
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
                      Bảng báo giá tham khảo.
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

      <div className="container flex w-full flex-col items-center"></div>
      <div className="container flex flex-col items-center gap-20 mb-[100px]  max-lg:px-10 max-md:gap-6 max-md:mb-14">
        <h1 className="text-orange-600 text-[40px] text-center font-semibold max-lg:text-[30px] max-lg:px-8 max-md:text-[18px]">
          KHÁM PHÁ CUỘC SỐNG TRONG NGÔI NHÀ THÔNG MINH
        </h1>
        <iframe
          className="w-[800px] h-[450px] max-lg:w-full max-lg:h-[400px] max-md:h-[300px]"
          src="https://www.youtube.com/embed/Ou_KpybURbo?si=4ms4BtIn_aS4PFZK"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <div className="flex items-center justify-around w-full max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-4">
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[80px] h-[80px]  max-md:w-[60px] max-md:h-[60px]"
              viewBox="0 -960 960 960"
              preserveAspectRatio="none"
              fill="rgba(233, 91, 11, 1)"
            >
              <path d="M450-770v-150h60v150h-60Zm256 106-42-42 106-107 42 43-106 106Zm64 214v-60h150v60H770ZM450-40v-150h60v150h-60ZM253-665 148-770l42-42 106 106-43 41Zm518 517L664-254l41-41 108 104-42 43ZM40-450v-60h150v60H40Zm151 302-43-42 105-105 22 20 22 21-106 106Zm289-92q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-60q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-180Z"></path>
            </svg>
            <h3 className="text-[20px] font-semibold mb-2 max-md:text-[15px]">
              Chào buổi sáng
            </h3>
            <h5 className="text-center max-md:text-[12px]">
              Rèm tự động mở <br /> Điều hòa tắt
            </h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-[80px] h-[80px]  max-md:w-[60px] max-md:h-[60px]"
              viewBox="0 -960 960 960"
              preserveAspectRatio="none"
              fill="rgba(244, 64, 37, 1.0)"
            >
              <path d="M413-102v-227l57-168q2-7 8-12t17-5h303q11 0 16.5 4.5T823-497l57 168v227q0 9.308-6.346 15.654T858-80h-22.256Q827-80 820.5-86.346T814-102v-45H479v45q0 9.308-6.346 15.654T457-80h-22.256Q426-80 419.5-86.346T413-102Zm53-257h361l-38-115H504l-38 115Zm-13 40v132-132Zm67 106q16.575 0 27.787-11.212Q559-235.425 559-252q0-16.575-11.213-27.788Q536.575-291 520-291t-27.788 11.212Q481-268.575 481-252q0 16.575 11.212 27.788Q503.425-213 520-213Zm253 0q16.575 0 27.787-11.212Q812-235.425 812-252q0-16.575-11.213-27.788Q789.575-291 773-291t-27.787 11.212Q734-268.575 734-252q0 16.575 11.213 27.788Q756.425-213 773-213ZM240-388v-73h73v73h-73Zm207-259v-73h73v73h-73ZM240-234v-73h73v73h-73Zm0 154v-73h73v73h-73ZM80-80v-541h207v-259h393v260h-60v-200H347v259H140v481H80Zm373-107h387v-132H453v132Z"></path>
            </svg>
            <h3 className="text-[20px] font-semibold mb-2 max-md:text-[15px]">
              Ra ngoài
            </h3>
            <h5 className="text-center max-md:text-[12px]">
              Rèm tự động đóng <br /> Các thiết bị điện tắt
            </h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-[80px] h-[80px]  max-md:w-[60px] max-md:h-[60px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              preserveAspectRatio="none"
              fill="rgba(244, 64, 37, 1.0)"
            >
              <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"></path>
            </svg>
            <h3 className="text-[20px] font-semibold mb-2 max-md:text-[15px]">
              Về nhà
            </h3>
            <h5 className="text-center max-md:text-[12px]">
              Rèm tự động mở <br /> Đèn phòng khách sáng
            </h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-[80px] h-[80px]  max-md:w-[60px] max-md:h-[60px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              preserveAspectRatio="none"
              fill="rgba(244, 64, 37, 1.0)"
            >
              <path d="M374-820q-20 0-41 2t-32 5q64 72 98 157t34 176q0 91-34 176.5T302-148q11 3 31 5.5t43 2.5q140.066 0 238.533-98Q713-336 713-480t-99.5-242Q514-820 374-820Zm8-60q80.825 0 151.913 30.5Q605-819 658.5-765.5t84 126.5Q773-566 773-481t-30.947 158.287q-30.948 73.288-84 127.5Q605-141 533.594-110.5 462.188-80 381-80q-54.377 0-106.188-13Q223-106 188-126q88-66 136.5-158T373-479.5Q373-583 324-676T187-833q35-20 87.468-33.5Q326.935-880 382-880Zm51 401Z"></path>
            </svg>
            <h3 className="text-[20px] font-semibold mb-2 max-md:text-[15px]">
              Đi ngủ
            </h3>
            <h5 className="text-center max-md:text-[12px]">
              Đóng rèm <br /> Tắt đèn chính bật đèn ngủ
            </h5>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-20 mb-[100px] max-lg:gap-10 max-md:mb-[50px]">
        <h1 className="text-orange-600 text-[40px] text-center font-semibold max-lg:text-[30px] max-lg:px-10 max-md:text-[20px]">
          LỢI ÍCH FPT SMART HOME MANG LẠI
          <hr className="w-40 h-[3px] bg-orange-500 mx-auto m-8 max-md:my-2" />
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-10  max-lg:gap-4 max-md:grid-cols-1 max-md:grid-rows-4   ">
          <div className="flex  gap-6 items-center justify-center p-10 border-[1px] border-gray-400 bg-gray-50 max-md:p-0 ">
            <svg viewBox="0 0 128 128" width="200" height="100">
              <path
                d="M102 6a2 2 0 0 0 2-2V2a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2zm-2 28a2 2 0 1 0 4 0v-2a2 2 0 0 0-4 0zm18-14a2 2 0 0 0 0-4h-2a2 2 0 0 0 0 4zm-32-4a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4zm25.9-10.728-1.415 1.415a2 2 0 1 0 2.828 2.828l1.415-1.414a2 2 0 1 0-2.829-2.829zM90.686 26.486 89.272 27.9a2 2 0 1 0 2.829 2.828l1.414-1.414a2 2 0 0 0-2.828-2.828zm19.798 0a2 2 0 0 0 0 2.828l1.414 1.414a2 2 0 0 0 2.829-2.828l-1.415-1.414a2 2 0 0 0-2.828 0zm-16.97-19.8L92.1 5.273a2 2 0 0 0-2.829 2.829l1.415 1.414a2 2 0 0 0 2.828-2.828zM100 18a2 2 0 0 0 2 2h6a2 2 0 0 0 0-4h-4v-4a2 2 0 0 0-4 0zm26 69h-6V69a6.007 6.007 0 0 0-6-6H93.98a6.935 6.935 0 0 0-1.533-3.876L83.959 48.61a6.809 6.809 0 0 0-7.627-2.128 14.95 14.95 0 0 1 1.838 3.644 2.862 2.862 0 0 1 .74-.042 2.799 2.799 0 0 1 1.937 1.037l8.487 10.516a3 3 0 0 1-.513 4.269l-10.92 8.346a2 2 0 0 0-.786 1.588V94.79a7.245 7.245 0 0 0-1.302-.512 7.168 7.168 0 0 0-8.392 3.723h-6.842a7.169 7.169 0 0 0-8.391-3.723 7.247 7.247 0 0 0-1.188.46V75.84a2 2 0 0 0-.786-1.588l-10.92-8.346a3.002 3.002 0 0 1-.513-4.269l8.488-10.516a2.799 2.799 0 0 1 1.937-1.037 2.873 2.873 0 0 1 .632.019 14.955 14.955 0 0 1 1.856-3.654 6.816 6.816 0 0 0-7.538 2.16l-8.488 10.516A6.94 6.94 0 0 0 34.135 63H14a6.007 6.007 0 0 0-6 6v18H2a2 2 0 0 0-2 2v28a4.004 4.004 0 0 0 4 4h12a4.004 4.004 0 0 0 4-4v-3h30.42l2.544 8.836a7.157 7.157 0 0 0 11.042 3.826A7.07 7.07 0 0 0 68.154 128a7.167 7.167 0 0 0 6.882-5.164L77.58 114H108v3a4.004 4.004 0 0 0 4 4h12a4.004 4.004 0 0 0 4-4V89a2 2 0 0 0-2-2zM4 117V91h12l.002 26zm14-30h-6V69a2.002 2.002 0 0 1 2-2h21.036a6.989 6.989 0 0 0 1.83 2.082L47 76.828V98H20v-9a2 2 0 0 0-2-2zm2 23v-8h27.061a7.177 7.177 0 0 0 .218 1.102l1.988 6.899zm42.608 12.377a3.165 3.165 0 0 1-5.8-.649l-5.685-19.733a3.091 3.091 0 0 1 .269-2.37 3.133 3.133 0 0 1 1.893-1.501 3.165 3.165 0 0 1 3.907 2.15l5.685 19.733a3.091 3.091 0 0 1-.27 2.37zM64 109.455l-2.148-7.454h4.296zm12.877-7.46-5.685 19.733a3.125 3.125 0 0 1-4.708 1.78 7.051 7.051 0 0 0 .237-4.609l-.64-2.219 4.727-16.407a3.165 3.165 0 0 1 5.8-.648 3.091 3.091 0 0 1 .269 2.37zM108 110H78.733l1.988-6.899a7.177 7.177 0 0 0 .218-1.101H108zm2-23a2 2 0 0 0-2 2v9H81.115V76.828l10.135-7.745A6.983 6.983 0 0 0 93.079 67H114a2.002 2.002 0 0 1 2 2v18zm2 30V91h12l.002 26z"
                fill="#545454"
              ></path>
              <path
                d="M75 61v-6a11 11 0 1 0-22 0v6a11 11 0 1 0 22 0zm-4 0a7 7 0 1 1-14 0v-6a7 7 0 1 1 14 0zm9.757-.142L79 58.333V61a14.933 14.933 0 0 1-.59 4.126l1.955-1.564a2 2 0 0 0 .392-2.704zm-33.399 0a2 2 0 0 0 .392 2.704l1.81 1.448A14.928 14.928 0 0 1 49 61V58.5z"
                fill="#545454"
              ></path>
              <circle cx="64" cy="78.001" r="2" fill="#545454"></circle>
              <circle cx="64" cy="84.001" r="2" fill="#545454"></circle>
            </svg>
            <div className="">
              <h3 className="text-[22px] font-semibold max-md:text-[15px] ">
                Thoải Mái
              </h3>
              <p className="text-slate-700 font-medium max-md:text-[10px]">
                Mang lại trải nghiệm sống thoải mái cho người dùng bằng cách tự
                động hóa các hoạt động hàng ngày.
              </p>
            </div>
          </div>
          <div className="flex  gap-6 items-center justify-center p-10 border-[1px] border-gray-400 bg-gray-50">
            <svg viewBox="0 0 64 64" width="200" height="100">
              <path
                d="M25.97 60.48h-7.41a.85.85 0 0 1-.85-.85v-4.24a17.55 17.55 0 0 1-4.43-1.83l-2.92 2.96c-.16.16-.38.25-.61.25-.23 0-.45-.09-.61-.25L3.9 51.2a.851.851 0 0 1 0-1.2l2.87-2.91c-.86-1.43-1.51-2.97-1.94-4.58H.85a.85.85 0 0 1-.85-.85v-7.52c0-.47.38-.85.85-.85h3.82c.4-1.68 1.03-3.29 1.89-4.79L3.9 25.81a.851.851 0 0 1 0-1.2l5.24-5.33c.16-.16.38-.26.61-.26.23 0 .45.09.61.26l2.57 2.61c1.49-.92 3.09-1.6 4.78-2.04v-3.67c0-.47.38-.85.85-.85h7.4c.47 0 .85.38.85.85v3.67c.68.18 1.35.39 1.98.65.44.18.65.67.48 1.11a.86.86 0 0 1-1.11.48c-.76-.3-1.56-.55-2.38-.73a.855.855 0 0 1-.67-.83v-3.49h-5.7v3.49c0 .4-.28.75-.67.83-1.95.42-3.79 1.21-5.46 2.33-.34.23-.8.18-1.09-.11L9.75 21.1l-4.04 4.11 2.53 2.56c.28.28.33.71.12 1.05a16.417 16.417 0 0 0-2.15 5.48c-.08.4-.43.69-.84.69H1.71v5.81h3.78c.4 0 .74.28.83.67.42 1.88 1.18 3.65 2.24 5.27.22.34.18.78-.11 1.07L5.71 50.6l4.04 4.1 2.79-2.83c.28-.29.73-.34 1.07-.12 1.57 1 3.3 1.72 5.14 2.12.39.09.67.43.67.83v4.06h5.7V54.7c0-.4.28-.75.67-.83 1.83-.4 3.56-1.11 5.14-2.12.34-.21.78-.17 1.07.12l2.79 2.83 4.04-4.1-2.75-2.78a.862.862 0 0 1-.11-1.07c1.05-1.62 1.81-3.4 2.24-5.28.09-.39.43-.66.83-.66h3.77v-1.28a.85.85 0 1 1 1.7 0v2.13c0 .47-.38.85-.85.85H39.7c-.44 1.61-1.09 3.15-1.94 4.58l2.87 2.9c.33.33.33.87 0 1.2l-5.24 5.31c-.32.32-.89.33-1.22 0l-2.92-2.96a17.31 17.31 0 0 1-4.43 1.82v4.24c0 .5-.38.88-.85.88zm-3.71-13.53c-4.92 0-8.92-4.05-8.92-9.04 0-4.98 4-9.04 8.92-9.04s8.92 4.05 8.92 9.04c0 4.98-4 9.04-8.92 9.04zm0-16.37c-3.98 0-7.21 3.29-7.21 7.33s3.24 7.33 7.21 7.33 7.21-3.29 7.21-7.33c.01-4.04-3.23-7.33-7.21-7.33z"
                fill="#545454"
              ></path>
              <path
                d="M48.82 40.39h-6a.85.85 0 0 1-.85-.85v-3.31c-1.19-.32-2.32-.79-3.39-1.41l-2.28 2.31c-.16.16-.38.25-.61.25-.23 0-.45-.09-.61-.25l-4.24-4.3a.851.851 0 0 1 0-1.2l2.23-2.26c-.65-1.1-1.15-2.28-1.49-3.52H28.5a.85.85 0 0 1-.85-.85v-6.1c0-.47.38-.85.85-.85h2.96c.32-1.29.8-2.52 1.45-3.68l-2.07-2.1a.851.851 0 0 1 0-1.2l4.25-4.31c.16-.16.38-.25.61-.25.23 0 .45.09.61.26l1.99 2.02c1.16-.7 2.39-1.22 3.68-1.57V4.37c0-.47.38-.85.85-.85h6c.47 0 .85.38.85.85v2.85c1.3.35 2.53.88 3.68 1.57l1.99-2.02c.16-.16.38-.25.61-.25.23 0 .45.09.61.25l4.24 4.3c.33.33.33.87 0 1.2l-2.06 2.09c.65 1.16 1.13 2.4 1.45 3.69h2.96c.47 0 .85.38.85.85V25c0 .47-.38.85-.85.85h-3.08a14.72 14.72 0 0 1-1.49 3.52l2.23 2.26c.33.33.33.87 0 1.2l-4.24 4.3c-.32.33-.9.33-1.22 0l-2.28-2.31c-1.07.61-2.21 1.08-3.39 1.4v3.31c-.02.48-.4.86-.87.86zm-5.15-1.71h4.29v-3.13c0-.4.28-.75.67-.83 1.46-.32 2.84-.89 4.1-1.69a.85.85 0 0 1 1.07.12l2.14 2.17 3.04-3.09-2.11-2.14a.849.849 0 0 1-.11-1.06c.84-1.3 1.45-2.72 1.79-4.22.09-.39.43-.66.83-.66h2.89v-4.38H59.5c-.41 0-.76-.29-.84-.69-.31-1.56-.89-3.04-1.72-4.4a.848.848 0 0 1 .12-1.05l1.93-1.96-3.04-3.09-1.86 1.89a.85.85 0 0 1-1.08.11c-1.33-.89-2.8-1.52-4.37-1.87a.855.855 0 0 1-.67-.83V5.23h-4.29v2.66c0 .4-.28.75-.67.83-1.55.34-3.02.97-4.37 1.86-.34.23-.8.18-1.08-.11l-1.86-1.9-3.05 3.09 1.93 1.96c.28.28.33.71.12 1.05a13.44 13.44 0 0 0-1.72 4.38c-.08.4-.43.69-.84.69h-2.8v4.38h2.9c.4 0 .74.28.83.66.34 1.51.94 2.92 1.79 4.21.22.34.18.78-.11 1.07l-2.11 2.14 3.04 3.09 2.14-2.17c.28-.29.73-.34 1.07-.12 1.26.81 2.64 1.38 4.1 1.7.39.09.67.43.67.83v3.15zm2.15-9.25c-4.07 0-7.39-3.36-7.39-7.48 0-4.12 3.31-7.48 7.39-7.48 4.07 0 7.38 3.36 7.38 7.48 0 4.13-3.31 7.48-7.38 7.48zm0-13.25c-3.13 0-5.68 2.59-5.68 5.77 0 3.18 2.55 5.77 5.68 5.77s5.68-2.59 5.68-5.77c-.01-3.18-2.55-5.77-5.68-5.77z"
                fill="#545454"
              ></path>
            </svg>
            <div className="">
              <h3 className="text-[22px] font-semibold max-md:text-[15px]">
                Tuỳ Chỉnh
              </h3>
              <p className="text-slate-700 font-medium max-md:text-[10px]">
                Tùy chỉnh các thiết bị điện hoạt động theo lịch trình và tạo các
                cài đặt theo nhu cầu từng gia đình.
              </p>
            </div>
          </div>
          <div className="flex  gap-6 items-center justify-center p-10 border-[1px] border-gray-400 bg-gray-50">
            <svg viewBox="0 0 64 64" width="200" height="100">
              <path
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
                d="M60 28 32 4 4 28v6h4v26h48V34h4v-6z"
              ></path>
              <path
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
                d="M32 60V36l-6-8v-6M24 60V42l-6-6v-6M16 60V50M48 60V50M40 60V40l4-8v-6"
              ></path>
              <circle
                cx="44"
                cy="24"
                r="2"
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <circle
                cx="48"
                cy="48"
                r="2"
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <circle
                cx="16"
                cy="48"
                r="2"
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <circle
                cx="18"
                cy="28"
                r="2"
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
              <circle
                cx="26"
                cy="20"
                r="2"
                fill="none"
                stroke="#545454"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <div className="">
              <h3 className="text-[22px] font-semibold max-md:text-[15px]">
                Tiện Lợi
              </h3>
              <p className="text-slate-700 font-medium max-md:text-[10px]">
                Giảm bớt công việc thủ công khi không cần di chuyển trong nhà để
                điều khiển các thiết bị.
              </p>
            </div>
          </div>
          <div className="flex  gap-6 items-center justify-center p-10 border-[1px] border-gray-400 bg-gray-50">
            <svg viewBox="0 0 128 128" width="200" height="100">
              <path
                d="M112.18945,59.26953c1.65625-.49414,3.80566-1.91895,4.63965-5.9043,1.2265-5.86377-4.46094-11.34912-11.72754-15.82751v-6.0014l3.1543.1424a2.07225,2.07225,0,0,0,.4502-.03125c.61328-.11133,6.01855-1.209,7.10059-5.12891.709-2.57129-.667-5.39648-4.0918-8.39746a19.56623,19.56623,0,0,0-6.61328-3.37891V6a6.012,6.012,0,0,0-6.01074-6H40.93945a6.012,6.012,0,0,0-6.01074,6V37.44861a20.24175,20.24175,0,0,0-6.68457,5.82092C18.4,56.03375,15.13269,86.63831,14.71216,90.99225l-3.08325,4.83881a3.98832,3.98832,0,0,0-.28809,3.76855C17.60089,113.69,26.70526,119.946,34.95642,122.54608A6.01253,6.01253,0,0,0,40.93945,128H99.09082a6.012,6.012,0,0,0,6.01074-6V93.38354a16.81961,16.81961,0,0,0,2.05176.13306,9.55679,9.55679,0,0,0,4.95215-1.19141,6.91356,6.91356,0,0,0,3.26172-5.43848,6.52872,6.52872,0,0,0-1.52832-4.93262c-1.84515-2.26581-5.21545-3.871-8.7373-5.00092v-.04346c4.12109.85846,8.00781.52032,10.39551-2.44391a6.16132,6.16132,0,0,0,1.209-5.40137c-.69043-3.04883-3.57031-6.37207-7.375-9.585A7.173,7.173,0,0,0,112.18945,59.26953Zm-3.11133-38.14062c3.03516,2.66016,2.9668,3.98145,2.873,4.32227-.27051.99414-2.29395,1.89844-3.76172,2.2207l-3.08789-.13934V18.94281A13.33864,13.33864,0,0,1,109.07813,21.12891ZM15.002,97.98047l3.34277-5.24512c.0166-.026.02551-.05432.04077-.08081a1.97437,1.97437,0,0,0,.09894-.19629c.02386-.05457.04584-.10883.06451-.16455.02063-.06158.03693-.12457.05164-.1889a1.96444,1.96444,0,0,0,.036-.19373c.00323-.02527.01154-.04858.01379-.07416.03027-.335,3.09863-33.68555,12.80371-46.17969.03516-.04492.06836-.09082.09961-.13867,2.89746-4.47266,11.76563-7.79687,14.93848-8.7002a2.1495,2.1495,0,0,0,.23047-.08105,44.30761,44.30761,0,0,0,7.19727-4.1709c2.5127-1.73828,8.08008.17188,9.79883.96191a18.88285,18.88285,0,0,0,10.4375,1.29492c4.91113-.65039,5.97754.36621,6.1416.57715.49707.63477-.16992,2.3291-.42187,2.9668l-.05566.14355c-2.55664,6.53906-17.0752,8.51367-22.4541,8.72363a1.99857,1.99857,0,0,0-1.79785,1.30273C47.49512,70.32227,34.10742,69.99316,33.5,69.95215a2.02034,2.02034,0,0,0-2.10547,1.875,1.99966,1.99966,0,0,0,1.874,2.11816,11.55854,11.55854,0,0,0,1.66016-.05914v44.5412C27.93964,115.8573,20.39423,110.123,15.002,97.98047ZM101.10156,122a2.008,2.008,0,0,1-2.01074,2H40.93945a2.008,2.008,0,0,1-2.01074-2V73.04242c5.56378-1.76837,14.03687-6.928,19.91992-21.88519,5.07422-.35059,21.16895-2.167,24.69727-11.19043l.05176-.13379c.52637-1.334,1.75781-4.46-.14941-6.89746-1.6123-2.06152-4.83789-2.74121-9.95605-2.05762a15.0392,15.0392,0,0,1-8.06055-.96387c-.90137-.418-8.94531-3.98242-13.78711-.6377a42.98133,42.98133,0,0,1-6.38281,3.73438,52.01451,52.01451,0,0,0-6.333,2.38019V6a2.008,2.008,0,0,1,2.01074-2H99.09082a2.008,2.008,0,0,1,2.01074,2Zm9.63574-37.51953a2.51911,2.51911,0,0,1,.65527,1.95313,2.93747,2.93747,0,0,1-1.34961,2.46484c-1.22675.74176-3.1571.71021-4.94141.431V81.17212C107.53717,82.04248,109.64026,83.13342,110.7373,84.48047Zm2.06738-14.53223a2.17563,2.17563,0,0,1-.42285,2.00781c-1.3374,1.65991-4.085,1.6651-7.28027.83325V61.21C109.23883,64.41022,112.25269,67.50934,112.80469,69.94824Zm-7.70312-16.29181V42.25031c5.14343,3.44324,8.4892,7.05957,7.81152,10.29657-.52051,2.4873-1.5332,2.79-1.86621,2.88965C109.64612,55.85541,107.45605,55.03851,105.10156,53.65643Z"
                fill="#545454"
              ></path>
              <ellipse
                cx="70.015"
                cy="11"
                rx="3.008"
                ry="3"
                fill="#545454"
              ></ellipse>
              <path
                d="M77.0332,116H62.99707a2,2,0,0,0,0,4H77.0332a2,2,0,0,0,0-4Z"
                fill="#545454"
              ></path>
            </svg>
            <div className="">
              <h3 className="text-[22px] font-semibold max-md:text-[15px]">
                Điều Khiển
              </h3>
              <p className="text-slate-700 font-medium max-md:text-[10px]">
                Dễ dàng điều khiển và quản lý thiết bị từ xa qua ứng dụng điện
                thoại hoặc giọng nói.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-20 mb-[100px]  max-lg:gap-10  ">
        <div className="flex flex-col gap-2 text-center ">
          <h1 className="text-orange-600 text-[40px] text-center font-semibold uppercase  max-lg:text-[30px] max-md:text-[25px]">
            Các giải pháp
          </h1>
          <p className="text-[18px] font-medium text-gray-500  max-lg:px-10 max-md:text-[15px]">
            Nhà thông minh FPT Smart Home điều khiển bằng giọng nói tiếng Việt
            được phát triển bởi FPT Telecom
          </p>
          <hr className="w-60 h-[3px] bg-orange-500 mx-auto m-6" />
          <p className="font-semibold text-[20px] max-md:text-[15px] max-md:px-10">
            Truyền hình thông minh điều khiển bằng giọng nói tích hợp sẵn
          </p>
        </div>
        <div className="flex gap-12  max-lg:hidden">
          <div className="flex flex-col items-center justify-center gap-4  basis-1/3 rounded-2xl h-min border-[1px] border-white shadow-xl">
            <Image
              src="/assets/images/thumnail/smart-control.webp"
              alt=""
              width={1000}
              height={1000}
            />
            <h2 className="text-[22px] font-semibold px-10 text-center">
              Điều Khiển Thông Minh
            </h2>
            <ul className="px-10 list-disc mb-10">
              <li>
                Điều khiển từ xa bằng giộng nói tiếng việt hoặc smartphone
              </li>
              <li>Hẹn giờ và tạo kịch bản yêu thích một cách tự động</li>
              <li>Đóng mở rèm thông minh</li>
              <li>Lên lịch tưới cây tự động</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4  basis-1/3 rounded-2xl h-min border-[1px]  border-white shadow-xl">
            <Image
              src="/assets/images/thumnail/smart-lighting.webp"
              alt=""
              width={1000}
              height={1000}
            />
            <h2 className="text-[22px] font-semibold px-10 text-center">
              Chiếu Sáng Thông Minh
            </h2>
            <ul className="px-10 list-disc mb-10">
              <li>Tự động bật đèn khi có chuyển động</li>
              <li>Bật/ tắt đèn bằng giọng tiếng Việt</li>
              <li>Điều chỉnh cường độ ánh sáng & màu sắc theo lịch hẹn giờ</li>
              <li>Điều khiển linh hoạt theo nhóm hoặc riêng lẻ</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4  basis-1/3 rounded-2xl h-min border-[1px]  border-white shadow-xl">
            <Image
              src="/assets/images/thumnail/smart-security.webp"
              alt=""
              width={1000}
              height={1000}
            />
            <h2 className="text-[22px] font-semibold px-10 text-center">
              An Ninh Thông Minh
            </h2>
            <ul className="px-10 list-disc mb-10">
              <li>Camera phát hiện người và gửi thông báo cảnh báo</li>
              <li>
                Khoá cửa thông minh giúp quản lý và kiểm tra việc ra vào hiệu
                quả
              </li>
              <li>
                Nút bấm khẩn cấp SOS để gửi cảnh báo hoặc thông báo đến người
                thân
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden max-lg:block px-10 max-md:px-0  ">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="max-md:max-w-[400px]">
              <CarouselItem className="">
                <div className="flex flex-col items-center justify-center gap-4  rounded-2xl h-min border-[1px]">
                  <Image
                    src="/assets/images/thumnail/smart-control.webp"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <h2 className="text-[22px] font-semibold px-10 text-center">
                    Điều Khiển Thông Minh
                  </h2>
                  <ul className="px-10 text-center mb-10">
                    <li>
                      Điều khiển từ xa bằng giộng nói tiếng việt hoặc smartphone
                    </li>
                    <li>Hẹn giờ và tạo kịch bản yêu thích một cách tự động</li>
                    <li>Đóng mở rèm thông minh</li>
                    <li>Lên lịch tưới cây tự động</li>
                  </ul>
                </div>
              </CarouselItem>
              <CarouselItem className="">
                <div className="flex flex-col items-center justify-center gap-4  rounded-2xl h-min border-[1px] ">
                  <Image
                    src="/assets/images/thumnail/smart-lighting.webp"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <h2 className="text-[22px] font-semibold px-10 text-center">
                    Chiếu Sáng Thông Minh
                  </h2>
                  <ul className="px-10  text-center  mb-10">
                    <li>Tự động bật đèn khi có chuyển động</li>
                    <li>Bật/ tắt đèn bằng giọng tiếng Việt</li>
                    <li>
                      Điều chỉnh cường độ ánh sáng & màu sắc theo lịch hẹn giờ
                    </li>
                    <li>Điều khiển linh hoạt theo nhóm hoặc riêng lẻ</li>
                  </ul>
                </div>
              </CarouselItem>
              <CarouselItem className="">
                <div className="flex flex-col items-center justify-center gap-4  rounded-2xl h-min border-[1px] ">
                  <Image
                    src="/assets/images/thumnail/smart-security.webp"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <h2 className="text-[22px] font-semibold px-10 text-center">
                    An Ninh Thông Minh
                  </h2>
                  <ul className="px-10  text-center  mb-10">
                    <li>Camera phát hiện người và gửi thông báo cảnh báo</li>
                    <li>
                      Khoá cửa thông minh giúp quản lý và kiểm tra việc ra vào
                      hiệu quả
                    </li>
                    <li>
                      Nút bấm khẩn cấp SOS để gửi cảnh báo hoặc thông báo đến
                      người thân
                    </li>
                  </ul>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="bg-gray-100 py-[50px]">
        <div className="container flex flex-col items-center gap-10 mb-[50px] max-md:mb-0">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-orange-600 text-[40px] text-center font-semibold uppercase max-md:text-[30px]">
              BẢNG GIÁ THAM KHẢO
            </h1>
            <p className="text-[18px] font-medium text-gray-500 max-md:text-[15px]">
              Đội ngũ sẽ liên hệ để tuỳ chỉnh theo từng nhu cầu của khách hàng
            </p>
            <hr className="w-60 h-[3px] bg-orange-500 mx-auto m-6" />
          </div>
          <div className="flex items-center justify-between gap-x-20 max-lg:hidden">
            <div className="  h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
              <h5 className="text-[20px] font-semibold text-slate-700">
                Cơ bản
              </h5>
              <h1 className="text-[60px] font-bold">14tr9</h1>
              <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
              <div className=" text-center flex flex-col gap-4 h-[400px] w-[250px]">
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Điều khiển thông minh
                </h4>
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Điều hoà thông minh
                </h4>
                <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
              </div>
              <Button>Nhận Tư Vấn</Button>
            </div>
            <div className="  h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
              <h5 className="text-[20px] font-semibold text-slate-700">
                Nâng Cao
              </h5>
              <h1 className="text-[60px] font-bold">19tr9</h1>
              <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
              <div className=" text-center flex flex-col gap-4 h-[400px] w-[250px]">
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Điều khiển thông minh
                </h4>
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Chiếu sáng thông minh
                </h4>
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  CĐiều hoà thông minh
                </h4>
                <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
              </div>
              <Button>Nhận Tư Vấn</Button>
            </div>
            <div className=" h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
              <h5 className="text-[20px] font-semibold text-slate-700">
                Cao Cấp
              </h5>
              <h1 className="text-[60px] font-bold">26tr5</h1>
              <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
              <div className=" text-center flex flex-col gap-4 h-[400px] w-[250px]">
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Điều khiển thông minh
                </h4>
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Chiếu sáng thông minh
                </h4>
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Rèm thông minh
                </h4>
                <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                  Điều hoà thông minh
                </h4>
                <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
              </div>
              <Button>Nhận Tư Vấn</Button>
            </div>
          </div>
          <div className="lg:hidden max-lg:block px-10 max-md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="max-w-[770px]">
                <CarouselItem className="basis-1/2 ">
                  {" "}
                  <div className="  h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
                    <h5 className="text-[20px] font-semibold text-slate-700">
                      Cơ bản
                    </h5>
                    <h1 className="text-[60px] font-bold">14tr9</h1>
                    <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
                    <div className=" text-center flex flex-col gap-4 h-[400px] w-[350px]">
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều khiển thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều hoà thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
                    </div>
                    <Button>Nhận Tư Vấn</Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 ">
                  {" "}
                  <div className="  h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
                    <h5 className="text-[20px] font-semibold text-slate-700">
                      Nâng Cao
                    </h5>
                    <h1 className="text-[60px] font-bold">19tr9</h1>
                    <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
                    <div className=" text-center flex flex-col gap-4 h-[400px] w-[350px]">
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều khiển thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Chiếu sáng thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        CĐiều hoà thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
                    </div>
                    <Button>Nhận Tư Vấn</Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 ">
                  {" "}
                  <div className=" h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
                    <h5 className="text-[20px] font-semibold text-slate-700">
                      Cao Cấp
                    </h5>
                    <h1 className="text-[60px] font-bold">26tr5</h1>
                    <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
                    <div className=" text-center flex flex-col gap-4 h-[400px] w-[350px]">
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều khiển thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Chiếu sáng thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Rèm thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều hoà thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
                    </div>
                    <Button>Nhận Tư Vấn</Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="md:hidden max-md:block ">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="max-w-[340px]">
                <CarouselItem className="">
                  {" "}
                  <div className="  h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
                    <h5 className="text-[20px] font-semibold text-slate-700">
                      Cơ bản
                    </h5>
                    <h1 className="text-[60px] font-bold">14tr9</h1>
                    <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
                    <div className=" text-center flex flex-col gap-4 h-[400px] w-[350px]">
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều khiển thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều hoà thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
                    </div>
                    <Button>Nhận Tư Vấn</Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 max-md:basis-full  max-md:max-w-[400px]">
                  <div className="  h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
                    <h5 className="text-[20px] font-semibold text-slate-700">
                      Nâng Cao
                    </h5>
                    <h1 className="text-[60px] font-bold">19tr9</h1>
                    <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
                    <div className=" text-center flex flex-col gap-4 h-[400px] w-[350px]">
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều khiển thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Chiếu sáng thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        CĐiều hoà thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
                    </div>
                    <Button>Nhận Tư Vấn</Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 max-md:basis-full  max-md:max-w-[400px]">
                  {" "}
                  <div className=" h-[600px] bg-white flex flex-col items-center justify-start p-10 rounded-xl shadow-xl">
                    <h5 className="text-[20px] font-semibold text-slate-700">
                      Cao Cấp
                    </h5>
                    <h1 className="text-[60px] font-bold">26tr5</h1>
                    <hr className="w-40 h-[3px] bg-orange-500 mx-auto mb-8" />
                    <div className=" text-center flex flex-col gap-4 h-[400px] w-[350px]">
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều khiển thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Chiếu sáng thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Rèm thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6 border-b-[1px] w-full">
                        Điều hoà thông minh
                      </h4>
                      <h4 className="text-[18px] pb-6">An ninh giám sát</h4>
                    </div>
                    <Button>Nhận Tư Vấn</Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="text-[22px] font-semibold max-md:text-[15px]">
            Lắp Đặt <span className="text-orange-500">Một Lần</span> - Sử Dụng{" "}
            <span className="text-orange-500">Trọn Đời</span>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-10 mb-[50px] py-[50px] max-md:mb-0">
        <h1 className="text-orange-600 text-[40px] text-center font-semibold uppercase max-md:text-[30px]">
          TẠI SAO CHỌN CHÚNG TÔI?
        </h1>
        <div className="flex flex-col items-center gap-20 ">
          <div className="flex items-center justify-between gap-20  max-lg:gap-6 max-md:flex-col">
            <Image
              src="/assets/images/thumnail/why-us-image-1.webp"
              width={640}
              height={425}
              alt=""
            />
            <div className="max-w-[400px] text-center space-y-4">
              <h1 className="text-[25px] font-semibold text-orange-500 max-md:text-[20px]">
                CHẤT LƯỢNG UY TÍN
              </h1>
              <h3 className="text-[18px] font-semibold max-md:text-[15px]">
                Tự hào là thương hiệu thuộc tập đoàn công nghệ FPT hàng đầu Việt
                Nam
              </h3>
              <h3 className="text-[18px] text-slate-500 max-md:text-[15px]">
                FPT Smart Home khẳng định lấy chất lượng sản phẩm và trải nghiệm
                khách hàng là tiêu chí hàng đầu để phát triển
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between gap-20 max-lg:gap-6 flex-row-reverse max-md:flex-col">
            <Image
              src="/assets/images/thumnail/why-us-image-2.webp"
              width={640}
              height={425}
              alt=""
            />
            <div className="max-w-[400px] text-center space-y-4">
              <h1 className="text-[25px] font-semibold text-orange-500 max-md:text-[20px]">
                THÂN THIỆN DỄ SỬ DỤNG
              </h1>
              <h3 className="text-[18px] font-semibold max-md:text-[15px]">
                FPT Smart Home có giao diện sử dụng đơn giản & trực quan
              </h3>
              <h3 className="text-[18px] text-slate-500 max-md:text-[15px]">
                Người dùng chỉ cần ra lệnh bằng giọng nói tiếng Việt hoặc thông
                qua các kịch bản dựng sẵn là có thể điều khiển - thiết lập các
                chức năng thông minh, tự động cho ngôi nhà của mình
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between gap-20 max-lg:gap-6 max-md:flex-col">
            <Image
              src="/assets/images/thumnail/why-us-image-3.webp"
              width={640}
              height={425}
              alt=""
            />
            <div className="max-w-[400px] text-center space-y-4">
              <h1 className="text-[25px] font-semibold text-orange-500 max-md:text-[20px]">
                THIẾT KẾ SANG TRỌNG
              </h1>
              <h3 className="text-[18px] font-semibold max-md:text-[15px]">
                Thiết kế sản phẩm tinh tế, sang trọng
              </h3>
              <h3 className="text-[18px] text-slate-500 max-md:text-[15px]">
                Các sản phẩm không chỉ có tính năng thông minh mà còn được chú
                trọng về mặt thẩm mỹ, đồng bộ, và phù hợp mới đa dạng không gian
                kiến trúc
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4 mb-[50px] py-[50px]">
        <h1 className="text-orange-600 text-[40px] text-center font-semibold uppercase max-md:text-[30px] max-md:px-6">
          DỰ ÁN THỰC TẾ ĐÃ LẮP ĐẶT
        </h1>
        <p className="text-[18px] text-slate-500 mb-10 max-lg:px-10 text-center max-md:text-[15px]">
          Hàng trăm khách hàng đã tin tưởng lựa chọn FPT Smart Home cho ngôi nhà
          của mình
        </p>
        <Carousel
          className=""
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/4 max-lg:basis-1/3 max-md:basis-1/2">
              <Image
                src="/assets/images/thumnail/project-image-3.webp"
                width={640}
                height={425}
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4 max-lg:basis-1/3 max-md:basis-1/2">
              <Image
                src="/assets/images/thumnail/project-image-4.webp"
                width={640}
                height={425}
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4 max-lg:basis-1/3 max-md:basis-1/2">
              <Image
                src="/assets/images/thumnail/project-image-5.webp"
                width={640}
                height={425}
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4 max-lg:basis-1/3 max-md:basis-1/2">
              <Image
                src="/assets/images/thumnail/project-image-6.webp"
                width={640}
                height={425}
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4 max-lg:basis-1/3 max-md:basis-1/2">
              <Image
                src="/assets/images/thumnail/project-image-1.webp"
                width={640}
                height={425}
                alt=""
              />
            </CarouselItem>
            <CarouselItem className="basis-1/4 max-lg:basis-1/3 max-md:basis-1/2">
              <Image
                src="/assets/images/thumnail/project-image-2.webp"
                width={640}
                height={425}
                alt=""
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="container flex flex-col  gap-20 mb-[50px] py-[50px] max-md:gap-6">
        <h1 className="text-orange-600 text-[40px] text-center font-semibold uppercase max-md:text-[30px]">
          THÀNH TỰU CỦA CHÚNG TÔI
        </h1>
        <div className="flex items-center justify-around max-md:gap-1">
          <div className="flex flex-col items-center gap-4 ">
            <div className="bg-slate-500 rounded-full w-[100px] h-[100px] flex items-center justify-center max-md:w-[70px] max-md:h-[70px]">
              <svg width="40" height="40" fill="white" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
              </svg>
            </div>
            <h1 className="text-[50px] font-bold max-md:text-[30px] ">3750</h1>
            <h3 className="text-[20px] text-slate-500 max-md:text-[20px] text-center">
              Khách hàng sử dụng
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-slate-500 rounded-full w-[100px] h-[100px] flex items-center justify-center max-md:w-[70px] max-md:h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path>
              </svg>
            </div>
            <h1 className="text-[50px] font-bold max-md:text-[30px]">461</h1>
            <h3 className="text-[20px] text-slate-500 max-md:text-[20px] text-center">
              Dự án hoàn thành
            </h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-slate-500 rounded-full w-[100px] h-[100px] flex items-center justify-center max-md:w-[70px] max-md:h-[70px]">
              <svg
                data-name="Layer 1"
                viewBox="0 0 64 64"
                width="50"
                height="50"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m17 18.64-4.83 18.84h-8V15.39L17 18.64zM47 18.64l4.83 18.84h8V15.39L47 18.64zM46.67 19.63l-8.88-2.8a10.73 10.73 0 0 0-9.36 1.4c-2.14 1.5-4.37 3.44-5.18 5.5l-.68 1.72a3.62 3.62 0 0 0 1.32 4.33 3.63 3.63 0 0 0 4.94-.78 4.23 4.23 0 0 0 1-2.6l4.75-.83"
                ></path>
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m34.58 25.56 13.74 12.56a2.73 2.73 0 0 1 .13 4 2.73 2.73 0 0 1-3.73.1l-7.47-6.61M37.25 35.64l6.35 5.62a2.5 2.5 0 0 1 .1 3.66 2.51 2.51 0 0 1-3.47 0l-6.48-6.14M33.75 38.81 39 43.88a2.62 2.62 0 0 1-.57 4.18 2.63 2.63 0 0 1-3-.33L29 42M35.23 47.58l-.88.41a6.82 6.82 0 0 1-6.72-.6c-4-2.75-10.66-7.8-14.69-13.16M17.46 19.43h8.87M51.83 37.48l-2.56 1.33"
                ></path>
              </svg>
            </div>
            <h1 className="text-[50px] font-bold max-md:text-[30px]">15+</h1>
            <h3 className="text-[20px] text-slate-500 max-md:text-[20px] text-center">
              Đối tác đa ngành nghề
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
