import { useFetchInterviewers } from '../../hooks/useFetchInterviewers';
import { usePatchInterviewer } from '../../hooks/usePatchInterviewer';
import { useAppSelector } from '../../store/hooks';
import { StepsSelect } from '../StepsSelect';
import { Table } from '../Table';

export const Candidates = () => {
  const { search } = useAppSelector((store) => store.interviewers);
  const { interviewers } = useFetchInterviewers();
  const { handlePatchInterviewer } = usePatchInterviewer();

  return (
    <Table>
      <Table.THead>
        <Table.TR>
          <Table.TD>Candidate</Table.TD>
          <Table.TD>Date Interview</Table.TD>
          <Table.TD></Table.TD>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        {interviewers
          .filter(({ name }) =>
            search ? name.toLowerCase().includes(search.toLowerCase()) : true
          )
          .map(({ id, name, time_interview, step }) => (
            <Table.TR key={id}>
              <Table.TD>{name}</Table.TD>
              <Table.TD>{time_interview}</Table.TD>
              <Table.TD>
                <StepsSelect
                  onChange={(e) =>
                    handlePatchInterviewer(id.toString(), e.target.value)
                  }
                  defaultValue={step}
                />
              </Table.TD>
            </Table.TR>
          ))}
      </Table.TBody>
    </Table>
  );
};
