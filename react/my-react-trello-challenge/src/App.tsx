import { CreateTask } from './components/CreateTask';
import { DoingBoard } from './components/DoingBoard';
import { DoneBoard } from './components/DoneBoard';

function App() {
  return (
    <div className="flex flex-col gap-10">
      <CreateTask />
      <div className="w-full flex gap-10 justify-center flex-wrap">
        <DoingBoard />
        <DoneBoard />
      </div>
    </div>
  );
}

export default App;
