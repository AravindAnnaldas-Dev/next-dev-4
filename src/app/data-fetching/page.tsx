import axios from "axios";
import React from "react";

type Titem = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const DataFetching = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/comments");
  const data = response.data;

  return (
    <>
      {data.map((item: Titem) => (
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

export default DataFetching;
