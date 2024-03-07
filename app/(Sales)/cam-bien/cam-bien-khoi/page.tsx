"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Page() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);

  const fetchData = async () => {
    try {
      const res = await fetchProduct();
      setProducts(res as unknown as ProductData[]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState({
    id_product: "RSBR011",
  });

  const handleChange = (event: any) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.value,
    });
  };

  const option = products.find(
    (item) => item.id_product === selectedOptions.id_product
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };
  console.log(cart);
  return (
    <div className="">
      <Helmet>
        <title>Cảm Biến Khói Thông Minh </title>
        <meta
          name="description"
          content="Các thiết bị Cảm biến thông minh FPT Smart Home "
        />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container  max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Các thiết bị Cảm biến
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto"
                  src={option?.image}
                  width={585}
                  height={585}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px] max-md:w-full"></div>
              )}
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center pt-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[25px]">
                  {option?.name ?? ""}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px] ">
                <p className="text-[50px] font-bold max-md:text-[30px]">
                  {option?.price} VNĐ
                </p>
                <p className="-mt-4 text-[12px] max-md:text-[10px] max-md:mt-0">
                  (Chưa bao gồm VAT)
                </p>
              </div>
              <div className="py-4">
                <p className="text-[18px] text-slate-600 font-medium mb-4 px-6"></p>
                <div className="flex items-center justify-center gap-2 w-full">
                  <Button
                    onClick={() => option && handleAddToCart(option)}
                    className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white max-md:text-[12px]"
                  >
                    <Link href="/checkout"> Mua ngay</Link>
                  </Button>
                  <Button
                    onClick={() => option && handleAddToCart(option)}
                    className="basis-1/2 bg-white font-medium border-[1px] border-black text-black hover:bg-orange-500 hover:text-white max-md:text-[12px]"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Cảm Biến Khói
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1697685911-945x764.jpg"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>Pin CR123A</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dải nhiệt độ hoạt động</p>
                <p>-10÷50˚C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dải độ ẩm hoạt động</p>
                <p>0 ÷ 95%</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước</p>
                <p>Ø90x37 mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khối lượng</p>
                <p>150g</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Mức âm thanh cảnh báo</p>
                <p>85dB</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ nhạy của đầu dò khói</p>
                <p>0.12-0.2 dB/m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tiêu chuẩn áp dụng</p>
                <p>TCVN7568-15:2015</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col  max-lg:px-20 max-md:px-6 ">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <p>
              Cảm biến khói thông minh là một thiết bị không thể thiếu trong hệ
              thống ngôi nhà thông minh, giúp đảm bảo an toàn cho gia chủ và kịp
              thời cảnh báo khi có sự cố về cháy nổ. Cùng FPT Smart Home tìm
              hiểu chi tiết ngay.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1698721516-831x552-copy.jpg"
              width={850}
              height={600}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cảm biến khói là gì?
            </h5>
            <p>
              Cảm biến khói là thiết bị có khả năng nhận biết, phát hiện nhanh
              chóng khói hay các đám cháy trong ngôi nhà. Sau đó nó sẽ truyền
              tín hiệu đến trung tâm điều khiển để gửi báo động và kích hoạt các
              thiết bị như còi báo động, vòi phun nước ,... nhằm tạo sự chú ý,
              sớm ngăn chặn hỏa hoạn xảy ra và giảm thiểu các rủi ro thiệt hại
              về người và tài sản.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tác dụng khi dùng cảm biến khói báo cháy
            </h5>
            <p>Cảm biến khói báo cháy có tác dụng sau:</p>
            <ul className="pl-10 list-disc">
              <li>
                Phòng chống các sự cố cháy nổ xảy ra do phát hiện sớm, ngăn chặn
                các vụ cháy xảy ra.
              </li>
              <li>
                Nhờ được cảnh báo, phát hiện sớm những nguy cơ xảy ra và xử lý
                kịp thời nên hạn chế tối đa thiệt hại do đám cháy gây ra.
              </li>
              <li>
                Nhận biết và phát hiện khói rồi gửi thông báo ngay lập tức đến
                điện thoại của người dùng bất cứ khi nào dù họ đang ở bất cứ
                đâu. Nhờ đó, chủ nhà sẽ có những biện pháp xử lý để đảm bảo an
                toàn cho những người trong gia đình. Hạn chế được thiệt hại của
                cải khi các sự cố cháy nổ xảy ra.
              </li>
              <li>
                Có thiết kế cực kỳ nhỏ gọn, dễ dàng lắp đặt ở nhiều vị trí cũng
                không ảnh hưởng đến không gian hay cấu trúc của ngôi nhà.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Các tính năng ấn tượng của cảm biến khói FPT Smart Home
            </h5>
            <p>
              Cảm biến khói FPT Smart Home có thiết kế siêu nhỏ với kích thước
              Ø90x37 mm cùng trọng lượng siêu nhẹ chỉ 150g. Về kiểu dáng thì sản
              phẩm có được thiết kế tinh gọn và hiện đại. Sản phẩm được làm bằng
              chất liệu ABS cùng với kiểu dáng tròn đơn giản, phù hợp với mọi
              không gian nội thất. Ngoài các ưu điểm về thiết kế, cảm biến khói
              FPT Smart Home còn có những tính năng ấn tượng như:
            </p>
            <ul className="pl-10 list-disc">
              <li>
                Khả năng cảm biến khói siêu nhanh, siêu nhạy, dễ dàng phát hiện
                mật độ khói bất thường khi lớn hơn 0.12dB./m
              </li>
              <li>
                Khi phát hiện khói, thiết bị này sẽ tự động phát ra các âm thanh
                cảnh báo lên đến 85dB để báo động cho mọi người trong nhà biết
                và xử lý.
              </li>
              <li>
                Gửi cảnh báo thời gian thực: Khi phát hiện sự cố khói cháy bất
                thường, ngay lập tức cảm biến khói sẽ gửi tín hiệu đến bộ điều
                khiển trung tâm, và sẽ gửi thông báo tức thời đến điện thoại
                người dùng trên app FPT Life, dù họ ở bất kì đâu cũng được nhận
                thông báo kịp thời.
              </li>
              <li>
                Cho phép kết hợp cùng với các thiết bị thông minh khác để tăng
                hiệu quả báo động. Người dùng có thể thiết lập các kịch bản
                chống cháy thông minh như phát hiện sự cố, đèn LED sẽ được bật
                sáng, bật quạt, kích hoạt hệ thống tưới cây, cửa tự động mở… để
                giúp mọi người nhanh chóng xử lý tình huống hoặc thoát hiểm.
              </li>
              <li>
                Sử dụng chuẩn kết nối không dây Bluetooth Mesh, cho khả năng vận
                hành ổn định.{" "}
              </li>
              <li>
                Thiết kế nhỏ gọn giúp lắp đặt dễ dàng ở khu vực có nguy cơ cao
                xảy ra hỏa hoạn. Có thể lắp đặt cảm biến khói lên tường hay lên
                trần nhà.{" "}
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng cảm biến khói thông minh trong đời sống
            </h5>
            <p>
              Ngày nay, cảm biến khói thông minh được ứng dụng rộng rãi trong
              đời sống con người.
            </p>
            <p>
              Cảm biến khói thường được lắp đặt tại phòng bếp, gara để xe, bệnh
              viện, công xưởng, trường học… để giúp phát hiện sớm các nguy cơ
              cháy nổ, gửi cảnh báo tới người dùng nhằm có hướng xử lý kịp thời.
            </p>
            <p>
              Trong cuộc sống, nhiều lúc chỉ cần một phút lơ là, bất cẩn là có
              thể để xảy ra cháy. Trong thời gian vừa qua, các sự cố về cháy nổ,
              tai nạn diễn biến phức tạp và khó lường trước, để giảm thiểu rủi
              ro về người và tài sản tới mức thấp nhất, bên cạnh việc trang bị
              các kỹ năng thoát hiểm, chủ động trang bị các thiết bị phát hiện
              nguy cơ cháy nổ sớm là hành động thiết thực và nên được ưu tiên
              hàng đầu.
            </p>
            <p>
              Cảm biến khói góp phần quan trọng trong việc phát hiện và cảnh báo
              về nguy cơ cháy, giúp bảo vệ tính mạng và tài sản của con người,
              cũng như đảm bảo an toàn cho gia đình và xã hội.
            </p>
            <p>
              Một số lưu ý khi dùng cảm biến khói thông minh để thiết bị hoạt
              động có hiệu quả nhất:
            </p>
            <ul className="pl-10 list-disc">
              <li>
                Nên chọn vị trí lắp đặt cảm biến khói phù hợp: Nên đặt nó ở gần
                những khu vực dễ cháy nổ. Tránh lắp đặt tại các khu vực “không
                khí chết”, không quá gần dây điện để thiết bị có thể hoạt động
                được tốt nhất.
              </li>
              <li>
                Thử nghiệm thiết bị cảm biến cảnh báo khói: Để thử thiết bị, bạn
                có thể thử đốt giấy, đốt thuốc lá để kiểm tra cảm biến khói có
                hoạt động nhanh nhạy hay không. Nên thực hiện nhiều lần ở các
                mức độ khác nhau.
              </li>
              <li>
                Kết nối với các thiết bị thông minh khác trong hệ thống để giúp
                thiết bị hoạt động tối ưu hơn. Ví dụ như chuông báo thông minh,
                đèn LED thông minh, ổ cắm thông minh wifi, camera,...
              </li>
              <li>
                Nên thực hiện bảo trì, thay thế định kỳ để đảm bảo thiết bị lúc
                nào cũng hoạt động tốt.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
