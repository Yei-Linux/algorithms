import { Clock } from './components/Clock';
import { CounterManagerV2 } from './components/CounterManager/CounterManagerV2';

function App() {
  return (
    <div>
      <CounterManagerV2
        counters={[
          { id: crypto.randomUUID(), value: 2 },
          { id: crypto.randomUUID(), value: 3 },
          { id: crypto.randomUUID(), value: 3 },
        ]}
      />
      <Clock />
    </div>
  );
}

export default App;
