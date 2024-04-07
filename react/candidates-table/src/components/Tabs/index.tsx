import { useMemo } from 'react';
import { useAppSelector } from '../../store/hooks';
import './tabs.css';
import { stepHashMap } from '../StepsSelect';

export const Tabs = () => {
  const { interviewers } = useAppSelector((store) => store.interviewers);

  const { paperwork, backgroundCheck, drugTest } = useMemo(() => {
    const paperwork = interviewers.filter(
      ({ step }) => step === stepHashMap.PAPERWOKR
    ).length;
    const backgroundCheck = interviewers.filter(
      ({ step }) => step === stepHashMap.BACKGROUNDCHECK
    ).length;
    const drugTest = interviewers.filter(
      ({ step }) => step === stepHashMap.DRUGTEST
    ).length;

    return { paperwork, backgroundCheck, drugTest };
  }, [JSON.stringify(interviewers)]);

  return (
    <div className="tabs__container">
      <ul className="tabs__list">
        <li>ALL CANDIDATES ({interviewers.length})</li>
        <li>PAPERWORK ({paperwork})</li>
        <li>BACKGROUND CHECK ({backgroundCheck})</li>
        <li>DRUG TEST ({drugTest})</li>
      </ul>
    </div>
  );
};
