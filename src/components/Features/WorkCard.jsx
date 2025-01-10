// import React from 'react';
// import { FaPlus } from "react-icons/fa6";
// import { AiOutlineLink } from "react-icons/ai";

// const WorkCard = ({ work }) => (
//   <div className="group relative overflow-hidden shadow-lg transition-transform duration-300">
//     <img
//       src={work.imageUrl}
//       alt={work.title}
//       className="w-full h-64 object-cover"
//     />
//     <div className="absolute inset-0 bg-black h-10 bottom-0 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300">
//       <div className='absolute flex items-center justify-between bottom-0 left-0 right-0 p-6 px-10'>
//         <div>
//           <h3 className="text-white text-xl font-semibold mb-2 heading-after">{work.title}</h3>
//           <hr className='h-1 w-[40%]' />
//         </div>
//         <div className="flex items-center space-x-3">
//           <button className='bg-accent p-1.5 rounded-full'>
//             <FaPlus />
//           </button>
//           <button className='bg-accent p-1.5 rounded-full'>
//             <AiOutlineLink />
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default WorkCard;

import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

const WorkCard = ({ work }) => (
  <div className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:cursor-pointer">
    <img
      src={work.imageUrl}
      alt={work.title}
      className="w-full h-64 object-cover"
    />
    {/* Adjusted the height and positioning for the black overlay */}
    <div className="absolute bottom-0 left-0 w-full h-20 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300">
      <div className='flex items-center justify-between w-full h-full p-6 px-10'>
        <div className='flex flex-col gap-2'>
          <h3 className="text-white text-xl font-semibold heading-after">{work.title}</h3>
          <hr className='h-1 w-[35%]' />
        </div>
        <div className="flex items-center space-x-3 font-semibold text-black">
          <button className='bg-accent p-1.5 rounded-full'>
            <FaPlus />
          </button>
          <button className='bg-accent p-1.5 rounded-full'>
            <AiOutlineLink />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WorkCard;
