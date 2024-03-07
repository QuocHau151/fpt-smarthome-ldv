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
    type: "Chữ nhật",
    color: "Đen",
    button: "1 nút",
    power: "Công xuất cao",
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
      item.button === selectedOptions.button &&
      item.power === selectedOptions.power &&
      item.name === "Công Tắc Cảm Ứng Athena" &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Công Tắc Cảm Ứng Athena</title>
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
              <div className="flex flex-col items-center py-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  {option?.name || "Công tắc cảm ứng Athena"}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4  max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex items-start justify-start border-b-[1px] border-black pb-10">
                <div className="flex flex-col items-start gap-8 w-[150px]">
                  <h4 className="  text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] max-md:text-[15px]">
                    Hình dáng
                  </h4>
                  <h4 className=" text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] max-md:text-[15px]">
                    Màu sắc
                  </h4>
                  <h4 className=" text-[18px] font-semibold text-gray-800 mr-10  min-w-[100px] max-md:text-[15px]">
                    Số nút
                  </h4>
                  <h4 className=" text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] mt-10 max-lg:mt-0 max-md:text-[15px] max-md:mt-20">
                    Công suất
                  </h4>
                </div>
                <div className="flex flex-col items-start justify-around gap-6 max-md:">
                  <div className="flex  items-center justify-around">
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px] ">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                  <div className="flex  items-start justify-start">
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
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
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
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
                  <div className="flex  items-start justify-start flex-wrap gap-2">
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px] ">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="button"
                        value="1 nút"
                        checked={selectedOptions.button === "1 nút"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        1 nút
                      </label>
                    </div>
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="button"
                        value="2 nút"
                        checked={selectedOptions.button === "2 nút"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        2 nút
                      </label>
                    </div>
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="button"
                        value="3 nút"
                        checked={selectedOptions.button === "3 nút"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        3 nút
                      </label>
                    </div>
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="button"
                        value="4 nút"
                        checked={selectedOptions.button === "4 nút"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        4 nút
                      </label>
                    </div>
                  </div>
                  <div className="flex  items-center justify-center">
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="power"
                        value="Công xuất cao"
                        checked={selectedOptions.power === "Công xuất cao"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Công xuất cao
                      </label>
                    </div>
                    <div className=" flex items-center min-w-[150px] max-md:min-w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="power"
                        value="Thường"
                        checked={selectedOptions.power === "Thường"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                        Thường
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px]">
                  {" "}
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
      <div className="text-center flex flex-col py-[100px]  max-lg:px-20 max-md:px-6 max-md:py-[50px]">
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Công Tắc Cảm Ứng Athena
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569275-cong-tac-athena.png"
              width={500}
              height={300}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Điện áp hoạt động</p>
                <p>220V/50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất đầu ra tối đa mỗi nút</p>
                <p>300W</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Màu kính</p>
                <p>Trắng</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Vật liệu</p>
                <p>Mặt kính cường lực | Thân vỏ: Nhựa ABS</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Tiêu chuẩn chống bụi, chống nước</p>
                <p>IP44</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số lần bật tắt</p>
                <p>100,000</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (DxRxC)</p>
                <p>86x86x32 mm</p>
              </div>

              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 6480-1/ IEC 60669-1; ISO 9001:2015; ISO 14001:2015
                </p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Bluetooth Mesh</p>
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
              Công tắc cảm ứng đến từ thương hiệu nhà thông minh FPT Smart Home
              với tính linh hoạt, độ nhạy cao cho phép người dùng tối ưu hóa
              công năng sử dụng trong sinh hoạt hằng ngày. Sở hữu kết cấu sang
              trọng, hiện đại, khả năng điều khiển các thiết bị chiếu sáng từ xa
              bằng smartphone hoặc giọng nói Tiếng Việt thông qua bộ điều khiển
              trung tâm FPT Play Box S. Công tắc cảm ứng có thể xem là thiết bị
              dẫn đầu xu hướng, mang đến không gian sống chuẩn tiện nghi cho mọi
              nhà.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công tắc cảm ứng là gì?
            </h5>
            <p>
              Công tắc cảm ứng (Touch switch) là loại công tắc chỉ cần chạm nhẹ
              ngón tay lên mặt kính là có thể bật/ tắt các thiết bị điện trong
              gia đình. Sản phẩm được sử dụng trong nhiều loại đèn và công tắc
              tường có vỏ ngoài bằng kim loại cũng như trên các thiết bị đầu
              cuối máy tính công cộng. Màn hình cảm ứng bao gồm một loạt các
              công tắc cảm ứng trên màn hình.
            </p>
            <p>
              Công tắc cảm ứng là loại cảm biến xúc giác đơn giản nhất hiện nay.
              Công tắc điện cảm ứng thường được dùng để thay thế các loại công
              tắc truyền thống vì tính tiện dụng và hiệu quả cao.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu chung về công tắc cảm ứng Athena
            </h5>
            <p>
              Sự phổ biến của các thiết bị thông minh tại các không gian sống
              hiện nay hẳn không phải đề cập đến quá nhiều nữa. Trong hàng loạt
              các thiết bị thông minh ấy, công tắc cảm ứng được xem như 1 trong
              những bộ phận chủ đạo. Các nút bấm đều là cảm ứng, thuận tiện tối
              đa cho việc thao tác của người dùng.
            </p>
            <p>
              Đặc biệt, vào ngày 17/5 FPT Smart Home đã chính thức trình làng bộ
              công tắc cảm ứng thông minh Athena với diện mạo hoàn toàn mới cùng
              những sự cải tiến vượt bậc về công nghệ so với phiên bản cũ.
            </p>
            <p>
              Sản phẩm công tắc cảm ứng FPT Smart Home hiện đang được phân phối
              với các mẫu gồm, công tắc cảm ứng 1 nút, 2 nút, 3 nút, 4 nút:
            </p>
            <p>
              Công tắc cảm ứng Athena cũng được thiết kế 2 kiểu dáng cơ bản:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công tắc cảm ứng chữ nhật
            </h5>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1693306782-a6dfa70535eee6b0bfff.jpg"
              width={500}
              height={300}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công tắc cảm ứng hình vuông
            </h5>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1693306781-5c3d05ca6f9cbdc2e48d.jpg"
              width={500}
              height={300}
              alt=""
            />
            <p>
              Dựa trên nguyên tắc hoạt động tiên tiến, công tắc cảm ứng không
              chỉ đảm bảo được tính an toàn trong quá trình sử dụng, hạn chế
              được các tình trạng rò điện, giật điện gây nguy hiểm, công tắc cảm
              ứng cho độ nhạy cao, thiết kế đảm bảo tính tương thích với nhiều
              không gian lắp đặt khác nhau.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điểm nổi bật của Bộ sưu tập công tắc cảm ứng Athena
            </h5>
            <p>
              Sở hữu nhiều điểm tạo nên sức hút, mẫu công tắc cảm ứng chữ
              nhật/vuông này nhận được nhiều đánh giá cao từ phía người dùng
              trên thực tế.
            </p>
            <p>
              Đầu tiên, công tắc cảm ứng Athena đã lột xác khác biệt so với mẫu
              cũ. Với hai phiên bản hình chữ nhật và hình vuông, các nút cảm ứng
              đều được bố trí cân đối mang đến sự sang trọng, đẳng cấp rất
              riêng. Viền kim loại bo cạnh sắc nét, tinh tế.
            </p>
            <p>
              Bề mặt kính của công tắc cảm ứng Athena cho khả năng chống trầy,
              chống bám vân tay hiệu quả, đảm bảo được tính vệ sinh, qua đó,
              nâng tầm sức hút đáng kể cho không gian ngôi nhà bạn. Thiết kế lõm
              tại các nút bấm còn giúp thao tác trở nên sinh động, mượt mà.{" "}
            </p>
            <p>
              Đặc biệt, trên các nút cảm ứng còn được tích hợp đèn LED linh hoạt
              giúp người dùng có thể định vị công tắc thông minh ngay trong bóng
              tối hoặc trong điều kiện thiếu sáng 1 cách chính xác nhất.
            </p>
            <p>
              Công tắc cảm ứng Athena cũng được ứng dụng Chip điều khiển
              Bluetooth công nghệ mới, cho khả năng kết nối các thiết bị tốt
              hơn, với khoảng cách xa hơn mà vẫn đảm bảo được sự chính xác,
              nhanh nhạy, cho độ linh hoạt cực cao.
            </p>
            <p>
              Ngoài ra, bộ công tắc cảm ứng Athena phiên bản mới còn được nhà
              FPT nâng cấp thêm linh kiện chống nhiễu cho bo mạch nhằm thích ứng
              với các thiết bị có tải cảm như quạt trần, quạt hút… Giúp tăng gấp
              đôi công suất tải tối đa của một kênh lên so với phiên bản cũ.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1693306782-7e0a2b7666d6b588ecc718.jpg"
              width={500}
              height={300}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chức năng của công tắc cảm ứng thông minh Athena
            </h5>
            <p>
              Có thể nói, tính năng của công tắc cảm ứng thông minh cho phép tối
              đa hóa tính tiện ích của người dùng. Trong đó:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển toàn bộ các thiết bị điện linh hoạt
            </h5>
            <p>
              Dễ dàng điều khiển các công tắc cảm ứng thông minh thông qua
              smartphone, điều khiển trực tiếp trên màn hình tivi và đặc biệt là
              có thể ra lệnh bằng giọng nói tiếng Việt để bật tắt các thiết bị
              thông qua FPT Play Box.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tính năng lập lịch, hẹn giờ tiện ích
            </h5>
            <p>
              Chức năng hẹn giờ linh hoạt với công tắc cảm ứng thông minh Athena
              cũng được xem là điểm mạnh hàng đầu của sản phẩm. Lúc này, người
              dùng có thể đặt lịch trình sử dụng các thiết bị điện tương ứng với
              lịch trình sinh hoạt hằng ngày của mình.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cho phép tạo ngữ cảnh tự động thông minh
            </h5>
            <p>
              Ngoài điều khiển theo tác vụ yêu cầu, người dùng còn có thể tự tạo
              các ngữ cảnh tự động khi kết hợp cùng cảm biến,, tương ứng với nhu
              cầu sử dụng của bản thân và gia đình. Chẳng hạn như: đèn hành lang
              tự bật khi di chuyển, tự tắt hệ thống đèn khi ra khỏi nhà,....
            </p>
            <p>
              Công tắc cảm ứng được xem là giải pháp thông minh, vừa giúp tối ưu
              hóa sự tiện ích, vừa hạn chế được tình trạng quên tắt hệ thống
              điện khi ra khỏi nhà. Qua đó, tiết kiệm chi phí điện năng tốt hơn
              cho người dùng.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1693306782-5da2db7a49919acfc380.jpg"
              width={500}
              height={300}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của công tắc cảm ứng Athena
            </h5>
            <p>
              Không chỉ đáp ứng được các công năng của một công tắc cảm ứng
              thông minh, điều khiển các thiết bị linh hoạt, công tắc cảm ứng
              Athena còn mang đến sự sang trọng, tạo điểm nhấn riêng cho khu vực
              lắp đặt bằng chính sự thiết kế tinh tế của mình.
            </p>
            <p>
              Về cơ bản, công tắc cảm ứng thông minh Athena có thể phù hợp cho
              mọi kết cấu không gian khác nhau. Từ phong cách hiện đại đến phong
              cách cổ điển,... Tùy theo từng vị trí tương ứng, người dùng có thể
              cân đối, lắp đặt sao cho thuận tiện và tương xứng nhất.{" "}
            </p>
            <p>
              Hội tụ nhiều ưu điểm trong cùng 1 thiết bị thông minh, công tắc
              cảm ứng có thể xem là lựa chọn đáng cân nhắc cho nhiều đối tượng
              người dùng. Bạn đang có sự quan tâm đặc biệt đến mẫu công tắc cảm
              ứng này? Hãy liên hệ với chúng tôi ngay quan Hotiline 19006600 hôm
              nay để được hỗ trợ, tư vấn chuyên nghiệp nhất. Từ đó, đưa ra quyết
              định chọn mua, lắp đặt phù hợp, giúp tối đa hóa không gian sống
              cho chính mình nhé.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Xem bài viết: Hướng dẫn sử dụng công tắc cảm ứng FPT Smart Home
            </h5>
            <iframe
              className="w-full h-[800px] max-lg:h-[400px] max-md:h-[200px] "
              src="https://www.youtube.com/embed/0UYAWKYjGis?si=KpTR-B0QKKVySe9a"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
