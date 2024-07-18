import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from '../assets/banner-books/avatar.png';
import { AuthContext } from '../contects/AuthProvider';


export const SideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img={userImg} imgAlt="logo" className='gap-3 text-2xl ml-6 rounded'>
        Hi, {user?.displayName || "Demo User"}
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='space-y-3 font-bold ml-6'>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p className="text-gray-800 text-base">Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p className="text-gray-800 text-base">Upload Book</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p className="text-gray-800 text-base">Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p className="text-gray-800 text-base">Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p className="text-gray-800 text-base">Products</p>
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p className="text-gray-800 text-base">Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p className="text-gray-800 text-base">Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='space-y-3 font-bold ml-6'>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p className="text-gray-800 text-base">Upgrade to Pro</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p className="text-gray-800 text-base">Documentation</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            <p className="text-gray-800 text-base">Help</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
