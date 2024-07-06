import { useToggle } from '../hooks/useToggle';

export const ToggleText = () => {
  const { toggle, isVisible } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Show / Hide</button>

      {isVisible && <p>Welcome to React Challenges</p>}
    </div>
  );
};
