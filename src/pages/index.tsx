import { NextPage } from 'next';
import { ReactNode } from 'react';
import cn from 'classnames';

type SizingProps = '1' | '2' | '3' | '4' | '5' | 'md' | 'lg' | 'xl';
type FlexProps = {
  readonly children: ReactNode;
  readonly spacing?: SizingProps;
};
const mapSpacing = (spacing: SizingProps) => {
  switch (spacing) {
    case '1':
      return 'gap-x-1';
    case '2':
      return 'gap-x-2';
    case '3':
      return 'gap-x-3';
    case '4':
      return 'gap-x-4';
    case '5':
      return 'gap-x-5';
    case 'md':
      return 'gap-x-10';
    case 'lg':
      return 'gap-x-20';
    case 'xl':
      return 'gap-x-80';
    default:
      return 'gap-x-1';
  }
};

const Flex = (props: FlexProps & { dir: 'row' | 'col' }) => {
  const { spacing = '1', children, dir } = props;
  return (
    <div
      className={cn(
        'flex w-full',
        mapSpacing(spacing),
        dir === 'col' ? 'flex-col' : 'flex-row items-center'
      )}
    >
      {children}
    </div>
  );
};

const Spacer = () => {
  return <div aria-hidden="true" className="flex-1 place-self-stretch"></div>;
};

const Home: NextPage = () => {
  return (
    <div>
      <section className="px-10 py-10 bg-gray-100">
        <Flex dir="row">
          <button className="bg-cyan-500 block hover:transform hover:-translate-y-1 transition-transform duration-200 shadow-cyan-500/75 shadow-lg text-white px-4 py-2 rounded">
            Subscribe
          </button>
          <Spacer />
          <p>こんにちは</p>
        </Flex>
        <Flex dir="row">
          <button className="bg-cyan-500 block hover:transform hover:-translate-y-1 transition-transform duration-200 shadow-cyan-500/75 shadow-lg text-white px-4 py-2 rounded">
            Subscribe
          </button>
          <Spacer />
          <button className="bg-pink-500 block hover:transform hover:-translate-y-1 transition-transform duration-200 shadow-pink-500/75 shadow-lg text-white px-4 py-2 rounded">
            Subscribe
          </button>
          <Spacer />
          <button className="bg-pink-500 block hover:transform hover:-translate-y-1 transition-transform duration-200 shadow-pink-500/75 shadow-lg text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </Flex>
      </section>

      <section className="px-10 py-10">
        <div className="container mx-auto bg-gray-100">
          <article className="border border-black px-4 py-4 rounded">
            <button className="bg-cyan-500 shadow-cyan-500/75 shadow-lg text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Home;
