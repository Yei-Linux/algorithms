import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSearch } from '../../store/slices/interviewer.slice';
import './search.css';

export const Search = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((store) => store.interviewers);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    dispatch(setSearch(e?.target.value ?? ''));
  };

  return (
    <div className="search__container">
      <input
        type="search"
        placeholder="Start typing to filter by name..."
        className="search__input"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
