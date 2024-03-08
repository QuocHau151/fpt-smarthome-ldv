"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Helmet } from "react-helmet";

export default function SecuritySolution() {
  return (
    <>
      <Helmet>
        <title>Giải Pháp Truyền Hình</title>
        <meta
          name="description"
          content="Cả thế giới trong tầm tay bạn với FPT Play Box S"
        />
      </Helmet>
      <div className="pt-[120px] max-lg:pt-[72px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/solution/truyen-hinh/1668583056-Group-649.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
        <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
          Giải Pháp Điều Khiển
        </h4>
        <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
          Những tính năng nổi bật
        </h2>
      </div>
      <div className="container flex items-start justify-center gap-10 max-md:flex-col">
        <div className="flex flex-col text-center items-center  basis-1/2">
          <Image
            className=""
            src="/assets/images/solution/truyen-hinh/1691489240-Asset-3-fix.jpg"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px] w-3/4 bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10 max-md:text-[20px] max-lg:px-3">
              Chuyển kênh, mở phim bằng giọng nói Tiếng Việt
            </h5>
            <p>Điều khiển dễ dàng bằng giọng nói mà không cần chạm</p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center basis-1/2">
          <Image
            className=""
            src="/assets/images/solution/truyen-hinh/1691489224-Asset-6.jpg"
            width={860}
            height={600}
            alt=""
          />
          <div className="max-w-[490px] px-[10px] py-[25px] w-3/4 bg-gray-100 mb-10">
            <h5 className="text-h5 font-semibold mb-6 px-10 max-md:text-[20px]">
              Mua hàng qua TV với Shop Play
            </h5>
            <p className="">
              Mua sắm trực tuyến ngay tại nhà đơn giản với Shop Play
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px] max-md:py-[50px] px-10">
        <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
          Sản phẩm Smart Home
        </h4>
        <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
          Những thiết bị nổi bật dành riêng cho bạn
        </h2>
      </div>
      <div className="container">
        <Swiper
          style={{}}
          spaceBetween={10}
          slidesPerView={2}
          modules={[Autoplay, Pagination, Navigation]}
          className=" flex items-center justify-center mb-[100px] "
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-gray-100 px-4  pt-4 pb-6  h-[320px] rounded-3xl ">
              <div className="  h-[200px] overflow-hidden mb-10">
                <Image
                  className=" object-contain "
                  src="/assets/images/solution/truyen-hinh/1668670888-Boxx.png"
                  width={900}
                  height={900}
                  alt=""
                />
              </div>
              <h5 className="text-h6 font-semibold">FPT Play Box S</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center bg-gray-100 px-4 pt-4 pb-6  h-[320px] rounded-3xl">
              <div className="  h-[200px] overflow-hidden mb-10">
                <Image
                  className=" object-contain "
                  src="/assets/images/solution/truyen-hinh/1668509369-USB-ZigBee.png"
                  width={900}
                  height={900}
                  alt=""
                />
              </div>

              <h5 className="text-h6 font-semibold">USB ZigBee</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div className="bg-[url('/assets/images/solution/truyen-hinh/1668583065-Group-661.png')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="container">
        <div className="text-center flex flex-col py-[100px] px-10 max-md:py-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Sản phẩm Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Những tính năng dành riêng cho bạn
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center max-md:flex-col ">
            <div className="w-[589px] h-[589px] overflow-hidden  relative rounded-[40px]  max-md:w-full  max-md:h-min">
              <Image
                className=" object-cover w-full h-full"
                src="/assets/images/solution/truyen-hinh/1668583126-Group-670.png"
                width={589}
                height={589}
                alt=""
              />
            </div>
            <div className="flex items-left flex-col  bg-gray-100  px-20 py-[150px] rounded-r-[30px] gap-4 max-md:basis-full max-md:h-min max-md:py-6  max-md:text-center max-md:rounded-[0px] max-md:px-2 max-md:mx-10">
              <h5 className="text-h6 font-semibold max-w-[420px]">
                UEFA Champions League, HBO, K+
              </h5>
              <p className="text-gray-400 max-w-[420px]">
                Xem bóng đá thể thao thả ga với các kênh độc quyền chỉ có trên
                FPT Smart Home
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-center mb-10 max-md:flex-col-reverse">
            <div className="flex items-left flex-col h-3/4 basis-1/2 bg-gray-100  px-20 py-[150px] rounded-l-[30px] gap-4  text-left max-md:basis-full max-md:h-min max-md:py-6  max-md:text-center max-md:rounded-[0px] max-md:px-2 max-md:mx-10 ">
              <h5 className="text-h6 font-semibold">
                Kho giải trí đa dạng Yoga, Giáo Dục, Phim
              </h5>
              <p className="text-gray-400 max-w-[400px]">
                FPT PLay Box S mang cả thế giới tới ngôi nhà bạn
              </p>
            </div>
            <div className="w-[589px] h-[589px] basis-1/2 overflow-hidden   rounded-[40px]  max-md:w-full  max-md:h-min">
              <Image
                className=" object-cover w-full h-full"
                src="/assets/images/solution/truyen-hinh/1668583140-Group-662.png"
                width={589}
                height={589}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 pb-[100px] ">
        <div className="container">
          <div className="text-center flex flex-col items-center py-[100px] justify-center max-md:py-[50px]">
            <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
              Giải Pháp Nhà Thông Minh
            </h4>
            <h2 className=" text-[48px] text-slate-800 font-semibold max-w-[700px] text-center max-md:text-[25px]">
              Những Giải Pháp Thông Minh Cho Căn Hộ Của Bạn
            </h2>
          </div>
          <div className="flex items-center justify-center gap-8 max-lg:px-10 max-md:flex-col">
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/1693974974-Asset-3.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp Điều Khiển
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                <Link href="/giai-phap/giai-phap-dieu-khien">Xem thêm</Link>
              </Button>
            </div>
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/1693974986-Asset-4.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp Chiếu Sáng
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                <Link href="/giai-phap/giai-phap-chieu-sang">Xem thêm</Link>
              </Button>
            </div>
            <div className=" flex flex-col items-center gap-8">
              <Image
                src="/assets/images/solution/1668575279-Group-677.png"
                width={468}
                height={468}
                alt=""
              />
              <h2 className="text-center text-h5 font-semibold">
                Giải Pháp An Ninh
              </h2>
              <Button className="bg-gray-100 border-[2px] border-orange-500 text-orange-500">
                <Link href="/giai-phap/giai-phap-an-ninh">Xem thêm</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
