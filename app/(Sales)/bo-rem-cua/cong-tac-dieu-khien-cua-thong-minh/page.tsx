"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
    type: "Chữ nhật",
    color: "Đen",
    connect: "BLE",
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
      item.type === selectedOptions.type &&
      item.color === selectedOptions.color &&
      item.connect === selectedOptions.connect &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Công Tắc Điều Khiển Rèm Cửa Thông Minh</title>
        <meta name="description" content="Bộ Rèm Cửa FPT Smart Home" />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container  max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Bộ Rèm Cửa FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto max-md:w-[200px]"
                  src={option?.image}
                  width={585}
                  height={500}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px] max-md:w-full"></div>
              )}
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center py-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  Công Tắc Điều Khiển Rèm Cửa Thông Minh
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-center border-b-[1px] border-black pb-6">
                <div className="flex items-center justify-around">
                  <h3 className="text-left font-semibold text-[18px] w-[150px] mr-4 max-md:text-[12px]">
                    Chọn màu sắc
                  </h3>
                  <div className="grid grid-cols-3 grid-rows-2 items-center max-md:gap-2 ">
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="color"
                        value="Đen"
                        checked={selectedOptions.color === "Đen"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Đen
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="color"
                        value="Trắng"
                        checked={selectedOptions.color === "Trắng"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Trắng
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="color"
                        value="Dark Gray"
                        checked={selectedOptions.color === "Dark Gray"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Dark Gray
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="color"
                        value="Champagne"
                        checked={selectedOptions.color === "Champagne"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Champagne
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="color"
                        value="Rose Gold"
                        checked={selectedOptions.color === "Rose Gold"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Rose Gold
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-around">
                  <h3 className="text-left font-semibold text-[18px]  w-[150px] mr-4 max-md:text-[12px]">
                    Hình dáng
                  </h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center">
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="type"
                        value="Chữ nhật"
                        checked={selectedOptions.type === "Chữ nhật"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Chữ nhật
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                        type="radio"
                        name="type"
                        value="Vuông"
                        checked={selectedOptions.type === "Vuông"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Vuông
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-around">
                  <h3 className="text-left font-semibold text-[18px]  w-[150px] mr-4 max-md:text-[12px]">
                    Loại kết nối
                  </h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center">
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
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
                    <div className=" flex items-center w-[150px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
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
                  </div>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px]">
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:py-[50px] max-md:px-6">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Công Tắc Điều Khiển Rèm Cửa Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668570142-cong-tac-rem.png"
              width={500}
              height={300}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Điện áp hoạt động</p>
                <p>220V/50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nhiệt độ hoạt động</p>
                <p>-10 ÷ 40˚C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số kênh ngõ ra</p>
                <p>5</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khoảng cách giao tiếp</p>
                <p>Tối đa 50m (không vật cản)</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (DxRxC)</p>
                <p>86 x 86 x 32 mm</p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Zigbee</p>
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
              Công tắc rèm cửa thông minh FPT Smart Home chính là một trong
              những sản phẩm đang được ưa chuộng nhất hiện nay. Các thao tác thủ
              công như đóng mở rèm sẽ được tự động hoá, thực hiện từ xa cũng như
              cho phép người dùng có thể hẹn giờ, đặt lệnh bằng giọng nói. Chỉ
              với một chiếc công tắc điều khiển rèm cảm ứng điều cao cấp từ nhà
              thông minh FPT, không gian của gia đình bạn sẽ được nâng tầm tiện
              nghi hơn.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              1. Lợi ích khi lắp đặt công tắc cảm ứng rèm thông minh
            </h5>
            <p>
              Rèm cửa thông minh được lắp đặt với mục đích che nắng, chắn sáng
              để giữ không gian bên trong mát mẻ cũng như riêng tư hơn. Do đó
              chủ nhà gần như phải đóng mở rèm mỗi ngày. Thường thấy nhất chính
              là mở rèm đón ánh sáng vào đầu ngày và đóng khi mặt trời đã lên
              cao. Khi sử dụng các loại công tắc thông thường, tất cả thao tác
              đều là thủ công và cần trực tiếp đến tận nơi để thực hiện.
            </p>
            <p>
              Nhưng giờ đây với công tắc thông minh điều khiển rèm cửa của FPT
              Smart Home thì mọi thứ sẽ trở nên tiện lợi và dễ dàng hơn bao giờ
              hết. Sản phẩm đa chức năng hỗ trợ đóng mở rèm từ xa, hẹn giờ, điều
              khiển bằng giọng nói,.... Mang lại nhiều trải nghiệm thực sự hiện
              đại cho người dùng.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2. Giới thiệu công tắc cảm ứng rèm FPT Smart Home
            </h5>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2.1 Thông tin chung
            </h5>
            <ul className="ml-10 list-disc">
              <li>Màu sắc: Màu Đen/ Trắng/ Dark Gray/ Champagne/ Rose Gold</li>
              <li>Hình dáng: Hình chữ nhật/ Hình Vuông</li>
              <li>Dạng nút bấm: Cảm ứng</li>
              <li>Số nút cảm ứng: 3 nút (đóng, mở, dừng)</li>
              <li>Mặt kính: Mặt kính cường lực.</li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2.2 Thiết kế tinh tế, sang trọng
            </h5>
            <p>
              Công tắc rèm cửa thông minh thuộc bộ giải pháp điều khiển thông
              minh của FPT Smart Home có thiết kế tối giản với 2 màu trắng đen,
              viền ngoài kim loại tinh tế. Mặt kính cường lực chống xước, chống
              va đập tốt và đặc biệt là không bám vân tay giúp người dùng có thể
              thoải mái sử dụng, dễ dàng vệ sinh.
            </p>
            <p>
              Cùng với đó là các nút bấm, đường viền và điểm nhấn logo FPT đều
              phản xạ ánh sáng nhẹ tạo nên tổng thể hài hòa nhưng không kém phần
              thu hút, điểm tô thêm vẻ đẹp sang trọng cho ngôi nhà của bạn.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2.3 Chức năng của công tắc cảm ứng rèm thông minh
            </h5>
            <ul className="ml-10 list-disc">
              <li>
                Cho phép kết nối bluetooth điều khiển trạng thái đóng, mở, dừng
                rèm từ xa mà không cần bạn phải đến tận nơi kéo tay. Chỉ cần
                thông qua thao tác đơn giản trên thiết bị thông minh như
                smartphone, máy tính bảng là bạn có thể làm được điều đó.
              </li>
              <li>
                Tương thích với hầu hết các loại động cơ hỗ trợ điều khiển thông
                minh trên thị trường.
              </li>
              <li>
                Cho phép điều khiển bằng giọng nói tiếng Việt thông qua FPT Play
                Box.
              </li>
              <li>
                Tạo kịch bản, ngữ cảnh thông minh tùy theo nhu cầu và mong muốn
                của người dùng. Có thể đồng thời đóng, mở rèm và bật tắt đèn,
                bật tắt điều hòa theo 1 “kịch bản” mà người dùng thiết lập.
              </li>
              <li>
                Hẹn giờ đóng, mở, dừng hoặc điều khiển động cơ từ xa theo thời
                gian thực thông qua ứng dụng điều khiển trên thiết bị di động
                thông minh. Đây là tính năng đặc biệt của công tắc điều khiển
                rèm FPT Smart Home mà không phải loại sản phẩm nào cũng có. Việc
                tạo lịch hẹn như thế này có thể lặp đi lặp lại mỗi ngày, hòa vào
                thời gian biểu giúp cuộc sống của bạn vừa nhịp nhàng vừa tiết
                kiệm thời gian.
              </li>
              <li>
                Ngoài điều khiển động cơ rèm thì sản phẩm có thể điều khiển các
                loại động cơ khác như: cửa cổng, cửa cuốn, cửa tự động…. thông
                dụng trên thị trường.
              </li>
            </ul>
            <p>
              Khi mua công tắc rèm cửa thông minh theo gói giải pháp điều khiển
              thông minh của FPT Smart Home, ngoài công năng điều khiển hoạt
              động của rèm cửa thì các thiết bị còn kết nối được với nhau tạo
              thành hệ sinh thái thông minh vô cùng hiện đại, giản lược mọi hoạt
              động thủ công, biến không gian sống của bạn trở thành nơi thú vị
              hơn bao giờ hết.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
