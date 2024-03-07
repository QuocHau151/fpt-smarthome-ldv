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
    id_product: "MDZD012",
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
        <title>Đèn LED Downlight Thông Minh</title>
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
              <Image
                className="mx-auto max-md:w-[200px]"
                src={option?.image ?? ""}
                width={585}
                height={500}
                alt=""
              />
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center pt-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  Đèn LED Downlight Thông Minh
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:py-[50px] max-md:px-6">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Bộ Điều Khiển Rèm Cửa Thông Minh
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
                <p>220V</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất tiêu thụ tĩnh</p>
                <p>0.15W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>+10dBm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số kênh ngõ ra</p>
                <p>5</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (mm)</p>
                <p>I70x 70x 24 mmP20</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">TCVN 6480 -1:2008; ISO 9001:2015</p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>ZigBee</p>
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
              Bộ điều khiển rèm cửa thông minh được xem là 1 phần quan trọng,
              đóng vai trò là trung tâm trong việc điều khiển, vận hành hệ thống
              động cơ kéo – mở rèm. Được tích hợp công nghệ thông minh, với sản
              phẩm này, người dùng có thể đảm bảo được khả năng vận hành đồng
              bộ, tuần tự, cho độ ổn định cao của cả hệ thống rèm tự động.
            </p>
            <p>
              Cùng nhà thông minh FPT Smart Home tìm hiểu chi tiết hơn về đặc
              điểm, tính năng của bộ điều khiển này với bài viết dưới đây nhé.
            </p>
            <Image
              src="/assets/images/product/thumnail/1692178015-Bo-Dieu-Khien-Rem-Cua-copy.jpg"
              width={1250}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Rèm cửa thông minh là gì?
            </h5>

            <p>
              Rèm cửa thông minh (Smart Blind) là loại rèm thông minh có khả
              năng hoạt động tự động nhờ vào một động cơ điện. Khi người dùng
              tiến hành điều khiển từ xa thông qua ứng dụng hoặc giọng nói thì
              rèm sẽ tạo ra các tự động các thao tác như:
            </p>
            <ul className="ml-10 list-disc">
              <li>Mở rèm vào lúc 8h sáng và đóng rèm lúc 8h tối</li>
              <li>Mở rèm khi bạn trở về nhà</li>
              <li>
                Khi trời tối thì rèm tự động đóng lại và bật đèn lên cùng lúc
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đặc điểm của rèm cửa thông minh
            </h5>
            <p>
              Bộ giải pháp rèm cửa thông minh của FPT Smart Home gồm có các
              thiết bị như sau: động cơ rèm, bộ điều khiển rèm thông minh, ray
              rèm điện và công tắc điều khiển rèm. Chúng tôi khuyến khích khách
              hàng nên mua sản phẩm theo bộ để đảm bảo được tính tương thích cao
              và thực hiện trơn tru các yêu cầu, mục đích khi đi vào sử dụng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Động cơ rèm
            </h5>
            <p>
              Trên thị trường hiện nay có 2 loại motor rèm cửa chính như sau:
            </p>
            <ul className="ml-10 list-disc">
              <li>
                Bộ nguồn điện: Bộ phận này được gắn với động cơ rèm để thu nhận
                tín hiệu. Bộ điều khiển này giúp người sử dụng có thể điều khiển
                rèm trực tiếp bằng tay như rèm cuốn.
              </li>
              <li>
                Điều khiển từ xa (hay còn gọi là remote): Nó cho phép người dùng
                điều khiển rèm tự động từ xa thông minh giống với tivi hay máy
                lạnh mà không cần đến tận nơi vẫn điều khiển rèm tự cuốn theo ý
                muốn của mình
              </li>
            </ul>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ray rèm điện
            </h5>
            <p>Cấu tạo hoàn chỉnh cho phần thanh ray rèm điện bao gồm:</p>
            <ul className="ml-10 list-disc">
              <li>Đầu chính, đầu phụ</li>
              <li>Xâu cái dẫn hướng</li>
              <li>Chốt thanh ray</li>
              <li>Ke treo rèm Dây curoa </li>
              <li>Dây curoa </li>
              <li>Móc treo rèm </li>
              <li>Khớp nối</li>
            </ul>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công tắc điều khiển rèm
            </h5>
            <ul className="ml-10 list-disc">
              <li>Màu sắc: Màu đen/ Trắng</li>
              <li>Hình dáng: Hình chữ nhật</li>
              <li>Dạng nút bấm: Cảm ứng</li>
              <li>Số nút cảm ứng: 3 nút (đóng, mở, dừng) </li>
              <li>Mặt kính: Mặt kính cường lực. </li>
              <li>
                hức năng: Kết nối bluetooth, điều khiển bằng giọng nói tiếng
                Việt thông qua FPT Play Box, Tạo kịch bản, ngữ cảnh thông minh,
                Hẹn giờ đóng, mở, dừng hoặc điều khiển động cơ từ xa,...
              </li>
            </ul>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Lợi ích khi dùng bộ rèm cửa tự động cho nhà thông minh
            </h5>
            <p>
              Sử dụng bộ giải pháp rèm cửa thông minh của FPT Smart Home là xu
              hướng được rất nhiều gia đình Việt lựa chọn nhờ những lợi ích như
              sau:
            </p>
            <ul className="ml-10 list-disc">
              <li>
                Tích hợp động cơ (Motor điện) giúp người dùng dễ dàng điều khiển
                rèm cửa từ xa mà không bị cản trở về mặt không gian.
              </li>
              <li>
                Tiết kiệm phần nào thời gian và công sức. Đặc biệt với những
                ngôi nhà thông minh lắp đặt nhiều cửa sổ, người dùng chỉ cần
                dùng công tắc điều khiển rèm hoặc điều khiển qua smartphone, qua
                giọng nói khi kết hợp sản phẩm cùng FPT Play Box S thì hệ thống
                rèm cửa trong nhà sẽ đóng/mở theo đúng nhu cầu sử dụng.
              </li>
              <li>
                Bạn có thể tùy chọn và chuẩn bị mẫu rèm cửa thông minh theo ý
                thích của mình miễn sao đảm bảo với kích thước và các yêu cầu mà
                FPT Smart Home đã tư vấn, không bị gò bó vào một vài mẫu rèm
                nhàm chán trên thị trường.
              </li>
              <li>
                Hệ thống động cơ đóng/ mở rèm thông minh chạy trơn tru và không
                gây tiếng ồn.
              </li>
              <li>
                Bạn vẫn có thể điều khiển rèm cửa thông minh từ xa bằng các kịch
                bản đã thiết lập sẵn hay đóng mở bằng một chạm tại công tắc điều
                khiển rèm trong trường hợp chẳng may trong nhà bị mất wifi{" "}
              </li>
              <li>
                Bạn có thể tạo lịch tắt bật hoặc đặt các ngữ cảnh phù hợp với
                nhu cầu sinh hoạt trong ngày để rèm tuân thủ theo lịch đã lập
                trình sẵn.
              </li>
              <li>
                Các thiết bị trong bộ rèm kéo thông minh được ứng dụng công nghệ
                hiện đại nên có độ bền và tuổi thọ cực kỳ cao.
              </li>
            </ul>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px]"
              src="https://www.youtube.com/embed/u02LnbsFPsE?si=aqagDpm1hT40tvR9"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
