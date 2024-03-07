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
    type: "YDM7116A",
    color: "Đen",
    type_key: "Tay cầm",
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
      item.type_key === selectedOptions.type_key &&
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <>
      <Helmet>
        <title>Khoá Cửa Vân Tay Yale</title>
        <meta
          name="description"
          content="Khoá Cửa Thông Minh tại FPT Smart Home"
        />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container  max-lg:px-20 max-md:px-6">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[25px]">
            Khoá Cửa Thông Minh tại FPT Smart Home
          </h2>
          <div className="flex items-start justify-center gap-10 pt-[50px] max-lg:flex-col">
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl">
              {option ? (
                <Image
                  className="mx-auto max-md:w-[200px]"
                  src={option?.image}
                  width={585}
                  height={300}
                  alt=""
                />
              ) : (
                <div className="bg-white w-[585px] h-[585px] max-md:w-full"></div>
              )}
            </div>
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl px-6 pb-[30px]">
              <div className="flex flex-col items-center py-[50px] ">
                <h1 className="text-[27px] font-semibold max-md:text-[20px]">
                  Khoá Cửa Vân Tay Yale
                </h1>
                <div className="flex items-center flex-col text-slate-500 border-b-[1px] w-full border-black py-4 max-md:text-[12px]">
                  <h4 className=" flex items-center">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-center border-b-[1px] border-black pb-10">
                <div className="flex items-start justify-around">
                  <h3 className="text-left font-semibold text-[18px] w-[150px] max-md:text-[12px]">
                    Chọn màu sắc
                  </h3>
                  <div className="grid grid-cols-3 grid-rows-2 items-center">
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="color"
                        value="Đen"
                        checked={selectedOptions.color === "Đen"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px] ">
                        Đen
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="color"
                        value="Vàng"
                        checked={selectedOptions.color === "Vàng"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        Vàng
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="color"
                        value="Đen mờ"
                        checked={selectedOptions.color === "Đen mờ"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        Đen mờ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-around">
                  <h3 className="text-left font-semibold text-[18px]  w-[150px] max-md:text-[12px]">
                    Kiểu khoá
                  </h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center">
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type_key"
                        value="Tay cầm"
                        checked={selectedOptions.type_key === "Tay cầm"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        Tay cầm
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type_key"
                        value="Push Pull"
                        checked={selectedOptions.type_key === "Push Pull"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        Push-Pull
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type_key"
                        value="Push-Pull"
                        checked={selectedOptions.type_key === "Push-Pull"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        Push-Pull
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <h3 className="text-left font-semibold text-[18px]  w-[150px] max-md:text-[12px]">
                    Phân loại
                  </h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-2 items-center">
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type"
                        value="YDM7116A"
                        checked={selectedOptions.type === "YDM7116A"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        YDM7116A
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type"
                        value="YMI70A"
                        checked={selectedOptions.type === "YMI70A"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        YMI70A
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type"
                        value="YDM4109A"
                        checked={selectedOptions.type === "YDM4109A"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        YDM4109A
                      </label>
                    </div>
                    <div className=" flex items-center w-[150px] max-md:w-[100px]">
                      <input
                        className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                        type="radio"
                        name="type"
                        value="Luna Pro +"
                        checked={selectedOptions.type === "Luna Pro +"}
                        onChange={handleChange}
                      />
                      <label className="text-[18px] font-medium  max-md:text-[12px]">
                        Luna Pro +
                      </label>
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
          <h4 className="text-h5 text-gray-400 font-semibold  max-md:text-[15px]">
            Khoá Cửa Vân Tay Yale
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668568411-page-chi-tiet-khoa-van-tay.jpg"
              width={500}
              height={300}
              alt=""
            />
            <div className="basis-1/2 w-full">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn điện hoạt động</p>
                <p>4 viên pin AA 1.5V</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Vân tay</p>
                <p>Lên đến 100 vân tay</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chìa cơ</p>
                <p>2 chìa khoá kèm theo</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Mật khẩu</p>
                <p>Số lượng mật khẩu lên đến 100</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kết nối</p>
                <p>Zigbee</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ dày cửa</p>
                <p>40 - 80 mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Độ rộng đố cửa</p>
                <p>{">"}= 60mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước mặt ngoài</p>
                <p>68.6 x 320.7 x 40.1mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước mặt trong</p>
                <p>72.8 x 306.6 x 37mm</p>
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
              Tại Việt Nam, FPT Smart Home đang là đơn vị phân phối khóa cửa vân
              tay Yale chính hãng với giá tốt. Ngoài sở hữu những tính năng khóa
              cửa thông minh, sản phẩm còn có thể tích hợp cùng nhiều thiết bị
              smart home khác để tạo thành hệ sinh thái nhà thông minh đa năng
              cho khách hàng. Cùng chúng tôi tìm hiểu chi tiết ngay.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              1. Giới thiệu xuất xứ khóa vân tay Yale
            </h5>
            <p>
              Khóa cửa vân tay Yale là một sản phẩm mang thương hiệu Yale, được
              sản xuất bởi tập đoàn ASSA ABLOY - là một thương hiệu nổi tiếng ở
              Mỹ, có uy tín trên toàn thế giới. Khóa cửa vân tay Yale được đánh
              giá là dòng khóa có thiết kế sang trọng, tinh tế với các tính năng
              thông minh và tiện lợi.
            </p>
            <p>
              Ngoài ra, đây là loại khóa có điều khiển từ xa để người dùng thuận
              tiện hơn trong khi sử dụng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2. Các tính năng nổi bật của khóa cửa vân tay Yale
            </h5>

            <p>
              Khóa cửa vân tay Yale với những giải pháp keyless thông minh nhanh
              nhạy và có độ an toàn cao còn sở hữu những tính năng vô cùng nổi
              bật như:
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thiết kế sang trọng, chất lượng cao cấp
            </h5>

            <p>
              Khóa cửa vân tay Yale có thiết kế đa dạng kiểu dáng phù hợp với
              nhiều phong cách nội thất khác nhau, cho dù là phong cách hiện đại
              hay phong cách cổ điển thì bạn đều có thể lựa chọn được loại khóa
              thích hợp. Ngoài ra, thiết kế của các sản phẩm khóa vân tay Yale
              còn có thể ứng dụng cho cửa chính của nhà, có thể lắp được trên
              các chất liệu gỗ, cửa sắt,.. với yêu cầu độ dày cửa 35 – 80 mm.
            </p>
            <p>
              Đặc biệt là các sản phẩm đều được làm từ hợp kim nhôm đúc nguyên
              khối. Đây là chất liệu vừa bền đẹp, chắc chắn, lại cho khả năng
              chống cháy cao ( các sản phẩm khoá Yale đã được thử nghiệm chống
              cháy quốc tế cũng như trong nước với thời gian lên tới 90 - 120
              phút) . Bề mặt khóa được được hàn bằng công nghệ tự động hóa và
              được xử lý bằng thiết bị phun tự động kỹ thuật cao. Thân khóa được
              thiết kế theo biên dạng thân chuẩn châu Âu.{" "}
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Khả năng bảo mật tuyệt đối
            </h5>
            <p>
              Đây là một ưu điểm vượt trội của khóa cửa vân tay Yale. Khóa được
              tích hợp công nghệ nhận diện vân tay Liveness Scan 3 trong 1: Công
              nghệ nhận dạng vân tay Sense Pixel + Cảm ứng vân tay sống Live
              Finger Detection + Cảm ứng nhịp cơ thế sống để hạn chế tối đa giả
              mạo. Do đó, các đối tượng xấu không thể làm giả vân tay để đột
              nhập trái phép.
            </p>
            <p>
              Đối với tính năng mở khóa bằng mật mã, người dùng có thể tùy ý
              đánh một dãy số bất kỳ trước hoặc sau mật khẩu đúng. Tránh sự sao
              chép mật mã, đảm bảo độ an toàn tuyệt đối.{" "}
            </p>
            <p>
              Ngoài ra, khóa vân tay còn có tính năng cảnh báo nếu có người đăng
              nhập trái phép bằng tín hiệu hoặc giọng nói. Tự động khóa sau khi
              chắc chắn cửa đã đóng hoàn toàn. Do đó, loại khóa vân tay này sẽ
              đảm bảo an toàn tối đa cho người dùng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Khả năng quản lý tối ưu
            </h5>
            <p>
              Hệ thống quản lý của loại khóa vân tay Yale có khả năng phân
              quyền. Có nghĩa là chủ nhà có thể phân quyền theo các khả năng
              trao quyền đầy đủ, hạn chế theo thời gian cho người khác. Do đó,
              khóa vân tay được nhiều người tin dùng bởi thiết bị có đầy đủ
              những tính năng vượt trội tuyệt đối so với dòng khóa thông thường.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ngoài ra khóa còn có các tính năng khác như:
            </h5>
            <ul className="ml-10 list-disc">
              <li>
                Thông báo trạng thái hoạt động: khi thực hiện thao tác bất kỳ,
                bàn phím sẽ báo cho bạn thông qua các ký hiệu số
              </li>
              <li>
                Hướng dẫn bằng giọng nói: hỗ trợ bạn thực hiện việc cài đặt khóa
                dễ dàng hơn.
              </li>
              <li>
                Chức năng khóa trái trong - chống người ngoài làm phiền: gạt nút
                này ở thân khóa bên trong. Khi đó dù bên người bên ngoài có dùng
                vân tay, thẻ từ hay nhập mã pin đã đăng ký cũng sẽ không mở khóa
                được, trừ khi có chìa khóa cơ.{" "}
              </li>
              <li>
                Báo động khi mở cửa từ bên trong: Trường hợp khi mọi người đi ra
                khỏi nhà hết và lo sợ trộm đột nhập bằng đường cửa sổ hoặc cửa
                hậu vào phòng và mở cửa ra từ bên trong thì khóa sẽ hú lên báo
                động.
              </li>
              <li>
                Chức năng vô hiệu hóa thẻ bị mất (đối với dòng sản phẩm có tính
                năng mở khóa bằng thẻ từ){" "}
              </li>
              <li>
                Kết nối mở rộng Zigbee với app quản lý Smart Home (tính năng tùy
                chọn): giúp truy cập khóa điện tử từ xa và theo dõi được lịch sử
                truy cập khóa.
              </li>
            </ul>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              3. Các công nghệ hiện đại được tích hợp trong khóa vân tay Yale
            </h5>
            <p>
              Khóa vân tay Yale dẫn đầu về việc ứng dụng công nghệ hiện đại mang
              lại sản phẩm có chất lượng cao. Trong khóa vân tay của Yale có 3
              loại công nghệ hiện đại được ứng dụng:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công nghệ nhận diện vân tay Liveness Scan 3 trong 1
            </h5>
            <p>
              Đây là công nghệ có khả năng ghi hình ảnh vân tay theo cơ chế phân
              mảnh cắt lớp, hay còn được gọi là Scan. Sau đó dựa theo độ dày của
              tầng biểu bì và tia hồng ngoại, đầu đọc sẽ đảm bảo nhận diện vân
              tay phải là thực thể sống chứ không đơn thuần là hình ảnh của vân
              tay được in lại.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công nghệ mã số ảo
            </h5>
            <p>
              Công nghệ mã số ảo cho phép người dùng có thể nhập bất kỳ dãy số
              đằng sau hay đằng trước mã số đúng. Đây là ứng dụng thông minh
              giúp người dùng tránh trường hợp bị lộ mã số. Đem lại tính bảo mật
              cao nhất cho người dùng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Công nghệ chìa khóa CNC
            </h5>
            <p>
              Với công nghệ này sẽ giúp làm tăng độ chính xác của chìa khóa. Hạn
              chế được khả năng sao chép và đảm bảo tính bảo mật cho khóa.{" "}
            </p>
            <table className="border-[1px] border-black">
              <tbody>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>STT</strong>
                    </p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>Mã SP</strong>
                    </p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>Màu</strong>
                    </p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>Kiểu khóa</strong>
                    </p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>Chức năng mở khóa</strong>
                    </p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>Kích thước</strong>
                    </p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>
                      <strong>Backset</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>1</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY013</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Đen</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Tay cầm</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>4 chức năng mở cửa: Vân tay, Thẻ từ, Mã số, Chìa cơ</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Kích thước mặt ngoài: 68 x 340 x 40.18 mm</p>
                    <p>Kích thước mặt trong: 72 x 344 x 36 mm</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>60mm</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>2</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY014</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Vàng</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>70mm</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>3</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DPZY011</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Đen</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Push - Pull</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>4 chức năng mở cửa: Vân tay, Thẻ từ; Mã số, Chìa cơ</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Kích thước mặt ngoài: 77 x 397.4 x 71.4 mm</p>
                    <p>Kích thước mặt trong: 77 x 396.7 x 78 m</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>60mm</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>4</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DPZY012</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Vàng</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>60mm</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>5</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY015</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Đen</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Tay cầm</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>3 chức năng mở cửa: Vân tay, Mã số, Chìa cơ</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Kích thước mặt ngoài: 68.6 x 320.7 x 40.1 mm</p>
                    <p>Kích thước mặt trong: 72.8 x 306.6 x 37 mm</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>60mm</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>6</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY016</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Vàng</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>60mm</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>Lưu ý: Giá trên chưa bao gồm VAT</p>
          </div>
        </div>
      </div>
    </>
  );
}
