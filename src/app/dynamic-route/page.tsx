import React from "react";
import { data } from "../../data/data";

const DynamicRouting = () => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="py-2 px-3 border-0 border-b border-[#cccccc]"
        >
          <div>PostId: {item.postId}</div>
          <div>Id: {item.id}</div>
          <div>Name: {item.name}</div>
          <div>Email: {item.email}</div>
          <div>Body: {item.body}</div>
        </div>
      ))}
    </>
  );
};

export default DynamicRouting;
