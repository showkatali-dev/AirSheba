import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function TopBar() {
  return (
    <div className="bg-neutral/10 hidden sm:block">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 py-2 flex justify-between text-sm">
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-1">
            <HiOutlinePhone />
            +971585075089
          </p>
          <p className="flex items-center gap-1">
            <HiOutlineMail />
            info@myvoiaj.com
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p>Currency: AED</p>
          <p>Language: EN</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
