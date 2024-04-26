import styles from './people.module.css';
import { useFetchPeople } from '../hooks/useFetchPeople';
import { useCallback, useState } from 'react';

export const PeopleTable = () => {
  const [idsToHide, setIdsToHide] = useState<string[]>([]);
  const [isColorized, setIsColorized] = useState(false);
  const [isSortedByCountry, setIsSortedByCountry] = useState(false);

  const { data } = useFetchPeople({ page: 1 });

  const colorize = useCallback(
    (index: number) => {
      if (!isColorized) return 'transparent';

      return index % 2 ? 'green' : 'darkgray';
    },
    [isColorized]
  );

  const handleColorize = () => setIsColorized((prev) => !prev);
  const handleSortCountry = () => setIsSortedByCountry((prev) => !prev);
  const handleResetState = () => setIdsToHide([]);

  const getResults = () => {
    if (!data?.results) return data?.results;
    if (!isSortedByCountry) return data?.results;

    let newData = [...data.results];

    return newData.sort((a, b) => {
      if (!isSortedByCountry) return 0;

      if (a.location.country < b.location.country) {
        return -1;
      }
      if (a.location.country > b.location.country) {
        return 1;
      }
      return 0;
    });
  };

  const handleRemoveRow = (id: string) =>
    setIdsToHide((prev) => [...new Set([...prev, id])]);

  return (
    <div>
      <div>
        <h2>Tech Interview</h2>

        <ul className={styles.filters}>
          <li onClick={handleColorize}>Colorize Rows</li>
          <li onClick={handleSortCountry}>Sort by Country</li>
          <li onClick={handleResetState}>Reset State</li>
        </ul>
      </div>

      <table className={styles.people_table}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Pais</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {getResults()?.map(({ id, picture, name, location }, index) => (
            <tr
              key={id.name + '_' + name.first}
              style={{
                background: colorize(index),
                display: idsToHide.includes(id.name + '_' + name.first)
                  ? 'none'
                  : '',
              }}
            >
              <td>
                <img src={picture.thumbnail} alt={name.first} />
              </td>
              <td>
                {id.name}-{name.first}
              </td>
              <td>{name.last}</td>
              <td>{location.country}</td>
              <td
                className={styles.people_table_remove}
                onClick={() => handleRemoveRow(id.name + '_' + name.first)}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
