import { useMemo } from 'react';
import tokenModule from './token.module.css';

export type TokenType = 'A' | 'B';

export type Token = {
  type: TokenType;
};

export const Token = ({ type }: Token) => {
  const tokens: Record<TokenType, string> = {
    A: 'https://e7.pngegg.com/pngimages/255/685/png-clipart-tic-tac-toe-computer-icons-others-miscellaneous-angle.png',
    B: 'https://cdn-icons-png.flaticon.com/512/156/156764.png',
  };

  const token = useMemo(() => tokens?.[type], [type]);

  return (
    <img
      className={tokenModule.token}
      src={token}
      alt="Token piece"
      width={60}
      height={60}
    />
  );
};
