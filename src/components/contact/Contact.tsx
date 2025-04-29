"use client";

import { socialIcons } from "@/constants/data";
import { lusitana } from "@/fonts/fonts";
import Link from "next/link";
import React from "react";
import Button from "../button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First Name is required." }),
  lastName: z.string().trim(),
  email: z.string().email(),
  message: z.string().trim().min(1, { message: "Your message is required." }),
  isNewsLetter: z.boolean(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

type Props = {};

const Contact = (props: Props) => {
  const [message, setMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (
    data: ContactFormInputs
  ) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setMessage("Message sent successfully");
        reset();
      } else {
        setMessage("User Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2
        className={`${lusitana.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider text-center`}
      >
        Contact
      </h2>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-xl leading-7 font-regular uppercase text-[#EE3E38]">
              Let&apos;s Connect
            </p>

            <p className="mt-4 leading-7 text-gray-200">
              I&apos;m always excited to take on new challenges and collaborate
              on innovative projects. If you&apos;re looking for a dedicated
              front-end developer to bring your vision to life, feel free to get
              in touch.
            </p>

            <div className="flex gap-5 mt-20">
              {socialIcons.map((item) => (
                <Link href={item.url} key={item.title}>
                  <span className="text-4xl"> {item.icon}</span>&nbsp;
                </Link>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-8 p-10"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-com-gray border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstName"
                  type="text"
                  placeholder="Hemanth"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name (Optional)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  placeholder="Setti"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="********@*****.**"
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  rows={10}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Write your message"
                  id="message"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label
                    className="block text-gray-500 font-bold"
                    htmlFor="isNewsLetter"
                  >
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="isNewsLetter"
                      {...register("isNewsLetter")}
                    />
                    <span className="text-sm text-gray-200">
                      Send me your newsletter!
                    </span>
                  </label>
                </div>
                <Button
                  text="Send Message"
                  variant="secondary"
                  size="md"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
