import React from 'react'
import SideComp from '../SidebarComponent/SideComp'
import { RiHome3Line } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { MdOutlineHistory } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import { PiFolderLight } from "react-icons/pi";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { VscSettingsGear } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className='bg-black  border-white border-r-[1px] w-[280px] min-h-screen gap-[8px]'>
      <div className='mt-7 ml-4'>

      <SideComp title={'Home'} sideImg={<RiHome3Line size={24}  color='white'   />} />
      <SideComp title={'Liked Videos'} sideImg={<BiLike size={24} color='white' />} />
      <SideComp title={'History'} sideImg={<MdOutlineHistory size={24} color='white' />
      } />
      <SideComp title={'My Content'} sideImg={<PiVideoCamera size={24} color='white' />} />
      <SideComp title={'Collections'} sideImg={<PiFolderLight size={24} color='white' />
      } />
      <SideComp title={'Subscribers'} sideImg={<RiUserFollowLine scale={24} color='white' />} />


      </div>


      <div className='mt-[150px] ml-4'>
      <SideComp title={'Support'} sideImg={<IoMdHelpCircleOutline  scale={24} color='white' />} />
      <SideComp title={'Settings'} sideImg={<VscSettingsGear scale={24} color='white' />} />

      </div>

   
    </div>
  )
}

export default Sidebar