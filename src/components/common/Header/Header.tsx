import Link from 'next/link';
import { Flex } from '../../ui';

type Props = {};
const Header = (props: Props) => {
  return (
    <Flex className="justify-between relative px-4 py-4 items-center">
      <Link href="/">
        <a className="inline-box">
          <span>HomePage</span>
        </a>
      </Link>
      <Flex className="items-center gap-x-2">
        <Link href="/">
          <a className="px-2 py-2 inline-block">Docs</a>
        </Link>
        <Link href="/">
          <a className="px-2 py-2 inline-block">Docs</a>
        </Link>
        <Link href="/">
          <a className="px-2 py-2 inline-block">Docs</a>
        </Link>
      </Flex>
    </Flex>
  );
};
export default Header;
