import { PropsWithChildren } from 'react';

type Board = {
  title: string;
  id: string;
  onDrop?: React.DragEventHandler<HTMLUListElement>;
  onDragOver?: React.DragEventHandler<HTMLUListElement>;
};

export const Board = ({
  title,
  children,
  onDrop,
  onDragOver,
}: PropsWithChildren<Board>) => {
  return (
    <figure className="shadow-md rounded-md p-4 min-w-[300px] bg-primary">
      <figcaption className="font-bold underline underline-offset-[5px]">
        {title}
      </figcaption>
      <ul
        className="p-4 flex flex-col gap-4 min-h-[500px]"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {children}
      </ul>
    </figure>
  );
};
