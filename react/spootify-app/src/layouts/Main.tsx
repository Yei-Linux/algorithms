import { PropsWithChildren } from 'react';

type Banner = {
  text: string;
  description: string;
};

const Banner = ({ text, description }: Banner) => (
  <div className="w-full font-bold bg-secondary text-white flex flex-col justify-center gap-4 px-10 items-end min-h-[200px]">
    <h3 className="w-fit text-3xl">{text}</h3>
    <h4 className="w-fit text-lg">{description}</h4>
  </div>
);

type Main = PropsWithChildren<Banner>;

export const Main = ({ children, ...banner }: Main) => {
  return (
    <main className="w-full grid-in-main">
      <Banner {...banner} />
      <div className="p-4">{children}</div>
    </main>
  );
};
