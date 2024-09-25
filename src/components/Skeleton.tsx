import React from "react";

const Skeleton = ({ key }: { key: number }) => {
  return (
    <>
      <div
        key={key}
        className="py-2 px-3 border-0 border-b border-[#cccccc] flex flex-col items-start justify-center gap-[6px]"
      >
        <div className="w-full flex justify-start gap-2 animate-pulse">
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-10"></div>
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-10"></div>
        </div>
        <div className="w-full flex justify-start gap-2 animate-pulse">
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-10"></div>
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-1/4"></div>
        </div>
        <div className="w-full flex justify-start gap-2 animate-pulse">
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-10"></div>
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-1/3"></div>
        </div>
        <div className="w-full flex justify-start gap-2 animate-pulse">
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-10"></div>
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-[75%]"></div>
        </div>
        <div className="w-full flex justify-start gap-2 animate-pulse">
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-10"></div>
          <div className="h-5 rounded-[4px] bg-[#cccccc] w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
