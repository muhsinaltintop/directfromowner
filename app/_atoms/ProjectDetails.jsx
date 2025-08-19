import React from "react";
import RichTextRenderer from "./RichTextRenderer";

const ProjectDetails = ({ data }) => {
  return (
    <article className="w-9/12 mx-auto mt-10 border-2 border-gray-200 rounded-xl ">
      <div className="rounded-[10px] bg-white p-4 sm:p-6">
        <h2 className="text-2xl font-bold  text-fifth">Project Details</h2>

        {data?.attributes?.projectDetail ? (
          <RichTextRenderer data={data?.attributes?.projectDetail} />
        ) : (
          ""
        )}
        <div className="mt-4 flex flex-wrap gap-1">
          {data?.attributes?.keywords
            .split(",")
            .filter((keywords) => keywords.trim() !== "")
            .map((keywords, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                {keywords}
                <br />
              </span>
            ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
