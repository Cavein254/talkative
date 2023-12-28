import MessageProp from "../messageprop/MessageProp";
import SidebarLink from "../sidebarlink/SidebarLink";

const MainSidebar = () => {
  return (
    <div className="flex flex-col px-4 py-2">
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
      <SidebarLink />
      <div className="absolute bottom-0">
        <MessageProp />
      </div>
    </div>
  );
};

export default MainSidebar;
