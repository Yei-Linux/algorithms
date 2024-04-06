import { Album } from './Album';
import { SectionView } from '../layouts/SectionView';
import { useFetchPaginationSpoti } from '../hooks/useFetchPaginationSpoti';
import { fetchCategories } from '../services/categories.service';
import { Category } from '../types/categories';

export const CategoriesComponent = () => {
  const {
    dataValues: categories,
    handleNext,
    handlePrev,
  } = useFetchPaginationSpoti<Category[]>({ getDataService: fetchCategories });

  return (
    <SectionView
      sectionTitle="PLAYLIST"
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <ul className="flex gap-3">
        {categories.map(({ name, icons, id }) => (
          <li key={id}>
            <Album title={name} image={icons?.[0]?.url} />
          </li>
        ))}
      </ul>
    </SectionView>
  );
};
