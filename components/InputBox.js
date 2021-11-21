import { useSession } from "next-auth/client";
import { useRef, useState } from "react";
import Image from "next/image";
import { db } from "../firebase";
import { collection, addDoc, getDownloadUrl } from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";
import timestamp from "time-stamp";
import {
  CameraIcon,
  VideoCameraIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";

const InputBox = () => {
  const [session] = useSession();
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [imageRef, setImageRef] = useState(null);

  const sendPost = async (e) => {
    const storage = getStorage();
    const storageRef = ref(storage, imageRef);
    e.preventDefault();
    if (!inputRef.current.value) return;
    const obj = {
      message: inputRef.current.value,
      name: "Edith Puthie",
      email: session.user.email,
      image: session.user.image,
      time: timestamp("YYYY/MM/DD-HH:mm:ss"),
    };

    try {
      const docRef = await addDoc(collection(db, "users"), obj);
      if (imageToPost) {
        uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
          console.log(snapshot);
        });
      }
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    inputRef.current.value = "";
    removeImg();
  };

  const removeImg = () => {
    setImageToPost(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImageRef(e.target.files[0].name);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
      console.log(readerEvent.target.result);
    };
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`Share your nonsenses Edith `}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImg}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="object-contain h-10" src={imageToPost} />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-700" />
          <p className="text-xs sm:text-sm xl:text-base">
            Go Live Bitch don't be shy
          </p>
        </div>
        <div onClick={() => fileRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">
            Upload ugly ass pics
          </p>
          <input ref={fileRef} hidden type="file" onClick={addImageToPost} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">How yall fellin?</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
