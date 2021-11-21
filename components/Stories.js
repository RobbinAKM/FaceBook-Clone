import Image from "next/image";
import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Anita Hardcok",
    src: "https://test1wsdas.s3.amazonaws.com/s8S8_O6__400x400.jpg",
    profile: "https://test1wsdas.s3.amazonaws.com/s8S8_O6__400x400.jpg",
  },
  {
    name: "Dula Peep",
    src:
      "https://test1wsdas.s3.amazonaws.com/160297757-126006382791976-4227886577054745071-n-1617050982.jpg",
    profile:
      "https://test1wsdas.s3.amazonaws.com/160297757-126006382791976-4227886577054745071-n-1617050982.jpg",
  },
  {
    name: "Bread pig ",
    src:
      "https://test1wsdas.s3.amazonaws.com/sausage-stuffed-piglet-buns-1.jpg",
    profile:
      "https://test1wsdas.s3.amazonaws.com/sausage-stuffed-piglet-buns-1.jpg",
  },
  {
    name: "Doll nal trunk ",
    src: "https://test1wsdas.s3.amazonaws.com/x1080.jpg",
    profile: "https://test1wsdas.s3.amazonaws.com/x1080.jpg",
  },
  {
    name: "Ariana Grindr ",
    src: "https://test1wsdas.s3.amazonaws.com/ariana-grande-in-my-head.jpg",
    profile: "https://test1wsdas.s3.amazonaws.com/ariana-grande-in-my-head.jpg",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
