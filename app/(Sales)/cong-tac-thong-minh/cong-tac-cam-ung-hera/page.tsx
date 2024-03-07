"use client";
import { fetchProduct } from "@/actions/fetchProduct";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Item } from "@radix-ui/react-accordion";
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
    color: "Black Brown",
    button: "2 nút",
    power: "Thường",
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
      item.name === "Công Tắc Cảm Ứng Hera" &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Công Tắc Cảm Ứng Hera</title>
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
                  className="mx-auto max-md:w-[100px]"
                  src={option?.image}
                  width={300}
                  height={300}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px] max-md:w-full"></div>
              )}
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px] max-md:px-0">
              <div className="flex flex-col items-center py-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[23px]">
                  {option ? option?.name : "Công tắc cảm ứng Hera"}
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex items-start justify-start w-full">
                <div className="flex flex-col items-start justify-around gap-6">
                  <div className="flex  items-center justify-center">
                    <h4 className="  text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] max-md:text-[15px]">
                      Hình dáng
                    </h4>
                    <div className="grid grid-cols-3">
                      <div className=" flex items-center min-w-[170px]">
                        <input
                          className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
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
                      <div className=" flex items-center min-w-[170px]">
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
                  </div>
                  <div className="flex  items-start justify-center ">
                    <h4 className=" text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] max-md:text-[15px]">
                      Màu sắc
                    </h4>
                    <div className=" grid grid-cols-3 grid-rows-2 gap-1">
                      <div className=" flex items-center min-w-[170px]">
                        <input
                          className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                          type="radio"
                          name="color"
                          value="Black Brown"
                          checked={selectedOptions.color === "Black Brown"}
                          onChange={handleChange}
                        />
                        <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                          Black <br /> Brown
                        </label>
                      </div>
                      <div className=" flex items-center min-w-[170px]">
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
                      <div className=" flex items-center min-w-[170px]">
                        <input
                          className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                          type="radio"
                          name="color"
                          value="Rose Gold"
                          checked={selectedOptions.color === "Rose Gold"}
                          onChange={handleChange}
                        />
                        <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                          Rose <br /> Gold
                        </label>
                      </div>
                      <div className=" flex items-center min-w-[170px]">
                        <input
                          className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                          type="radio"
                          name="color"
                          value="Gray"
                          checked={selectedOptions.color === "Gray"}
                          onChange={handleChange}
                        />
                        <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                          Gray
                        </label>
                      </div>
                      <div className=" flex items-center min-w-[170px]">
                        <input
                          className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                          type="radio"
                          name="color"
                          value="Champagne"
                          checked={selectedOptions.color === "Champagne"}
                          onChange={handleChange}
                        />
                        <label className="text-[18px] font-medium mr-6 max-md:text-[12px] ">
                          Champagne
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex  items-start justify-start  ">
                    <h4 className=" text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] max-md:text-[15px]">
                      Số nút
                    </h4>
                    <div className="grid grid-cols-3">
                      <div className=" flex items-center min-w-[130px]">
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
                      <div className=" flex items-center min-w-[170px]">
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
                      <div className=" flex items-center min-w-[170px]">
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
                  </div>
                  <div className="flex  items-start justify-start">
                    <h4 className=" text-[18px] font-semibold text-gray-800 mr-10 min-w-[100px] max-md:text-[15px]">
                      Công suất
                    </h4>
                    <div className="grid grid-cols-3">
                      <div className=" flex items-center min-w-[170px]">
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
                      <div className=" flex items-center min-w-[170px]">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-b-[1px] border-black pb-[20px]">
                <p className="text-[50px] font-bold max-md:text-[30px]">
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
                <div className="flex items-center justify-center gap-2 w-full max-md:px-6">
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
            Công Tắc Cảm Ứng Hera
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569293-cong-tac-hera.png"
              width={500}
              height={300}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn cấp</p>
                <p>220V/50Hz</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất danh định</p>
                <p>Tối đa 150W/ kênh</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Ngõ ra</p>
                <p>{option?.button}</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số nút điều khiển</p>
                <p>{option?.button}</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Số nút ngữ cảnh</p>
                <p>{option?.button}</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (DxRxC)</p>
                <p>72,8 x 126,1 x 28,3 mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nhiệt độ hoạt động</p>
                <p>10 ÷ 40˚C</p>
              </div>

              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">TCVN 6480 -1:2008; ISO 9001:2015</p>
              </div>
              <div className="flex items-center justify-between w-full  font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chuẩn kết nối</p>
                <p>Zigbee</p>
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
              Công tắc cảm ứng Hera của FPT Smart Home dùng điều khiển hệ thống
              ánh sáng hoặc các thiết bị điện. Mặt kính cường lực phẳng, viền
              nhôm với nhiều màu sắc đa dạng phù hợp với mọi không gian trong
              căn hộ.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Giới thiệu về công tắc cảm ứng Hera
            </h5>
            <p>
              Tiếp nối mẫu công tắc cảm ứng Athena ra mắt từ tháng 05 nhận được
              phản hồi tích cực từ người dùng và thị trường, FPT Smart Home tiếp
              tục cho ra mắt dòng công tắc cảm ứng Hera với 05 màu sắc thời
              thượng, phù hợp với mọi phong cách kiến trúc của ngôi nhà.
            </p>
            <p>
              Khi kết hợp cùng trung tâm điều khiển FPT Play Box S, công tắc cảm
              ứng Hera sẽ cho phép người dùng điều khiển các thiết bị đèn, máy
              nước nóng…từ xa bằng giọng nói tiếng Việt hoặc thông qua
              smartphone, hay thao tác 1 chạm mượt mà tại các nút cảm ứng.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điểm nổi bật của Công tắc Cảm ứng Hera
            </h5>
            <p>
              Bộ công tắc cảm ứng Hera 2022 - Đa sắc màu gồm 05 màu sắc thời
              thượng: Champagne, Rose Gold, Gray, White, Black Brown, phù hợp
              với nhiều phong cách kiến trúc khác nhau, giúp gia chủ thể hiện
              được dấu ấn riêng.
            </p>
            <p>
              Sản phẩm gồm 2 hình dáng vuông và chữ nhật, có 3 loại công tắc 2
              nút, 3 nút, 4 nút, đáp ứng đa dạng nhu cầu của người dùng.
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1698655315-z4831320376271_4f0395066fa3d7828250a9d5caee61b7.jpg"
              width={500}
              height={300}
              alt=""
            />
            <p>
              Cũng như người anh em tiền nhiệm, bề mặt công tắc cảm ứng Hera
              cũng được làm bằng kính cường lực cao cấp, sang trọng, giúp hạn
              chế bám vân tay, hạn chế trầy xước. Viền kim loại phối bo cạnh,
              sắc nét, tạo nên vẻ đẹp tinh tế cho từng công tắc.
            </p>
            <p>
              Các cảm ứng nút vuông của công tắc Hera siêu mượt mà, chỉ cần thao
              tác một lần chạm đã dễ dàng điều khiển trực tiếp. Sử dụng kết nối
              Zigbee ổn định, có độ bảo mật cao.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Chức năng của công tắc cảm ứng thông minh
            </h5>
            <p>
              Có thể nói, tính năng của công tắc thông minh cho phép tối đa hóa
              tính tiện ích của người dùng. Trong đó:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Điều khiển toàn bộ các thiết bị điện linh hoạt
            </h5>
            <p>
              Dễ dàng điều khiển các công tắc thông minh thông qua smartphone,
              điều khiển trực tiếp trên màn hình tivi và đặc biệt là có thể ra
              lệnh bằng giọng nói tiếng Việt để bật tắt các thiết bị thông qua
              FPT Play Box S.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tính năng lập lịch, hẹn giờ tiện ích
            </h5>
            <p>
              Chức năng hẹn giờ linh hoạt với công tắc cảm ứng thông minh Hera
              cũng được xem là điểm mạnh hàng đầu của sản phẩm. Lúc này, người
              dùng có thể đặt lịch trình sử dụng các thiết bị điện tương ứng với
              lịch trình sinh hoạt hằng ngày của mình.{" "}
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
              Đây được xem là giải pháp thông minh, vừa giúp tối ưu hóa sự tiện
              ích, vừa hạn chế được tình trạng quên tắt hệ thống điện khi ra
              khỏi nhà. Qua đó, tiết kiệm chi phí điện năng tốt hơn cho người
              dùng
            </p>
            <Image
              className="mx-auto"
              src="/assets/images/product/thumnail/1698655315-z4831320401395_a90e4e7440fd0d5eb083510cfd1462bc.jpg"
              width={500}
              height={300}
              alt=""
            />
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của công tắc cảm ứng
            </h5>
            <p>
              Không chỉ đáp ứng được các công năng của một công tắc cảm ứng
              thông minh, điều khiển các thiết bị linh hoạt, công tắc cảm ứng
              Hera còn mang đến sự sang trọng, tạo điểm nhấn riêng cho khu vực
              lắp đặt bằng chính sự thiết kế tinh tế của mình.
            </p>
            <p>
              Về cơ bản, công tắc cảm ứng thông minh Hera với các màu sắc thời
              thượng, có thể phù hợp cho mọi kết cấu không gian khác nhau. Từ
              phong cách hiện đại đến phong cách cổ điển,... Tùy theo từng vị
              trí tương ứng, người dùng có thể cân đối, lắp đặt sao cho thuận
              tiện và tương xứng nhất.
            </p>
            <p>
              Hội tụ nhiều ưu điểm trong cùng 1 thiết bị thông minh, công tắc
              cảm ứng có thể xem là lựa chọn đáng cân nhắc cho nhiều đối tượng
              người dùng. Bạn đang có sự quan tâm đặc biệt đến mẫu công tắc cảm
              ứng này? Hãy liên hệ với chúng tôi ngay hôm nay để được hỗ trợ, tư
              vấn chuyên nghiệp nhất. Từ đó, đưa ra quyết định chọn mua, lắp đặt
              phù hợp, giúp tối đa hóa không gian sống cho chính mình nhé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
