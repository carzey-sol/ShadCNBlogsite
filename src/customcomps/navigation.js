
import { ImBlog } from "react-icons/im";
import Mode  from '@/customcomps/moonicon';

import { Link } from "lucide-react";
import LoggedStatus from "@/customcomps/loggedstatus";

  
const navigation = () => {
  return (
    <div className="flex justify-between ">

    <ImBlog size={30} />
    <div className="flex gap-8">
    <Mode />
    <LoggedStatus />
    </div>

    </div>
  )
}

export default navigation