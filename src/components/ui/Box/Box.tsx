import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & {
  readonly children: ReactNode;
  readonly className?: string;
};

const Box = ({ children, className, ...rest }: Props) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};
export default Box;
