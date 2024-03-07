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
    id_product: "RMBR031",
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
        <title>Cảm Biến Chuyển Động Âm Trần</title>
        <meta name="description" content="Các thiết bị Cảm biến thông minh" />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container max-lg:px-20 max-md:px-6">
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
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  {option?.name}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4  max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px] ">
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
            Cảm Biến Chuyển Động Âm Trần
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569371-blub.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>9W</p>
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
                <p>810 Im</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tuổi thọ</p>
                <p>20.000 h</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thay đổi nhiệt độ màu</p>
                <p>(3000K- 6500K)+ RGB</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thay đổi cường độ</p>
                <p>10 ÷ 100%</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (ØxH)</p>
                <p>60x109mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khối lượng</p>
                <p>44.5±0.5 g</p>
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
              Thiết bị chiếu sáng có thể nói là 1 phần quan trọng của mọi không
              gian sống. Không chỉ cần đảm bảo cho hiệu năng hoạt động ổn định,
              hiện nay, các gia chủ còn quan tâm đến tính tiện ích cũng như độ
              thẩm mỹ của sản phẩm khi lắp đặt, bố trí tại mỗi khu vực trong
              ngôi nhà thông minh của bạn.
            </p>
            <p>
              Theo đó, với thiết kế hiện đại, tích hợp khả năng điều khiển thông
              minh, linh hoạt, đèn LED Bulb thông minh của FPT Smart Home là 1
              trong những sản phẩm xu hướng, được đánh giá cực cao hiện nay.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đèn LED Bulb có gì đáng để lựa chọn?
            </h5>
            <p>
              Nhắc đến đèn LED Bulb thông minh, có thể nói, sản phẩm sở hữu hàng
              loạt ưu điểm nổi bật. Bao gồm:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thiết kế đèn LED Bulb sang trọng, đảm bảo đồng điệu cho mọi khu
              vực
            </h5>
            <p>
              Thiết kế đèn LED Bulb thông minh với kiểu dáng cơ bản, hội tụ đủ
              sự tinh tế, sang trọng. Đi cùng với kích thước nhỏ gọn, chỉ
              60mmx110mm, sản phẩm đảm bảo được tính đồng bộ cao cho mọi không
              gian. Với việc lắp đặt thiết bị này ở vị trí phù hợp, tin chắc
              rằng, không gian sẽ tạo nên được điểm nhấn riêng, nâng tầm đẳng
              cấp đáng kể cho tổng thể.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chất liệu cao cấp - độ bền dài lâu
            </h5>
            <p>
              Về chất liệu, bóng đèn LED Bulb thông minh FPT Smart Home sử dụng
              vật liệu chất lượng cao. Toàn bộ đều được tuyển chọn cẩn thận với
              đặc tính nhẹ, tản nhiệt tốt. Bên cạnh đó, bề mặt phát sáng được
              làm từ chất liệu PC với độ trong suốt cao mang đến khả năng phát
              sáng tốt hơn, tạo ánh sáng nhẹ nhàng, ấm áp nhưng vẫn tươi mới,
              phù hợp với nhiều không gian chiếu sáng và mục đích sử dụng khác
              nhau.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển linh hoạt với đèn LED Bulb
            </h5>
            <p>
              Khác với các thiết bị chiếu sáng truyền thống, việc điều khiển đèn
              LED Bulb thông minh lúc này không cần phải di chuyển, xê dịch đến
              khu vực chứa công tắc. Giờ đây, chỉ cần ngồi tại 1 chỗ, bạn vẫn có
              thể điều khiển, bật/ tắt đèn nhanh chóng thông qua giọng nói tiếng
              Việt. Vì hệ thống được tích hợp khả năng nhận diện giọng nói cực
              chuẩn, các khẩu lệnh bật/ tắt theo đó cũng được thực hiện nhanh
              chóng, tức thời.
            </p>

            <p>
              Đặc biệt, ngoài điều khiển bằng giọng nói khi sử dụng đèn thông
              qua FPT Play Box S, người dùng cũng có thể điều khiển đèn từ xa
              thông qua ứng dụng chuyên biệt.
            </p>
            <p>
              Sản phẩm đèn LED Bulb thông minh còn có chế độ thiết lập thời gian
              hay ngữ cảnh tùy theo nhu cầu của người dùng. Như vậy, tùy tâm
              trạng cũng như sở thích ở từng thời điểm, bạn hoàn toàn có thể
              điều chỉnh cường độ sáng, màu sắc ánh sáng từ đèn cho phù hợp.
            </p>
            <Image
              src="/assets/images/product/thumnail/1692179245-Den-Led-Buld1-copy.jpg"
              width={1250}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hỗ trợ chiếu sáng ổn định, phù hợp cho nhiều không gian
            </h5>
            <p>
              Đèn tích hợp tính năng thay đổi màu sắc ánh sáng cũng như cường độ
              ánh sáng theo thời gian.
            </p>
            <p>
              Với nhiệt độ màu (3000K – 6500K) + RGB, bạn có thể điều chỉnh linh
              hoạt nguồn cấp sáng phù hợp với nhu cầu. Đó có thể là ánh sáng ấm
              áp, nhẹ nhàng cho không gian phòng ngủ hay ánh sáng tự nhiên, cho
              tính chân thật cao tại không gian phòng khách,...
            </p>
            <p>
              Ngoài ra, chất lượng ánh sáng từ đèn cho độ ổn định cao, không xảy
              ra tình trạng nhấp nháy. Có thể nói, sản phẩm này hoàn toàn đảm
              bảo thời gian chiếu sáng liên tục hàng giờ liền nhưng vẫn không
              gây tình trạng đau mắt, mỏi mắt cho người dùng. Đây được xem là
              giải pháp chiếu sáng thông minh, an toàn, đồng thời, bảo vệ tối đa
              cho đôi mắt của bạn.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tuổi thọ bền lâu theo thời gian
            </h5>
            <p>
              Bóng đèn LED Bulb của FPT Smart Home có công suất 9W tương đương
              với 70W của bóng đèn sợi đốt, hoạt động tiết kiệm tối đa nguồn
              điện năng, giảm hóa đơn tiền điện cho gia đình bạn.
            </p>
            <p>
              Đặc biệt hơn, tuổi thọ bóng đèn LED Bulb FPT Smart Home lên đến
              20.000 giờ, nghĩa là chỉ với 3 giờ sử dụng mỗi ngày bóng đèn có
              thể kéo dài đến 18,2 năm. Đây được đánh giá là một quãng thời gian
              khá lâu, do đó người dùng có thể tiết kiệm một khoản ngân sách lớn
              không phải mua mới/ thay đèn mới khi sử dụng bóng đèn LED Bulb
              thông minh này.{" "}
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng đèn LED BulB
            </h5>
            <p>
              Với khả năng cung cấp nguồn ánh sáng linh hoạt, lại tích hợp khả
              năng điều khiển thông minh, với mẫu đèn LED Bulb này, người dùng
              có thể lắp đặt tại hầu hết mọi công trình. Lúc này, thiết bị vừa
              đảm bảo hiệu năng hoạt động ưu việt, vừa cho độ đồng điệu, làm nổi
              bật tính thẩm mỹ chung cho tổng thể khu vực – nơi mà chúng được
              lắp đặt.
            </p>
            <p>
              Tại các gia đình, đèn led này có thể sử dụng tại mọi căn phòng.
              Bao gồm cả phòng ngủ, phòng khách, phòng làm việc hay cả khu vực
              hành lang,... Tất nhiên, tương ứng với mỗi vị trí cùng khu vực lắp
              đặt khác nhau, người dùng cần cân đối, điều chỉnh nguồn sáng tương
              thích, đáp ứng nhu cầu sử dụng của bản thân 1 cách tối ưu nhất.
            </p>
            <p>
              Chọn mua đèn LED Bulb thông minh từ FPT Smart Home có thể nói là
              sự lựa chọn thông minh cho 1 không gian sống hiện đại, tiện nghi.
              Để cập nhật thêm các thông tin chi tiết và tư vấn rõ hơn về sản
              phẩm này, quý khách hàng có thể liên hệ với chúng tôi qua Hotline
              19006600 ngay hôm nay!
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Hướng dẫn kết nối đèn LED Bulb của FPT Smart Home trên app:
            </h5>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/9gePJJUy2aw?si=aTfY635846AChdkB"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
