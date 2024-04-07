import { useAppDispatch, useAppSelector } from '../store/hook';
import { Board } from './Board';
import { Task } from './Task';
import {
  handleAllowDragAndDrop,
  handleDropTask,
  handlerDragStart,
} from '../helper/drag.helper';
import { updateTask } from '../store/slices/tasks.slice';

export const DoneBoard = () => {
  const { tasks } = useAppSelector((store) => store.tasks);
  const dispatch = useAppDispatch();

  const handleUpdateTask = (id: string) => {
    dispatch(
      updateTask({
        id,
        state: 'done',
      })
    );
  };

  return (
    <Board
      title="Done Tasks"
      id="doneBard"
      onDrop={(e) => handleDropTask(e, handleUpdateTask)}
      onDragOver={handleAllowDragAndDrop}
    >
      {tasks
        .filter(({ state }) => state === 'done')
        .map(({ id, text, state }) => (
          <Task
            text={text + ' - ' + state}
            key={id}
            id={id}
            onDragStart={handlerDragStart}
            onDragEnd={() => handleUpdateTask(id)}
          />
        ))}
    </Board>
  );
};
