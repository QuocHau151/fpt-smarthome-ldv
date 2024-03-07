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
    id_product: "MRZK011",
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
        <title>Động Cơ Rèm Thông Minh</title>
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
                  className="mx-auto"
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
                  {option?.name}
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Động Cơ Rèm Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569332-dong-co-rem.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Điện áp</p>
                <p>240V/60Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Lực kéo</p>
                <p>2.0 N.m</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tốc độ</p>
                <p>80 vòng/ phút</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>80W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ bảo vệ</p>
                <p>IP20</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chiều dài động cơ</p>
                <p>31.6 cm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dây điện</p>
                <p>5 dây</p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ ồn</p>
                <p>33 dB(A)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col   max-lg:px-20 max-md:px-6">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <p>
              Rèm cửa ngoài chức năng trang trí không gian còn thực hiện nhiệm
              vụ che chắn ánh sáng hoặc đảm bảo sự riêng tư bên trong không gian
              gia đình khi cần thiết. Tuy nhiên, với sự ra mắt của động cơ rèm
              hiện nay, việc kéo – mở rèm giờ đây sẽ được thực hiện 1 cách tự
              động, nhanh chóng, cho độ tiện ích cực cao ngôi nhà thông minh.
              Bạn đã biết gì về thiết bị thông minh, mang tính xu thế này?
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu chung về động cơ rèm đến từ thương hiệu FPT Smart Home
            </h5>
            <Image
              src="/assets/images/product/thumnail/1692180895-Dong-co-rem-copy.jpg"
              width={1250}
              height={800}
              alt=""
            />
            <p>
              Ngày nay, các sản phẩm động cơ thông minh được tích hợp ngày càng
              nhiều xung quanh cuộc sống hằng ngày của mỗi chúng ta. Thông qua
              đó, các động cơ này sẽ giúp tối ưu hóa sự thuận tiện trong sinh
              hoạt, nâng cao chất lượng cuộc sống của con người được tốt hơn.
            </p>
            <p>
              Theo đó, động cơ rèm là 1 trong những mô hình ứng dụng thông minh,
              mang tính dẫn đầu xu hướng ở thời điểm hiện tại.
            </p>
            <p>
              Động cơ rèm thông minh FPT Smart Home được biết đến là sản phẩm
              được tích hợp sẵn sẵn module Zigbee. Ở thiết bị này, để vận hành,
              hoạt động, người dùng có thể linh hoạt điều khiển chúng qua giọng
              nói bằng tiếng Việt hoặc qua thiết bị di động thông minh được kết
              nối.
            </p>
            <Image
              src="/assets/images/product/thumnail/1692180895-Dong-co-rem1-copy.jpg"
              width={1250}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cấu tạo động cơ rèm thông minh
            </h5>
            <p>
              Động cơ rèm thông minh được cấu tạo với độ hoàn thiện cao, cho
              phép khả năng lắp đặt, hoạt động ổn định trong hệ thống rèm kéo tự
              động.
            </p>
            <p>
              Ở động cơ này, phần vỏ của chúng được sản xuất từ chất liệu hợp
              kim nhôm cao cấp. Chất liệu này vừa đảm bảo được sự chắc chắn cao,
              cho tính chịu lực tốt, vừa có thể bảo vệ được 1 cách tối ưu các bộ
              phận bên trong động cơ.
            </p>
            <p>
              Kết cấu từ hợp kim nhôm cũng giúp động cơ cho độ bền bỉ cao theo
              thời gian. Hạn chế tối đa những ảnh hưởng từ tác nhân môi trường
              ngoài gây gỉ sét, hao mòn. Nhờ đó, tuổi thọ thiết bị đảm bảo được
              dài lâu theo thời gian, cho tính kinh tế vượt bậc.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tính năng nổi bật từ động cơ rèm
            </h5>
            <p>
              Nếu các thiết bị rèm tự động điều chỉnh bằng remote vốn đã khá
              quen thuộc thì nay, với việc vận hành động cơ rèm thông minh này,
              việc điều khiển, đóng, mở rèm không còn bị giới hạn bởi công cụ
              điểu khiển cứng nhắc ấy nữa.
            </p>
            <p>
              Lúc này, bạn sẽ được trải nghiệm công nghệ hiện đại nhất với tính
              năng điều khiển rèm cửa thông minh bằng khẩu lệnh.{" "}
            </p>
            <p>
              Thiết bị cho phép nhận diện giọng nói bằng tiếng Việt 1 cách vô
              cùng chuẩn xác. Theo đó, việc đóng, mở rèm thực hiện tức thời ngay
              sau mỗi khẩu lệnh, đáp ứng nhu cầu sử dụng của người dùng tối ưu
              nhất.
            </p>
            <p>
              Ngoài điều khiển bằng giọng nói, bạn còn có thể thực hiện cài đặt,
              hẹn giờ đóng mở trên thiết bị smartphone của mình.
            </p>
            <p>
              Đặc biệt, động cơ còn trang bị bộ cảm biến ánh sáng thông minh.
              Người dùng có thể cài đặt tính năng mở rèm tự động dự trên cường
              độ ánh sáng tự nhiên.{" "}
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ưu điểm nổi bật của sản phẩm
            </h5>
            <p>
              Thiết bị có thể hoạt động với độ trơn tru, ổn định cao với mức tải
              trọng lớn.
            </p>

            <p>
              Đặc biệt, với kết cấu chắc chắn, cho độ tương thích cao, tích hợp
              công nghệ hiện đại, thiết bị cho khả năng vận hành khá mượt mà.
              Tốc độ vận hành của động cơ đạt 80 vòng/ phút, mang đến cảm giác
              trơn tru đáng kể.
            </p>
            <p>
              Nếu bạn lo ngại tình trạng động cơ gây ồn trong quá trình hoạt
              động thì với sản phẩm này, vấn đề trên là không xảy ra.
            </p>
            <p>
              Độ ồn khi hoạt động của thiết bị chỉ dao động ở mức 33 dB(A). So
              với nhiều sản phẩm khác trên thị trường, có thể nói động cơ rèm
              này được đánh giá cao hơn cả, không gây ra các âm thanh khó chịu
              khi hoạt động kéo, mở. Qua đó, tạo nên không gian yên tĩnh, đầy
              tiện nghi cho sinh hoạt hằng ngày của người dùng.{" "}
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của động cơ rèm thông minh
            </h5>
            <p>
              Động cơ rèm được đưa vào ứng dụng có thể nói là giải pháp tuyệt
              vời, mang đến những trải nghiệm sống chất lượng, tiện nghi.
            </p>
            <p>
              Theo đó, sản phẩm có thể được lắp đặt tại không gian nhà ở các gia
              đình, các khu vực được bố trí hệ thống rèm treo chắn sáng. Ngoài
              ra, người dùng còn có thể linh hoạt sử dụng chúng tại các các văn
              phòng, cửa hàng, các showroom tùy theo nhu cầu của bản thân.
            </p>
            <p>
              Với động cơ rèm thông minh, việc điều chỉnh đóng – mở rèm giờ đây
              trở nên tự động hóa, mang tính tiện ích hơn đáng kể. Kết cấu sản
              phẩm cũng được đánh giá cao về sự chắc chắn, cho độ bền bỉ cao
              trong suốt quá trình vận hành, sử dụng. Để được hỗ trợ tư vấn cũng
              như đặt mua, lắp đặt rèm thông minh khách hàng có thể liên hệ với
              FPT Smart Home qua Hotline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
