type Task = {
  id: string;
  text: string;
  onDragStart?: React.DragEventHandler<HTMLLIElement>;
  onDragEnd?: React.DragEventHandler<HTMLLIElement>;
};

export const Task = ({ text, onDragStart, id, onDragEnd }: Task) => {
  return (
    <li
      id={id}
      className="shadow-xl p-4 bg-white rounded-md cursor-pointer"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {text}
    </li>
  );
};
