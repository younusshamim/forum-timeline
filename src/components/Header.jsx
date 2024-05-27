const Header = ({ posts, users }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-5 mx-2">
      <h1 className="text-3xl font-bold text-blue-950">Forum Timeline</h1>

      <p className="text-sm text-gray-500">
        {posts.length} posts by {users.length} users
      </p>
    </div>
  );
};

export default Header;
