import { tv } from 'tailwind-variants';

const wrapperMessage = tv({
  base: 'w-full flex',
  variants: {
    position: {
      primary: 'justify-start',
      secondary: 'justify-end',
    },
  },
  defaultVariants: {
    position: 'primary',
  },
});

const message = tv({
  base: 'p-4 w-fit shadow-md rounded-lg',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type Message = {
  text: string;
  variant: 'primary' | 'secondary';
};

export const Message = ({ text, variant }: Message) => {
  return (
    <div className={wrapperMessage({ position: variant })}>
      <div className={message({ color: variant })}>{text}</div>
    </div>
  );
};
