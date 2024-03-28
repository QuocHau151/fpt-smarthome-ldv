import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <div className=" absolute top-[41px] left-0 bg-slate-100 w-[100vw] h-min z-10">
      <div className=" grid grid-cols-4 grid-rows-2 py-[30px] px-[30px] items-center justify-center h-full gap-y-6 ">
        <div className="flex items-start justify-center gap-2 ">
          <Image
            src="/assets/images/product/bo-dieu-khien-trung-tam.png"
            width={150}
            height={150}
            alt="Bộ điều khiển trung tâm"
          />
          <div className="flex flex-col text-left gap-4">
            <Link
              href="/bo-dieu-khien"
              className="font-semibold hover:text-orange-600 text-2xl"
            >
              Bộ Điều Khiển Trung Tâm
            </Link>
            <Link
              href="/bo-dieu-khien/fpt-play-box"
              className="text-p font-regular hover:text-orange-600  "
            >
              FPT Play Box S
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2 ">
          <Image
            src="/assets/images/product/1692088715-Light-Led-Bulb.png"
            width={150}
            height={150}
            alt="Đèn thông minh"
          />
          <div className="flex flex-col  text-left ">
            <Link
              href="/den-thong-minh"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Đèn thông minh
            </Link>
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
              href="/den-thong-minh/den-led-panel"
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
              href="/den-thong-minh/den-led-tracklight"
              className="text-p font-regular hover:text-orange-600 "
            >
              Đèn LED Tracklight
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2 ">
          <Image
            src="/assets/images/product/1692090463-Cam-bien-chuyen-dong.png"
            width={150}
            height={150}
            alt="Cảm biến"
          />
          <div className="flex flex-col items-start justify-start text-left ">
            <Link
              href="/cam-bien"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Cảm biến
            </Link>
            <Link
              href="/cam-bien/cam-bien-cua"
              className="text-p font-regular hover:text-orange-600 "
            >
              Cảm biến cửa{" "}
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
        <div className="flex items-start justify-center gap-2">
          <Image
            src="/assets/images/product/1692151116-cong-tac-thong-minh-page-thiet-bi.png"
            width={150}
            height={150}
            alt="Công tắc thông minh"
          />
          <div className="flex flex-col  text-left ">
            <Link
              href="/cong-tac-thong-minh"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Công tắc thông minh
            </Link>
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
              href="/cong-tac-thong-minh/nut-bam-ngu-canh-khong-day"
              className="text-p font-regular hover:text-orange-600 "
            >
              Nút Bấm Ngữ Cảnh Không Dây
            </Link>
            <Link
              href="/cong-tac-thong-minh/cong-tac-cua-cuon-thong-minh-athena"
              className="text-p font-regular hover:text-orange-600 "
            >
              Công Tắc Cửa Cuốn Thông Minh Athena
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2 ">
          <Image
            src="/assets/images/product/1692088539-Bo-Dieu-Khien-Rem.png"
            width={150}
            height={150}
            alt="Bộ rèm cửa"
          />
          <div className="flex flex-col text-left ">
            <Link
              href="/bo-rem-cua"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Bộ rèm cửa thông minh
            </Link>
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
        <div className="flex items-start justify-center gap-2">
          <Image
            className=""
            src="/assets/images/product/1692151096-o-cam-thong-minh-page-thiet-bi.png"
            width={150}
            height={150}
            alt="Phụ kiện"
          />
          <div className="flex flex-col  text-left ">
            <Link
              href="/phu-kien"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Phụ kiện thông minh
            </Link>
            <Link
              href="/phu-kien/o-cam-thong-minh-wifi"
              className="text-p font-regular hover:text-orange-600 "
            >
              Ổ Cắm Thông Minh Wifi
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
        <div className="flex items-start justify-center gap-2 ">
          <Image
            src="/assets/images/product/1692088791-Khoa-YAle.png"
            width={150}
            height={150}
            alt="Khoá cửa thông minh"
          />
          <div className="flex flex-col text-left ">
            <Link
              href="/khoa-cua-thong-minh"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Khoá cửa thông minh
            </Link>
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
        <div className="flex items-start justify-center gap-2 ">
          <Image
            src="/assets/images/product/1692088779-Camera-SE.png"
            width={150}
            height={150}
            alt="Thiết bị an ninh thông minh"
          />
          <div className="flex flex-col text-left ">
            <Link
              href="/thiet-bi-an-ninh-thong-minh"
              className="font-semibold hover:text-orange-600 text-2xl mb-4"
            >
              Thiết bị an ninh thông minh
            </Link>
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
  );
}
