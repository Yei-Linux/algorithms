import { Interviewer } from '../types/interviewers.type';

export const fetchInterviewersService = async () => {
  try {
    const promise = await fetch(
      'https://my-json-server.typicode.com/workstep/react-challenge-data/candidates'
    );

    const json = (await promise.json()) as Interviewer[];

    return json;
  } catch (error) {
    throw new Error(
      'Gettings error meanwhile we are fetching the interviewers'
    );
  }
};

export const patchInterviewerService = async (id: string, newStep: string) => {
  try {
    const promise = await fetch(
      'https://my-json-server.typicode.com/workstep/react-challenge-data/candidates/' +
        id,
      {
        method: 'PATCH',
        body: JSON.stringify({
          step: newStep,
        }),
      }
    );

    const json = await promise.json();

    return json;
  } catch (error) {
    throw new Error('Error while we are updating the candidate');
  }
};
