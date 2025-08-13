type Testimonial = {
  name: string;
  pos: string;
  review: string;
  imgPath: string;
};
const TestimonialsCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="testimonial-card group col-span-1 rounded-xl bg-black-300 p-10">
      <div className="rounded-xl p-10 transition-all duration-700 group-hover:bg-blue-300">
        <div className="flex items-center justify-between">
          <img
            src={testimonial.imgPath}
            alt="cover-img"
            className="h-24 w-24 rounded-full border border-transparent transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:border-white md:h-36 md:w-36"
          />
          <img
            src="/images/quote.png"
            alt="cover-img"
            className="h-14 w-14 transition-all duration-700 group-hover:mix-blend-screen md:h-28 md:w-28"
          />
        </div>
        <div className="mt-10">
          <p className="font-light transition-all duration-700 group-hover:text-white md:text-2xl">
            {testimonial.review}
          </p>
        </div>
        <div className="mt-10 flex flex-col justify-between md:mt-20 md:flex-row md:items-center">
          <div>
            <h1 className="mb-1 text-lg font-medium text-blue-50 transition-all duration-700 group-hover:text-white md:text-3xl">
              {testimonial.name}
            </h1>
            <p className="text-sm font-light opacity-70 transition-all duration-700 group-hover:text-white md:text-xl">
              {testimonial.pos}
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3 md:mt-0">
            <img
              src="./images/x.svg"
              alt="x"
              className="size-5 transition-all duration-700 group-hover:mix-blend-luminosity md:size-12"
            />
            <img
              src="./images/fb.svg"
              alt="x"
              className="size-5 transition-all duration-700 group-hover:mix-blend-luminosity md:size-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsCard;
