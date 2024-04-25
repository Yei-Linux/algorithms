import { Filters } from './components/Filters';
import { Products } from './components/Products';
import { User } from './components/User';

function App() {
  return (
    <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-10 h-full">
      <header className="rounded-md p-4 bg-primary text-white grid-in-header flex items-center justify-end font-bold">
        <User />
      </header>

      <Filters />
      <Products />
    </div>
  );
}

export default App;
