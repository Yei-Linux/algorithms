type Album = {
  image: string;
  title: string;
};

export const Album = ({ image, title }: Album) => {
  return (
    <div className="bg-white flex flex-col gap-2 items-center cursor-pointer">
      <img
        src={image}
        alt={title}
        width={80}
        height={80}
        className="min-w-[80px] rounded-xl"
        loading="lazy"
      />
      <p className="text-xs text-center">{title}</p>
    </div>
  );
};
