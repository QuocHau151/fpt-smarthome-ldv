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
    id_product: "RSNK011",
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
        <title>Ray Rèm Điện Thông Minh</title>
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
                  Lưu ý: Đơn giá tính theo mét. Thời gian bảo hành sản phẩm là
                  12 tháng tính từ ngày mua hàng.
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
            Ray Rèm Điện Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569948-thanh-ray-rem.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full ">
              <div className="flex items-center justify-center w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thanh ray dùng làm thanh rèm tự động</p>
              </div>
              <div className="flex items-center justify-center w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chất liệu nhôm, nhôm sơn tĩnh điện</p>
              </div>
              <div className="flex items-center justify-center w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khớp nối bằng nhôm dùng để nối thanh ray treo rèm</p>
              </div>
              <div className="flex items-center justify-center w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Con chạy tự do dùng để treo rèm (bằng nhựa)</p>
              </div>
              <div className="flex items-center justify-center w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dây curoa lõi thép dùng để kết nối các thành phần</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col  max-lg:px-20 max-md:px-6">
        <div className="container border-b-[1px] pb-[100px] ">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Kiến thức về sản phẩm
          </h2>
          <div className="flex flex-col items-start gap-4 text-left text-[18px] max-md:text-[12px]">
            <p>
              Để hoàn thiện hệ thống rèm tự động thì ray rèm điện là 1 phần
              không thể thiếu. Được cấu tạo từ chất liệu cao cấp, thanh ray rèm
              lúc này vừa đảm bảo độ bền bỉ theo thời gian, vừa cho độ chắc chắn
              cao, mang lại khả năng vận hành trơn tru, ổn định. Bạn đã biết gì
              về thanh ray cho rèm điện tự động? Hãy cùng nhà thông minh FPT
              Smart Home tham khảo các thông tin chi tiết hơn với bài viết sau
              nhé.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cấu tạo thanh ray rèm điện
            </h5>
            <p>
              Thanh ray rèm là bộ phận được sản xuất với chất liệu nhựa ABS cao
              cấp, chống cháy nổ vượt bậc. Với vật liệu này, thanh ray khi lắp
              đặt sẽ tạo nên sự đồng bộ, cho độ chắc chắn cao, đảm bảo tính sang
              trọng, hiện đại cho không gian.
            </p>
            <p>
              Để cấu tạo hoàn chỉnh cho phần thanh ray rèm này, trên thực tế cần
              đòi hỏi sự kết hợp của nhiều bộ phận, linh kiện khác nhau. Đó bao
              gồm:
            </p>
            <ul className="ml-10 list-disc">
              <li>Đầu chính, đầu phụ </li>
              <li>Xâu cái dẫn hướng </li>
              <li>Chốt thanh ray</li>
              <li>Ke treo rèm </li>
              <li>Dây curoa </li>
              <li>Móc treo rèm </li>
              <li>Khớp nối</li>
            </ul>
            <p>
              Đặc biệt, ở thanh ray, khi kết hợp cùng động cơ rèm, chúng sẽ tạo
              nên phụ kiện tương thích, cho phép hệ thống rèm cửa thông minh
              hoạt động với độ êm ái, trơn tru cao.{" "}
            </p>
            <p>
              Hãy lưu ý rằng, thanh ray rèm này sẽ được lựa chọn, ứng dụng tùy
              theo kích thước yêu cầu nhất định.
            </p>
            <Image
              src="/assets/images/product/thumnail/1692181053-Ray-Rem-Dien-Thong-Minh-copy.jpg"
              width={1250}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ưu điểm nổi bật của sản phẩm ray rèm điện
            </h5>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ray rèm điện với kết cấu chắc chắn, chất lượng
            </h5>
            <p>
              Ray với cấu tạo cao cấp, cho độ bền cao. Thay ray này có thể chịu
              được nhiều loại rèm khác nhau, đảm bảo thực hiện công năng tối ưu
              nhất.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Vận hành, hoạt động cho khả năng chống ồn cao
            </h5>
            <p>
              Thanh ray rèm khi vận hành cho khả năng chống ồn thông minh. Kết
              hơp với động cơ rèm, sản phẩm hoạt động trơn tru, mượt mà, không
              gây ra những tiếng ồn gây khó chịu.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ray rèm điện tạo nên hệ thống điều khiển thông minh
            </h5>
            <p>
              Là 1 trong các bộ cấu cấu thành nên thiết bị rèm tự động, khi kết
              hợp cùng động cơ rèm và bộ điều khiển rèm, ray rèm sẽ thực hiện
              chức năng đóng/ mở tương ứng, đảm bảo tính linh hoạt cao.
            </p>
            <p>
              Người dùng có thể thực hiện điều khiển hệ thống rèm này bằng giọng
              nói, bằng thiết bị công tắc hoặc thông qua ứng dụng tích hợp trên
              smartphone.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của ray rèm điện
            </h5>
            <p>
              Ray rèm điện sẽ được ứng dụng đồng bộ trong hệ thống rèm cửa tự
              động. Theo đó, chúng có thể được dùng cho các mô hình rèm tự động
              trượt ngang hoặc kết cấu rèm bắt trực tiếp lên trần.
            </p>
            <p>
              Có thể lắp đặt, bố trí ray rèm nói chung hay hệ thống rèm tự động
              nói riêng này tại nhiều không gian khác nhau. Từ khu vực cửa chính
              ra vào đến các khu cần treo rèm chắn sáng như phòng ngủ, phòng làm
              việc, phòng đọc sách,....
            </p>
            <p>
              Ngoài sử dụng tại không gian nhà ở là chính yếu, khách hàng khi có
              nhu cầu cũng có hể liên hệ, đặt mua và lắp đặt rèm thông minh tại
              hệ thống cửa hàng, showroom,.... Qua đó, giúp tăng tính tiện nghi,
              nâng tầm sự sang trọng, đẳng cấp cho không gian – nơi mà hệ thống
              rèm thông minh này được lắp đặt.{" "}
            </p>
            <Image
              src="/assets/images/product/thumnail/1692181053-Ray-Rem-Dien-Thong-Minh1-copy-2.jpg"
              width={1250}
              height={800}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chọn mua ray rèm điện chuẩn chất lượng ở đâu?
            </h5>
            <p>
              Khách hàng đang có nhu cầu đặt mua ray rèm chất lượng hoàn toàn có
              thể cân nhắc chọn mua sản phẩm theo bộ để đảm bảo tính phù hợp
              trong tổng thể. Điều này nhằm chắc chắn khi lắp đặt, đưa vào vận
              hành, thanh ray cho độ tương thích cao, đáp ứng nhu cầu, mục đích
              sử dụng của người dùng nhất.
            </p>
            <p>
              Hoạt động với phương châm mang đế cho khách hàng nguồn sản phẩm
              tiêu chuẩn, chính hãng, đảm bảo chất lượng hàng đầu, ray rèm điện
              tại đơn vị chúng tôi chắc chắn sẽ là lựa chọn thông minh, giúp đảm
              bảo nâng tầm tiện ích đáng kể cho không gian sống của bạn.{" "}
            </p>
            <p>
              Sản phẩm tại đơn vị đều được bán với mức giá cho tính cạnh tranh
              cao. Qua đó, vừa đảm bảo được tính kinh tế tối ưu, vừa đem lại sự
              hài lòng tuyệt đối cho mọi khách hàng khi chọn mua, sử dụng các
              thiết bị thông minh này.
            </p>
            <p>
              Chất liệu cấu tạo cao cấp, ray rèm điện vì thế đảm bảo được tính
              bền bì, không bị tác động bởi các yếu tố môi trường ngoài. Chọn
              mua thanh ray rèm ngay hôm nay để hoàn thiện hệ thống rèm thông
              minh tại gia đình mình. Qua đó, không chỉ nâng tầm tiện ích mà
              không gian sống của bạn hẳn cũng sẽ trông hiện đại, tiện nghi và
              đẳng cấp hơn đáng kể đấy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
