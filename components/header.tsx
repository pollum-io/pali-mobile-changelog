import Link from 'next/link';

import config from '../config.json';
import NavMenu from './navMenu';

export default function Header() {
  return (
    <header className="bg-[#162742]">
      <div className="flex items-center justify-between max-w-6xl p-8 mx-auto">
        <Link href="/" className="font-medium text-2xl">
          <span className="flex gap-2">
            {config.logo.image && (
              <img
                src={config.logo.image}
                className="w-8 max-h-8 object-contain"
                alt={config.logo.text}
              />
            )}
            <span className="text-white">{config.logo.text}</span>
          </span>
        </Link>
        <NavMenu />
      </div>
      <div className="max-w-6xl p-8 mx-auto">
        <h1 className="text-5xl font-medium mb-4 text-white">
          {config.header.title}
        </h1>
        <p className="text-lg max-w-md text-white">
          {config.header.description}
        </p>
      </div>
    </header>
  );
}
