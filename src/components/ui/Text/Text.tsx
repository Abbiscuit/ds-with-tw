import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
} from 'react';
import cn from 'classnames';

type Color =
  | 'black'
  | 'white'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

type Variant =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subTitle1'
  | 'subTitle2'
  | 'subTitle3'
  | 'body1'
  | 'body2'
  | 'caption';

type AsProp<T extends ElementType> = {
  as?: T;
};

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProp<
  C extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type TextProps<T extends ElementType> = PolymorphicComponentPropWithRef<
  T,
  { color?: Color; variant?: Variant }
>;

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      as,
      className,
      children,
      color = 'black',
      variant = 'body1',
    }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';

    return (
      <Component
        ref={ref}
        className={cn({}, mapColor(color), mapVariant(variant), className)}
      >
        {children}
      </Component>
    );
  }
);

const mapColor = (color: Color) => {
  switch (color) {
    case 'black': {
      return 'text-neutral-900';
    }
    case 'blue': {
      return 'text-blue-800';
    }
    case 'gray': {
      return 'text-neutral-500';
    }
    case 'white': {
      return 'text-white';
    }
    default: {
      return 'text-black';
    }
  }
};

const mapVariant = (variant: Variant) => {
  switch (variant) {
    case 'headline1': {
      return 'text-6xl font-semibold';
    }
    case 'headline2': {
      return 'text-5xl font-semibold';
    }
    case 'headline3': {
      return 'text-4xl font-semibold';
    }
    case 'headline4': {
      return 'text-3xl font-semibold';
    }
    case 'headline5': {
      return 'text-2xl font-semibold';
    }
    case 'headline6': {
      return 'text-xl font-semibold';
    }
    case 'caption': {
      return 'text-xs font-normal';
    }
    case 'subTitle1': {
      return 'text-lg font-semibold';
    }
    case 'subTitle1': {
      return 'text-base font-semibold';
    }
    case 'body1': {
      return 'text-base font-normal leading-relaxed';
    }
    case 'body2': {
      return 'text-sm font-normal leading-relaxed';
    }
    default: {
      return 'text-base';
    }
  }
};

export default Text;
