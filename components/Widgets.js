import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Anita Hardcok",
    src: "https://test1wsdas.s3.amazonaws.com/s8S8_O6__400x400.jpg",
  },
  {
    name: "Dula Peep",
    src:
      "https://test1wsdas.s3.amazonaws.com/160297757-126006382791976-4227886577054745071-n-1617050982.jpg",
  },
  {
    name: "Bread pig ",
    src:
      "https://test1wsdas.s3.amazonaws.com/sausage-stuffed-piglet-buns-1.jpg",
  },
  {
    name: "Doll nal trunk ",
    src: "https://test1wsdas.s3.amazonaws.com/x1080.jpg",
  },
  {
    name: "Ariana Grindr ",
    src: "https://test1wsdas.s3.amazonaws.com/ariana-grande-in-my-head.jpg",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl mr-3">Friends wth Benefits</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
