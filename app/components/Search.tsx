'use client'
import * as React from 'react';
import { GrFilter } from 'react-icons/gr';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Search: React.FC = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <p className="mb-4 text-lg font-semibold">Recherche de produits et références en électricité</p>
      <div className="flex items-center border rounded-full p-2">
        <input
          type="text"
          placeholder="Rechercher"
          className="rounded-full pl-2 focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="ml-4 p-2 rounded-full bg-green-100 text-white cursor-pointer">
              <GrFilter />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Options de filtrage</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="option1">Option 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">Option 2</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option3">Option 3</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Search;
