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
    power: "20w",
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
    (item) => item.power === selectedOptions.power && item.category === category
  );

  const handleAddToCart = (product: ProductData) => {
    addToCart(product);
  };

  return (
    <div className="">
      <Helmet>
        <title>Đèn LED Tracklight Thông Minh</title>
        <meta name="description" content="Đèn thông minh tại FPT Smart Home" />
      </Helmet>
      <div className="text-center flex flex-col pb-[100px] pt-[200px] max-lg:pt-[120px] max-md:pt-[100px] bg-slate-100 max-md:py-[50px]">
        <div className="container max-lg:px-20 max-md:px-6">
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
                  <h4 className=" flex items-center ">
                    Thương hiệu:
                    <p className="font-semibold">FPT Smart Home</p>
                  </h4>
                  <h4>Mã Sản phẩm: {option?.id_product} </h4>
                </div>
              </div>
              <div className="flex  flex-col items-start justify-start w-full gap-6 border-b-[1px] border-black pb-[50px]">
                <div className="flex items-center justify-center gap-4 w-full">
                  <h4 className=" basis-1/3 text-[18px] font-semibold text-gray-800 mr-10 max-md:text-[15px]">
                    Loại công xuất
                  </h4>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                      type="radio"
                      name="power"
                      value="20w"
                      checked={selectedOptions.power === "20w"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      20w
                    </label>
                  </div>
                  <div className="basis-1/3 flex items-center">
                    <input
                      className="min-w-[35px] min-h-[35px]  mr-2 max-md:min-w-[20px] max-md:min-h-[20px] "
                      type="radio"
                      name="power"
                      value="25w"
                      checked={selectedOptions.power === "25w"}
                      onChange={handleChange}
                    />
                    <label className="text-[18px] font-medium mr-6 max-md:text-[12px]">
                      25w
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
              <div className="py-4 ">
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
        <div className="container border-b-[1px] pb-[100px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[15px]">
            Đèn Led Tracklight Thông Minh
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold mb-10 max-md:text-[25px]">
            Thông số kỹ thuật
          </h2>
          <div className="flex items-center justify-center gap-6 max-lg:flex-col">
            <Image
              className="rounded-2xl basis-1/2"
              src="/assets/images/product/thumnail/1668571604-tracklight.png"
              width={700}
              height={500}
              alt=""
            />
            <div className="basis-1/2 ">
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Công suất</p>
                <p>25W</p>
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
                <p>1800lm</p>
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
                <p>Chỉ số hoàn màu</p>
                <p>80</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Dải nhiệt độ hoạt động</p>
                <p>-10 ÷ 40 ˚C</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Kích thước (DxC)</p>
                <p>146 x 230 mm</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p>Khối lượng</p>
                <p>440g</p>
              </div>
              <div className="flex items-center justify-between w-full border-b-[1px] border-black text-[18px] font-regular px-4 py-2 max-md:text-[12px]">
                <p className="text-left">Tiêu chuẩn áp dụng</p>
                <p className="text-right">
                  TCVN 10885-2-1/IEC 62722-2-1; TCVN 7722-2-1/IEC 60598-2-1
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
              Đèn LED Tracklight – Thiết bị thông minh cho 1 không gian sống
              hiện đại
            </h5>
            <p>
              Đèn LED Tracklight thông minh là 1 trong những thiết bị chiếu sáng
              đang khá được ưa chuộng cho không gian ngôi nhà thông minh hiện
              nay. Sở hữu thiết kế sang trọng, tính năng chiếu sáng thông minh,
              có thể điều chỉnh linh hoạt bằng giọng nói, sản phẩm đáp ứng 1
              cách hoàn hảo nhu cầu sử dụng của nhiều đối tượng khách hàng. Hãy
              cùng tìm hiểu chi tiết về tính năng cũng như những sức hút nổi bật
              từ sản phẩm đèn thông minh này với bài viết sau nhé.
            </p>

            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Các điểm nổi bật của đèn LED Tracklight thông minh
            </h5>
            <p>
              Là thiết bị chiếu sáng hiện đại, tích hợp công nghệ thông minh,
              sản phẩm được đánh giá cao trong nhiều yếu tố. Điển hình như:
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Thiết kế đèn với độ tinh tế cao
            </h5>
            <p>
              Đèn được thiết kế hiện đại, kích thước khá nhỏ gọn. Nhờ đó, sản
              phẩm mang đến hiệu quả thẩm mỹ cao cho không gian lắp đặt. Ngoài
              ra, cũng chính nhờ kết cấu nhỏ gọn, việc di chuyển đèn sang các vị
              trí khác khi có nhu cầu cũng cho độ thuận tiện hơn hẳn.
            </p>
            <p>
              Mẫu đèn LED Tracklight thông minh này hiện đang được phân phối
              trên thị trường với 2 màu trắng và đen. Người dùng có thể căn cứ
              vào sở thích cũng như phong cách, đặc điểm khu vực lắp đặt, bố trí
              để lựa chọn mẫu mã tương ứng, giúp đảm bảo sự đồng bộ nhất cho
              không gian.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Cung cấp nguồn ánh sáng tiêu chuẩn, chất lượng
            </h5>
            <p>
              Đèn LED Tracklight với chỉ số hoàn màu đạt mức 80, nhiệt độ màu
              dao động trong khoảng 2700 ÷ 6500K. Theo đó, đèn cho chất lượng
              ánh sáng tốt, có khả năng điều chỉnh linh hoạt, đảm bảo tạo nên
              cảm giác thoải mái cho không gian ứng dụng.
            </p>
            <p>
              Các chip led cao cấp được tích hợp, vừa đảm bảo mang đến tính tiết
              kiệm điện năng cao, vừa cho độ ổn định tuyệt đối. Tránh tối đa các
              tình trạng đèn bị nhấp nháy khi sử dụng, gây đau mắt, mỏi mắt, ảnh
              hưởng đến thị lực của người dùng theo thời gian.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tính năng linh hoạt, tiện nghi, đáp ứng hoàn hảo cho 1 cuộc sống
              hiện đại
            </h5>
            <p>
              Với sản phẩm này, về cấu tạo, đèn không chứa các hóa chất gây hại
              cho sức khỏe người dùng. Ngay cả khi chiếu sáng liên tục hàng giờ
              liền, đèn cũng không phát ra các tia bức xạ nguy hiểm,...
            </p>
            <p>
              Có thể nói, sản phẩm là lựa chọn thông minh, mang đến sự thân
              thiện với môi trường và với mọi đối tượng người dùng.
            </p>
            <p>
              Chip Led được sử dụng trong thiết bị chiếu sáng này cũng cho khả
              năng tản nhiệt cực ưu việt. Qua đó, không gian chiếu sáng tạo cảm
              giác thư giãn, thoải mái, không có hiện tượng tạo nhiệt không mong
              muốn.
            </p>
            <p>
              Đặc biệt và cũng là ưu thế hàng đầu của sản phẩm thông minh này đó
              là người dùng hoàn toàn có thể bật/ tắt, hẹn giờ, điều khiển đèn
              chỉ bằng giọng nói.
            </p>
            <p>
              Sản phẩm có khả năng nhận diện ngôn ngữ tiếng Việt cực chuẩn, giúp
              tối ưu hóa khẩu lệnh, cho khả năng vận hành tức thời.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Tiết kiệm chi phí đáng kể cho người dùng
            </h5>
            <p>
              Đầu tiên, đèn cho khả năng vận hành linh hoạt, điều chỉnh được
              nhiều mức độ ánh sáng khác nhau. Tuy nhiên, với hiệu suất sáng ở
              mức 70 Im/W, đèn vẫn đảm bảo cho hiệu quả tiết kiệm điện năng đáng
              kể.
            </p>
            <p>
              Không chỉ so với các bóng đèn dây tóc truyền thống mà so với cả
              các mẫu đèn compact thông thường, khả năng tiết kiệm điện của đèn
              LED Tracklight thông minh này đạt đến 80%.
            </p>
            <p>
              Ngoài ra, tuổi thọ đèn trung bình lên đến 25.000h hoạt động. Con
              số này tương đương với khoảng 10 năm sử dụng liên tục – với mỗi
              ngày sử dụng trung bình từ 6 – 8 giờ.
            </p>
            <p>
              Như vậy, người dùng có thể tối ưu hóa chi phí thay thế không cần
              thiết. Qua đó, tiết kiệm 1 cách hiệu quả các chi phí trong sinh
              hoạt của gia đình mình.
            </p>
            <h5 className="font-semibold text-[22px] max-md:text-[15px]">
              Ứng dụng của đèn LED Tracklight thông minh FPT Smart Home
            </h5>
            <p>
              Với kết cấu theo kiểu đèn Led rọi pha, mẫu đèn Led Tracklight
              thường ứng dụng cho các không gian cần sự chiếu sang tập trung.
              Đặc biệt, thiết kế hiện đại, sang trọng của sản phẩm cũng đáp ứng
              nhu cầu trang trí, làm đẹp không gian – nơi mà đèn được bố trí,
              lắp đặt.
            </p>
            <p>
              Tại các gia đình, có thể bố trí đèn tại không gian căn bếp, quầy
              bar, góc trưng bày tranh ảnh, các khu vực hành lang, cầu thang,...
            </p>
            <p>
              Ngoài ra, có thể lắp đặt, bố trí đèn tại các không gian khác như:
              tại các hệ thống cửa hàng, văn phòng, các showroom,...
            </p>
            <p>
              Bạn đang mong muốn 1 sản phẩm hoàn hảo trong cả kiểu dáng thiết
              kế, tính năng hoạt động cùng độ bền bỉ thì tin chắc rằng, đèn LED
              Tracklight thông minh được giới thiệu trên đây hẳn là lựa chọn
              đáng cân nhắc cho bạn. Nếu cần hỗ trợ, tư vấn thêm các thông tin
              liên quan đến sản phẩm, quý khách hàng có thể liên hệ với chúng
              tôi ngay hôm nay qua Hotline 19006600 để được giải đáp nhanh
              chóng, chính xác nhất!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
