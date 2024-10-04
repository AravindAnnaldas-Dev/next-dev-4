import React from "react";
import Skeleton from "../../components/Skeleton";

type Titem = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const SkeletonPage = async () => {
  let data: Titem[] | null = null;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      {!data ? (
        <>
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </>
      ) : (
        data.map((item: Titem) => (
          <div
            key={item.id}
            className="py-2 px-3 border-0 border-b border-[#cccccc]"
          >
            <div>
              <span className="font-semibold w-16">PostId:</span> {item.postId}
            </div>
            <div>
              <span className="font-semibold w-16">Id:</span> {item.id}
            </div>
            <div>
              <span className="font-semibold w-16">Name:</span> {item.name}
            </div>
            <div>
              <span className="font-semibold w-16">Email:</span> {item.email}
            </div>
            <div>
              <span className="font-semibold w-16">Body:</span> {item.body}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default SkeletonPage;
