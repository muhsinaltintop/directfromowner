import Details from "../_atoms/Details";
import Features from "../_atoms/Features";
import ImageSlider from "../_atoms/ImageSlider";
import ProjectDetails from "../_atoms/ProjectDetails";
import SimpleFeatures from "../_atoms/SimpleFeatures";

const SingleProperty = ({ title }) => {
  return (
    <div className="pb-5">
      <h1 className="text-xl">{title}</h1>
      <ImageSlider />
      <SimpleFeatures />
      <ProjectDetails />

      {/* <Features />
      <Details /> */}
    </div>
  );
};

export default SingleProperty;
