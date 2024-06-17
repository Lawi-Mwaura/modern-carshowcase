"use client";
import { Fragment, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, ListboxButton, Transition } from '@headlessui/react';
import { customFilterProps } from '@/types';

const CustomFilter = ({ title, options }: customFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  
  return (
    <div className="w-fit">
     <Listbox
       value={selected}
        onChange={(e) => setSelected(e)}
>
      <div className="relative w-fit z-10">
       <ListboxButton className="custom-filter__btn">
        <span>
          {selected.title}
        </span>
       </ListboxButton>
      </div>
     </Listbox>
    </div>
  )
}

export default CustomFilter