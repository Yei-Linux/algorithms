import { Album } from './Album';
import { SectionView } from '../layouts/SectionView';
import { useFetchPaginationSpoti } from '../hooks/useFetchPaginationSpoti';
import type { Releases } from '../types/releases';
import { fetchReleases } from '../services/release.service';

export const ReleasesComponent = () => {
  const {
    dataValues: albumReleasesValues,
    handleNext,
    handlePrev,
  } = useFetchPaginationSpoti<Releases[]>({ getDataService: fetchReleases });

  return (
    <SectionView
      sectionTitle="RELEASED THIS WEEK"
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <ul className="flex gap-3">
        {albumReleasesValues.map(({ name, images, id }) => (
          <li key={id}>
            <Album title={name} image={images?.[0]?.url} />
          </li>
        ))}
      </ul>
    </SectionView>
  );
};
