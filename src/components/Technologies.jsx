import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";

const Technologies = () => {
  return (
    <>
      <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div>
            <FaHtml5 className="text-7xl text-orange-400" />
          </div>
          <div className="p-4">
            <FaCss3Alt className="text-7xl text-sky-400" />
          </div>
          <div className="p-4">
            <FaJs className="text-7xl text-yellow-400" />
          </div>
          <div className="p-4">
            <FaReact className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4">
            <FaVuejs className="text-7xl text-green-400	" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
