import React from 'react';
import Image from 'next/image';
import PostActions from './postActions';

const BigPost = () => {
  return (
    <div className="max-w-screen-lg w-full md:px-4 pb-8 md:py-8 flex flex-col md:flex-row hover:bg-gray-100 hover:cursor-pointer mb-12">
      <div className=" md:flex-1 relative w-full h-48 md:h-72">
        <Image
          src="/images/bear.jpeg"
          layout="fill"
          objectPosition="center"
          objectFit={'cover'}
          alt="test"
        />
      </div>
      <div className="flex-1 max-w-screen-md pl-7 md:pl-12 pr-4 md:pr-0 mt-4">
        <h4 className="text-2xl font-bold mb-4">Open Thread 191 + Madrid/Zurich Meetup Info</h4>
        <p className="mb-4">...</p>
        <PostActions />
      </div>
    </div>
  );
};

export default BigPost;
