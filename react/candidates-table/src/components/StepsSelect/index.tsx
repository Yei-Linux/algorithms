export const stepHashMap = {
  PAPERWOKR: 'Paperwork',
  DRUGTEST: 'Drug Test',
  BACKGROUNDCHECK: 'Background Check',
  EMPTY: '',
};

const steps = [
  {
    value: '',
    label: 'Choose Step',
  },
  {
    value: 'Drug Test',
    label: 'Drug Test',
  },
  { value: 'Background Check', label: 'Background Check' },
  { value: 'Paperwork', label: 'Paperwork' },
];

type StepsSelect = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  defaultValue: string;
};

export const StepsSelect = ({ onChange, defaultValue }: StepsSelect) => {
  return (
    <select
      className="stepsselect__container"
      name="steps_select"
      id="steps_select"
      onChange={onChange}
      value={defaultValue}
    >
      {steps.map(({ value, label }) => (
        <option className="stepsselect__option" value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
