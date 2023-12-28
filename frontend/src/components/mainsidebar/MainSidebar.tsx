import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import { useMedia } from "react-use";

const MainSidebar = () => {
  const isWide = useMedia("(max-width: 480px)");
  return (
    <div className="flex flex-col px-4 py-2">
      <Link to="/groups">
        {isWide ? (
          <div className="flex items-center justify-between hover:bg-gray-400 px-4 py-2 rounded-md hover:text-white border-l-4 border-transparent hover:border-purple-600">
            <div className="flex flex-row items-center font-bold">
              <div>
                <FaPeopleGroup className="text-2xl" />
              </div>
            </div>
            <div>
              <h4 className="font-bold">134</h4>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between hover:bg-gray-400 px-4 py-2 rounded-md hover:text-white border-l-4 border-transparent hover:border-purple-600">
            <div className="flex flex-row items-center font-bold">
              <div>
                <FaPeopleGroup className="text-2xl" />
              </div>
              <div>
                <h4 className="ml-2">Groups</h4>
              </div>
            </div>
            <div>
              <h4 className="font-bold">134</h4>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default MainSidebar;
