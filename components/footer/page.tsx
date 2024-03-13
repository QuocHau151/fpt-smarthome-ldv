import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black">
      <div className=" container w-full h-min text-gray-200 flex items-start justify-center py-[70px]  gap-20 max-lg:px-10 max-lg:flex-col max-lg:text-[13px] max-md:flex-col max-md:px-10 max-md:gap-10">
        <div className="flex flex-col justify-center  max-md:min-w-[10px] items-center my-auto mx-auto font-light gap-10  max-lg:gap-2">
          <Link href="/">
            <Image
              className="w-[500px] max-lg:w-[500px] max-md:w-[350px]"
              src="/assets/logofptsh.png"
              width={700}
              height={200}
              alt=""
            />
          </Link>
          <h4 className="text-h6 text-center">
            Công ty Cổ phần Viễn thông FPT
          </h4>
        </div>
        <div className="flex items-start justify-around gap-10 max-lg:flex-wrap max-lg:mx-auto  max-md:flex-nowrap max-md:border-b-[1px] max-md:border-white max-md:pb-10 max-md:gap-5 ">
          <div className=" flex flex-col  gap-[35px] font-light mr-10  max-lg:mr-0  min-w-[150px] max-md:flex-col max-md:items-center max-md:hidden ">
            <h6 className="font-regular ">Contact</h6>
            <div className="flex flex-col  gap-[35px] font-light  ">
              <div className="flex items-center gap-6 ">
                <Image
                  src="/assets/icon/footer/address.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="max-w-[200px]">
                  Toà nhà FPT Tân Thuận 2, 29 Tân Thuận, KCX Tân Thuận, P Tân
                  Thuận Đông, Q7, TPHCM
                </p>
              </div>
              <div className="flex items-center gap-6 font-light">
                <Image
                  src="/assets/icon/footer/support.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <p> 0932133357 - Hỗ trợ trực tiếp ( Vương )</p>
              </div>

              <div className="flex items-start gap-6 font-light">
                <Image
                  src="/assets/icon/footer/mail.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="">VuongLD2@fpt.com</p>
              </div>
              <Image
                className="max-md:w-[150px]"
                src="/assets/icon/footer/logoSaleNoti 1.png"
                width={268}
                height={101}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 font-light   min-w-[150px]  max-md:w-full max-md:justify-center max-md:min-w-[130px]">
            <h6 className="font-regular">Product</h6>
            <ul className=" flex flex-col gap-4 ">
              <li>Bộ điều khiển trung tâm</li>
              <li>Đèn thông minh</li>
              <li>Cảm biến</li>
              <li>Công tắc thông minh</li>
              <li>Bộ rèn của</li>
              <li>Phụ kiện</li>
              <li>Khoá của thông minh</li>
              <li>Thiết bị an ninh thông minh</li>{" "}
            </ul>
          </div>
          <div className="flex flex-col gap-8 font-light  min-w-[150px] max-md:min-w-[130px]">
            <h6 className="font-regular">Customer Support</h6>
            <ul className=" flex flex-col gap-4">
              <li>Hotline: </li>
              <li>FAQ</li>
              <li>Đăng kí đại lý</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách quyền riêng tư</li>
              <li>Điều khoản sử dụng</li>
              <li className="max-w-[150px]">
                Chính sách sử dụng dữ liệu cá nhân
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center w-full  flex-col items-center gap-3 hidden max-md:flex">
          <h1>CÔNG TY CỔ PHẦN VIỄN THÔNG FPT</h1>
          <h2>
            Địa chỉ: Lô 37-39A Đường 19, KCX Tân Thuận, Quận 7 TP.Hồ Chí Minh
          </h2>
          <h2> 0932 133 357 ( Vương ) - Hỗ trợ trực tiếp </h2>

          <Image
            className="max-md:w-[150px]"
            src="/assets/icon/footer/logoSaleNoti 1.png"
            width={268}
            height={101}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
