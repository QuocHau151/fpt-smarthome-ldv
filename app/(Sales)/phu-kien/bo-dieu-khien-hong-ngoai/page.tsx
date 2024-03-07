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
    id_product: "IRWB012",
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
    <>
      <Helmet>
        <title>Bộ Điều Khiển Hồng Ngoại</title>
        <meta name="description" content="Phụ Kiện Thông Minh FPT Smart Home" />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container  max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Phụ Kiện Thông Minh FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto max-md:w-[200px]"
                  src={option?.image}
                  width={300}
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
                  Bộ Điều Khiển Hồng Ngoại
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
                  Thời gian bảo hành sản phẩm là 12 tháng tính từ ngày mua hàng.
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Bộ Điều Khiển Hồng Ngoại
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1684406592-PR-FSH-5-2022_600X375-2.jpg"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>DC 5V-1A (micro USB)</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tần số hồng ngoại</p>
                <p>38KHz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Hướng hồng ngoại</p>
                <p>Đa hướng</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Phạm vi hồng ngoại</p>
                <p>Tối đa 8m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Chuẩn kết nối</p>
                <p className="text-right">
                  Wi-Fi 802.11b/g/n (2.4GHz), Hỗ trợ Bluetooth Mesh*
                </p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Sóng điều khiển</p>
                <p>Sóng hồng ngoại</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước</p>
                <p>67*67*25mm</p>
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
              Nhắc đến các giải pháp điều khiển tiện nghi cho ngôi nhà thông
              minh thì không thể thiếu bộ điều khiển hồng ngoại FPT Smart Home.
              Với khả năng thu phát tín hiệu hồng ngoại nhạy bén từ các thiết
              bị, sản phẩm có thể thay thế hầu hết các loại remote truyền thống,
              cho phép điều khiển từ mọi vị trí. Sản phẩm có thiết kế hình tròn,
              nhỏ gọn, mang màu đen sang trọng, phù hợp với mọi không gian, góp
              phần tạo nên căn nhà thông minh tiện nghi và đẳng cấp.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              1. Bộ điều khiển hồng ngoại là gì?
            </h5>
            <p>
              Bộ điều khiển hồng ngoại đa năng thuộc giải pháp điều khiển thông
              minh của FPT Smart Home. Thiết bị sử dụng sóng hồng ngoại để điều
              khiển các thiết bị như điều hoà, TV, quạt… thay thế cho các loại
              remote truyền thống.
            </p>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/VYd3aqcH71c?si=y0NRSfIkOcnBwvRZ"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2. Cách thức hoạt động của Bộ điều khiển hồng ngoại
            </h5>
            <p>
              Bộ điều khiển hồng ngoại được trang bị các mắt hồng ngoại có chức
              năng phát tín hiệu tương ứng với bộ mã nhận diện của các thiết bị
              sử dụng sóng hồng ngoại trong gia đình để điều khiển các tính năng
              tương ứng thay thế cho remote.
            </p>
            <p>
              Khi đó, đèn LED bên trong thiết bị sẽ nháy sáng để báo tín hiệu
              hồng ngoại vừa phát ra. Đối với bộ điều khiển hồng ngoại của FPT
              Smart Home, đã được tích hợp hầu hết các bộ mã điều khiển phổ biến
              tại Việt nam, người dùng chỉ cần chọn mã phù hợp để sử dụng.
            </p>
            <p>
              Ngoài ra, chức năng Phát hiện IR được tích hợp sẵn có thể giúp
              nhanh chóng tìm thấy được mã remote đã được hỗ trợ mà không cần
              thực hiện lại nhiều lần thao tác tìm kiếm mã remote tương thích
              như trên các bộ điều khiển hồng ngoại khác.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1685088416-Tinh-nang-dieu-hoa-IR-web.jpg"
              width={1000}
              height={500}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              3. Tính năng của Bộ điều khiển hồng ngoại FPT Smart Home
            </h5>
            <p>
              Nếu phiền phức vì phải tìm kiếm từng nút nhấn trên remote để chỉnh
              nhiệt độ điều hoà hoặc lúc ra ngoài hay quên tắt, cuối tháng chóng
              mặt vì tiền điện tăng? Giờ đây, với bộ điều khiển hồng ngoại FPT,
              sẽ giúp bạn:
            </p>
            <ul className="ml-10 list-disc">
              <li>
                Tắt mở điều hoà, điều chỉnh tăng giảm nhiệt độ, chuyển chế độ dễ
                dàng từ xa qua App điện thoại.
              </li>
              <li>
                Đặt lịch và hẹn giờ hoạt động cho thiết bị một cách linh hoạt,
                phù hợp với nhịp sinh học của gia đình, đảm bảo sức khỏe.
              </li>
              <li>
                Kết hợp với các thiết bị khác tạo ngữ cảnh thông minh, giúp tiết
                kiệm điện năng.
              </li>
              <li>
                Tương thích với trợ lý ảo Google, giúp điều khiển thiết bị bằng
                giọng nói tiếng Việt thông qua FPT Play Box S.
              </li>
              <li>
                Tín hiệu IR đa hướng, giúp điều khiển thiết bị ở bất kỳ vị trí
                nào trong phòng.
              </li>
              <li>
                Hỗ trợ công nghệ Bluetooth Mesh, giúp tăng độ ổn định và khả
                năng kết nối của các thiết bị Bluetooth Mesh trong hệ thống nhà
                thông minh.
              </li>
            </ul>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đặc biệt, Bộ điều khiển hồng ngoại của FPT Smart Home, sử dụng kết
              nối Wifi 2.4Ghz, hoạt động độc lập mà không cần bộ điều khiển
              trung tâm, người dùng có thể liên kết trực tiếp với ứng dụng FPT
              Life và sử dụng ngay.
            </h5>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1685615898-He-lo-bi-quyet-giup-ban-sung-suong-cung-dieu-hoa-suot-ca-ngay3-ban-web.jpg"
              width={1000}
              height={500}
              alt=""
            />

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              4. Tạo kịch bản cùng Bộ điều khiển hồng ngoại FPT Smart Home
            </h5>
            <p>
              Kết hợp thiết lập kịch bản tự động cho Bộ Điều khiển hồng ngoại
              cùng với các thiết bị thông minh khác trong hệ sinh thái nhà thông
              minh FPT góp phần tạo nên các lịch trình tự động tiện nghi, đưa
              cuộc sống của bạn nâng tầm đẳng cấp.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1685088416-Tinh-nang-dieu-hoa-IR-web2.jpg"
              width={1000}
              height={500}
              alt=""
            />

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tham khảo ngay các hướng dẫn tạo kịch bản bên dưới:
            </h5>
            <p>Lúc 2h sáng, điều hoà tăng lên 26 độ để giảm lạnh.</p>
            <p>
              Tới 6h sáng, đặt lịch tắt điều hoà, mở rèm, bình nước mở sẵn để
              chào đón ngày mới.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
