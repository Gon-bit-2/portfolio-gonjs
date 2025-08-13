const ContactForm = () => {
  return (
    <div className="flex-center">
      <form className="flex w-full flex-col gap-7 text-[#a7a7a7]">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
        </div>
        <div className="flex w-full flex-col gap-7 text-[#a7a7a7]">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your name"
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
        </div>
        <div className="flex w-full flex-col gap-7 text-[#a7a7a7]">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Enter your name"
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
        </div>
        <div className="flex w-full flex-col gap-7 text-[#a7a7a7]">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-white md:text-2xl"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows={5}
            className="w-full rounded-md bg-black-300 px-4 py-4 text-sm font-light placeholder:text-[#fafafa50] md:text-base"
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded-md bg-blue-50 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 md:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
