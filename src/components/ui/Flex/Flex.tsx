import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & {
  readonly children: ReactNode;
  readonly className?: string;
};

const Flex = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`flex ${className}`} {...rest}>
      {children}
    </div>
  );
};
export default Flex;
