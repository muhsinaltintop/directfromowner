import ImageSlider from "../_atoms/ImageSlider";
import ProjectDetails from "../_atoms/ProjectDetails";
import SimpleFeatures from "../_atoms/SimpleFeatures";

const SingleProperty = ({ id, data }) => {



  const propertyImage = data.attributes.propertyImage


  return (
    <div className="pb-5">
      <ImageSlider propertyImage={propertyImage} />
      <SimpleFeatures id={id} data={data} />
      <ProjectDetails data={data} />
    </div>
  );
};

export default SingleProperty;
