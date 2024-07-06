import { useState } from 'react';
import styles from './styles.module.css';

export type ICities = Array<{
  id: string;
  name: string;
}>;

export default function CitiesTodoList() {
  const [input, setInput] = useState('');
  const [cities, setCities] = useState<ICities>([]);

  const addCities = (name: string) => {
    const id = Date.now().toString();
    setCities((prev) => [...prev, { name, id }]);
  };

  const removeCity = (idSearch: string) => {
    setCities((prev) => prev.filter(({ id }) => idSearch !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div>
      <div className={styles.searchbox}>
        <input
          placeholder="Add city"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button onClick={() => addCities(input)}>Add</button>
      </div>

      <ul className={styles.cities}>
        {cities.map(({ id, name }) => (
          <li key={id}>
            <span>{name}</span>
            <button onClick={() => removeCity(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
