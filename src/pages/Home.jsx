import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  return <div></div>;
};

export default Home;
