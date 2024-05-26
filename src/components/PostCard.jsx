import { toSentenceCase, toTitleCase } from "../utils";

const PostCard = ({ post, user }) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-lg font-bold text-blue-950">
        {toTitleCase(post.title)}
      </h2>
      <p className="text-sm text-gray-500">By {user.name}</p>
      <p className="mt-2">{toSentenceCase(post.body)}</p>
    </div>
  );
};

export default PostCard;
