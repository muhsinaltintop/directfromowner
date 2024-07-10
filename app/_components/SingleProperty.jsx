import ImageSlider from "../_atoms/ImageSlider";
import ProjectDetails from "../_atoms/ProjectDetails";
import SimpleFeatures from "../_atoms/SimpleFeatures";

const SingleProperty = ({ link, data }) => {
  const { propertyImage } = data[0]?.attributes;

  return (
    <div className="pb-5">
      <ImageSlider propertyImage={propertyImage} />
      <SimpleFeatures link={link} data={data} />
      <ProjectDetails data={data} />

      {/* <Features />
      <Details /> */}
    </div>
  );
};

export default SingleProperty;
