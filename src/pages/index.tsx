import { NextPage } from 'next';
import Image from 'next/image';
import { useRef } from 'react';

import { Header } from '../components/common';
import { Box, Card, Flex, Text } from '../components/ui';

const HomePage: NextPage = (): JSX.Element => {
  const flexRef = useRef<HTMLDivElement | null>(null);
  console.log(flexRef.current);
  return (
    <main>
      <Header />

      <Box className="px-4 py-4">
        <Box className="bg-white border-neutral-100 border rounded-2xl space-y-4 py-4">
          <Flex className="flex-col px-4">
            <Text color="black" as="h1" variant="subTitle1">
              Headline1
            </Text>
            <Text color="gray" as="span" variant="caption">
              2022 June 15
            </Text>
          </Flex>
          <Box className="px-4">
            <Text color="gray" as="p" variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis tempora modi quis exercitationem asperiores accusamus
              voluptate enim assumenda quaerat nesciunt mollitia possimus
              magnam, atque qui praesentium sed, recusandae quidem ratione.
            </Text>
          </Box>
        </Box>

        <Flex className="flex-col gap-y-2 px-4">
          <h2 className="text-2xl font-semibold">Section Title</h2>
          <Card>
            <Flex className="flex-col">
              <h3 className="text-2xl">Card Title</h3>
              <p className="text-neutral-500">みんなのカードです</p>
            </Flex>
            <Box className="mt-4">
              <p>subTitle is here</p>
              <button className="px-4 py-2 bg-black text-white">Button</button>
            </Box>
          </Card>
        </Flex>

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
