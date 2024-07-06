import { useContext, useRef } from 'react';
import { ResultsContext } from './provider';

export const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { addResults } = useContext(ResultsContext);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    const form = new FormData(e.currentTarget);
    const name = form.get('name') as string;
    const age = form.get('value') as unknown as number;

    addResults({ name, age });
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleForm}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Type your name..."
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Type your age..."
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
