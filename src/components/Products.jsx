import { PROJECTS } from "../constants";

const Products = () => {
  return (
    <>
      <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div className="projects-main">
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center  items-center">
              <div className="w-full lg:w-1/4">
                <img className="mb-6 rounded mx-auto" src={project.image} width={250} height={250} alt={project.title} />
              </div>
              <div className="w-full max-w-xl lg:w-3/4 lg:text-left text-center mr-auto ml-auto xl:mr-0 xl:ml-0 ">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.description}</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {project.technologies.map((tech, index) => (
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

export default Products;
