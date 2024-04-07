import { PropsWithChildren } from 'react';
import './table.css';

const TBody = ({ children }: PropsWithChildren) => (
  <tbody className="t__body">{children}</tbody>
);
const THead = ({ children }: PropsWithChildren) => (
  <thead className="t__head">{children}</thead>
);
const TR = ({ children }: PropsWithChildren) => (
  <tr className="t__r">{children}</tr>
);
const TD = ({ children }: PropsWithChildren) => (
  <td className="t__d">{children}</td>
);

export const Table = ({ children }: PropsWithChildren) => {
  return <table>{children}</table>;
};

Table.TBody = TBody;
Table.THead = THead;
Table.TR = TR;
Table.TD = TD;

Table.displayName = 'Table';
