import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
type TData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues: TData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const contactValidator = z.object({
    name: z.string().min(2).nonempty("Name is required"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address"),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactValidator),
  });
  const onSubmit = async (data: TData) => {
    setLoading(true);
    try {
      const payload = {
        name: data.name,
        to_name: "Full Stack Developer",
        message: data.message,
        email: data.email,
        title: data.subject,
        time: new Date().toLocaleString(),
      };

      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, {
        publicKey: userID,
      });
    } catch (error) {
      console.log("FAILED...", error);
      alert("Failed to send message, please try again.");
    } finally {
      setLoading(false);
      reset(initialValues);
      alert("Message sent successfully!");
    }
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div className="flex-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-7 text-[#a7a7a7]"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex w-full flex-col gap-7 text-[#a7a7a7]">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Email address
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex w-full flex-col gap-7 text-[#a7a7a7]">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="Enter your subject"
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
        </div>
        <div className="flex w-full flex-col gap-7 text-[#a7a7a7]">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Enter your message"
            rows={5}
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 rounded-md bg-blue-50 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 md:text-base"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
