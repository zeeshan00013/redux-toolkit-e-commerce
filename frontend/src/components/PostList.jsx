import { useSelector } from "react-redux";
import { selectAllPosts } from "../rdux/slice/postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderpost = posts.map((post) => (
    <article key={post.id} className="border space-y-1">
      <h4>{post.title}</h4>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section className="flex items-center flex-col justify-center space-y-4">
      <h2>posts:</h2>
      {renderpost}
    </section>
  );
};

export default PostList;
