import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "sarode",
    userImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    caption: "Lets build it ",
  },
  {
    id: "123",
    username: "sarode",
    userImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    caption: "Lets build it ",
  },
  {
    id: "123",
    username: "sarode",
    userImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    caption: "Lets build it ",
  },
  {
    id: "123",
    username: "sarode",
    userImg:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    caption: "Lets build it ",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      {/* Post */}
    </div>
  );
}

export default Posts;
