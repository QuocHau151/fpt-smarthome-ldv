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
    name: "Nút Bấm Ngữ Cảnh Không Dây",
    button: "1 nút",
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
      item.name === selectedOptions.name &&
      item.button === selectedOptions.button &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Nút Bấm Ngữ Cảnh Không Dây</title>
        <meta
          name="description"
          content="Các thiết bị Công tắc thông minh FPT Smart Home"
        />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container  max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Các thiết bị Công tắc thông minh
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
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4  max-md:text-[12px]">
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
                    Loại đèn
                  </h4>
                  <div className=" flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="button"
                      value="1 nút"
                      checked={selectedOptions.button === "1 nút"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      1 Nút
                    </label>
                  </div>
                  <div className=" flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="button"
                      value="6 nút"
                      checked={selectedOptions.button === "6 nút"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      6 Nút
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
        <div className="container border-b-[1px] pb-[100px] ">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Đèn Led Panel Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569310-cong-tac-canh-6-nut_.png"
              width={1000}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>Pin CR2032/3V</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nhiệt độ hoạt động</p>
                <p>-10 ÷ 55˚C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số ngữ cảnh tối đa</p>
                <p>3</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số lần bật tắt</p>
                <p>100.000</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước</p>
                <p>45x45x12 mm</p>
              </div>
              <div className="flex items-center justify-between w-full text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Zigbee</p>
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
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Nút bấm ngữ cảnh không dây – Quản lý mọi thiết bị trong tầm tay
            </h5>
            <p>
              So với các công tắc truyền thống, nút bấm ngữ cảnh không dây với
              tính tiện ích cao, thuận tiện trong việc sử dụng trở thành lựa
              chọn đáng cân nhắc hàng đầu cho các không gian hiện đại. Không cần
              kết nối hay thực hiện tháo lắp phức tạp, với sản phẩm này, bạn vẫn
              đảm bảo có thể điều khiển, bật tắt các thiết bị chiếu sáng 1 cách
              nhanh chóng, tiện ích. Cùng tìm hiểu chi tiết hơn về mẫu nút bấm
              không dây này với bài viết sau nhé.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu chung về sản phẩm nút bấm ngữ cảnh không dây
            </h5>
            <p>
              Ngày nay, có thể nói, các thiết bị điều khiển thông minh dần được
              ứng dụng rộng rãi hơn. Điều này dễ hiểu khi đây được xem là xu thế
              chung của thời đại, góp phần nâng cao chất lượng cuộc sống đáng
              kể, giúp tối ưu hóa thời gian, sức người cũng như góp phần cải
              thiện chất lượng sinh hoạt hằng ngày 1 cách tốt hơn.
            </p>
            <p>
              Trong hàng loạt các thiết bị điều khiển thông minh, nút bấm ngữ
              cảnh không dây được đánh giá cao hơn cả về tính tiện ích. Sản phẩm
              được cho ra mắt như 1 bước đột phá mới trong hệ thống các thiết bị
              điều khiển thông minh.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1692179573-Cong-tac-ngu-canh-khong-day.jpg"
              width={1000}
              height={500}
              alt=""
            />

            <p>
              Theo đó, dưới sự hỗ trợ của sản phẩm, bạn có thể thực hiện các tác
              vụ điều khiển nguồn sáng nhanh chóng mà không phải di chuyển đến
              vị trí công tắc như trước. Chỉ cần thao tác chạm trên nút bấm ngữ
              cảnh không dây tích hợp này, bạn có thể:
            </p>
            <ul className="list-disc pl-10 gap-2 flex flex-col">
              <li>
                Thực hiện bật/ tắt toàn bộ các nguồn sáng, hệ thống đèn trong
                nhà
              </li>
              <li>Điều chỉnh độ sáng tương thích cho bóng đèn trong nhà</li>
              <li>Lập trình ngữ cảnh tương ứng cho nhu cầu</li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Những ưu điểm nổi bật của sản phẩm công tắc ngữ cảnh không dây
            </h5>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thiết kế tinh tế, đẹp mắt
            </h5>
            <p>
              Nút bấm với kích thước nhỏ nhắn, phù hợp để sử dụng, điều chỉnh
              linh hoạt. Trong đó, sản phẩm hiện đang phân phối trên thị trường
              với 2 kiểu dáng chính, gồm công tắc không dây dạng đôi (2 nút bấm)
              và dạng đơn (1 nút bấm). Người dùng có thể chọn mua sản phẩm phù
              hợp, tương ứng cho nhu cầu sử dụng của mình.
            </p>
            <p>
              Thiết kế công tắc thông minh gây ấn tượng với tiêu chuẩn châu Âu,
              kiểu dáng tinh tế, sang trọng với phím bấm tràn viền. Với màu
              trắng bao phủ trên toàn bộ công tắc, sản phẩm có thể nói là phù
              hợp để ứng dụng tại mọi kiểu không gian kiến trúc khác nhau.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thực hiện điều khiển tiện ích
            </h5>
            <p>
              Công tắc không dây này được đánh giá cao khi cho phép kích hoạt
              ngữ cảnh được định sẵn. Trong đó, các thao tác được thực hiện với
              công tắc không dây này được tích hợp như sau:
            </p>
            <ul className="list-disc pl-10 gap-2 flex flex-col">
              <li>
                Khi nhấn 1 lần, bạn có thể thực hiện tắt tất cả hệ thống đèn.
              </li>
              <li>Khi nhấn đúp 2 lần, bạn có thể bật toàn bộ hệ thống đèn.</li>
              <li>
                Để điều chỉnh độ sáng của đèn, có thể nhấn giữ nút bấm để thực
                hiện.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Đảm bảo độ bền bỉ cũng tính an toàn khi ứng dụng
            </h5>
            <p>
              Chất liệu nhựa cao cấp của nút bấm ngữ cảnh không dây đảm bảo quá
              trình sử dụng bền bỉ theo thời gian. Hạn chế tối đa các tác nhân
              ngoài, gây ảnh hưởng đến chất lượng của công tác không đây này.{" "}
            </p>
            <p>
              Đặc biệt, nút bấm không kết nối với hệ thống dây điện rườm rà mà
              sử dụng trực tiếp bằng Pin CR2032. Theo khảo sát, với sản phẩm
              này, số lần bật tắt dao động đến 100.000 lần.{" "}
            </p>
            <p>
              Như vậy, sản phẩm về cơ bản cho khoảng thời gian sử dụng khá lâu
              dài. Việc ứng dụng thiết bị này trong hệ thống điều khiển đèn
              chiếu sáng theo đó vừa đảm bảo được tính tiện ích cao độ, vừa cho
              tính kinh tế vượt bậc.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của sản phẩm nút bấm ngữ cảnh không dây
            </h5>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1692179547-3af8058666cab594ecdb19.jpg"
              width={1000}
              height={500}
              alt=""
            />
            <p>
              Sản phẩm được sử dụng chủ yếu tại các hộ gia đình, giúp điều khiển
              hệ thống chiếu sáng 1 cách nhanh chóng, tiện ích. Ngoài ra, thiết
              bị cũng phù hợp để lắp đặt tại các cửa hàng, văn phòng, các
              showroom,... tùy theo nhu cầu của chủ đầu tư.
            </p>
            <p>
              Theo đó, người dùng có thể cân nhắc, bố trí nút bấm ngữ cảnh không
              dây này ở các vị trí thích hợp. Đó có thể là đầu giường hoặc các
              vị trí mà bạn thường cần dùng.{" "}
            </p>
            <p>
              Giờ đây, việc điều khiển, bật tắt đèn đảm bảo nhanh chóng, tiết
              kiệm thời gian hơn với sự hỗ trợ từ nút bấm ngữ cảnh không dây
              thông minh. Chọn mua sản phẩm ngay hôm nay và ứng dụng chúng trong
              sinh hoạt hằng ngày. Tin chắc rằng, với sự tiện ích nổi bật, thao
              tác đơn giản, mẫu công tắc không dây thông minh này sẽ làm hài
              lòng mọi đối tượng người dùng, ngay cả với các khách hàng khó tính
              nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
