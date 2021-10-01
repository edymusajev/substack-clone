import Image from 'next/image';

const Img = ({ src, size, corners }: { src: string; size: string; corners?: string }) => {
  return (
    <div className={`relative ${size} w-full`}>
      <Image src={src} layout="fill" objectFit="cover" alt="bla" className={`${corners}`} />
    </div>
  );
};

export default Img;
