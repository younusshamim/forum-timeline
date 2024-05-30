import { useQuery } from "@tanstack/react-query";
import { onGetPosts, onGetUsers } from "../services";
import PostCard from "../components/PostCard";
import PageLoader from "../components/common/PageLoader";
import ErrorMsg from "../components/common/ErrorMsg";
import Header from "../components/Header";

const Home = () => {
  // use queries
  const {
    data: postsData,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: onGetPosts,
  });
  const {
    data: usersData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: onGetUsers,
  });

  // data
  const posts = postsData?.data || [];
  const postsDescending = posts.sort((a, b) => b.id - a.id);
  const users = usersData?.data || [];
  const userMap = new Map(users.map((user) => [user.id, user]));
  const loading = postsLoading || usersLoading;

  if (loading) return <PageLoader />;
  if (postsError || usersError)
    return <ErrorMsg msg="An error has occurred." />;
  if (posts.length === 0) return <ErrorMsg msg="No posts are available." />;

  return (
    <div className="bg-[#fafafa] p-5 md:p-10 flex flex-col items-center">
      <div className="flex flex-col gap-3 w-full md:w-[700px]">
        <Header posts={posts} users={users} />

        {postsDescending.map((post) => {
          const targetUser = userMap.get(post.userId);
          return <PostCard key={post.id} post={post} user={targetUser} />;
        })}
      </div>
    </div>
  );
};

export default Home;
