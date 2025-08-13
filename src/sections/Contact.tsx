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
              <div className="top-0 left-0 -mt-32 h-96 w-full md:absolute md:left-96 md:m-0 md:h-full">
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
