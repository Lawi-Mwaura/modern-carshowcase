"use client";
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, ComboboxOption, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query === ""
    ? manufacturers
    : manufacturers.filter((item) =>
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className="search-manufacturer relative">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) =>
                      `search-manufacturer__option cursor-default select-none relative py-2 pl-3 pr-9 ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {item}
                  </ComboboxOption>
                )
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
