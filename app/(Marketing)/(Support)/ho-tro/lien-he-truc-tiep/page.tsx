"use client";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formContactSchema } from "@/schemas";
import { createContact } from "@/actions/contact";
import { useToast } from "@/components/ui/use-toast";
import { on } from "events";
import { Helmet } from "react-helmet";
export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      address: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formContactSchema>) => {
    setIsSubmitting(true);
    try {
      await createContact(values);
      handleSubmit();
      setTimeout(() => setIsSubmitting(false), 60000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Bạn đã gửi tin nhắn thành công",
      description: "Chúng tôi sẽ phản hồi bạn sớm nhất có thể",
    });
  };
  const handleFail = () => {
    toast({
      title: "Bạn cần 60s để gửi lại tin nhắn",
      description: "Vui lòng thử lại sau",
    });
  };
  return (
    <>
      <Helmet>
        <title>Liên hệ trực tiếp</title>
        <meta
          name="description"
          content="Tư vấn liên hệ trực tiếp với FPT Smart Home"
        />
      </Helmet>
      <div className="pt-[120px] max-lg:pt-[70px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/support/contact-banner.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[200px]"></div>
      </div>
      <div>
        <h1 className="text-[40px] font-semibold text-center py-[50px] max-md:text-[25px] max-md:py-[20px]">
          Liên Hệ Trực Tiếp
        </h1>
        <div>
          <div className="bg-[url('/assets/images/support/background-image.jpg')] w-full h-min bg-cover bg-no-repeat bg-center mb-10 p-[50px] flex items-center justify-center gap-6 max-md:flex-col max-md:px-6">
            <div className=" basis-1/4 flex flex-col items-start justify-center max-md:hidden">
              <h3 className="text-[25px] py-6 w-full font-medium border-b-[1px] border-black">
                Gửi tin nhắn
              </h3>
              <h3 className="text-[25px] py-6 w-full font-medium border-b-[1px] border-black">
                Gửi email
              </h3>
              <h3 className="text-[25px] py-6 w-full font-medium border-b-[1px] border-black">
                Tìm đại lý gần nhất
              </h3>
              <h3 className="text-[25px] py-6 w-full font-medium border-b-[1px] border-black">
                Gọi điện thoại cho chúng tôi
              </h3>
              <h2 className="text-[30px] font-medium ">0932 133 357</h2>
            </div>
            <div className="    items-start justify-center hidden max-md:flex">
              <h3 className="text-[15px] font-medium border-r-[1px] border-black pr-4 mr-4">
                Gửi tin nhắn
              </h3>
              <h3 className="text-[15px] font-medium border-r-[1px] border-black pr-4 mr-4">
                Gửi email
              </h3>
              <h3 className="text-[15px] font-medium  pr-4">0932 133 357</h3>
            </div>
            <div className="basis-3/4 bg-white w-full h-min rounded-2xl flex items-center justify-center p-[50px] max-md:py-10 max-md:px-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid  gap-4 w-full"
                >
                  <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 ">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Họ và tên" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Số điện thoại" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Tiêu đề tin nhắn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Địa chỉ" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              className="h-[200px]"
                              placeholder="Nội dung tin nhắn"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {isSubmitting ? (
                    <Button
                      type="reset"
                      className="w-[150px] py-6 mx-auto bg-orange-200"
                      onClick={handleFail}
                    >
                      Gửi
                    </Button>
                  ) : (
                    <Button type="submit" className="w-[150px] py-6 mx-auto ">
                      Gửi
                    </Button>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
