import './App.css';
import { CategoriesComponent } from './components/Categories';
import { PlaylistComponent } from './components/Playlist';
import { ReleasesComponent } from './components/Release';
import { useAuth } from './hooks/useAuth';
import { Main } from './layouts/Main';
import { Sidebar } from './layouts/Sidebar';

function App() {
  useAuth();

  return (
    <main className="grid grid-areas-layout grid-cols-layout grid-rows-layout h-full rounded-xl overflow-hidden">
      <Sidebar />
      <Main text="Your favorite tunes" description="All sun and all moon">
        <div className="flex flex-col gap-10 my-auto">
          <ReleasesComponent />
          <PlaylistComponent />
          <CategoriesComponent />
        </div>
      </Main>
    </main>
  );
}

export default App;
