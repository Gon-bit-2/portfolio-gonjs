import GradientSpheres from "../components/GradientSpheres";
import TestimonialsCard from "../components/TestimonialsCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center relative px-5 md:p-0">
      <GradientSpheres
        sphere1Class="testimonial-gradient-sphere testimonial-sphere-1"
        sphere2Class="testimonial-gradient-sphere testimonial-sphere-2"
      />
      <div className="relative z-10 my-20 w-full md:my-40">
        <div className="container mx-auto px-5 md:p-0">
          <TitleHeader
            title="TESTIMONIALS"
            text="Watch our clients are saying about us."
            number="03"
          />
          <div className="mt-20">
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <TestimonialsCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
