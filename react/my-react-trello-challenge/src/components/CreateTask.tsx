import { useState } from 'react';
import { useAppDispatch } from '../store/hook';
import { createTask } from '../store/slices/tasks.slice';

export const CreateTask = () => {
  const dispatch = useAppDispatch();
  const [newTask, setNewTask] = useState('');

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTask(e?.target?.value);

  const clear = () => setNewTask('');

  const createTaskHandler = () => {
    dispatch(
      createTask({
        text: newTask,
      })
    );
    clear();
  };

  return (
    <div className="flex gap-10 justify-around shadow-md rounded-md w-full p-4 flex-wrap">
      <input
        type="text"
        onChange={handlerChange}
        value={newTask}
        className="outline-none border-primary border-2 border rounded-md w-[300px] p-4"
      />
      <button className="bg-primary p-4 rounded-md" onClick={createTaskHandler}>
        Create
      </button>
    </div>
  );
};
