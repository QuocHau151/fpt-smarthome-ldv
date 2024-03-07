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
    name: "Công Tắc Cửa Cuốn Thông Minh Athena",
    color: "Đen",
    type: "Chữ nhật",
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
      item.color === selectedOptions.color &&
      item.type === selectedOptions.type &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Công Tắc Cửa Cuốn Thông Minh Athena</title>
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
                  className="mx-auto max-md:w-[100px]"
                  src={option?.image}
                  width={300}
                  height={300}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px]"></div>
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
                <div className="flex items-start justify-start gap-4 w-full">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Loại đèn
                  </h4>
                  <div className=" flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                  <div className=" flex items-center">
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
                </div>
                <div className="flex items-start justify-start gap-4 w-full">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Hình dáng
                  </h4>
                  <div className=" flex items-start">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                      type="radio"
                      name="type"
                      value="Chữ nhật"
                      checked={selectedOptions.type === "Chữ nhật"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Chữ <br /> nhật
                    </label>
                  </div>
                  <div className=" flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
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
                </div>
              </div>
              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px] ">
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
            Công Tắc Cửa Cuốn Thông Minh Athena
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1704445896-Cong-tac-cua-copy.jpg"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>220V, 50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số kênh ngõ ra</p>
                <p>4</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nhiệt độ hoạt động</p>
                <p>-10°C - 40°C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh</p>
              </div>
              <div className="flex items-center justify-between w-full  text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (D x R x C)</p>
                <p>120 x 72 x 32 mm</p>
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
              Công tắc cửa cuốn thông minh Athena của FPT Smart Home - Sự lựa
              chọn hoàn hảo cho người tiêu dùng
            </h5>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu về công tắc cửa cuốn thông minh Athena
            </h5>
            <p>
              Công tắc cửa cuốn thông minh Athena là một sản phẩm tiện ích của
              FPT Smart Home, được thiết kế để giúp người dùng dễ dàng điều
              khiển cửa cuốn/ cửa cổng từ bất kỳ đâu, bất kỳ lúc nào thông qua
              ứng dụng di động hoặc chạm trực tiếp lên bề mặt công tắc. Điều này
              giúp bạn tiết kiệm thời gian và năng lượng khi mở và đóng cửa,
              đồng thời mang lại sự tiện ích và an toàn bảo mật cho gia đình của
              bạn.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Lợi ích khi lắp đặt công tắc cửa cuốn thông minh Athena
            </h5>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thuận tiện hơn với khả năng điều khiển từ xa
            </h5>
            <p>
              Một trong những lợi ích chính của công tắc cửa cuốn thông minh
              Athena là khả năng điều khiển từ xa. Bạn có thể mở và đóng cửa từ
              bất kỳ đâu thông qua ứng dụng di động trên điện thoại hoặc máy
              tính bảng của mình, người dùng khi về nhà vào lúc trời mưa, không
              cần phải xuống xe mở cửa cổng, mà chỉ cần ngồi trên xe thao tác mở
              cửa cổng nhanh gọn.
            </p>
            <p>
              Hơn nữa, trong trường hợp bạn vừa ra ngoài hay đang ở công ty,
              nhưng muốn mở cửa cho bạn bè hoặc người thân ghé thăm đột xuất,
              chỉ cần một vài cú nhấp chuột, bạn có thể kiểm soát cửa cuốn một
              cách dễ dàng và nhanh chóng.{" "}
            </p>
            <p>
              Đặc biệt, tính năng vượt trội này không chỉ tối giản thao tác, mà
              người dùng còn không phải mang 1 lúc quá nhiều chìa khóa/điều
              khiển bên mình. Giúp việc di chuyển hay sinh hoạt hàng ngày cũng
              linh hoạt và thuận tiện hơn. Tiện lợi nhất vẫn là người có “não cá
              vàng”, từ giờ sẽ không sợ bỏ quên hay làm mất chìa khóa.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tích hợp chế độ khoá cảm ứng đảm bảo an toàn
            </h5>
            <p>
              Chế độ khóa cảm ứng của công tắc sẽ tự động bật sau khoảng thời
              gian nhất định do người dùng cài đặt trên Ứng dụng, giúp đảm bảo
              an toàn, tránh việc trẻ nhỏ nghịch ngợm bấm đóng mở nhiều lần hoặc
              đề phòng tai nạn đáng tiếc có thể xảy ra.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giám sát trực tiếp trạng thái mở cửa
            </h5>
            <p>
              Khi tích hợp với App quản lý trên smartphone, người dùng có thể
              giám sát trực tiếp tiến trình và trạng thái đóng/mở cửa từ xa
              thông qua hình ảnh trên App, đảm bảo an toàn và chính xác.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thiết lập kịch bản thông minh khi kết hợp với các thiết bị điện
              khác
            </h5>
            <p>
              Công tắc cửa cuốn thông minh Athena sẽ trở nên “đa năng” khi kết
              hợp với các thiết bị thông minh khác trong hệ sinh thái nhà thông
              minh FPT Smart Home như: đèn thông minh, rèm cửa thông minh,... Từ
              đó người dùng có thể thiết lập hàng loạt kịch bản thông minh tùy
              theo nhu cầu của gia đình:
            </p>
            <ul className="list-disc pl-10 gap-2 flex flex-col">
              <li>
                Kịch bản “Về nhà”: cửa cuốn sẽ tự động mở, đèn hành lang bật
                sáng.
              </li>
              <li>
                Kịch bản “Trời mưa”: chỉ cần ở trong nhà điều khiển qua điện
                thoại, cửa cuốn và rèm sẽ tự đóng.
              </li>
              <li>
                Kịch bản “Tiếp khách”: cửa cuốn tự mở mà không cần phải xuống
                nhà, rèm cửa phòng khách tự mở, đèn chiếu sáng phòng khách tự
                bật.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ưu điểm nổi bật của công tắc cửa cuốn thông minh Athena
            </h5>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thiết kế sang trọng
            </h5>
            <p>
              Sản phẩm được thiết kế với mặt kính vô cùng sang trọng và tinh tế
              cùng với viền sát cạnh sắc nét, góc bo tròn, chống va đập, chống
              trầy xước tốt cùng với màu sắc trang nhã. Ngoài ưu điểm trên thì
              thiết bị còn được trang bị mặt kính cường lực và chống bám vân
              tay.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công nghệ hiện đại
            </h5>
            <p>
              Công tắc cửa cuốn thông minh Athena sử dụng công nghệ kết nối
              Bluetooth Mesh tiên tiến, giúp hoạt động một cách chính xác và ổn
              định, đảm bảo rằng mọi thao tác mở và đóng cửa đều diễn ra suôn sẻ
              và an toàn.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tương thích với mọi động cơ cửa cổng trên thị trường
            </h5>
            <p>
              Công tắc cửa cuốn tương thích với đa số các loại động cơ cửa cổng
              thông dụng trên thị trường. Chẳng hạn như: Động cơ âm sàn, tay
              đòn, trượt…Người dùng không phải e ngại nếu lắp thêm vào cửa cổng
              sẵn có tại nhà.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Dễ dàng lắp đặt
            </h5>
            <p>
              Sản phẩm phù hợp lắp đế âm tường chữ nhật thông dụng tại Việt Nam,
              thay thế 1:1 công tắc cơ truyền thông mà không phải đi lại đường
              dây điện.
            </p>
            <p>
              {" "}
              Công tắc cửa cuốn Athena không chỉ mang đến sự tiện lợi và an toàn
              trong quá trình sử dụng mà còn mang đến một trải nghiệm sống hiện
              đại và đẳng cấp cho ngôi nhà. Hãy trang bị công nghệ thông minh
              cho ngôi nhà của bạn ngay hôm nay và trải nghiệm những lợi ích
              tuyệt vời mà công tắc cửa cuốn thông minh Athena mang lại!
            </p>
            <p>
              Liên hệ với FPT Smart Home ngay tại đây để được tư vấn miễn phí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
