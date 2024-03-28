"use client";
import { auth } from "@/auth";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useCurrentUser } from "@/hook/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { logout } from "@/actions/logout";
import Product from "./san-pham";
import Solution from "./giai-phap";
import Support from "./ho-tro";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Apartment from "./can-ho-mau";
const navs = [
  { id: 1, link: "/", name: "Giới thiệu" },
  { id: 2, link: "/san-pham", name: "Sản phẩm", active: <Product /> },
  { id: 3, link: "/giai-phap", name: "Giải pháp", active: <Solution /> },
  { id: 4, link: "/can-ho-mau", name: "Căn hộ mẫu", active: <Apartment /> },
  { id: 5, link: "/ho-tro", name: "Hỗ trợ", active: <Support /> },
];
export default function Bottom_Nav() {
  const user = useCurrentUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className=" max-lg:hidden bg-white relative z-10 border-b-[1px] border-gray-300 drop-shadow-md">
      <div className=" container flex items-center justify-between  w-full h-[45px]  font-medium ">
        <div className="relative  flex gap-2 group  ">
          <Image
            src="/assets/icon/list-category.png"
            width={17}
            height={13}
            alt=""
          />
          <p className=" text-[15px]">Category</p>
          <Image
            src="/assets/icon/arrow-down.png"
            width={24}
            height={24}
            alt=""
          />
          <div className="absolute container top-[20px] z-50 left-0 w-[300px] h-96 bg-white invisible  group-hover:visible flex flex-col items-start justify-start py-6 px-0 gap-2">
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Bộ điều khiển trung tâm
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/bo-dieu-khien/fpt-play-box">
                  <Image
                    src="/assets/images/product/bo-dieu-khien-trung-tam.png"
                    width={150}
                    height={150}
                    alt="Bộ điều khiển trung tâm"
                  />
                </Link>

                <div className="flex flex-col text-left mt-[-20px] ">
                  <p className="font-semibold  text-2xl">
                    Bộ Điều Khiển Trung Tâm
                  </p>
                  <Link
                    href="/bo-dieu-khien/fpt-play-box"
                    className="text-p font-regular hover:text-orange-600  text-center "
                  >
                    FPT Play Box S
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Đèn thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/den-thong-minh">
                  <Image
                    src="/assets/images/product/1692088715-Light-Led-Bulb.png"
                    width={150}
                    height={150}
                    alt="Đèn thông minh"
                  />
                </Link>

                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl mb-4">Đèn thông minh</p>
                  <Link
                    href="/den-thong-minh/den-led-downlight"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Đèn LED Downlight
                  </Link>
                  <Link
                    href="/den-thong-minh/den-led-bulb"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Đèn LED Bulb
                  </Link>
                  <Link
                    href="/den-thong/minh/den-led-panel"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Đèn LED Panel
                  </Link>
                  <Link
                    href="/den-thong-minh/den-led-day"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Đèn LED Dây
                  </Link>
                  <Link
                    href="/den-thong-minh/den-led-tracklight-thong-minh"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Đèn LED Tracklight
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Cảm biến thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/cam-bien">
                  <Image
                    src="/assets/images/product/1692090463-Cam-bien-chuyen-dong.png"
                    width={150}
                    height={150}
                    alt="Cảm biến"
                  />
                </Link>
                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl">Cảm biến</p>
                  <Link
                    href="/cam-bien/cam-bien-cua"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Cảm biến cửa
                  </Link>
                  <Link
                    href="/cam-bien/cam-bien-chuyen-dong"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Cảm biến chuyển dộng
                  </Link>
                  <Link
                    href="/cam-bien/cam-bien-chuyen-dong-am-tran"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Cảm biến chuyển dộng âm trần
                  </Link>
                  <Link
                    href="/cam-bien/cam-bien-khoi"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Cảm biến khói
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Công tắc thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/cong-tac-thong-minh">
                  <Image
                    src="/assets/images/product/1692151116-cong-tac-thong-minh-page-thiet-bi.png"
                    width={150}
                    height={150}
                    alt="Công tắc thông minh"
                  />
                </Link>
                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl">Công tắc thông minh</p>
                  <Link
                    href="/cong-tac-thong-minh/cong-tac-cam-ung-athena"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Công Tắc Cảm Ứng Athena
                  </Link>
                  <Link
                    href="/cong-tac-thong-minh/cong-tac-cam-ung-hera"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Công Tắc Cảm Ứng Hera
                  </Link>
                  <Link
                    href="cong-tac-thong-minh/nut-bam-ngu-canh-khong-day"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Nút Bấm Ngữ Cảnh Không Dây
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Bộ rèm cửa thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/bo-rem-cua">
                  <Image
                    src="/assets/images/product/1692088539-Bo-Dieu-Khien-Rem.png"
                    width={150}
                    height={150}
                    alt="Bộ rèm cửa"
                  />
                </Link>
                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl">
                    Bộ rèm cửa thông minh
                  </p>
                  <Link
                    href="/bo-rem-cua/dong-co-rem-thong-minh"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Động Cơ Rèm Thông Minh
                  </Link>
                  <Link
                    href="/bo-rem-cua/bo-dieu-khien-rem-cua-thong-minh"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Bộ Điều Khiển Rèm Cửa
                  </Link>
                  <Link
                    href="/bo-rem-cua/ray-rem-dien-thong-minh"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Ray Rèm Điện
                  </Link>
                  <Link
                    href="/bo-rem-cua/cong-tac-dieu-khien-cua-thong-minh"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Công Tắc Điều Khiển Rèm Cửa
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Phụ kiện thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/phu-kien">
                  <Image
                    className=""
                    src="/assets/images/product/1692151096-o-cam-thong-minh-page-thiet-bi.png"
                    width={150}
                    height={150}
                    alt="Phụ kiện"
                  />
                </Link>
                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl">Phụ kiện thông minh</p>
                  <Link
                    href="/phu-kien/o-cam-thong-minh-wifi"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Ổ Cắm Thông Minh
                  </Link>
                  <Link
                    href="/phu-kien/bo-dieu-khien-hong-ngoai"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Bộ Điều Khiển Hồng Ngoại
                  </Link>
                  <Link
                    href="/phu-kien/o-cam-thong-minh"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Ổ Cắm Thông Minh
                  </Link>
                  <Link
                    href="/phu-kien/o-cam-mat-kinh-am-tuong"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Ổ Cắm Mặt Kính Âm Tường
                  </Link>
                  <Link
                    href="/phu-kien/usb-zigbee"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    USB ZigBee
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Khoá cửa thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/khoa-cua-thong-minh">
                  <Image
                    src="/assets/images/product/1692088791-Khoa-YAle.png"
                    width={150}
                    height={150}
                    alt="Khoá cửa thông minh"
                  />
                </Link>
                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl">Khoá cửa thông minh</p>
                  <Link
                    href="/khoa-cua-thong-minh/khoa-cua-van-tay-yale"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Khoá Cửa Vân Tay Yale
                  </Link>
                  <Link
                    href="/khoa-cua-thong-minh/khoa-cua-the-tu-yale"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Khoá Cửa Thẻ Từ Yale
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-full bg-slate-100 h-min  p-2 rounded-sm text-[14px] font-regular flex items-center justify-between  group/item">
              Thiết bị an ninh thông minh
              <MdOutlineKeyboardArrowRight />
              <div className="absolute top-0 right-[-260px] w-full h-min bg-white px-6 invisible group-hover/item:visible flex flex-col items-center pb-6">
                <Link href="/thiet-bi-an-ninh-thong-minh">
                  <Image
                    src="/assets/images/product/1692088779-Camera-SE.png"
                    width={150}
                    height={150}
                    alt="Thiết bị an ninh thông minh"
                  />
                </Link>
                <div className="flex flex-col text-left ">
                  <p className="font-semibold  text-2xl">
                    Thiết bị an ninh thông minh
                  </p>
                  <Link
                    href="/thiet-bi-an-ninh-thong-minh/camera-se-fpt"
                    className="text-p font-regular hover:text-orange-600 "
                  >
                    Camera SE FPT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  ">
          {navs.map((item) => (
            <>
              <div
                className="group flex flex-col hover:bg-orange-500  rounded-md"
                key={item.id}
              >
                <Link
                  className="text-[15px]  py-[7px] px-[14px]  "
                  href={item.link}
                >
                  {item.name}
                </Link>
                <div className="invisible  group-hover:visible  ">
                  {item.active}
                </div>
              </div>
            </>
          ))}
        </div>
        {user ? (
          <div className="relative flex  items-center group">
            <div className="flex items-center outline-0 gap-4 ">
              {!user.image ? (
                <Avatar className="w-[30px] h-[30px] flex items-center">
                  <AvatarImage className="" src="/assets/icon/user.png" />
                </Avatar>
              ) : (
                <Avatar className="w-[30px] h-[30px] flex items-center">
                  <AvatarImage
                    className=""
                    src={user.image || "/assets/icon/user.png"}
                  />
                </Avatar>
              )}

              <LoginButton>
                <span className="text-[15px] font-medium text-black bg-white cursor-pointer hover:bg-gray-100">
                  {user.name}
                </span>
              </LoginButton>
            </div>
            <div className="absolute w-min h-min bg-white rounded-lg top-[30px] right-0 z-50 px-4 py-4 flex items-start flex-col justify-center gap-3 invisible group-hover:visible">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="hover:bg-orange-500" variant="outline">
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className=" sm:max-w-[425px] ">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={user.name || ""}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="username"
                        value={user.email || ""}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right">
                        Phone
                      </Label>
                      <Input id="name" value="" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="address" className="text-right">
                        Address
                      </Label>
                      <Input id="name" value="" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button className="w-full bg-white text-black border-[1px] border-slate-200 hover:bg-orange-500">
                <Link href="/checkout">Checkout</Link>
              </Button>
              <Button
                onClick={handleLogout}
                className="w-full bg-white text-black border-[1px] border-slate-200 hover:bg-orange-500"
              >
                Log Out
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center  ">
            <Image
              className="object-contain"
              src="/assets/icon/user.png"
              width={27}
              height={27}
              alt=""
            />
            <LoginButton>
              <Button className="text-p bg-white hover:bg-orange-500">
                Đăng Nhập
              </Button>
            </LoginButton>
          </div>
        )}
      </div>
    </div>
  );
}
