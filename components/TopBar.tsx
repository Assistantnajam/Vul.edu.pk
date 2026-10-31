import { Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 z-10 bg-white flex items-center" style={{ left: "clamp(200px,16.65vw,320px)", height: 93, boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
      <img src="/images/lms.png" className="h-[56px] ml-[36px]" alt="LMS" />
      <h1 className="pop ml-[28px] text-[30px] text-[#222] font-normal">
        Learning Management System{" "}
        
      </h1>
      <div className="ml-auto flex items-center pr-[36px] gap-[56px]">
        <Bell size={26} color="#b36ad8" strokeWidth={1.3} />
        <div className="flex items-center gap-[30px]">
          <div className="text-[17px] leading-[24px] text-[#222]">WAQAS AHMED KHAN<br />(BC250215973)</div>
          <img src="/images/me.png" className="h-[62px]" alt="" />
        </div>
      </div>
    </header>
  );
}
