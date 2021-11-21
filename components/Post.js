import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ id, name, message, image, postImg, time }) => {
  return (
    <div className="flex flex-col" key={id}>
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} heigth={40} />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400"> {time}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImg && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImg} objectfit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Courtesy Like</p>
        </div>
        <div className="inputIcon rounded-none ">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Talk Shit</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">
            Share now might delete it later idk
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
