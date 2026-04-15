"use client"

import { 
    AiOutlineDashboard, 
    AiOutlineDatabase 
} from "react-icons/ai";
import { 
    FaAngleDown, 
    FaAngleLeft, 
    FaAngleRight, 
    FaAngleUp, 
    FaFacebook, 
    FaImages, 
    FaInstagram, 
    FaLinkedin, 
    FaPhone, 
    FaRegEye, 
    FaRegHandshake, 
    FaRegStar, 
    FaRegUser, 
    FaTiktok, 
    FaUpload, 
    FaWhatsapp, 
    FaXTwitter,
    FaLocationDot
} from "react-icons/fa6";
import { 
    GiHamburgerMenu, 
    GiMountaintop 
} from "react-icons/gi";
import { 
    GrContact 
} from "react-icons/gr";
import { 
    IoIosPricetags, 
    IoMdHelp, 
    IoMdRemoveCircleOutline 
} from "react-icons/io";
import { 
    IoAddCircleOutline, 
    IoClose, 
    IoDocumentsOutline, 
    IoHomeOutline, 
    IoLocationOutline, 
    IoPersonCircleOutline, 
    IoSettingsOutline 
} from "react-icons/io5";
import { 
    LuEyeClosed 
} from "react-icons/lu";
import { 
    MdBorderAll, 
    MdInfoOutline, 
    MdOutlineCategory, 
    MdOutlineDescription, 
    MdOutlineDesignServices, 
    MdOutlineGroups, 
    MdOutlineMailOutline, 
    MdOutlineMessage, 
    MdOutlinePersonAddAlt, 
    MdOutlineProductionQuantityLimits, 
    MdOutlineVideoLibrary 
} from "react-icons/md";
import { 
    PiSolarRoofDuotone 
} from "react-icons/pi";
import { 
    RiCalendarEventLine, 
    RiDeleteBin2Fill 
} from "react-icons/ri";
import { 
    SiMaterialdesignicons 
} from "react-icons/si";
import { 
    TbSolarElectricity, 
    TbSolarPanel2 
} from "react-icons/tb";
import { 
    TiMediaPlay 
} from "react-icons/ti";
import { 
    VscProject 
} from "react-icons/vsc";
import { BiBuildingHouse } from "react-icons/bi";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { RiTimeLine } from "react-icons/ri";
import { RiRouteLine } from "react-icons/ri";
import { BsCarFrontFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineTurnSharpLeft } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";

interface PropsInterface {
    type: string
    css?: string
}

export default function IconDefault({
    type,
    css = ""
}: PropsInterface) {

    switch (type) {
        case 'money':
            return <TbPigMoney className={css} />
        case 'help':
            return <FaHandHoldingHeart className={css} />
        case 'health':
            return <MdOutlineHealthAndSafety className={css} />
        case 'mark':
            return <IoMdCheckmark className={css} />
        case 'link':
            return <GoLinkExternal className={css} />
        case 'shift':
            return <MdOutlineTurnSharpLeft className={css} />
        case 'car':
            return <BsCarFrontFill className={css} />
        case 'notification':
            return <IoMdNotificationsOutline className={css} />
        case 'route':
            return <RiRouteLine className={css} />
        case 'time':
            return <RiTimeLine className={css} />
        case 'add':
            return <IoAddCircleOutline className={css} />
        case 'airplane':
            return <PiAirplaneTiltLight className={css} />
        case 'house':
            return <BiBuildingHouse className={css} />
        case 'address':
            return <FaLocationDot className={css} />
        case 'calendar':
            return <RiCalendarEventLine className={css} />
        case 'category':
            return <MdOutlineCategory className={css} />
        case 'client':
            return <MdOutlinePersonAddAlt className={css} />
        case 'close':
            return <IoClose className={css} />
        case 'contact':
            return <GrContact className={css} />
        case 'dashboard':
            return <AiOutlineDashboard className={css} />
        case 'delete':
            return <RiDeleteBin2Fill className={css} />
        case 'document':
            return <IoDocumentsOutline className={css} />
        case 'down':
            return <FaAngleDown className={css} />
        case 'email':
            return <MdOutlineMailOutline className={css} />
        case 'eye':
            return <FaRegEye className={css} />
        case 'eye-closed':
            return <LuEyeClosed className={css} />
        case 'facebook':
            return <FaFacebook className={css} />
        case 'help':
            return <IoMdHelp className={css} />
        case 'home':
            return <IoHomeOutline className={css} />
        case 'image':
            return <FaImages className={css} />
        case 'info':
            return <MdInfoOutline className={css} />
        case 'instagram':
            return <FaInstagram className={css} />
        case 'left':
            return <FaAngleLeft className={css} />
        case 'linkedin':
            return <FaLinkedin className={css} />
        case 'location':
            return <IoLocationOutline className={css} />
        case 'media':
            return <TiMediaPlay className={css} />
        case 'menu':
            return <GiHamburgerMenu className={css} />
        case 'message':
            return <MdOutlineMessage className={css} />
        case 'meta':
            return <AiOutlineDatabase className={css} />
        case 'mount':
            return <GiMountaintop className={css} />
        case 'order':
            return <MdBorderAll className={css} />
        case 'page':
            return <MdOutlineDescription className={css} />
        case 'partner':
            return <FaRegHandshake className={css} />
        case 'person':
            return <IoPersonCircleOutline className={css} />
        case 'phone':
            return <FaPhone className={css} />
        case 'product':
            return <MdOutlineProductionQuantityLimits className={css} />
        case 'project':
            return <VscProject className={css} />
        case 'remove':
            return <IoMdRemoveCircleOutline className={css} />
        case 'right':
            return <FaAngleRight className={css} />
        case 'role':
            return <MdOutlineGroups className={css} />
        case 'service':
            return <MdOutlineDesignServices className={css} />
        case 'settings':
            return <IoSettingsOutline className={css} />
        case 'solar':
            return <TbSolarPanel2 className={css} />
        case 'solar-power':
            return <TbSolarElectricity className={css} />
        case 'solar-roof':
            return <PiSolarRoofDuotone className={css} />
        case 'star':
            return <FaRegStar className={css} />
        case 'tag':
            return <IoIosPricetags className={css} />
        case 'tiktok':
            return <FaTiktok className={css} />
        case 'twitter':
            return <FaXTwitter className={css} />
        case 'up':
            return <FaAngleUp className={css} />
        case 'upload':
            return <FaUpload className={css} />
        case 'user':
            return <FaRegUser className={css} />
        case 'video':
            return <MdOutlineVideoLibrary className={css} />
        case 'whatsapp':
            return <FaWhatsapp className={css} />
        default:
            return <SiMaterialdesignicons className={css} />
    }
}