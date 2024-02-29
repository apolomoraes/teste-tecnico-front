"use client"

import Image from "next/image";
import Rating from "./rating";
import { SlOptionsVertical } from "react-icons/sl";

const TableContent = () => {
  return (
    <>
      <td className="flex gap-5 border-b border-gray-300 pb-2 md:hidden">
      <div className="flex items-end gap-3">
        <div className="relative h-[5rem] w-[6rem]">
          <Image src="/car.png" fill alt="imagem"/>
        </div>

        <div className="flex flex-col">
          <h2 className="mt-[0.5rem] font-bold text-lg">Mini Cooper 2020</h2>
          <p className="mb-[0.8rem] text-sm text-gray-400">Next reservation: 11/07</p>
          <Rating rating={5} />
        </div>
      </div>

      <SlOptionsVertical className="flex content-start"/>
    </td>

      <td className="hidden md:block">
        <div className="flex items-center gap-[0.5rem]">
          <div className="relative h-[3rem] w-[3rem] ">
            <Image src="/car.png" fill alt="imagem"/>
          </div>

          <h2>Mini Cooper</h2>
        </div>
      </td>
    </>
  );
}
 
export default TableContent;