"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { RefObject } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useStore } from "@/store/useStore";
interface Product {
  id: number;
  name: string;
  link: string;
}
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { Label } from "@radix-ui/react-label";
import { useCurrentUser } from "@/hook/use-current-user";
import { logout } from "@/actions/logout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LoginButton } from "@/components/auth/login-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import products from "@/data/data-search.json";
function useOutsideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
): void {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
export default function MobileNav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => setSuggestionsVisible(false));

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSuggestions(filteredProducts);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Do something with searchTerm
  };
  const user = useCurrentUser();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="lg:hidden bg-black w-full h-min flex items-center justify-between px-10 py-4 z-50 max-md:h-[60px]">
      <Link href="/" className="mr-[]">
        <Image
          className="max-md:w-[150px]"
          src="/assets/logofptsh.png"
          width={205}
          height={100}
          alt=""
        />
      </Link>
      <div className="flex items-center justify-center text-white gap-2 max-md:mr-[-25px] max-md:gap-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="relative bg-black outline-none p-2">
              <div className="p-2 hidden md:block">
                <CiSearch size={24} />
              </div>
              <div className="p-2 hidden max-md:block">
                <CiSearch size={17} />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="px-5 mt-12">
              <div ref={wrapperRef} className="relative mr-2">
                <Input
                  className="w-full h-[42px] z-0 text-slate-600 text-sm placeholder:italic placeholder:text-slate-400 placeholder:text-[10px]  max-md:text-[12px] outline-none "
                  type="search"
                  placeholder="Tìm kiếm sản phẩm Smart Home..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setSuggestionsVisible(true)}
                />
                {isSuggestionsVisible &&
                  searchTerm &&
                  suggestions.length > 0 && (
                    <div className="flex flex-col items-start absolute border-[1px] border-black top-12 z-50 left-0 rounded-lg  max-md:text-[12px] font-medium   text-black w-full h-min bg-white">
                      {suggestions.map((product) => (
                        <Link
                          href={product.link}
                          className="w-full p-4"
                          key={product.id}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative bg-black outline-none p-2">
                <Image
                  className="w-[24px] h-[24px] max-md:w-[17px]  max-md:h-[17px] "
                  src="/assets/icon/cart.png"
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="absolute top-0 -right-[10px] bg-orange-500 w-[15px] h-[15px] text-[10px] text-white rounded-full flex items-center justify-center max-md:w-[13px] max-md:h-[13px] max-md:right-[-5px] ">
                  {cart.length}
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-[20px]  text-center w-full h-min mt-12  p-2  border-y-[1px] border-black bg-orange-300">
                  Cart
                </SheetTitle>
              </SheetHeader>
              <div className="px-2">
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-col ">
                      <div className="flex items-center justify-between p-2 border-b-[1px] w-full gap-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.image}
                            width={40}
                            height={40}
                            alt=""
                          />
                          <div>
                            <h5 className="text-[14px] font-semibold max-md:text-[12px]">
                              {item.name}
                            </h5>
                            <p className="text-[12px] max-md:text-[10px]">
                              {item.type} {item.color} {item.button}{" "}
                              {item.connect} {item.power} {item.type_key}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-orange-500 font-semibold max-md:text-[14px]">
                            {item.price}
                          </p>
                          <div className="flex items-center gap-2 text-[12px]">
                            <button
                              className="border-[1px] border-black px-[4px] hover:bg-orange-500 rounded-sm"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button
                              className="border-[1px] border-black px-[4px]  hover:bg-orange-500 rounded-sm"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="text-[12px] hover:text-orange-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className=""></div>
                      {/* <h5 className="text-[18px] font-semibold ">
                        {item.name}
                      </h5>
                      <p>
                        Option: {item.category} {item.type} {item.color}
                        {item.power}
                      </p>
                      <div className="flex items-center gap-2">
                        <p>Số Lượng:</p>
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove from cart
                      </button> */}
                    </div>
                  ))}
                </div>
              </div>
              <SheetFooter className="flex items-center mt-6 mr-2">
                <SheetClose asChild>
                  {/* checkout */}
                  <Button type="submit">
                    <Link className="max-md:text-[12px]" href="/checkout">
                      Checkout
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-black ">
                <div className="hidden md:block">
                  <CiMenuFries size={24} />
                </div>
                <div className="hidden max-md:block">
                  <CiMenuFries size={17} />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <Accordion type="single" collapsible>
                <AccordionItem className="border-b-0 mb-4" value="item-1">
                  <AccordionTrigger>
                    {user ? (
                      <div className="relative flex  items-center group px-6 pt-2">
                        <div className="flex items-center outline-0 gap-4 ">
                          <Avatar className="w-[35px] h-[35px] flex items-center">
                            <AvatarImage
                              className=""
                              src={user.image || "/assets/icon/user.png"}
                            />
                          </Avatar>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center px-6 pt-4 ">
                        <Image
                          className="object-contain"
                          src="/assets/icon/user.png"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </div>
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-gray-200 w-full h-min mt-2  flex flex-col items-start">
                      {user ? (
                        <div className="bg-gray-200 w-full h-min flex flex-col items-start">
                          <div className="w-full h-min- py-3 px-6 border-y-[1px] border-black text-left font-medium ">
                            <Dialog>
                              <DialogTrigger asChild>
                                <button> Thông tin cá nhân</button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle> Thông tin cá nhân</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="name"
                                      className="text-right"
                                    >
                                      Name
                                    </Label>
                                    <Input
                                      id="name"
                                      value={user.name || ""}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="email"
                                      className="text-right"
                                    >
                                      Email
                                    </Label>
                                    <Input
                                      id="username"
                                      value={user.email || ""}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="phone"
                                      className="text-right"
                                    >
                                      Phone
                                    </Label>
                                    <Input
                                      id="name"
                                      value=""
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="address"
                                      className="text-right"
                                    >
                                      Address
                                    </Label>
                                    <Input
                                      id="name"
                                      value=""
                                      className="col-span-3"
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button type="submit">Save changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                          <Link
                            href="/checkout"
                            className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                          >
                            Đơn hàng của tôi
                          </Link>
                          <div
                            onClick={handleLogout}
                            className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                          >
                            Đăng xuất
                          </div>
                        </div>
                      ) : (
                        <Link
                          href="/login"
                          className="w-full h-min- py-3 px-6 border-y-[1px] border-black text-left font-medium "
                        >
                          Đăng nhập
                        </Link>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex flex-col gap-4  ">
                <Link
                  className="text-left text-black px-6 font-medium text-[16px] max-md:w-[200px]"
                  href="/"
                >
                  Giới thiệu
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black px-6 font-medium text-[16px] py-0">
                        Sản phẩm
                      </div>
                      <ChevronDown className="h-[18px] w-[50px] shrink-0 transition-transform duration-200 ml-2" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-gray-200 w-full h-min mt-2 pb-[-16px] flex flex-col items-start">
                        <Link
                          href="/bo-dieu-khien"
                          className="w-full h-min- py-3 px-6 border-y-[1px] border-black text-left font-medium "
                        >
                          Bộ điều khiển trung tâm
                        </Link>
                        <Link
                          href="/den-thong-minh"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Đèn thông minh
                        </Link>
                        <Link
                          href="/cam-bien"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Cảm biến
                        </Link>
                        <Link
                          href="/cong-tac-thong-minh"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Công tắc thông minh
                        </Link>
                        <Link
                          href="/bo-rem-cua"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Bộ rèm cửa
                        </Link>
                        <Link
                          href="/phu-kien"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Phụ kiện
                        </Link>
                        <Link
                          href="/khoa-cua-thong-minh"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Khóa cửa thông minh
                        </Link>
                        <Link
                          href="/thiet-bi-an-ninh-thong-minh"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Thiết bị an ninh thông minh
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black px-6 font-medium text-[16px] ">
                        Giải pháp
                      </div>
                      <ChevronDown className="h-[18px] w-[50px] shrink-0 transition-transform duration-200 ml-2" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-gray-200 w-full h-min mt-2 pb-[-16px] flex flex-col items-start">
                        <Link
                          href="/giai-phap/giai-phap-dieu-khien"
                          className="w-full h-min- py-3 px-6 border-y-[1px] border-black text-left font-medium "
                        >
                          Giải pháp điều khiển
                        </Link>
                        <Link
                          href="/giai-phap/giai-phap-chieu-sang"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Giải pháp chiếu sáng
                        </Link>
                        <Link
                          href="/giai-phap/giai-phap-an-ninh"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Giải pháp an ninh
                        </Link>
                        <Link
                          href="/giai-phap/giai-phap-truyen-hinh"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Giải pháp truyền hình
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black px-6 font-medium text-[16px]">
                        Căn hộ mẫu
                      </div>
                      <ChevronDown className="h-[18px] w-[50px] shrink-0 transition-transform duration-200 ml-2" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-gray-200 w-full h-min mt-2 pb-[-16px] flex flex-col items-start">
                        <Link
                          href="/can-ho-mau/can-ho-1pn"
                          className="w-full h-min- py-3 px-6 border-y-[1px] border-black text-left font-medium "
                        >
                          Căn 1 phòng ngủ
                        </Link>
                        <Link
                          href="/can-ho-mau/can-ho-2pn"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Căn 2 phòng ngủ
                        </Link>
                        <Link
                          href="/can-ho-mau/can-ho-3pn"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Căn 3 phòng ngủ
                        </Link>
                        <Link
                          href="/can-ho-mau/nha-pho-3-tang"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Nhà phố 3 tầng
                        </Link>
                        <Link
                          href="/can-ho-mau/can-ho-duplex-2pn"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Căn hộ Duplex 2 phòng ngủ
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem className="border-b-0" value="item-1">
                    <AccordionTrigger>
                      <div className="text-left text-black px-6 font-medium text-[16px]">
                        Hỗ trợ
                      </div>
                      <ChevronDown className="h-[18px] w-[50px] shrink-0 transition-transform duration-200 ml-2" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-gray-200 w-full h-min mt-2 pb-[-16px] flex flex-col items-start">
                        <Link
                          href="/ho-tro/doi-tac"
                          className="w-full h-min- py-3 px-6 border-y-[1px] border-black text-left font-medium "
                        >
                          Đối tác
                        </Link>
                        <Link
                          href="/ho-tro/lien-he-truc-tiep"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Liên hệ trực tiếp
                        </Link>
                        <Link
                          href="/ho-tro/brandshop"
                          className="w-full h-min- py-3 px-6 border-b-[1px] border-black text-left font-medium "
                        >
                          Brand Shop
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
