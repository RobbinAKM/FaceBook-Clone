import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";
const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-80 xl:ml-80 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/*story*/}
        <Stories />
      </div>
      <div>{/*input*/}</div>
      <InputBox />
      <div>{/*posts*/}</div>
      <Posts />
    </div>
  );
};

export default Feed;
