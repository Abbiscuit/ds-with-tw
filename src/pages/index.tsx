import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../components/common';
import { Box, Card, Flex } from '../components/ui';

type Props = {};
const HomePage: NextPage = (props: Props): JSX.Element => {
  return (
    <main>
      <Header />
      <Box>
        <Card>
          <h3 className="text-2xl">Card Title</h3>
          <p>subTitle is here</p>
          <button className="px-4 py-2 bg-black text-white">Button</button>
        </Card>

        <Card className="w-80">
          <Image
            className=" rounded-tl-2xl rounded-tr-2xl w-full"
            layout="responsive"
            width={500}
            height={500}
            src="https://pbs.twimg.com/profile_images/961550355094896640/jTE-_4-M_400x400.jpg"
            alt=""
          />
          <Flex className="items-center gap-x-4 mt-4">
            <p className="font-semibold">Hiro</p>
            <span>・</span>
            <p className="font-semibold">UI Designer / Developer</p>
          </Flex>
          <Box className="leading-relaxed text-neutral-500 mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nemo tempora tempore provident culpa praesentium qui pariatur,
              assumenda dolores! Labore veritatis quaerat qui cumque minus est
              voluptatibus provident deleniti dolores.
            </p>
          </Box>
        </Card>
      </Box>
    </main>
  );
};
export default HomePage;
