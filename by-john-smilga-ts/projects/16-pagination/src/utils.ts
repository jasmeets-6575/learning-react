import { FollowerData } from "./App";

const paginate = (followers: FollowerData[]) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  console.log(newFollowers);

  return newFollowers;
};

export default paginate;
