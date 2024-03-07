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
    id_product: "PAWR027",
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
        <title>Ổ Cắm Thông Minh WiFi</title>
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

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[40px]">
                  {option ? `${option?.price} VNĐ` : "Hết Hàng"}
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Ổ Cắm Thông Minh WiFi
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1691061458-o-cam-wifi-copy.jpg"
              width={1000}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>220V/50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất tải tối đa</p>
                <p>3000W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nhiệt độ hoạt động</p>
                <p>-10 ÷ 45 ̊C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chân cắm</p>
                <p>Chân tròn Φ5mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước</p>
                <p>Φ54.5*32mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Wi-Fi 2.4GHz 802.11b/g/n</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">TCVN 6615-1:2009/IEC 61058-1:2008</p>
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
              Ổ cắm thông minh WiFi- Nâng cấp tự động hoá tất cả thiết bị điện
            </h5>
            <p>
              Ổ cắm thông minh WiFi đang trở thành một công cụ tiện ích không
              thể thiếu cho ngôi nhà hiện đại, giúp biến các thiết bị điện gia
              dụng trong nhà như quạt, đèn, sạc, ấm đun… thành các thiết bị điện
              thông minh khi dễ dàng điều khiển từ xa, hẹn giờ để chúng hoạt
              động tự động.
            </p>
            <p>
              Sản phẩm thuộc hệ sinh thái nhà thông minh FPT Smart Home mang đến
              sự tiện lợi và linh hoạt cho việc quản lý các thiết bị điện trong
              gia đình, với chi phí phải chăng, người dùng có thể dễ dàng bắt
              đầu tiếp cận sử dụng smart home trong căn nhà của mình.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Các tính năng nổi bật của Ổ cắm thông minh WiFi
            </h5>{" "}
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển thiết bị điện gia dụng từ xa thông qua
            </h5>
            <p>
              Tính năng điều khiển thiết bị điện từ xa của ổ cắm thông minh WiFi
              là một trong những đặc điểm nổi bật và hữu ích nhất của nó. Nhờ
              tích hợp kết nối wifi, người dùng có thể dễ dàng điều khiển và
              quản lý mọi thiết bị điện trong gia đình chỉ bằng một vài thao tác
              trên smartphone, tablet .
            </p>
            <p>
              Khi ổ cắm và thiết bị điện đã được kết nối và đồng bộ với ứng
              dụng, người dùng có thể điều khiển chúng từ bất kỳ đâu, miễn là có
              kết nối internet. Điều này cho phép bạn bật hoặc tắt các thiết bị
              điện từ xa một cách thuận tiện, ngay cả khi bạn không ở nhà.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hẹn giờ hoạt động thiết bị
            </h5>
            <p>
              Ổ cắm thông minh WiFi cho phép người dùng thiết lập lịch trình
              hoạt động tự động cho các thiết bị điện. Bạn có thể cài đặt thời
              gian bật/tắt cụ thể cho các thiết bị như quạt, máy nước nóng, đèn,
              ổ sạc,.. giúp tiết kiệm năng lượng và tối ưu hóa việc sử dụng điện
              trong gia đình.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển bằng giọng nói
            </h5>
            <p>
              Ổ cắm thông minh WiFi của FPT Smart Home cũng tích hợp khả năng
              điều khiển bằng giọng nói thông qua bộ điều khiển trung tâm. Bằng
              cách nói câu lệnh phù hợp, bạn có thể điều khiển các thiết bị điện
              một cách nhanh chóng và dễ dàng.
            </p>
            <p>
              Ngoài ra, khi kết hợp thêm với các thiết bị trong hệ sinh thái như
              bộ điều khiển trung tâm, cảm ứng cửa, bạn có thể tạo ra ngữ cảnh
              báo động giúp bảo vệ an ninh gia đình hiệu quả.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chịu tải tốt, tương thích với nhiều loại phích cắm trên thị trường
            </h5>
            <p>
              Ổ cắm thông minh WiFi FPT có dòng điện tối đa lên tới 16A và hỗ
              trợ công suất lên tới 3000W nên cho phép cấp nguồn hầu hết các
              thiết bị điện tử.
            </p>
            <p>
              Ngoài ra, sản phẩm được cấu tạo từ chất liệu nhựa ABS cao cấp, hỗ
              trợ chống cháy, chống tình trạng quá tải khi sử dụng. Chất liệu
              nhựa cũng tạo cho sản phẩm 1 vẻ ngoài cứng cáp, màu trắng, tinh
              tế.{" "}
            </p>
            <p>
              Ổ cắm tương thích với hầu hết các loại phích cắm trên thị trường:
              dẹt, tròn, 2 chân, 3 chân của bất kì hãng nào trên thế giới.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cách thức hoạt động
            </h5>
            <p>
              Ổ cắm thông minh WiFi của FPT Smart Home sử dụng kết nối wifi
              2.4GHz, hoạt động độc thông qua ứng dụng FPT Life, người dùng có
              thể dễ dàng điều khiển bật tắt, hẹn giờ có các thiết bị điện gia
              dụng mà không cần bộ điều khiển trung tâm.
            </p>
            <p>
              Sản phẩm còn hỗ trợ Bluetooth Mesh, giúp tăng khoảng cách kết nối
              và độ ổn định của các thiết bị Bluetooth Mesh trong hệ thống nhà
              thông minh FPT Smart Home.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của Ổ cắm thông minh WiFi
            </h5>
            <p>
              Ổ cắm thông minh wifi hiện cũng khá phổ biến và được người tiêu
              dùng ưa chuộng vì những lợi ích mà sản phẩm đem lại cho cuộc sống
              hằng ngày, giúp bạn tận dụng công nghệ để tạo ra một ngôi nhà
              thông minh và tiện nghi hơn:
            </p>
            <p>
              Tiết kiệm năng lượng: Bằng cách tự động tắt các thiết bị khi không
              cần thiết, ổ cắm thông minh wifi giúp bạn tiết kiệm năng lượng và
              giảm thiểu chi phí hóa đơn điện. Ví dụ, nếu bạn thường quên tắt
              đèn khi đi ngủ, bạn có thể cài đặt ổ cắm thông minh để tự động tắt
              đèn sau một khoảng thời gian tuỳ chỉnh.
            </p>
            <p>
              Tiện lợi khi vắng nhà: Tính năng hẹn giờ hoặc điều khiển từ xa rất
              hữu ích khi bạn đi du lịch hoặc vắng nhà trong một thời gian dài.
              Hẹn giờ bật đèn bàn thờ hay ban công điều đặn hoặc dễ dàng tắt đèn
              từ xa nếu lỡ quên khi đi ra ngoài.
            </p>
            <p>
              Tưới cây tự động: Chỉ cần kết nối với máy bơm nước, bạn đã dễ dàng
              có được hệ thống tưới tiêu tự động, được kích hoạt vào đúng khung
              giờ hằng ngày, tiện lợi và tiết kiệm nước. Tóm lại, ổ cắm thông
              minh WiFi có nhiều ứng dụng đa dạng trong đời sống, giúp bạn tận
              dụng công nghệ để quản lý và điều khiển các thiết bị điện trong
              gia đình một cách tiện lợi, hiệu quả và an toàn.
            </p>
            <p>
              Liên hệ với chúng tôi ngay hôm nay để được giải đáp cũng như hỗ
              trợ tận tình, chuyên nghiệp nhất!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
