"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCurrentUser } from "@/hook/use-current-user";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Dropdown from "./ui/dropdown";
import { IoIosMenu } from "react-icons/io";
import { FaCaretDown, FaRegUser } from "react-icons/fa";
import AnimateHeight from "react-animate-height";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
export default function Header() {
  const pathname = usePathname();

  const [currentMenu, setCurrentMenu] = useState<string>("dashboard");
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  const user = useCurrentUser();
  const [search, setSearch] = useState(false);
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div className="fixed w-full h-[60px] bg-gray-900 flex items-center justify-between px-10 max-md:hidden">
        <div className="flex items-center justify-start gap-10">
          <Link href="/">
            <Image
              src="/assets/logofptsh.png"
              width={200}
              height={100}
              alt=""
            />
          </Link>

          <div className="flex items-center   ">
            <ul className="flex items-center space-x-2  ">
              <li>
                <Link
                  href="/apps/calendar"
                  className="block text-white rounded-full  p-2 hover:bg-white-light/90 hover:bg-gray-700  bg-black "
                >
                  <IoCalendarNumberOutline />
                </Link>
              </li>
              <li>
                <Link
                  href="/apps/todolist"
                  className="block text-white rounded-full  p-2 hover:bg-white-light/90 hover:bg-gray-700  bg-black"
                >
                  <LuClipboardEdit />
                </Link>
              </li>
              <li>
                <Link
                  href="/apps/chat"
                  className="block text-white rounded-full  p-2 hover:bg-white-light/90 hover:bg-gray-700  bg-black"
                >
                  <IoNotificationsCircleOutline />
                </Link>
              </li>
            </ul>
            <form className={""} onSubmit={() => setSearch(false)}>
              <div className=" ml-6 flex gap-4">
                <input
                  type="text"
                  className="bg-gray-800  outline-4 w-[300px] h-[40px] rounded-md px-4 text-white"
                  placeholder="Search..."
                />
                <button type="button" className="  text-white">
                  <IoSearchOutline className="mx-[-50px]" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className=" text-white ">
            <Dropdown
              offset={[0, 8]}
              placement={"bottom-end"}
              btnClassName="block p-2 rounded-full bg-black hover:bg-gray-700"
              button={<CiMail />}
            >
              <ul className="w-[300px] !py-0 text-xs text-dark dark:text-white-dark sm:w-[375px] bg-gray-700 rounded-2xl">
                <li className="mb-5" onClick={(e) => e.stopPropagation()}>
                  <div className="relative w-full overflow-hidden rounded-t-md text-left pl-8 pt-4 text-white hover:!bg-transparent">
                    <h4 className="relative z-10 text-lg font-semibold">
                      Messages
                    </h4>
                  </div>
                </li>
              </ul>
            </Dropdown>
          </div>
          <div className=" text-white">
            <Dropdown
              offset={[0, 8]}
              placement={"bottom-end"}
              btnClassName="block p-2 rounded-full bg-black  hover:bg-gray-700 "
              button={
                <span>
                  <CiBellOn />
                </span>
              }
            >
              <ul className="w-[400px] divide-y  bg-gray-700 rounded-2xl">
                <li onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between px-4 py-2 font-semibold">
                    <h4 className="text-lg">Notification</h4>
                    {/* {notifications.length ? (
                  <span className="">{notifications.length}New</span>
                ) : (
                  ""
                )} */}
                  </div>
                </li>
              </ul>
            </Dropdown>
          </div>
          <div className="">
            <Dropdown
              offset={[0, 8]}
              placement={"bottom-end"}
              btnClassName="block p-2 rounded-full bg-black "
              button={
                <Image
                  className="h-[20px] w-[20px] rounded-full object-cover saturate-50 group-hover:saturate-100"
                  src={user?.image || "/assets/icon/user.png"}
                  alt="userProfile"
                  width={40}
                  height={40}
                />
              }
            >
              <ul className="w-[300px] font-semibold bg-gray-700 rounded-xl text-white px-4 mt-[-4px]">
                <li>
                  <div className="flex items-center px-4 py-4 gap-6">
                    <Image
                      className="h-10 w-10 rounded-md object-cover"
                      src={user?.image || "/assets/icon/user.png"}
                      alt="userProfile"
                      width={40}
                      height={40}
                    />
                    <div className="truncate ">
                      <h4 className="text-base">{user?.name}</h4>
                      <button
                        type="button"
                        className="text-black/60 hover:text-primary "
                      >
                        {user?.email}
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-4 hover:bg-gray-500">
                  <Link
                    href="/users/profile"
                    className="flex items-center gap-2 text-white"
                  >
                    <CiUser className="h-4.5 w-4.5 shrink-0 " />
                    Profile
                  </Link>
                </li>
                <li className="py-4 hover:bg-gray-500">
                  <Link
                    href="/apps/mailbox"
                    className="flex items-center gap-2 text-white"
                  >
                    <CiMail className="h-4.5 w-4.5 shrink-0 " />
                    Inbox
                  </Link>
                </li>
                <li className="py-4 hover:bg-gray-500">
                  <Link
                    href="/auth/boxed-lockscreen"
                    className="flex items-center gap-2 text-white"
                  >
                    <CiLock className="h-4.5 w-4.5 shrink-0 " />
                    Lock Screen
                  </Link>
                </li>
                <li className=" border-t border-white-light hover:bg-gray-500">
                  <Button
                    onClick={handleLogout}
                    className="!py-3 text-danger flex items-center gap-2"
                  >
                    <CiLogout className="h-4.5 w-4.5 shrink-0 rotate-90 " />
                    Sign Out
                  </Button>
                </li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="md:hidden max-md:flex bg-gray-900  items-center justify-between p-4 gap-10">
        <div>
          <Sheet>
            <SheetTrigger>
              <IoIosMenu style={{ color: "white" }} />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <div className="h-full bg-gray-300 w-full px-4 pt-[50px] ">
                <div>
                  <ul>
                    <li className="flex flex-col items-start gap-4 menu nav-item">
                      <button
                        type="button"
                        className={`${
                          currentMenu === "dashboard" ? "bg-gray-700 " : ""
                        }  w-full flex justify-between items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-gray-700 `}
                        onClick={() => toggleMenu("dashboard")}
                      >
                        <div className="flex items-center gap-2">
                          <RxDashboard className="shrink-0 text-white" />
                          <span className="text-white  ">Dashboard</span>
                        </div>

                        <div
                          className={
                            currentMenu !== "dashboard"
                              ? "-rotate-90 rtl:rotate-90 text-white"
                              : "text-white"
                          }
                        >
                          <FaCaretDown />
                        </div>
                      </button>

                      <AnimateHeight
                        duration={300}
                        height={currentMenu === "dashboard" ? "auto" : 0}
                        className="w-full "
                      >
                        <div className=" text-gray-500 list-disc  flex flex-col gap-4 w-full ">
                          <Link
                            className="px-10 hover:bg-gray-700 block h-10 pt-2 "
                            href="/admin"
                          >
                            {pathname === "/admin" ? (
                              <span className="text-orange-900">Sales</span>
                            ) : (
                              "Sales"
                            )}
                          </Link>
                          <Link
                            className="px-10 hover:bg-gray-700 block h-10 pt-2 "
                            href="/admin/product"
                          >
                            {pathname === "/admin/product" ? (
                              <span className="text-orange-900">Products</span>
                            ) : (
                              "Products"
                            )}
                          </Link>
                          <Link
                            className="px-10 hover:bg-gray-700 block h-10 pt-2 "
                            href="/admin/order"
                          >
                            {pathname === "/admin/order" ? (
                              <span className="text-orange-900">Order</span>
                            ) : (
                              "Order"
                            )}
                          </Link>
                          <Link
                            className="px-10 hover:bg-gray-700 block h-10 pt-2 "
                            href="/admin/partner"
                          >
                            {pathname === "/admin/partner" ? (
                              <span className="text-orange-900">Partner</span>
                            ) : (
                              "Partner"
                            )}
                          </Link>
                          <Link
                            className="px-10 hover:bg-gray-700 block h-10 pt-2 "
                            href="/admin/contact"
                          >
                            {pathname === "/admin/contact" ? (
                              <span className="text-orange-900">Contact</span>
                            ) : (
                              "Contact"
                            )}
                          </Link>
                          <Link
                            className="px-10 hover:bg-gray-700 block h-10 pt-2 "
                            href="/admin/brandshop"
                          >
                            {pathname === "/admin/brandshop" ? (
                              <span className="text-orange-900">
                                Brand Shop
                              </span>
                            ) : (
                              "Brand Shop"
                            )}
                          </Link>
                          
                        </div>
                      </AnimateHeight>
                    </li>
                  </ul>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="">
          <Dropdown
            offset={[0, 8]}
            placement={"bottom-end"}
            btnClassName="block p-2 rounded-full bg-black "
            button={
              <Image
                className="h-[20px] w-[20px] rounded-full object-cover saturate-50 group-hover:saturate-100"
                src={user?.image || "/assets/icon/user.png"}
                alt="userProfile"
                width={40}
                height={40}
              />
            }
          >
            <ul className="w-[250px] font-semibold bg-gray-700 rounded-xl text-white px-4 mt-[-4px] pb-1">
              <li>
                <div className="flex items-center px-2 py-2 gap-3">
                  <Image
                    className="h-5 w-5 rounded-md object-cover"
                    src={user?.image || "/assets/icon/user.png"}
                    alt="userProfile"
                    width={20}
                    height={20}
                  />
                  <div className="truncate ">
                    <h4 className="text-[13px]">{user?.name}</h4>
                    <button
                      type="button"
                      className="text-black/60 text-[12px] hover:text-primary "
                    >
                      {user?.email}
                    </button>
                  </div>
                </div>
              </li>
              <li className="py-4 hover:bg-gray-500">
                <Link
                  href="/users/profile"
                  className="flex items-center gap-2 text-white text-[13px]"
                >
                  <CiUser className="h-4.5 w-4.5 shrink-0 " />
                  Profile
                </Link>
              </li>
              <li className="py-4 hover:bg-gray-500">
                <Link
                  href="/apps/mailbox"
                  className="flex items-center gap-2 text-white text-[13px]"
                >
                  <CiMail className="h-4.5 w-4.5 shrink-0 " />
                  Inbox
                </Link>
              </li>
              <li className="py-4 hover:bg-gray-500">
                <Link
                  href="/auth/boxed-lockscreen"
                  className="flex items-center gap-2 text-white text-[13px]"
                >
                  <CiLock className="h-4.5 w-4.5 shrink-0 " />
                  Lock Screen
                </Link>
              </li>
              <li className=" border-t border-white-light hover:bg-gray-500 w-full">
                <Button
                  onClick={handleLogout}
                  className="py-3 text-danger flex items-center gap-2 text-[13px] mx-auto my-2"
                >
                  <CiLogout className="h-4.5 w-4.5 shrink-0 rotate-90 " />
                  Sign Out
                </Button>
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
