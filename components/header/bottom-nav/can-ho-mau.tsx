import Link from "next/link";
import React from "react";

export default function Apartment() {
  return (
    <div className="absolute top-[41px]  z-10 bg-slate-100 rounded-lg ">
      <div className="flex flex-col  items-start justify-center px-4 py-6 text-[16px] gap-2 font-medium">
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/can-ho-mau/can-ho-1pn"
        >
          Căn 1 phòng ngủ
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/can-ho-mau/can-ho-2pn"
        >
          Căn 2 phòng ngủ
        </Link>

        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/can-ho-mau/can-ho-3pn"
        >
          Căn 3 phòng ngủ
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/can-ho-mau/nha-pho-3-tang"
        >
          Nhà phố 3 tầng
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/can-ho-mau/can-ho-duplex-2pn"
        >
          Căn hộ Duplex 2 <br /> phòng ngủ
        </Link>
      </div>
    </div>
  );
}
