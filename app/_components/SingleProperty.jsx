import ImageSlider from "../_atoms/ImageSlider";
import ProjectDetails from "../_atoms/ProjectDetails";
import SimpleFeatures from "../_atoms/SimpleFeatures";

const SingleProperty = ({ link }) => {
  return (
    <div className="pb-5">
      <ImageSlider />
      <SimpleFeatures link={link} />
      <ProjectDetails />

      {/* <Features />
      <Details /> */}
    </div>
  );
};

export default SingleProperty;
