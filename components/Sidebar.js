import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title="Edith Puthie" />
      <SidebarRow Icon={UsersIcon} title="friends" />
      <SidebarRow Icon={UserGroupIcon} title="groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="watch" />
      <SidebarRow Icon={CalendarIcon} title="events" />
      <SidebarRow Icon={ClockIcon} title="memories" />
      <SidebarRow Icon={ChevronDownIcon} title="see more" />
    </div>
  );
};

export default Sidebar;
