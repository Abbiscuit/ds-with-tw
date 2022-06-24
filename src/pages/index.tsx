import { NextPage } from 'next';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

const Spacer = (): JSX.Element => {
  return <div aria-hidden="true" className="flex-1 place-self-stretch"></div>;
};

const WaveDecoration = ({
  children,
  color,
  ...rest
}: {
  children: ReactNode;
  color?: 'yellow' | 'blue';
} & ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      className={`underline decoration-wavy decoration-2 underline-offset-4 ${
        color === 'yellow'
          ? 'decoration-yellow-500'
          : color === 'blue'
          ? 'decoration-blue-500'
          : 'decoration-black'
      }`}
      {...rest}
    >
      {children}
    </span>
  );
};

const HeaderPanel = ({
  title,
  description,
}: {
  title: string | JSX.Element;
  description: string | JSX.Element;
}) => {
  return (
    <div className="border-b bg-white px-10 py-10">
      <div className="container mx-auto">
        <div className="space-y-4">
          <h1 className="font-display text-6xl font-semibold">{title}</h1>
          <p className="font-body text-black/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <main>
        <HeaderPanel
          title="Hello, I am Hiro"
          description={
            <>
              I love <WaveDecoration color="yellow">JavaScript</WaveDecoration>{' '}
              and <WaveDecoration color="blue">CSS</WaveDecoration> for
              developing beautiful UI.
            </>
          }
        />

        <section className="bg-zinc-900 p-10">
          <div className="container mx-auto">
            <div className="flex gap-x-10">
              <div className="w-[300px] shrink-0">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="prose font-body text-white/80">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iure, dolorum, quasi, aperiam repudiandae explicabo aut saepe
                  dolores veniam sit consectetur placeat voluptas aliquam
                  deleniti ipsa incidunt. Natus odit omnis consectetur.
                </p>
                <p>
                  目的を明確にする
                  プロトタイピングはあくまで検証のために作るものです。プロジェクトを次のステップに進めるためには何を知る必要があるのか、そのためにプロトタイプを用いて何が知りたいのか、こうしたことが曖昧なままではプロトタイピングを実施する意味は薄れるでしょう。前提となる検証目的を明確にし、チーム内でもその意識を共有することが大切です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-10">
          <div className="container mx-auto">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
