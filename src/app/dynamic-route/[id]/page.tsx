import React from "react";
import { data } from "../../../data/data";

export function generateStaticParams() {
  const path = data.map((item) => ({ id: item.id.toString() }));
  return path;
}

const RouteId = ({ params }: { params: { id: string } }) => {
  const post = data.find((item) => item.id.toString() === params.id);

  return (
    <div className="py-2 px-3 border-0 border-b border-[#cccccc]">
      <div>PostId: {post?.postId}</div>
      <div>Id: {post?.id}</div>
      <div>Name: {post?.name}</div>
      <div>Email: {post?.email}</div>
      <div>Body: {post?.body}</div>
    </div>
  );
};

export default RouteId;
