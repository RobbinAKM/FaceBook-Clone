import Post from "./Post";
import timestamp from "time-stamp";

const fake = [
  {
    id: 123,
    name: "Edith Puthie",
    message:
      "I refuse to answer that question on the grounds that I don’t know the answer.",
    image: "https://test1wsdas.s3.amazonaws.com/s8S8_O6__400x400.jpg",
    time: timestamp("YYYY/MM/DD-HH:mm:ss"),
  },
  {
    id: 1223,
    name: "Dula Peep",
    message: "I'm Levitating",
    image:
      "https://test1wsdas.s3.amazonaws.com/160297757-126006382791976-4227886577054745071-n-1617050982.jpg",
    postImg: "https://test1wsdas.s3.amazonaws.com/maxresdefault.jpg",
    time: timestamp("YYYY/MM/DD-HH:mm:ss"),
  },
  {
    id: 1234,
    name: "Holden Tudiks",
    message: "Holden Tudiks is HEALTHY",
    image: "https://test1wsdas.s3.amazonaws.com/ariana-grande-in-my-head.jpg",
    postImg:
      "https://test1wsdas.s3.amazonaws.com/8751004-6611943-image-m-53_1547970906083.jpg",
    time: timestamp("YYYY/MM/DD-HH:mm:ss"),
  },
  {
    id: 12345,
    name: "Edith Puthie",
    message:
      "Any man can be a father, but it takes a hot, middle-aged guy with a big job to be a daddy.",
    image: "https://test1wsdas.s3.amazonaws.com/s8S8_O6__400x400.jpg",
    time: timestamp("YYYY/MM/DD-HH:mm:ss"),
  },
  {
    id: 12345,
    name: "Edith Puthie",
    message: "SUCCEEEEEEDDDD !!!!!!!!!",
    image: "https://test1wsdas.s3.amazonaws.com/s8S8_O6__400x400.jpg",
    time: timestamp("YYYY/MM/DD-HH:mm:ss"),
  },
];

const Posts = () => {
  return (
    <div>
      {fake.map((data) => (
        <Post
          key={data.id}
          name={data.name}
          message={data.message}
          image={data.image}
          postImg={data.postImg}
          time={data.time}
        />
      ))}
    </div>
  );
};

export default Posts;
