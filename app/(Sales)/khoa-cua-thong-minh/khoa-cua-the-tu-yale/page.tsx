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
    type: "YDM3109A",
    color: "Bạc",
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
      item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };
  return (
    <>
      <Helmet>
        <title>Khoá Cửa Thẻ Từ Yale</title>
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
            <div className="basis-1/2 bg-white w-full h-min rounded-2xl py-4">
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
                  Khoá Cửa Thẻ Từ Yale
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
                <div className="flex items-center justify-start  w-full">
                  <h4 className=" text-[18px] text-left font-semibold text-gray-800 basis-1/3 max-md:text-[12px]">
                    Chọn màu sắc
                  </h4>
                  <div className="flex items-center basis-1/3">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="color"
                      value="Bạc"
                      checked={selectedOptions.color === "Bạc"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Bạc
                    </label>
                  </div>
                  <div className="flex items-center basis-1/3">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="color"
                      value="Vàng"
                      checked={selectedOptions.color === "Vàng"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      Vàng
                    </label>
                  </div>
                </div>
                <div className="flex items-start justify-start w-full">
                  <h4 className=" text-[18px] text-left font-semibold text-gray-800 basis-1/3 max-md:text-[12px]">
                    Phân loại
                  </h4>
                  <div className="flex items-center basis-1/3">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="type"
                      value="YDM3109A"
                      checked={selectedOptions.type === "YDM3109A"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      YDM3109A
                    </label>
                  </div>
                  <div className="flex items-center  basis-1/3">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px]  "
                      type="radio"
                      name="type"
                      value="YDM3115V"
                      checked={selectedOptions.type === "YDM3115V"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      YDM3115V
                    </label>
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
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Khoá Cửa Thẻ Từ Yale
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2 w-full"
              src="/assets/images/product/thumnail/1668569100-page-chi-tiet-khoa2.jpg"
              width={500}
              height={500}
              alt=""
            />
            <div className="basis-1/2 w-full ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Nguồn điện hoạt động</p>
                <p>4 viên pin AA 1.5V</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Thẻ từ</p>
                <p>Lên tới 100</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Chìa cơ</p>
                <p>2 chìa khoá kèm theo</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Mật khẩu</p>
                <p>4 - 10 ký tự/ số lượng mật khẩu lên đến 100</p>
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
                <p>68.6 x 306.7 x 27mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước mặt trong</p>
                <p>72.8 x 306.6 x 37mm</p>
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
              Khóa cửa thẻ từ là loại khóa có ổ khóa với lõi bằng kim loại. Khóa
              sẽ được mở bằng cách dùng thẻ từ đã được trang bị chip nhiễm từ.
              Hiện nay FPT Smart Home đang là đơn vị phân phối khóa cửa thẻ từ
              Yale và các loại khóa thông minh khác của hãng này. Các sản phẩm
              do FPT Smart Home cung cấp là sản phẩm chính hãng, giá tốt và có
              khả năng tích hợp với các thiết bị smart home khác để tạo nên ngôi
              nhà thông minh đa năng cho khách hàng.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              1. Khóa cửa thẻ từ Yale là gì?
            </h5>
            <p>
              Khóa cửa thẻ từ Yale là loại khóa thuộc dòng khóa điện tử cao cấp
              của tập đoàn Assa Abloy, tại Mỹ. Đây cũng là dòng sản phẩm được
              tích hợp các công nghệ hiện đại với tính năng bảo mật hàng đầu thế
              giới.
            </p>
            <p>
              Với sản phẩm này, người dùng sẽ dùng thẻ từ để mở khóa. Trên thân
              khóa cửa sẽ có cảm biến nhận diện thẻ để đọc dữ liệu thẻ đã đăng
              ký chính chủ. Mỗi thẻ sẽ có một dữ liệu riêng biệt như số chứng
              minh thư của mỗi người. Chính vì thế sản phẩm sẽ đảm bảo an toàn
              tuyệt đối cho ngôi nhà của bạn.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              2. Các tính năng mở khóa khác
            </h5>
            <p>
              Bên cạnh tính năng mở khóa bằng thẻ từ, dòng khóa này còn có các
              chế độ mở khoá khác như sau:
            </p>
            <p>
              Mật mã số: Trên thân của khóa cửa Yale sẽ có bàn phím cảm ứng để
              người dùng nhập mật mã mở cửa. Nếu nhập đúng mật mã đã đăng ký thì
              khóa cửa sẽ được mở. Hơn nữa, tính năng mã số ảo có tác dụng tránh
              bị lộ mật khẩu.
            </p>
            <p>
              Khóa cơ: Chìa khóa cơ sẽ được sử dụng trong trường hợp xảy ra các
              sự cố không mở cửa được bằng vân tay hay mật mã số. Ví dụ như khi
              ổ khóa bị hết pin hoặc có sự cố không mở được.{" "}
            </p>
            <p>
              Tính năng kết nối mở rộng: Thông qua chuẩn kết nối không dây
              ZigBee, khóa cửa thẻ từ Yale sẽ được quản lý chi tiết thông qua
              ứng dụng quản lý ở smartphone. Hoặc cho phép kết nối được với các
              thiết bị thông minh khác và hoạt động theo ngữ cảnh đã được thiết
              lập.{" "}
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              3. Chức năng và đặc tính nổi bật của khóa cửa thẻ từ Yale
            </h5>
            <p>
              Khóa cửa thẻ từ Yale có nhiều chức năng cũng như đặc tính nổi bật:
            </p>
            <ul className="ml-10 list-disc">
              <li>
                Khóa có thiết kế đơn giản, cứng cáp và sang trọng. Tay nắm cửa
                của loại khóa này có dạng gạt thông dụng và có độ bền cao.
              </li>
              <li>
                Có nhiều tính năng mở cửa cơ bản như: thẻ từ, mật mã, chìa khóa
                cơ. Không những thế nó còn kết nối với smartphone và hệ thống
                nhà thông minh.
              </li>
              <li>
                Có bàn phím cảm ứng thông minh dạng ẩn. Bàn phím sẽ hiển thị khi
                người dùng chạm tay vào màn hình.
              </li>
              <li>
                Tính năng mã số ảo thông minh: Người dùng có thể nhập bất kỳ dãy
                số nào trước hoặc sau dãy mật mã để tránh làm lộ mật khẩu ra
                ngoài.
              </li>
              <li>
                Tính năng vô hiệu hóa: Nếu như nhập sai mật khẩu liên tiếp 5 lần
                thì khóa sẽ tự động tạm ngừng hoạt động trong 3 phút.
              </li>
              <li>
                Tính năng tự động hóa: Khóa cửa thẻ từ Yale sẽ tự động chốt an
                toàn sau khi cửa đóng hoàn toàn và đúng vị trí 5 giây, nhờ vào
                cảm biến được tích hợp trên thân khoá, sẽ giúp biết chính xác
                tình trạng cửa ( đóng/ mở) và khoá ( đã khoá/ mở khoá). Các hãng
                khoá khác trên thị trường thường bị tình trạng không có lẫy cảm
                biến nên chỉ báo được tình trạng khoá cửa đóng hay mở, tuy nhiên
                vài trường hợp cửa vẫn mở mà khoá đóng chốt thì khá nguy hiểm.
              </li>
              <li>
                Tính năng bảo mật từ bên trong: Đây là một tính năng làm tăng
                mức độ an toàn và bảo mật. Khi thực hiện thiết lập các chức năng
                trong nhà thì các phương thức xác thực từ bên ngoài như mật
                khẩu, thẻ từ và dấu vân tay đều bị vô hiệu hóa.
              </li>
              <li>Thông báo trạng thái hoạt động trên khóa.</li>
              <li>Có chế độ im lặng, người dùng sẽ kích hoạt khi cần. </li>
              <li>Cảnh báo tình trạng pin yếu với báo động và đèn LED.</li>
              <li>
                Báo động bằng âm thanh khi có người xâm nhập trái phép, cố gắng
                mở cửa hay tác động mạnh vào khóa cửa. Tính năng điều khiển từ
                xa để người dùng có thể điều khiển ở khoảng cách 50m trong
                trường hợp không vật cản, tuỳ thuộc vào vật cản mà khoảng cách
                có thể sẽ ngắn hơn.
              </li>
              <li>
                Tính năng điều chỉnh âm lượng: Nếu như bạn đang có con nhỏ mà
                thường xuyên ra vào thì người dùng có thể điều chỉnh âm hay tắt
                âm khi đóng mở cửa.Tính năng điều chỉnh âm lượng: Nếu như bạn
                đang có con nhỏ mà thường xuyên ra vào thì người dùng có thể
                điều chỉnh âm hay tắt âm khi đóng mở cửa.
              </li>
            </ul>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              4. Thông số kỹ thuật của khóa cửa thẻ từ Yale
            </h5>
            <table className="border-[1px] border-black mx-auto">
              <tbody className="border-[1px] border-black">
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>STT</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>Mã SP</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>Màu</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>Chức năng mở khóa</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>Kích thước</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p style={{ textAlign: "center" }}>
                      <strong>Giá bán</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p>1</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY017</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Bạc</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={3}>
                    <p>3 chức năng mở cửa: Thẻ từ, Mã số, Chìa cơ</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>Kích thước mặt ngoài: 68.6 x 306.7 x 27 mm</p>
                    <p>Kích thước mặt trong: 72.8 x 306.6 x 37mm</p>
                  </td>
                  <td className="border-[1px] border-black" rowSpan={2}>
                    <p>11.090.000đ</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p>2</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY018</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Vàng</p>
                  </td>
                </tr>
                <tr className="border-[1px] border-black">
                  <td className="border-[1px] border-black">
                    <p>3</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>DHZY019</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Bạc</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>Kích thước mặt ngoài: 72x 344 x 30 mm</p>
                    <p>Kích thước mặt trong: 72 x 344 x 36 mm</p>
                  </td>
                  <td className="border-[1px] border-black">
                    <p>8.000.000đ</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
