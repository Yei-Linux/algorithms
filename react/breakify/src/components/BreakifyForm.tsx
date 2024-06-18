import { usePreffix } from './usePreffix';

export const BreakifyForm = () => {
  const {
    preffix: preffixFirst,
    suffix: suffixFirst,
    label: firstName,
    updateLabel: updateFirstName,
  } = usePreffix();
  const {
    preffix: preffixLast,
    suffix: suffixLast,
    label: lastName,
    updateLabel: updateLastName,
  } = usePreffix();

  return (
    <div className="max-w-[500px] flex flex-col gap-3 p-4">
      <div className="flex flex-col gap-3 justify-center items-center w-full">
        {preffixFirst && (
          <p className="text-white">
            <span className="bg-primary text-[#FFFFFF] w-[30px] h-[30px] inline-block text-center mr-1">
              {preffixFirst}
            </span>
            <span>{suffixFirst}</span>
          </p>
        )}
        {preffixLast && (
          <p className="text-white">
            <span className="bg-primary text-[#FFFFFF] w-[30px] h-[30px] inline-block text-center mr-1">
              {preffixLast}
            </span>
            <span>{suffixLast}</span>
          </p>
        )}
      </div>

      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex justify-between gap-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="first_name" className="text-primary">
              First Name
            </label>
            <input
              type="text"
              className="rounded-md outline-none border border-primary-2 px-2"
              value={firstName}
              id="first_name"
              onChange={(e) => updateFirstName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="last_name" className="text-primary">
              Last Name
            </label>
            <input
              className="rounded-md outline-none border border-primary-2 px-2"
              type="text"
              value={lastName}
              id="last_name"
              onChange={(e) => updateLastName(e.target.value)}
            />
          </div>
        </div>

        <button className="rounded-md bg-primary w-full">Breakify</button>
      </form>
    </div>
  );
};
