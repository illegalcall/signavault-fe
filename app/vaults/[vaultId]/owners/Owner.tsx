import { Button } from '@/components/ui/button';
import React from 'react';

import { IoIosCopy } from '@react-icons/all-files/io/IoIosCopy';
import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit';

interface Props {
  id: string;
  name: string;
  publicKey: string;
}

const Owner: React.FC<Props> = ({ name, publicKey }) => {
  return (
    <div className="vault-container w-full flex flex-col gap-5">
      <div className="w-full flex justify-between items-center border-2 h-[70px] px-8 rounded-3xl cursor-pointer border-slate-50 hover:border-red-500">
        <span className="flex gap-4">
          <div className="flex flex-col">
            <span>{name}</span>
            <span>{publicKey}</span>
          </div>
        </span>
        <div className="flex gap-2">
          <span className="p-2 rounded-full bg-slate-600">
            <AiFillEdit />
          </span>
          {/* <Button></Button> */}
          <span className="p-2 rounded-full bg-slate-600">
            <IoIosCopy />
          </span>
          {/* <Button></Button> */}
        </div>
      </div>
    </div>
  );
};

export default Owner;
