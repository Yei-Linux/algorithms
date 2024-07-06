import { useState } from 'react';

export const SubmitFormData = () => {
  const [formString, setFormString] = useState<Array<[string, unknown]>>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = new FormData(e.currentTarget);
    setFormString([...form.entries()]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
        </div>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {formString.map(([key, value]) => (
          <li>
            - {key}: {value as string}
          </li>
        ))}
      </ul>
    </div>
  );
};
