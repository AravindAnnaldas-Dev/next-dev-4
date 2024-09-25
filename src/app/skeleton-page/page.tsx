"use client";

import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import Skeleton from "../../components/Skeleton";

const SkeletonPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          {data.map((_, index) => (
            <Skeleton key={index} />
          ))}
        </>
      ) : (
        data.map((item) => (
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
