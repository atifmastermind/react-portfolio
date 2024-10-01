import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <>
      <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div className="flex mb-8 flex-wrap lg:justify-center" key={index}>
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              </div>

              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-stone-500"> {experience.company} </span>
                </h3>
                <p className="mb-4 text-stone-400">{experience.description}</p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 w-1/3 md:w-auto text-center" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
