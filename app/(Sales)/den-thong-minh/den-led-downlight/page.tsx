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
    type: "Cố định",
    color: "Trắng",
    power: "9w",
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
      item.power === selectedOptions.power &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Đèn LED Downlight Thông Minh</title>
        <meta name="description" content="Đèn thông minh tại FPT Smart Home" />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container max-lg:px-20 max-md:px-10">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Đèn thông minh tại FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col ">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto "
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
              <div className="flex flex-col items-center py-[50px] max-md:py-[20px]">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  Đèn LED Downlight Thông Minh
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4  max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex  flex-col items-start justify-start w-full gap-6 border-b-[1px] border-black pb-[50px]">
                <div className="flex items-center justify-center gap-4 w-full">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[12px]">
                    Loại đèn
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px]"
                      type="radio"
                      name="type"
                      value="Cố định"
                      checked={selectedOptions.type === "Cố định"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Cố định
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px]"
                      type="radio"
                      name="type"
                      value="Xoay"
                      checked={selectedOptions.type === "Xoay"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Xoay
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 w-full">
                  <h4 className="basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[12px]">
                    Màu sắc
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-1 max-md:min-w-[20px] "
                      type="radio"
                      name="color"
                      value="Trắng"
                      checked={selectedOptions.color === "Trắng"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Trắng Vàng
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] "
                      type="radio"
                      name="color"
                      value="RGB"
                      checked={selectedOptions.color === "RGB"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      RGB
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 w-full">
                  <h4 className="basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[12px]">
                    Công suất
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px]"
                      type="radio"
                      name="power"
                      value="9w"
                      checked={selectedOptions.power === "9w"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      9W
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] "
                      type="radio"
                      name="power"
                      value="7w"
                      checked={selectedOptions.power === "7w"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      7W
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[40px] font-bold max-md:text-[30px]">
                  {option ? `${option?.price} VNĐ` : "Hết Hàng"}
                </p>
                <p className="-mt-3 text-[12px] max-md:text-[10px]">
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
      <div className="text-center flex flex-col py-[100px] max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px] max-md:pb-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Đèn Led Downlight Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[30px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col  ">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569222-downlight.png"
              width={500}
              height={300}
              alt=""
            />
            <div className="basis-1/2 w-full ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>{option?.power}</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Điện áp hoạt động</p>
                <p>220V/50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chỉ số hoàn màu</p>
                <p>80</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Quang thông</p>
                <p>700lm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tuổi thọ</p>
                <p>25.000h</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thay đổi nhiệt độ màu</p>
                <p>3000 ÷ 6500K</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thay đổi cường độ</p>
                <p>10 ÷ 100%</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (ØxH)</p>
                <p>103x45mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước khoét trần</p>
                <p>90mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 10885-2-1/IEC 62722-2-1; TCVN 7722-2-2/IEC 60598-2-2
                </p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col  max-lg:px-20 max-md:px-6">
        <div className="container border-b-[1px] pb-[100px] max-md:pb-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <p>
              Trong xu hướng hiện đại ngày nay, các thiết bị thông minh dần được
              khách hàng ưa chuộng và lựa chọn sử dụng phổ biến hơn. Điều này
              nhằm mang đến sự tiện ích hơn trong sinh hoạt của mỗi người. Trong
              đó, đèn LED âm trần thông minh là 1 trong những thiết bị chiếu
              sáng xu hướng, được đánh giá cực cao trong căn nhà thông minh của
              bạn. Vậy, có gì nổi bật ở mẫu sản phẩm đèn thông minh này?
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu chung về sản phẩm đèn LED Downlight thông minh
            </h5>
            <p>
              Ngày nay, tại mọi không gian, thiết bị chiếu sáng không chỉ cần
              đáp ứng mục đích cung cấp ánh sáng ổn định, cho hiệu quả tiết kiệm
              điện năng ưu việt mà còn cần đảm bảo mang đến tính sang trọng cho
              không gian bố trí. Theo đó, đèn LED Downlight thông minh được
              nghiên cứu và cho ra mắt của FPT Smart Home có thể nói là đáp ứng
              1 cách hoàn hảo các yêu cầu nói trên.
            </p>
            <p>
              Đặc biệt hơn cả, sản phẩm còn được tích hợp tính năng thông minh –
              điều khiển bật/ tắt thông qua giọng nói. Chính vì thế, không quá
              khoa trương khi nói rằng, sản phẩm là lựa chọn mang tính xu hướng.
              Đáp ứng nhu cầu về 1 không gian sinh hoạt tiện ích, thoải mái và
              hiện đại cho mọi gia đình.
            </p>
            <p>
              Đèn đặc trưng với chỉ số hoàn màu là 80. Như vậy, về cơ bản, sản
              phẩm cho khả năng nhận diện màu sắc tốt, lại còn bảo vệ an toàn
              tối ưu cho mắt của bạn. Khi sử dụng, ánh sáng từ đèn sẽ không tạo
              cảm giác quá chói sáng hay gây phản ứng mỏi mắt, đau mắt.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Những ưu điểm nổi bật của đèn LED âm trần thông minh
            </h5>
            <p>
              Đèn LED âm trần thông minh có thể nói là hội tụ nhiều ưu điểm nổi
              bật, đáp ứng nhu cầu sử dụng 1 cách tối ưu nhất cho mọi đối tượng
              người dùng. Trong đó, điển hình có thể kể đến như:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Khả năng điều khiển thông minh, linh hoạt
            </h5>
            <p>
              Không còn phải bật tắt thông qua các công tắc như truyền thống.
              Giờ đây, với mẫu đèn LED này, người dùng có thể điều khiển đèn
              linh hoạt bằng giọng nói tiếng Việt thông qua bộ điều khiển trung
              tâm FPT Play Box S. Khả năng nhận diện giọng nói chuẩn của thiết
              bị cho phép truyền tải, thực hiện bật/ tắt nhanh chóng.{" "}
            </p>
            <p>
              Bạn chỉ cần nói “Mở tất cả đèn”- Tất cả hệ thống đèn ngay lập tức
              sẽ bật sáng. Hoặc khi bạn nói “Tắt tất cả đèn” - Tất cả các đèn sẽ
              đồng loạt tắt đi. Đặc biệt, khi bạn nói “Mở kịch bản 1” - Kịch bản
              đèn số 1 sẽ được kích hoạt, …Với thế mạnh này, bạn có thể dễ dàng
              điều khiển đèn khi không rảnh tay hoặc không cầm điện thoại bên
              mình. Ngoài ra, đèn LED âm trần thông minh đến từ FPT Smart Home
              còn có cho phép sử dụng nhiều tính năng hơn nữa thông qua giọng
              nói.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đèn Led âm trần thông minh cho cường độ chiếu sáng ổn định
            </h5>
            <p>
              Đèn Led âm trần thông minh cho khả năng chiếu sáng ổn định, khả
              năng chiếu sáng mạnh mẽ, đáp ứng nhu cầu cung cấp ánh sáng hiệu
              quả. Ngoài ra, đèn còn có tính năng thay đổi cường độ sáng cũng
              như nhiệt độ màu chiếu sáng theo thời gian. Điều này vừa giúp bảo
              vệ mắt cho người dùng, vừa đảm bảo tính tương thích cho mỗi khu
              vực ứng dụng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đảm bảo được tính thẩm mỹ cho mọi không gian
            </h5>
            <p>
              Nếu bạn e ngại việc đèn LED Downlight thông minh khi lắp đặt không
              tạo nên sự đồng điệu cho không gian hoặc khiến không gian kém thẩm
              mỹ thì với mẫu đèn led này, vấn đề trên sẽ không xảy ra.
            </p>
            <p>
              Thiết kế đơn giản nhưng không kém phần sang trọng, hiện đại của
              mẫu đèn này có thể tạo nên sự tương thích, hài hòa với mọi không
              gian, mọi phong cách thiết kế nội thất.{" "}
            </p>
            <p>
              Kích thước đèn cũng khá nhỏ gọn, chỉ trong khoảng 108x40mm hoặc
              129x40mm. Vì thế, có thể thấy, việc lắp đặt đèn không tốn quá
              nhiều diện tích không gian.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển theo từng kịch bản chiếu sáng
            </h5>
            <p>
              Người dùng có thể cài các kịch bản cho đèn LED Downlight thông
              minh FPT Smart Home phù hợp với từng không gian sống trong căn hộ
              của mình. Điều này sẽ giúp tiết kiệm tối đa thời gian.{" "}
            </p>
            <ul className="list-disc pl-10">
              <li>
                Ví dụ 1: Thay vì phải chọn từng mức độ chiếu sáng và nhiệt độ
                màu, chỉ cần 1 lần chạm người dùng đã có thể điều chỉnh toàn bộ
                không gian phòng theo kịch bản đã lên sẵn trước đó.{" "}
              </li>
              <li>
                Ví dụ 2: Bạn có thể cài đặt chế độ khi đi ra khỏi nhà, đèn sẽ tự
                động tắt,... Đây được xem là giải pháp cực hữu ích, giúp khắc
                phục tình trạng quên tắt điện khi ra khỏi nhà. Qua đó, mang đến
                hiệu quả tiết kiệm điện năng đáng kể cho người dùng.{" "}
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hẹn giờ tắt bật đèn
            </h5>
            <p>
              Đặc biệt, bạn còn có thể đặt lịch và hẹn giờ bật/ tắt đèn 1 cách
              tiện ích tùy theo lịch trình sinh hoạt của gia đình. Ví dụ bạn có
              thể đặt đèn LED âm trần thông minh FPT Smart Home bật/tắt để báo
              thức cho con trẻ bằng ánh sáng. Thay vì đặt chuông báo thức khiến
              bé giật mình vào mỗi sáng, ánh sáng vừa đủ được bật lên sẽ giúp bé
              cảm thấy thoải mái và dễ chịu hơn.{" "}
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng đèn LED Downlight âm trần thông minh cho những không gian
              nào?
            </h5>
            <p>
              Đèn LED Downlight âm trần cho khả năng chiếu sáng thông minh. Đặc
              biệt, sản phẩm không phụ thuộc vào hạ tầng điện. Có thể nói, tính
              tiện ích cùng sự linh hoạt trong việc chiếu sáng không gian của
              mẫu đèn LED Downlight thích hợp để sử dụng cho nhiều khu vực khác
              nhau.
            </p>
            <p>
              Từ nhà bếp, phòng khách, phòng ăn, phòng làm việc hay phòng ngủ
              tại các gia đình đến các văn phòng chuyên dụng, khu vực sảnh lớn,
              các showroom, nhà hàng, khách sạn,... sản phẩm đều đáp ứng tối đa
              nhu cầu sử dụng từ người dùng.
            </p>
            <p>
              Khách hàng có thể linh hoạt cân đối giữa từng khu vực nói trên để
              chọn mua đèn với công suất 7W hoặc 9W phù hợp.
            </p>
            <p>
              Lắp đặt các thiết bị chiếu sáng thông minh sẽ là lựa chọn đáng cân
              nhắc, nâng tầm chất lượng sinh hoạt cho mọi nhà. Trong đó, đèn LED
              âm trần thông minh với hàng loạt ưu điểm nổi bật hẳn sẽ làm hài
              lòng bất kì đối tượng khách hàng nào. Còn chần chờ gì mà không đặt
              mua sản phẩm đèn LED Downlight âm trần ngay hôm nay tại FPT Smart
              Home qua Hotline 19006600 để sử dụng và cảm nhận trực tiếp những
              tiện ích mà mẫu đèn này mang lại cho chính bạn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
