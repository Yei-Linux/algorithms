import { PropsWithChildren } from 'react';

type HandleChangePage = () => void;

type SectionView = {
  sectionTitle: string;
  handleNext: HandleChangePage;
  handlePrev: HandleChangePage;
};

export const SectionView = ({
  sectionTitle,
  children,
  handleNext,
  handlePrev,
}: PropsWithChildren<SectionView>) => (
  <div>
    <header className="flex justify-between p-2 w-full">
      <p className="text-primary font-bold">{sectionTitle}</p>

      <div className="flex gap-3">
        <span onClick={handlePrev} className="text-primary cursor-pointer">
          ◀️
        </span>
        <span onClick={handleNext} className="text-primary cursor-pointer">
          ▶️
        </span>
      </div>
    </header>
    <main className="w-full">
      <div className="overflow-auto">{children}</div>
    </main>
  </div>
);
