import React from 'react';

import config from '../config.json';
import useWindowSize from '../misc/useWindowSize';

interface Item {
  name: string;
  link: string;
  type?: string;
}

type Menu = Array<Item>;

const MobileMenu = ({ menu }: { menu: Menu }) => {
  return (
    <div className="group relative">
      <button className="rounded px-3 py-2">
        Menu
        <span className="ml-2 text-sm">▼</span>
      </button>
    </div>
  );
};

const SimpleMenuItem = ({ name, link, type = '' }: Item) => (
  <a
    href={link}
    target="_blank"
    rel="noopener"
    className={`px-3 py-2 ${
      type === 'button'
        ? 'rounded bg-primary-white hover:bg-gray-400 transition-colors'
        : 'text-white'
    }`}
  >
    {name}
  </a>
);

export default function NavMenu() {
  const { width } = useWindowSize();

  if (width < 640) {
    return <></>;
  }

  return (
    <nav className="flex gap-4">
      {(config.header.menu as Menu).map((item) => (
        <SimpleMenuItem {...item} key={item.name} />
      ))}
    </nav>
  );
}
