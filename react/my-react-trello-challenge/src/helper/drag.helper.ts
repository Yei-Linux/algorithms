export const handleAllowDragAndDrop = (
  e: React.DragEvent<HTMLUListElement>
) => {
  e.preventDefault();
};

export const handleDropTask = (
  e: React.DragEvent<HTMLUListElement>,
  updateHook: (id: string) => void
) => {
  try {
    const id = e.dataTransfer.getData('text');
    const taskElement = document.querySelector('#' + id);
    if (!taskElement) return;

    updateHook(id);
  } catch (error) {
    console.log('DND:', error);
  }
};

export const handlerDragStart = (e: React.DragEvent<HTMLLIElement>) => {
  try {
    e.dataTransfer.setData('text', e.currentTarget.id);
  } catch (error) {
    console.log('DND', error);
  }
};
