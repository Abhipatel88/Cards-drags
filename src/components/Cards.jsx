import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Cards({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2}  className=' relative w-60 h-72 bg-zinc-900/70 text-white rounded-[50px] px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5'>{data.decs}</p>
        <div className="footer absolute bottom-0 w-full  h-15  left-0 ">
            <div className='flex items-center py-3 justify-between px-7 '>
                <h5>{data.filesize}</h5>
                <span className='w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center'>
                {data.close ? <IoMdClose /> : <FaLocationArrow />}

                </span>
            </div>
            {
                data.tag.isOpen ? (<div className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor}    `}>
                    <h3>{data.tag.tagTitle}</h3>
                </div>) : null
            }
            
        </div>
    </motion.div>
    
  )
}

export default Cards
