import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Căn hộ mẫu",
  description: "Nhà mẫu, căn hộ hộ mẫu thực tế tại FPT Smart Home",
};
export default function Apartment() {
  return (
    <>
      <div>
        <div className="bg-[url('/assets/images/apartment/apartment-banner.jpg')] w-full h-[600px] bg-cover bg-no-repeat  bg-center max-md:h-[150px]"></div>
      </div>
      <div className="container">
        <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Tham khảo FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Loại căn hộ bạn đang sở hữu
          </h2>
        </div>
        <div className="flex items-center justify-center pt-[50px] pb-[100px] gap-4  max-lg:flex-col max-lg:px-20 max-lg:gap-10 max-md:pt-0 max-md:p-[20px]">
          <div className="bg-gray-100 p-4 basis-1/5 rounded-xl flex flex-col gap-4 items-center">
            <Image
              className="rounded-[30px] mb-4"
              src="/assets/images/apartment/1668590328-Group-423.png"
              width={481}
              height={418}
              alt=""
            />
            <h5 className="text-[20px] font-semibold text-slate-800 text-center">
              Căn hộ 1 phòng ngủ
            </h5>
            <Button className="border-[2px] bg-gray-100 text-black text-btn_medium  w-[100px] h-[42px] hover:text-white hover:bg-orange-500">
              Xem ngay
            </Button>
          </div>
          <div className="bg-gray-100 p-4 basis-1/5 rounded-xl flex flex-col gap-4 items-center">
            <Image
              className="rounded-[30px] mb-4"
              src="/assets/images/apartment/1668590337-Group-425.png"
              width={481}
              height={418}
              alt=""
            />
            <h5 className="text-[20px] font-semibold text-slate-800 text-center">
              Căn hộ 2 phòng ngủ
            </h5>
            <Button className="border-[2px] bg-gray-100 text-black text-btn_medium  w-[100px] h-[42px] hover:text-white hover:bg-orange-500">
              Xem ngay
            </Button>
          </div>
          <div className="bg-gray-100 p-4 basis-1/5 rounded-xl flex flex-col gap-4 items-center">
            <Image
              className="rounded-[30px] mb-4"
              src="/assets/images/apartment/1668590344-Group-435.png"
              width={481}
              height={418}
              alt=""
            />
            <h5 className="text-[20px] font-semibold text-slate-800 text-center">
              Căn hộ 3 phòng ngủ
            </h5>
            <Button className="border-[2px] bg-gray-100 text-black text-btn_medium  w-[100px] h-[42px] hover:text-white hover:bg-orange-500">
              Xem ngay
            </Button>
          </div>
          <div className="bg-gray-100 p-4 basis-1/5 rounded-xl flex flex-col gap-4 items-center">
            <Image
              className="rounded-[30px] mb-4"
              src="/assets/images/apartment/1668595095-3tang.png"
              width={481}
              height={418}
              alt=""
            />
            <h5 className="text-[20px] font-semibold text-slate-800 text-center">
              Nhà phố 3 tầng
            </h5>
            <Button className="border-[2px] bg-gray-100 text-black text-btn_medium  w-[100px] h-[42px] hover:text-white hover:bg-orange-500">
              Xem ngay
            </Button>
          </div>
          <div className="bg-gray-100 p-4 basis-1/5 rounded-xl flex flex-col gap-4 items-center">
            <div className="rounded-[30px] h-[174px] max-lg:h-full overflow-hidden ">
              <Image
                className="object-center object-cover  bg-cover scale-[1.6]"
                src="/assets/images/apartment/1676444283-penthouse.jpg"
                width={481}
                height={481}
                alt=""
              />
            </div>

            <h5 className="text-[20px] font-semibold text-slate-800 text-center">
              Penthouse
            </h5>
            <Button className="border-[2px] bg-gray-100 text-black text-btn_medium  w-[100px] h-[42px] hover:text-white hover:bg-orange-500">
              Xem ngay
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
