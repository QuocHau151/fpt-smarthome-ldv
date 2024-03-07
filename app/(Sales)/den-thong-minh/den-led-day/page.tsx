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
    type: "5m",
    color: "trắng-vàng-RGB",
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
    <div className="">
      <Helmet>
        <title>Đèn LED Dây Thông Minh</title>
        <meta name="description" content="Đèn thông minh tại FPT Smart Home" />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Đèn thông minh tại FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl py-4">
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
              <div className="flex flex-col items-center py-[50px] ">
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
              <div className="flex  flex-col items-start justify-start w-full gap-6 border-b-[1px] border-black pb-[50px]">
                <div className="flex items-center justify-center gap-4 w-full max-md:gap-0">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Hệ màu sắc
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px]"
                      type="radio"
                      name="color"
                      value="trắng-vàng-RGB"
                      checked={selectedOptions.color === "trắng-vàng-RGB"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Trắng vàng + RGB
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px] "
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
                <div className="flex items-center justify-center gap-4 w-full max-md:gap-0">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Loại đèn
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px] "
                      type="radio"
                      name="type"
                      value="5m"
                      checked={selectedOptions.type === "5m"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      5m
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px] "
                      type="radio"
                      name="type"
                      value="100m"
                      checked={selectedOptions.type === "100m"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      100m/ theo giá mét
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px]">
                  {" "}
                  {option ? `${option?.price} VNĐ` : "Hết Hàng"}
                </p>
                <p className="-mt-4 text-[12px] max-md:text-[10px] max-md:mt-[-8px]">
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
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Đèn Led Downlight Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1668570002-led-day.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>15W/5m</p>
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
                <p>1200lm/5m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chiều dài</p>
                <p>5m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tuổi thọ</p>
                <p>25.000h</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thay đổi nhiệt độ màu</p>
                <p>(2700 ÷ 6500K) + RGB</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thay đổi cường độ</p>
                <p>10 ÷ 100%</p>
              </div>

              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 7722-1/ IEC; TCVN 10885-2-1/ IEC 62722-2-1
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
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đèn LED dây thông minh – Chiếu sáng tiện ích cho mọi không gian
              hiện đại
            </h5>
            <p>
              Các sản phẩm đèn thông minh đang trở thành lựa chọn xu hướng khi
              đáp ứng tính tiện nghi cao cho các đối tượng người dùng. Điển hình
              và là 1 trong những sản phẩm được đánh giá cao hiện nay phải kể
              đến mẫu đèn LED dây thông minh. Vậy, bạn đã biết gì về mẫu thiết
              bị chiếu sáng hiện đại này?
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu chung về đèn LED dây thông minh
            </h5>
            <Image
              src="/assets/images/product/thumnail/1692180786-Den-Led-Day-copy.jpg"
              width={1210}
              height={800}
              alt=""
            />
            <p>
              Ánh sáng được xem là 1 phần quan trọng trong bất kì không gian
              nào. Theo đó, không chỉ đơn thuần là cung cấp nguồn sáng mà các
              sản phẩm đèn chiếu sáng hiện nay còn được nghiên cứu, cho ra mắt
              với vai trò trang trí, tạo nên điểm nhấn riêng. Trên cơ sở đó, góp
              phần tăng sức hút cho ngôi nhà của bạn. Đèn LED dây thông minh là
              1 trong những lựa chọn điển hình cho bạn lúc này.
            </p>
            <p>
              Với hệ thống màu sắc đa dạng, sản phẩm phục vụ nhu cầu chiếu sáng
              thẩm mỹ cho các đối tượng người dùng.
            </p>
            <p>
              Kích thước chiều dài dây đèn lên đến 5m, cùng với đó là các mắt
              LED được thiết kế, bố trí suốt dọc chiều dài dây, người dùng có
              thể thuận tiện trong việc tạo hình, trang hoàng những khu vực khác
              nhau.
            </p>
            <p>
              Đặc biệt, điểm nổi bật hơn cả ở sản phẩm đèn dây thông minh này đó
              là người dùng hoàn toàn có thể điều khiển, bật/ tắt đèn thông qua
              giọng nói. Đây là yếu tố góp phần gia tăng sự tiện ích, nâng tầm
              chất lượng sinh hoạt đáng kể cho người dùng.
            </p>
            <p>
              Có thể xem mẫu đèn LED dây thông minh này là sản phẩm xu hướng,
              đáp ứng đúng xu thế thời đại. Việc trang trí, làm đẹp không gian
              giờ đây nhanh chóng và đơn giản hơn rất nhiều dưới sự hỗ trợ của
              mẫu đèn led cao cấp này.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ưu điểm nổi bật của bộ đèn Led dây thông minh FPT Smart Home
            </h5>
            <p>
              Sản phẩm hội tụ nhiều ưu điểm vượt bậc. Đó là lý do mà mẫu đèn led
              dây thông minh trở thành lựa chọn được đánh giá cao hàng đầu cho
              việc trang trí không gian nhà thông minh ở thời điểm hiện tại.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển bật/ tắt nhanh, linh hoạt
            </h5>
            <p>
              Với đèn led dây này, người dùng có thể điều khiển linh hoạt việc
              bật tắt, chuyển đổi trạng thái màu sắc bằng giọng nói tiếng Việt
              hoặc thông qua các thiết bị di động kết nối.
            </p>
            <p>
              Như vậy, không cần phải di chuyển đến các vị trí công tắc như
              những sản phẩm truyền thống khác, với thiết bị chiếu sáng hiện đại
              này, bạn chỉ cần ngồi tại chỗ mà vẫn có thể thao tác tất tần tật
              những yêu cầu mà bản thân mong muốn.
            </p>
            <p>
              Khả năng nhận diện giọng nói cực chuẩn từ thiết bị cũng là điểm
              mạnh cực lớn, giúp đèn bật tắt tức thời, không xảy ra tình trạng
              gián đoạn không mong muốn cho người dùng.
            </p>
            <p>
              Đặc biệt, với bộ đèn Led dây thông minh này, bạn còn có thể điều
              khiển theo kịch bản hay điều khiển chức năng hẹn giờ bật/ tắt
              tương ứng với lịch trình sinh hoạt của gia đình mình.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cung cấp nguồn sáng chuẩn hiện đại cho mỗi không gian
            </h5>
            <p>
              Thiết bị chiếu sáng thông minh này đặc trưng với hơn 16 triệu màu
              sắc. Các chip LED cao cấp được ứng dụng, cho dải màu chất lượng
              cao, ánh sáng ổn định. Chính vì thế, người dùng có thể linh hoạt
              cài đặt, lựa chọn và tùy chỉnh nguồn sáng ấm hoặc lạnh theo nhu
              cầu của mình.
            </p>
            <p>
              Đặc biệt, có thể cài đặt các ngữ cảnh theo sở thích cá nhân. Qua
              đó, vừa góp phần nâng tầm tính thẩm mỹ cho không gian, vừa thể
              hiện cá tính riêng của chính bạn.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Dễ dàng trong việc lắp đặt, sử dụng
            </h5>
            <p>
              Kết cấu đơn giản với cuộn dây dài, người dùng có thể dễ dàng lắp
              đặt, tạo hình mà không mất quá nhiều thời gian, công sức.
            </p>
            <p>
              Trong quá trình lắp đặt đèn Led dây, bạn có thể uốn cong theo ý
              thích mà không phải e ngại về việc phải chỉnh sửa mạch điện phức
              tạp hay xảy ra những ảnh hưởng đến hoạt động của đèn.
            </p>
            <p>
              Trong quá trình hoạt động, đèn led dây thông minh này cũng hoàn
              toàn an toàn cho cả người dùng lẫn các vật nuôi.
            </p>
            <Image
              src="/assets/images/product/thumnail/1692180786-Den-Led-Day1-copy.jpg"
              width={1210}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng sản phẩm như thế nào?
            </h5>
            <p>
              Đèn LED dây thông minh FPT Smart Home có thể xem là sản phẩm được
              ứng dụng chính cho mục đích trang trí, làm đẹp tại các gia đình.
              Bạn có thể bố trí đèn tại phòng khách, khu vực phòng ngủ, phòng
              đọc sách, phòng làm việc,... 1 cách sáng tạo, mang đến điểm nhấn
              riêng cho mỗi không gian.
            </p>
            <p>
              Trong đó, có thể tận dụng đèn cả ở những góc không gian hẹp, giúp
              cung cấp ánh sáng linh hoạt nhưng không để lộ nguồn sáng. Nhờ vậy,
              tạo nên những dải màu sắc đa dạng, rực rỡ cho các không gian này
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hẹn giờ tắt bật đèn
            </h5>
            <p>
              Chọn mua đèn LED dây thông minh không chỉ đơn thuần đáp ứng nhu
              cầu chiếu sáng cơ bản cho không gian mà cùng với đó, sản phẩm còn
              cho tính tiện ích cao trong công tác điều khiển. Đặc biệt, với
              thiết kế sang trọng, mẫu đèn này còn cho tính tương thích cao với
              hầu hết mọi khu vực lắp đặt. Chọn mua sản phẩm ngay hôm nay qua
              Hotline 19006600. Tin chắc rằng, bạn sẽ thật sự hài lòng về những
              gì mà thiết bị chiếu sáng hiện đại này mang lại cho chính mình
              đấy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
