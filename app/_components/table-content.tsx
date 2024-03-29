import Image from "next/image";
import Rating from "./rating";
import { SlOptionsVertical } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

interface TableContentProps {
  rating: number;
  available: boolean;
}

const TableContent = ({rating, available}: TableContentProps) => {
  return (
    <>
      <tr className="md:hidden">
        <td className="flex gap-5 border-b border-gray-100 pb-2">
          <div className="flex items-end gap-3">
            <div className="relative h-[5rem] w-[6rem]">
              {
                available ? <span className="flex items-center justify-center absolute z-50 w-[1.5rem] h-[1.5rem] bg-green-700 rounded-full top-1 left-1">
                <FaCheck className="h-4 w-4 text-white" />
                </span> :
                <span className="flex items-center justify-center absolute z-50 w-[1.5rem] h-[1.5rem] bg-red-700 rounded-full top-1 left-1">
                <FiX className="h-4 w-4 text-white" />
                </span>
              }
              <Image src="/car.png" fill alt="Imagem de um carro preto"/>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-base text-gray-900">Mini Cooper 2020</h2>
              <p className="mb-[0.8rem] mt-[0.5rem] text-gray-500 text-xs">Next reservation: 11/07</p>
              <Rating rating={5} />
            </div>
          </div>
          <SlOptionsVertical className="size-[20px]"/>
        </td>
      </tr>

      <tr className="hidden md:flex items-center justify-between px-2 py-2 border-b border-gray-50">
        <td className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="relative h-[3rem] w-[3rem] ">
              <Image src="/car.png" fill alt="Imagem de um carro preto"/>
            </div>
            <h2 className="text-sm text-gray-900">Mini Cooper</h2>
          </div>
        </td>
        <td className="text-gray-500 text-sm">11/07</td>

        <td className={available ? 'text-green-800 bg-green-100 text-xs text-center font-medium  rounded-md py-1 px-[0.8rem]' : 'text-red-800 bg-red-100 text-xs text-center font-medium  rounded-md py-1 px-[0.8rem]'}>{available ? 'available' : 'unavailable'}</td> 

        <td className="">
          <Rating rating={rating} />
        </td>
        <td>
          <SlOptionsVertical className="size-[24px]"/>
        </td>
      </tr>
    </>
  );
}
 
export default TableContent;