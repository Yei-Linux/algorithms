import { useAppDispatch } from '../store/hooks';
import { patchInterviewerThunk } from '../store/thunks/interviewers.thunk';

export const usePatchInterviewer = () => {
  const dispatch = useAppDispatch();

  const handlePatchInterviewer = async (id: string, newStep: string) => {
    dispatch(
      patchInterviewerThunk({
        id,
        newStep,
      })
    );
  };

  return { handlePatchInterviewer };
};
