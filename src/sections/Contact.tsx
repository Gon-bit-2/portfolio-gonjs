import ContactExperience from "../components/ContactExperience";
import ContactForm from "../components/ContactForm";
import GradientSpheres from "../components/GradientSpheres";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  return (
    <section id="contact" className="flex-center relative px-5 md:p-0">
      <GradientSpheres
        sphere1Class="testimonial-gradient-sphere testimonial-sphere-1"
        sphere2Class="testimonial-gradient-sphere testimonial-sphere-2"
      />
      <div className="z-10 container my-20 h-full w-full md:my-40">
        <TitleHeader
          title="Contact Me"
          text="Let's collaborate on tailored, sustainable solutions."
          number={"04"}
        />
        <div className="mt-20">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-5">
              <ContactForm />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="-mt-32 h-full w-full md:m-0">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
