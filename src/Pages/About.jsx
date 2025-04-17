import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { introduction } from "../Constants/constants";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>

        {/* Centered Text Section with reduced gap and larger font */}
        <div className="w-full flex justify-center mt-6">
          <div className="max-w-2xl w-full flex justify-center items-center">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
              >
                <span
                  className="text-primary-400"
                  style={{ fontSize: "1.5em", fontWeight: "900" }}
                >
                  {introduction.text[0]}
                </span>
                <span
                  className="text-primary-500"
                  style={{ fontSize: "1.2em", fontWeight: "500" }}
                >
                  {introduction.text[1]}
                </span>
                <span
                  className="text-primary-500"
                  style={{ fontSize: "1.2em", fontWeight: "500" }}
                >
                  {introduction.text[2]}
                </span>
                <span
                  className="text-primary-500"
                  style={{ fontSize: "1.2em", fontWeight: "500" }}
                >
                  {introduction.text[3]}
                </span>
              </m.p>
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
