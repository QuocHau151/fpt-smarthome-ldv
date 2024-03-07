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
    id_product: "20038367",
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

  return (
    <>
      <Helmet>
        <title>Camera SE FPT</title>
        <meta
          name="description"
          content="Camera Thông Minh tại FPT Smart Home"
        />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container  max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Camera Thông Minh tại FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto max-md:w-[200px]"
                  src={option?.image}
                  width={585}
                  height={300}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px] max-md:w-full"></div>
              )}
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center pt-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  Camera SE FPT
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px]">
                  {option?.price} VNĐ
                </p>
                <p className="-mt-4 text-[12px] max-md:text-[10px] max-md:mt-0">
                  (Chưa bao gồm VAT)
                </p>
              </div>
              <div className="py-4">
                <p className="text-[18px] text-slate-600 font-medium mb-4 px-6 max-md:text-[12px]">
                  Thời gian bảo hành sản phẩm là 24 tháng tính từ ngày mua hàng.
                </p>
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:py-[50px] max-md:px-6">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px] ">
            Camera SE FPT
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1684486559-camera-SE.jpg"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>5V - 2A</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ phân giải</p>
                <p>2MP (1920x1080px)</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Hỗ trợ góc xoay</p>
                <p>Xoay ngang 355 độ, Xoay dọc 100 độ</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Góc quan sát</p>
                <p>107 độ</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ nhạy sáng</p>
                <p>0.028Lux @ (F2.0, AGC ON)</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chống ngược sáng</p>
                <p>Có</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khoảng cách hồng ngoại</p>
                <p>10m</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn nén hình ảnh</p>
                <p>H264, H265</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2 max-md:text-[12px]">
                <p>Đàm thoại</p>
                <p>Có</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2 max-md:text-[12px]">
                <p>Giao tiếp mạng</p>
                <p>Wifi, LAN</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] border-b-[1px] border-black font-regular px-4 py-2 max-md:text-[12px]">
                <p>Hỗ trợ thẻ nhớ</p>
                <p>Có (hỗ trợ tối đa 128GB)</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tính năng AI</p>
                <p>Có</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col  max-lg:px-20 max-md:px-6">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Camera SE FPT – Thiết bị giám sát linh hoạt, hỗ trợ đa góc nhìn,
              đàm thoại hai chiều
            </h5>
            <p>
              Tại các hộ gia đình hiện nay, lắp đặt camera trong nhà được xem là
              lựa chọn thông minh khi không chỉ đảm bảo tính an ninh tối ưu hơn
              mà còn mang đến hiệu quả giám sát không gian ưu việt. Đặc biệt,
              với các gia đình có con nhỏ, với sự hỗ trợ từ thiết bị hiện đại
              này, các phụ huynh hoàn toàn có thể theo sát hoạt động của con 1
              cách tối ưu hơn. Tích hợp những tính năng nổi bật cùng thiết kế
              sang trọng, hiện đại, mẫu camera SE đến từ thương hiệu nhà thông
              minh FPT Smart Home hẳn sẽ là gợi ý đáng cân nhắc cho khách hàng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Những đặc điểm chính của camera SE
            </h5>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1684225562-Poster-FPT-Camera-SE.png"
              width={1000}
              height={500}
              alt=""
            />

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Góc quan sát rộng, cho khả năng giám sát linh hoạt
            </h5>
            <p>
              Góc quan sát của camera khá rộng, hỗ trợ xoay ngang 355 độ, xoay
              dọc 100 độ, cho phép người dùng giám sát linh hoạt với khu vực
              rộng..
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chất lượng hình ảnh Full HD
            </h5>
            <p>
              Camera SE FPT với độ phân giải 2MP ( 1920x1080px) cho hình ảnh sắc
              nét, chất lượng Full HD, không độ trễ.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tính năng AI phát hiện có người
            </h5>
            <p>
              Hiện nay, camera quan sát không chỉ đơn thuần ghi lại hình ảnh
              chân thật mà còn phát hiện chuyển động chính xác. Ứng dụng công
              nghệ AI mới nhất trên thế giới, camera SE sẽ giúp phân biệt chuyển
              động giữa người và vật, gửi cảnh báo về smartphone ngay.
            </p>
            <p>
              Gia đình có thể tận dụng tính năng này của thiết bị để kịp thời
              phát hiện xâm nhập trái phép, chạy trốn, báo công an.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tính năng đàm thoại hai chiều
            </h5>
            <p>
              Camera SE tích hợp loa và micro, hỗ trợ đàm thoại hai chiều, cho
              phép nghe và nói chuyện với người nhà hay cảnh báo kẻ đột nhập
              bằng lời nói theo thời gian thực cả khi bạn vắng nhà.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Kết nối wifi linh hoạt
            </h5>
            <p>
              Thiết bị an ninh này được tích hợp tính năng kết nối wifi tiện
              ích. Như vậy, ngay khi lắp đặt trong trường hợp không thể đi được
              dây mạng hoặc không có nhu cầu đi đường dây mạng cố định, người
              dùng hoàn toàn có thể kết nối camera trong nhà qua wifi.
            </p>
            <p>
              Lúc này, thiết bị vừa đảm bảo hoạt động với hiệu suất cao nhất,
              lại vừa nâng cao sự linh hoạt, đảm bảo tính thẩm mỹ cho không gian
              bố trí camera.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Lưu trữ thông minh qua Cloud
            </h5>
            <p>
              Camera trong nhà đến từ thương hiệu FPT Smart Home cho phép người
              dùng có thể lưu trữ hình ảnh thông minh qua điện toán đám mây. Khi
              cần thiết, bạn hoàn toàn có thể truy cập và tìm kiếm các tệp hình
              ảnh nhanh chóng.
            </p>
            <p>
              Việc truy xuất hình ảnh lúc này có thể diễn ra tại bất kì đâu,
              ngay cả khi bạn cách xa nhà hàng nghìn cây số.
            </p>
            <p>
              Đặc biệt, hình ảnh, video lưu trữ trên đám mây cũng cho độ bảo mật
              cực cao. Đảm bảo tính riêng tư, không bị xâm phạm bởi bất kì cá
              nhân hay tổ chức nào.{" "}
            </p>
            <p>
              Ngoài ra, Camera SE còn hỗ trợ lưu trữ qua thẻ nhớ với dung lượng
              lên tới 128 GB.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của camera SE
            </h5>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1684225244-camera-SE.jpg"
              width={1000}
              height={500}
              alt=""
            />
            <p>
              Sản phẩm được thiết kế với kết cấu chuyên biệt để lắp đặt tại môi
              trường trong nhà. Theo đó, người dùng có thể cân nhắc vị trí, số
              lượng camera để bố trí tại bên trong không gian gia đình mình.
            </p>
            <p>
              Đó có thể là tại phòng khách, khu vực cửa ra vào, khu hành lang,
              phòng ngủ, phòng trẻ em,....{" "}
            </p>
            <p>
              Lúc này, camera trong nhà vừa đảm bảo nâng cao tính an ninh cho
              không gian tốt hơn, vừa giúp các bậc phụ huynh theo dõi sát sao
              hoạt động của con em mình hơn.{" "}
            </p>
            <p>
              Ngoài ra, thiết bị còn được đánh giá cao, trở thành lựa chọn giúp
              bảo đảm an ninh, tăng cường khả năng giám sát tại các cửa hàng,
              văn phòng làm việc, các khu nhà kho, phân xưởng,....
            </p>
            <p>
              Giờ đây, việc giám sát không gian cho tính tiện ích, đơn giản hơn
              đáng kể với sự hỗ trợ từ mẫu camera trong nhà thông minh. Tùy theo
              nhu cầu, khách hàng có thể cân nhắc, lắp đặt thiết bị tại vị trí
              phù hợp, giúp phát huy hiệu quả sử dụng của sản phẩm này 1 cách
              tối ưu nhất. Ngoài ra, để được tư vấn chi tiết hơn về sản phẩm
              cũng như để được đặt mua, hỗ trợ lắp đặt chuẩn tiện ích nhất, quý
              khách hàng có thể liên hệ với chúng tôi ngay qua Hotline 19006600
              hôm nay nhé.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
