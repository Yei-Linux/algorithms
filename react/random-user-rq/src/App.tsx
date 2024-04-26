import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { PeopleTable } from './components/PeopleTable';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PeopleTable />
      </QueryClientProvider>
    </>
  );
}

export default App;
