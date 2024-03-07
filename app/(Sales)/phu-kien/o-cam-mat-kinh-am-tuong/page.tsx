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
    type: "Vuông",
    color: "Đen",
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
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };
  return (
    <>
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
              <Image
                className="mx-auto max-md:w-[200px]"
                src={option?.image ?? ""}
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center py-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  Ổ Cắm Mặt Kính Âm Tường
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex  flex-col items-start justify-start w-full gap-6 border-b-[1px] border-black pb-[50px]">
                <div className="flex items-center justify-start w-full">
                  <h4 className=" text-[18px] text-left font-semibold text-gray-800  min-w-[150px] max-md:text-[12px] max-md:min-w-[100px]">
                    Hình dáng
                  </h4>
                  <div className="grid grid-cols-3">
                    <div className="flex items-center">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                    <div className="flex items-center">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                  </div>
                </div>
                <div className="flex items-center justify-start w-full">
                  <h4 className=" text-[18px] text-left font-semibold text-gray-800 min-w-[150px] max-md:text-[12px] max-md:min-w-[100px] ">
                    Chọn màu sắc
                  </h4>
                  <div className="grid grid-cols-3">
                    <div className="flex items-center">
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
                    <div className="flex items-center">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                    <div className="flex items-center">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="color"
                        value="Stone Gray"
                        checked={selectedOptions.color === "Stone Gray"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Stone Gray
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
            Cảm Biến Chuyển Động
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569403-cam-bien-chuyen-dong.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>9W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nhiệt độ làm việc</p>
                <p>-10 ÷ 40 ˚C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khoảng cách phát hiện chuyển động</p>
                <p>{"<"}7m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Góc phát hiện chuyển động</p>
                <p>90/360 độ</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dải đo ánh sáng</p>
                <p>0 - 1000 lux</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước</p>
                <p>30x30x33mm</p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Zigbee</p>
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
              Thiết kế nhà thông minh đang trở thành một trong những xu hướng
              hàng đầu hiện nay. Một trong những thiết bị quan trọng không thể
              thiếu trong hệ thống nhà thông minh đó là cảm biến chuyển động.
              Vậy điểm nổi bật của sản phẩm này là gì?
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cảm biến chuyển động là gì?
            </h5>
            <p>
              Cảm biến chuyển động (máy phát hiện chuyển động) đây là thiết bị
              điện thông minh với khả năng phát hiện các chuyển động vật lý, từ
              đó bật hoặc tắt chức năng của các thiết bị liên quan trong hệ
              thống.
            </p>
            <p>
              Cảm biến có khả năng phát hiện chuyển động vật lý trong môi trường
              thật hay thiết bị một cách chính xác. Thời gian phát hiện chuyển
              động và xử lý cực kỳ nhanh chóng.
            </p>
            <p>
              Cơ chế hoạt động của cảm biến chuyển động thông minh với sự kết
              nối chặt chẽ trong cùng hệ thống, phần mềm xử lý tín hiệu. Nhờ đó,
              các chuyển động vật lý được thu về sẽ nhanh chóng chuyển thành các
              hành động, tín hiệu, thông tin khác tương ứng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chức năng của cảm biến chuyển động
            </h5>
            <p>
              Cảm biến chuyển động FPT Smart Home sử dụng kết nối BLE, ZigBee có
              thể liên kết với những thiết bị liên quan và thực hiện chức năng
              một cách chính xác, thống nhất.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cảm biến phát hiện những chuyển động vật lý trong môi trường
            </h5>
            <p>
              Chức năng chính của thiết bị cảm biến chuyển động là phát hiện kịp
              thời những chuyển động vật lý trong môi trường. Chẳng hạn, khi
              phát hiện chuyển động bất thường, đặc biệt là dấu hiệu của sự đột
              nhập trái phép, cảm biến sẽ tự động gửi cảnh báo hay kích hoạt một
              số chức năng liên quan.
            </p>
            <p>
              Với sự hỗ trợ của cảm biến thông minh trong ngôi nhà, gia đình vừa
              nâng cao tinh thần cảnh giác, vừa bảo vệ sự an toàn trong những
              tình huống nhất định.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Bật/ tắt các thiết bị trong hệ thống khi phát hiện chuyển động
            </h5>
            <p>
              Khi phát hiện chuyển động vật lý trong không gian, cảm biến còn có
              thể bật/ tắt các thiết bị, chẳng hạn như đèn, quạt, điều hoà,...
              Tuỳ theo những thiết bị được lắp đặt, liên kết trong hệ thống là
              gì mà chúng ta có thể tận dụng tiện ích từ nó.
            </p>
            <p>
              Như vậy, chúng ta không cần phải sử dụng công tắc như truyền thống
              nữa. Thay vào đó, hệ thống của cảm biến chuyển động sẽ hoạt động 1
              cách tự động, mang tới sự tiện lợi và tiết kiệm thời gian tối đa.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Bảo vệ gia đình bạn trong điều kiện tốt nhất khi sử dụng cảm biến
              chuyển động
            </h5>
            <p>
              An ninh và tiện ích là hai tiêu chí được các hộ gia đình hiện nay
              quan tâm. Đó là lí do tại sao lắp đặt cảm biến chuyển động được áp
              dụng tại nhà ở thông minh, khách sạn, biệt thự,...
            </p>

            <p>
              Cơ chế hoạt động của thiết bị sẽ bảo vệ gia đình bạn bất kể ngày
              hay đêm, duy trì liên tục 24/7. Những cảnh báo, tín hiệu sẽ được
              gửi đến điện thoại hoặc phát thành tiếng, từ đó các thành viên kịp
              thời phản ứng, chạy trốn.
            </p>
            <p>
              Mặt khác, trong gia đình có trẻ nhỏ, cảm biến còn hỗ trợ dò tìm
              chuyển động và cảnh báo khi trẻ đi vào vùng nguy hiểm. Chức năng
              này đã và đang giúp bố mẹ chăm sóc trẻ nhỏ, hạn chế rủi ro tối ưu.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của cảm biến chuyển động
            </h5>
            <p>
              Nhờ những chức năng và ưu điểm kể trên mà cảm biến chuyển động
              hiện được ứng dụng rộng rãi. Tại nhà thông minh, chúng ta dễ dàng
              bắt gặp thiết bị cảm biến điện tử, hồng ngoại, nhiệt độ. Chúng ta
              có thể kết hợp cảm biến với điện thoại thông minh, tivi thông
              minh, máy tính bảng hay hệ thống an ninh vật lý.
            </p>
            <p>
              Ngoài ra, ở những khách sạn cao cấp, biệt thự, penthouse, người ta
              cũng lắp đặt cảm biến vật lý và hệ thống thiết bị thông minh kèm
              theo. Điều này mang tới những trải nghiệm tuyệt vời và nâng cao
              chất lượng sinh sống, nghỉ ngơi.
            </p>
            <p>
              Tuy vậy khi thiết kế và thi công cảm biến chuyển động, hãy lưu ý
              tới vị trí lắp đặt để tối ưu hoá chức năng và tăng tỉ lệ cảnh báo
              chính xác.
            </p>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/GHeIFy92OL0?si=S3BSPBlcnlgyZPpH"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>
              Với sản phẩm cảm biến chuyển động này, ngôi nhà của chúng ta sẽ
              trở nên “thông minh”, hiện đại và tiện lợi hơn rất nhiều. Nếu như
              bạn đang có nhu cầu tìm mua thiết bị cảm biến chuẩn chất lượng,
              chính hãng, vui lòng liên hệ với chúng tôi theo Hotline 19006600
              ngay hôm nay để nhận tư vấn và hỗ trợ tốt nhất, chuyên nghiệp nhất
              nhé!
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Xem thêm sản phẩm liên quan: Cảm biến cửa thông minh tại FPT Smart
              Home
            </h5>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/OSQaku9aXb0?si=YWeW4Kf6TgLSIVG2"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hướng dẫn kết nối cảm biến chuyển động Bluetooth Mesh của FPT
              Smart Home
            </h5>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/wnchZFYURfk?si=DX1E72gsX6lJ1gA0"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
