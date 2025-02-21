import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="w-full bg-gray-50 py-3 px-4" aria-label="Breadcrumb">
      <div className="container mx-auto">
        <ol className="flex items-center list-none p-0 m-0">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
              <Link
                href={item.href}
                className={`text-sm ${
                  index === items.length - 1
                    ? 'text-primary font-medium'
                    : 'text-gray-600 hover:text-primary transition-colors'
                }`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
