import { useFetchUserInformation } from '../hooks/useFetchUserInformation';

export const User = () => {
  const { name, points } = useFetchUserInformation();

  return (
    <div>
      <h3>
        {name} - {points}
      </h3>
    </div>
  );
};
