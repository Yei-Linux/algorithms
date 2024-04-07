import { useAppDispatch, useAppSelector } from '../store/hook';
import { Board } from './Board';
import { Task } from './Task';
import {
  handleAllowDragAndDrop,
  handleDropTask,
  handlerDragStart,
} from '../helper/drag.helper';
import { updateTask } from '../store/slices/tasks.slice';

export const DoingBoard = () => {
  const { tasks } = useAppSelector((store) => store.tasks);
  const dispatch = useAppDispatch();

  const handleUpdateTask = (id: string) => {
    dispatch(
      updateTask({
        id,
        state: 'pending',
      })
    );
  };

  return (
    <Board
      title="Doing Tasks"
      id="doingBoard"
      onDrop={(e) => handleDropTask(e, handleUpdateTask)}
      onDragOver={handleAllowDragAndDrop}
    >
      {tasks
        .filter(({ state }) => state === 'pending')
        .map(({ id, text, state }) => (
          <Task
            text={text + '-' + state}
            key={id}
            id={id}
            onDragStart={handlerDragStart}
          />
        ))}
    </Board>
  );
};
