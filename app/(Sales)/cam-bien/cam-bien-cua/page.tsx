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
      item.connect === selectedOptions.connect &&
      item.category === category &&
      item.name === "Cảm Biến Cửa"
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Cảm Biến Cửa Thông Minh</title>
        <meta
          name="description"
          content="Các thiết bị cảm biến thông minh FPT Smart Home"
        />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Các thiết bị cảm biến
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl py-4">
              {option ? (
                <Image
                  className="mx-auto"
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
                  {option?.name ?? ""}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px] ">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex  flex-col items-start justify-start w-full gap-6 border-b-[1px] border-black pb-[50px]">
                <div className="flex items-center justify-center gap-4 w-full">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Loại đèn
                  </h4>
                  <div className="basis-1/3 flex items-center">
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
                  {option ? `${option?.price} VNĐ` : "Hết Hàng"}
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
      <div className="text-center flex flex-col py-[100px] max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Cảm Biến Cửa
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569241-cam-bien-cua.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>Pin CR1632</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thời lượng nguồn pin</p>
                <p>3 - 6 tháng</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khoảng cách đặt tối đa</p>
                <p>2cm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước</p>
                <p>41x22x11mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Zigbee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col max-lg:px-20 max-md:px-6">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <p>
              Tính an toàn cho không gian sống là ưu tiên hàng đầu, được nhiều
              gia chủ cân nhắc hiện nay. Chính vì thế, sản phẩm cảm biến cửa
              thông minh trở thành lựa chọn được nhiều khách hàng lựa chọn, lắp
              đặt tại gia đình mình. Tính linh hoạt cùng thiết kế hiện đại, sang
              trọng của mẫu thiết bị cảm biến cửa đã và đang được đánh giá khá
              cao. Cùng nhà thông minh FPT Smart Home tìm hiểu thêm về tính
              năng, ưu điểm nổi bật của sản phẩm với bài viết dưới đây nhé.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cảm biến cửa thông minh FPT Smart Home
            </h5>
            <p>
              Hiện nay, trong hệ thống an ninh cơ bản tại gia đình, cảm biến cửa
              thông minh được xem là 1 trong những thiết bị thông minh, cho tính
              hữu ích cực cao. Trong nhiều phân khúc sản phẩm trên thị trường,
              model cảm biến cửa đến từ thương hiệu FPT Smart Home đã và đang
              nhận được sự ưa chuộng và đánh giá cao hơn cả.
            </p>
            <p>
              Cảm biến cửa tự động có kết cấu bao gồm 2 phần riêng biệt, được sử
              dụng để lắp đặt chủ yếu tại các khu vực cửa phòng, cửa ra vào,...
            </p>
            <p>
              Cảm biến cửa thông minh khi bố trí sẽ tạo nên 1 mạch nếu 2 phần
              thiết bị được đặt song song với nhau. Trong trường hợp cửa mở, 2
              phần tách rời nhau sẽ ngắt mạch, lúc này, người dùng sẽ nhận được
              cảnh báo tức thời.
            </p>
            <iframe
              className="w-full h-[500px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/IqfgCNQLyok?si=Gc9Ds4LXysEHGFH3"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Những ưu điểm nổi bật của cảm biến cửa thông minh FPT Smart Home
            </h5>
            <p>
              Sử dụng cảm biến cửa thông minh được xem là lựa chọn thông minh
              cho các không gian sống hiện đại. Theo đó, mẫu cảm biến cửa được
              lắp đặt, mang đến nhiều ưu điểm nổi bật cho người dùng. Điển hình
              có thể kể đến như:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Kích thước cảm biến cửa nhỏ gọn, cho độ thẩm mỹ cao
            </h5>
            <p>
              Kích thước cảm biến cửa tự động khá nhỏ gọn, chỉ với 41x22x11mm.
              Như vậy, với mẫu cảm biến này, bạn hoàn toàn có thể bố trí, lắp
              đặt tại cửa ra vào hay bất kì khu vực cửa nào 1 cách linh hoạt,
              nhanh chóng mà không cần lo ngại về tình trạng chiếm diện tích.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1692178331-Cam-bien-Cua-copy.jpg"
              width={800}
              height={500}
              alt=""
            />
            <p>
              Đặc biệt, thiết kế sản phẩm cảm biến cửa còn cho độ tinh tế cao
              với gam màu trắng đơn giản. Theo đó, việc lắp đặt thiết bị có thể
              tạo nên sự đồng điệu cao cho không gian. Sản phẩm còn có thể là
              điểm nhấn ấn tượng, thể hiện cho lối sống hiện đại, thời thượng
              của chính gia chủ.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cảm biến cửa luôn đảm bảo tính nhanh nhạy, chuẩn xác
            </h5>
            <p>
              Cảm biến cửa thông minh được tích hợp trên thiết bị cho độ nhạy
              cao. Theo đó, việc phát hiện tình trạng đóng, mở cửa tùy theo ngữ
              cảnh đã cài đặt sẽ được thực hiện hoặc đưa ra cảnh báo tương ứng
              chính xác tuyệt đối.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cảm biến cửa thông minh kết nối và thiết lập nhanh chóng
            </h5>
            <p>
              Cảm biến cửa thông minh FPT Smart Home được kích hoạt và sử dụng
              dựa trên kết nối Bluetooth Mesh và ZigBee. Sản phẩm hoạt động tốt
              khi kết hợp với các loại cửa và bộ điều khiển trung tâm FPT Play
              Box S của chúng tôi giúp tạo nên 1 hệ sinh thái FPT Home hoàn hảo.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1692178331-Cam-bien-Cua1-copy.jpg"
              width={800}
              height={500}
              alt=""
            />
            <p>
              Đặc biệt, cảm biến cửa thông minh nhà FPT Smart Home hoạt động dựa
              theo nguyên lý phát hiện trạng thái đóng mở cửa để kết hợp tạo ra
              các ngữ cảnh tương ứng.
            </p>
            <p>
              Thông thường cảm biến cửa tự động FPT Smart Home được thiết lập
              dựa theo 2 ngữ cảnh chính dưới đây. Tùy vào nhu cầu mà người dùng
              sẽ lựa chọn tương ứng, cụ thể gồm:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ngữ cảnh thông minh:
            </h5>
            <p>
              Cảm biến cửa thông minh FPT Smart Home sở hữu tính năng an ninh
              cho phép người dùng giám sát trạng thái đóng, mở cửa phạm vi toàn
              bộ căn nhà. Mọi thông báo liên quan đến các cửa ra vào có gắn cảm
              biến sẽ được gửi về điện thoại hoặc bộ điều khiển trung tâm giúp
              bạn cập nhật dễ dàng và chính xác. Đồng thời, bạn có thể kiểm tra
              được lịch sử đóng/mở cửa mỗi ngày.
            </p>
            <p>
              Ngoài ra, hệ thống cửa cảm biến FPT Smart Home còn cho tích hợp
              đèn, còi hú để giám sát an ninh, cảnh báo khi có người đột nhập
              ngoài khung giờ cho phép, giúp người dùng chủ động hơn trong việc
              bảo vệ an toàn cho bản thân cũng như tài sản của mình.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của thiết bị cảm biến cửa thông minh
            </h5>
            <p>
              Như đã đề cập ở trên, thiết bị cảm biến cửa thông minh này được
              ứng dụng hướng đến mục đích phát hiện được tình trạng cửa mở/
              đóng. Trên cơ sở đó, kích hoạt tính năng điều khiển những thiết bị
              liên quan theo ngữ cảnh tương ứng. Đó có thể là bật đèn, đóng hoặc
              mở rèm cửa, phát ra chuông cảnh báo,....
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1692178739-272846724_239131965061040_8467003938083659037_n.jpg"
              width={800}
              height={500}
              alt=""
            />
            <p>
              Như vậy thiết bị cảm biến cửa được xem là lựa chọn tiện ích, giúp
              kiểm soát được hoạt động tại không gian – nơi mà thiết bị cảm biến
              cửa này được lắp đặt. Vì thế mà bạn có thể lắp đặt thiết bị này
              cho cửa ra vào, cửa phòng ngủ tại gia đình, căn hộ chung cư, biệt
              thự, nhà phố hay tại các cửa hàng, showroom, văn phòng...
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
