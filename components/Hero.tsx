import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => {
  return (
    <div className="relative w-full h-64">
      <div className="relative flex flex-col-reverse h-full m-auto max-w-7xl z-10 pb-14 text-center md:text-left">
        <div className="text-white max-w-2xl px-4">
          <h2 className="text-2xl md:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-lg lg:text-2xl font-semibold">{text}</p>
        </div>
      </div>
      <Image
        priority
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={imgUrl}
        alt="hero-image"
      />
    </div>
  );
};

export default Hero;
