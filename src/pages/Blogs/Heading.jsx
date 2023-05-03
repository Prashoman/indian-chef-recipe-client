import React from "react";
import { HiDownload } from "react-icons/hi";
import Pdf from "react-to-pdf";
const ref = React.createRef();
// import Pdf from "../pdf/Resume.pdf";

const Heading = () => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="px-4 lg:px-32 lg:w-3/4" ref={ref}>
        <h1 className="text-2xl font-sans font-bold mb-5">
          The Creative Genius
        </h1>
        <p className="font-sans font-medium mb-5">
          Creative geniuses have mastered the ability to combine their divergent
          and convergent thinking skills to continually produce innovative and
          novel ideas. A true creative genius is marked not only by their
          critical thinking skills but also by their ability to ideate and
          create.
        </p>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="flex justify-between items-start px-3 py-1 text-white rounded lg:px-3 lg:py-2 bg-orange-500"
            >
              Download <HiDownload className="w-5 h-7"></HiDownload>
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Heading;
