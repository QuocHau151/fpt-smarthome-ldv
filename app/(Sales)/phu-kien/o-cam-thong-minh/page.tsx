"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Page() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);
  const pathname = usePathname();

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
    connect: "Zigbee",
  });

  const handleChange = (event: any) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.value,
    });
  };
  const parts = pathname.split("/");
  const category = parts[1];
  const option = products.find(
    (item) =>
      item.connect === selectedOptions.connect && item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div>
      <Helmet>
        <title>Ổ Cắm Mặt Kính Âm Tường</title>
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
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl py-4">
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
              <div className="flex flex-col items-center py-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  {option?.name ?? ""}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center ">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex  flex-col items-start justify-start w-full gap-6 border-b-[1px] border-black pb-[50px]">
                <div className="flex items-center justify-center gap-4 w-full">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Loại kết nối
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="connect"
                      value="Zigbee"
                      checked={selectedOptions.connect === "Zigbee"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Zigbee
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="connect"
                      value="BLE"
                      checked={selectedOptions.connect === "BLE"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      BLE
                    </label>
                  </div>
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
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Ổ Cắm Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569358-o-cam-thong-minh.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Điện áp hoạt động</p>
                <p>220V - 50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dòng điện tối đa</p>
                <p>16A</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>3500W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số lần bật tắt</p>
                <p>100.000 lần</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chịu xung sét</p>
                <p>0.5 kV</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (Đường kính x Cao)</p>
                <p>63x44x49mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tiêu chuẩn áp dụng</p>
                <p>TCVN 6480-1:2008</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh</p>
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
            <p>
              Các thiết bị thông minh, hỗ trợ điều khiển qua giọng nói dần được
              ứng dụng rộng rãi hơn. Điều này khá dễ hiểu khi không chỉ đáp ứng
              nhu cầu sử dụng cơ bản, các thiết bị này còn nâng tầm chất lượng
              cuộc sống đáng kể cho người dùng. Ổ cắm thông minh đến từ thương
              hiệu FPT Smart Home là 1 trong những sản phẩm điển hình cho mô
              hình thiết bị tiện ích nói trên. Vậy, bạn đã biết gì về ưu điểm
              cùng tính ứng dụng từ mẫu thiết bị này?
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ổ cắm thông minh là gì?
            </h5>
            <p>
              Ổ cắm thông minh (hay phích cắm thông minh) là loại ổ cắm điện
              người dùng có thể thực hiện điều khiển thông qua giọng nói các ứng
              dụng trên smartphone, cho phép sự linh hoạt hơn đáng kể trong quá
              trình sử dụng, giúp biến mọi thiết bị điện trong nhà bạn trở nên
              thông minh hơn mà không tốn kém nhiều chi phí.
            </p>
            <p>
              Ổ cắm là 1 phần quan trọng, hỗ trợ kết nối nguồn điện với các
              thiết bị điện. Trong đó, thay thế cho các sản phẩm ổ cắm truyền
              thống, những ổ cắm thông minh đã được nghiên cứu và cho ra mắt.
            </p>
            <p>
              Trong các sản phẩm trên thị trường hiện nay, ổ cắm điện thông minh
              thuộc hệ sinh thái Nhà thông minh được phát triển bởi tập đoàn FPT
              - FPT Smart Home đã và đang được người tiêu dùng đánh giá cao hơn
              cả. Trong đó, chức năng sản phẩm này về cơ bản là cho phép điều
              khiển tắt /mở ổ cắm linh hoạt từ xa nhờ sử dụng kết nối Bluetooth
              Mesh mang tính ổn định cao.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ổ cắm thông minh thiết kế nhỏ gọn, tinh tế
            </h5>
            <p>
              Điểm đầu tiên khi nhìn vào mẫu phích cắm điện thông minh này đó là
              kết cấu sản phẩm khá nhỏ gọn. Khi sử dụng tại bất cứ không gian
              nào, bạn cũng không cần lo ngại việc chiếm diện tích hay tình
              trạng cản trở các ổ cắm khác.
            </p>
            <p>
              Ngoài ra, ổ cắm thông minh FPT còn được cấu tạo từ chất liệu nhựa
              cao cấp, hỗ trợ chống cháy, chống tình trạng quá tải khi sử dụng.
              Chất liệu nhựa cũng tạo cho sản phẩm 1 vẻ ngoài bóng mịn, tinh tế.
              Có thể thấy, chính thiết kế sang trọng từ sản phẩm đảm bảo độ
              tương thích cao cho mọi không gian – nơi mà ổ cắm được sử dụng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cho tính tương thích cao với hầu hết các loại phích cắm
            </h5>
            <p>
              Phích cắm thông minh FPT Smart Home nhờ được sản xuất theo tiêu
              chuẩn quốc tế, sản phẩm vì thế cho tính tương thích cao với hầu
              hết các loại phích cắm khác nhau trên thị trường hiện nay. Bao gồm
              cả các loại phích cắm dẹt, phích tròn hay các phích cắm 2 chân, 3
              chân khác… Đây có thể là yếu tố tạo sự linh hoạt đáng kể, đảm bảo
              cho việc sử dụng được thuận tiện, tối ưu nhất.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ổ cắm điện thông minh luôn đảm bảo tính an toàn cao
            </h5>
            <p>
              Ổ cắm thông minh FPT Smart Home được sản xuất đúng quy chuẩn, lớp
              nhựa cách điện bên ngoài cao cấp. Nhờ đó, đảm bảo tính an toàn cao
              trong quá trình sử dụng. Đặc biệt, để an toàn cho các gia đình có
              trẻ nhỏ, hạn chế tình trạng trẻ nghịch phá, dùng vật dụng nguy
              hiểm chọc vào ổ điện, ở mẫu sản phẩm này, hãng sản xuất còn tích
              hợp nắp bảo vệ an toàn.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ổ cắm thông minh điều khiển từ xa qua điện thoại linh hoạt
            </h5>
            <p>
              Ổ cắm điện thông minh sử dụng các kết nối Bluetooth Mesh qua đó,
              đảm bảo tính ổn định khi điều khiển từ xa qua ứng dụng quản lý
              trên điện thoại. Cho khả năng phản hồi nhanh chóng. Đặc biệt, điểm
              tạo nên sức hút đặc trưng nhất của mẫu sản phẩm này chính là tính
              năng điều khiển tắt/ mở trực tiếp thông qua giọng nói.
            </p>
            <p>
              Đặc biệt, thông qua bộ điều khiển trung tâm FPT Play Box S, người
              dùng có thể thiết lập các ngữ cảnh tắt/bật phù hợp với nhu cầu
              cuộc sống thông qua giọng nói bằng tiếng Việt. Ngay cả khi mất
              wifi thì vẫn có thể điều khiển mọi thiết bị cách bình thường.
              Thông qua đó, người dùng chinh phục lối sống tự động, chuẩn hiện
              đại, thời thượng và tiện nghi hàng đầu.{" "}
            </p>
            <p>
              Người dùng còn có thể thực hiện việc hẹn giờ cho ổ cắm, thực hiện
              tắt mở từ xa cũng như lên lịch sử dụng cho mẫu ổ cắm thông minh
              này.
            </p>
            <p>
              Như vậy, ổ cắm điện thông minh có chức năng hẹn giờ sẽ giúp bạn
              rất nhiều trong trường hợp quên tắt đèn khi ra khỏi nhà, bạn cũng
              có thể xử lý nhanh chóng thông qua 1 chạm. Đây được xem là giải
              pháp giúp tối ưu hóa điện năng tiêu thụ cho người dùng.
            </p>
            <p>
              Không gian sống hiện đại, tiện nghi sẽ thêm hoàn thiện với sự hiện
              diện của sản phẩm ổ cắm thông minh đến từ thương hiệu FPT Smart
              Home. Không chỉ hội tụ ưu điểm trong thiết kế, tính năng mà thiết
              bị này còn cho độ bền bỉ cao, đảm bảo tính kinh tế vượt bậc cho
              mọi đối tượng người dùng.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng ổ cắm điện thông minh FPT Smart Home trong đời sống
            </h5>
            <p>
              Sản phẩm ổ cắm điện thông minh khi kết hợp với bộ điều khiển trung
              tâm FPT Play Box S trong nhóm thiết bị nhà thông minh của FPT
              Smart Home còn giúp người dùng có thể tối ưu hóa được hiệu năng
              hoạt động đáng kể của các thiết bị thông thường.
            </p>
            <p>
              Ví dụ: Nếu bạn dùng ổ cắm để dùng quạt máy, đèn ngủ,... cách cố
              định, bạn hoàn toàn có thể điều khiển ổ cắm tắt/bật điện cho các
              thiết bị này bằng giọng nói theo khung giờ đặt sẵn. Việc cài đặt
              giờ hoạt động cho ổ cắm giúp tiết kiệm điện năng tiêu thụ đáng kể
              và hỗ trợ bạn quản lý các thiết bị điện liên quan cách hợp lý.
            </p>
            <p>
              Hoặc chỉ với một thao tác đơn giản trên app quản lý ở smartphone
              là có thể ngắt hết các thiết bị điện đang sử dụng trong nhà khi có
              việc gấp cần ra ngoài mà không cần tới tắt điện cho từng thiết bị.
              Có thể thấy, bằng việc ứng dụng ổ cắm thông minh cách hợp lý vào
              cuộc sống, mọi thiết bị thường ngày đều trở nên thông minh hơn,
              quản lý dễ dàng hơn rất nhiều.{" "}
            </p>
            <p>
              Bạn đang có nhu cầu tư vấn chi tiết hơn về sản phẩm ổ cắm thông
              minh FPT hoặc cần đặt mua ổ cắm thông minh chuẩn chính hãng, chất
              lượng? Còn chần chờ gì nữa mà không liên hệ với chúng tôi ngay hôm
              nay qua Hotline 19006600 để được giải đáp cũng như hỗ trợ tận
              tình, chuyên nghiệp nhất!
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hướng dẫn kết nối ổ cắm thông minh FPT Smart Home trên app:
            </h5>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/zCQWecithow?si=rwbsb_B1MbrPx-QH"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
