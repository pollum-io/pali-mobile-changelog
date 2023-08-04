import Link from 'next/link';
import React from 'react';

import config from '../config.json';
import Analytics from './analytics';

export default function Footer() {
  return (
    <footer className="bg-[#162742]">
      <div className="flex flex-col md:flex-row gap-4 max-w-6xl p-8 mx-auto">
        <div className="flex-1 flex flex-col justify-center items-start">
          {config.logo.image && (
            <div className="mb-2">
              <img
                src={config.logo.image}
                className="w-12 max-h-12 object-contain"
                alt={config.logo.text}
              />
            </div>
          )}
          <Link
            href="/"
            className="block justify-items-start font-medium text-2xl text-white"
          >
            {config.logo.text}
          </Link>
          <p className="text-white">{config.meta.description}</p>
        </div>
        {config.footer.section.map((section) => (
          <div className="md:p-8" key={section.linkTitle}>
            <h3 className="font-bold mb-2 text-white">{section.linkTitle}</h3>
            <ul className="">
              {section.links.map((footerLink) => (
                <li key={footerLink.name + footerLink.link}>
                  <a
                    href={footerLink.link}
                    target="_blank"
                    rel="noopener"
                    className="block py-1 text-white"
                  >
                    {footerLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-primary-medium">
        <div className="bg-[#1d375c] w-full px-8 py-2 mx-auto font-light text-sm text-center text-white">
          {config.footer.copyright}
        </div>
      </div>
      <Analytics />
    </footer>
  );
}
