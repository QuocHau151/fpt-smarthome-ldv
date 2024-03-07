"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateHeight from "react-animate-height";
import { RxDashboard } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

export default function SideBar() {
  const pathname = usePathname();

  const [currentMenu, setCurrentMenu] = useState<string>("dashboard");
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };
  return (
    <div>
      <div className="fixed h-[calc(100vh)] top-[60px] bg-gray-900 w-[250px] px-4 max-lg:hidden ">
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
                      <span className="text-orange-900">Brand Shop</span>
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
    </div>
  );
}
