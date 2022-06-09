import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & {
  readonly children: ReactNode;
  readonly className?: string;
};

const Card = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={`px-4 py-4 bg-white rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow duration-300 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Card;
