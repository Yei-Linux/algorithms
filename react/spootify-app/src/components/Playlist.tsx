import { Album } from './Album';
import { SectionView } from '../layouts/SectionView';
import { useFetchPaginationSpoti } from '../hooks/useFetchPaginationSpoti';
import { Playlist } from '../types/playlist';
import { fetchPlaylist } from '../services/playlist.service';

export const PlaylistComponent = () => {
  const {
    dataValues: playlistValues,
    handleNext,
    handlePrev,
  } = useFetchPaginationSpoti<Playlist[]>({ getDataService: fetchPlaylist });

  return (
    <SectionView
      sectionTitle="PLAYLIST"
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <ul className="flex gap-3">
        {playlistValues.map(({ name, images, id }) => (
          <li key={id}>
            <Album title={name} image={images?.[0]?.url} />
          </li>
        ))}
      </ul>
    </SectionView>
  );
};
