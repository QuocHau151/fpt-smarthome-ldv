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
    (item) => item.type === selectedOptions.type && item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Đèn LED Panel Thông Minh</title>
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
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
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
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[12px]">
                    Loại đèn
                  </h4>
                  <div className="basis-1/3 flex items-center ">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px]"
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
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px] "
                      type="radio"
                      name="type"
                      value="Tròn"
                      checked={selectedOptions.type === "Tròn"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Tròn
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[15px] max-md:min-h-[15px] "
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
              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px]">
                  {" "}
                  {option ? `${option?.price} VNĐ` : "Hết Hàng"}
                </p>
                <p className="-mt-4 text-[12px] max-md:mt-[-8px] max-md:text-[10px]">
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
        <div className="container border-b-[1px] pb-[100px] ">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Đèn Led Panel Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1668569386-panel.png"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>40W</p>
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
                <p>3600lm</p>
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
                <p>Kích thước (DxRxC)</p>
                <p>600 x 600x10mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 7722-1/IEC 60598-1:2008 ; TCVN 10885-2-1/IEC
                  62722-2-1:2014
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
              Đèn LED Panel thông minh FPT Smart Home là loại đèn LED chiếu sáng
              có thiết kế kiểu dáng tròn, vuông hoặc chữ nhật được lắp đặt âm
              trần hoặc thả trần. Thiết bị đèn thông minh này không chỉ thích
              hợp chiếu sáng cho không gian gia đình mà còn được lắp đặt tại rất
              nhiều các công trình công cộng, trường học, bệnh viện, văn phòng,…
            </p>
            <p>
              Áp dụng công nghệ LED chiếu sáng, đèn Led Panel thông minh đến từ
              nhà FPT Smart Home tạo ra ánh sáng ổn định, tối ưu hóa hiệu năng
              sử dụng. Đồng thời mang đến trải nghiệm điều khiển thông minh vượt
              xa nhu cầu chiếu sáng thông thường.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ưu điểm của đèn LED Panel đến từ FPT Smart Home
            </h5>
            <p>
              Sản phẩm đèn LED Panel gây được ấn tượng tốt cho hầu hết mọi đối
              tượng khách hàng khi đã chọn mua, sử dụng. Dưới đây là các điểm
              nổi bật của sản phẩm:{" "}
            </p>
            <ul className="list-disc pl-10 gap-2 flex flex-col">
              <li>
                Đèn cho khả năng thao tác bật/ tắt 1 cách linh hoạt thông qua
                giọng nói bằng tiếng Việt thông qua bộ điều khiển trung tâm FPT
                Play Box S. Người dùng nhờ đó có thể chỉ cần ngồi tại chỗ mà vẫn
                điều khiển được thiết bị 1 cách linh hoạt. Với các gia đình có
                người già, trẻ em, đây sẽ là lựa chọn thông minh, giúp tiết kiệm
                công sức, đảm bảo sự an toàn trong quá trình sử dụng. Qua đó,
                tối ưu hóa tính tiện nghi trong sinh hoạt.{" "}
              </li>
              <li>
                Công nghệ chip LED thông minh được ứng dụng cho tính tiết kiệm
                điện năng vượt bậc mà vẫn đảm bảo cường độ ánh sáng ổn định.{" "}
              </li>
              <li>
                Ngay cả khi sử dụng đèn liên tục hàng giờ liền, với nguồn sáng
                được cung cấp ổn định từ thiết bị chiếu sáng này, bạn cũng sẽ
                không xảy ra tình trạng đau hay mỏi mắt.
              </li>
              <li>
                Đặc biệt, sản phẩm cho phép hẹn giờ bật, tắt theo lịch trình
                sinh hoạt của mỗi gia đình. Việc điều khiển, sử dụng thông qua
                kết nối Bluetooth Mesh cũng đảm bảo được sự nhanh chóng, tiện
                nghi tối đa.
              </li>
              <li>
                Đèn LED Panel thông minh FPT Smart Home ứng dụng công nghệ chiếu
                sáng diện rộng giúp phân bổ ánh sáng đồng đều cho toàn bộ không
                gian. Tuổi thọ đèn kéo dài đến 25.000h chiếu sáng, tương đương
                hơn 10 năm (trung bình chiếu sáng 6h/ngày) cho ánh sáng trung
                thực với mắt người với chỉ số hoàn màu CRI = 80.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng đèn LED Panel thông minh
            </h5>
            <p>
              Nếu đặc thù diện tích chiếu sáng mặt sàn lớn với nhu cầu chiếu
              sáng đồng đều thì sử dụng đèn LED Panel thông minh FPT Smart Home
              là giải pháp nhà thông minh hoàn hảo nhất.
            </p>
            <p>
              Sản phẩm có 3 dạng hình vuông, tròn và chữ nhật - đều giúp tạo ra
              nguồn ánh sáng lấp đầy từng góc trong không gian phòng làm việc,
              phòng học, bệnh viện, trung tâm thương mại,… Vì ứng dụng công nghệ
              chiếu sáng LED nên ánh sáng từ đèn LED Panel hoạt động cực kỳ ổn
              định, không xảy ra hiện tượng nhấp nháy, bảo vệ mắt cho học sinh
              và dân văn phòng khi làm việc hoặc ngồi học trong không gian đèn
              LED suốt ngày dài.
            </p>
            <p>
              Dù ở bất kỳ khu vực nào, đèn LED Panel thông minh của FPT Smart
              Home cũng luôn là sự lựa chọn hàng đầu không chỉ cung cấp nguồn
              sáng ổn định, tạo ra trải nghiệm tuyệt vời cho người dùng mà còn
              nâng tầm giá trị cho không gian với thiết kế hiện đại, chỉnh chu
              trong từng đường nét. Để đặt mua sản phẩm nhanh chóng, chuẩn chất
              lượng nhất, quý khách hàng có thể liên hệ với chúng tôi ngay qua
              Hotline 19006600 hôm nay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
