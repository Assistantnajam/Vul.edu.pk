import { House, ListTodo, Layers, SlidersHorizontal, ChartLine, CalendarDays, Mail, ListChecks, Settings, Grip, Contact, ShoppingBag, CalendarCheck, Phone, CircleHelp, type LucideIcon } from "lucide-react";
import { NAV } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { House, ListTodo, Layers, SlidersHorizontal, ChartLine, CalendarDays, Mail, ListChecks, Settings, Grip, Contact, ShoppingBag, CalendarCheck, Phone, CircleHelp };

export default function Sidebar({ page, go }: { page: string; go: (p: string) => void }) {
  return (
    <aside className="sb fixed left-0 top-0 bottom-0 z-20 text-white overflow-hidden" style={{ width: "clamp(200px,16.65vw,320px)" }}>
      <div className="flex items-center gap-1 px-[20px]" style={{ height: 93, background: "#232838" }}>
        <img src="/images/vu.png" className="h-[70px]" alt="Virtual University" />
        <img src="/images/gop.png" className="h-[70px]" alt="MoITT, GOP" />
        <div className="ml-auto opacity-40 space-y-[5px] pr-1">
          <div className="w-[30px] h-[2px] bg-white" /><div className="w-[30px] h-[2px] bg-white" /><div className="w-[30px] h-[2px] bg-white" />
        </div>
      </div>
      <div style={{ height: 25 }} />
      {NAV.map(([label, icon]) => {
        const live = label === "Home" || label === "Grade Book";
        const I = ICONS[icon] ?? CircleHelp;
        return (
          <div key={label} onClick={() => live && go(label)}
            className={`nav-item flex items-center gap-[18px] pl-[37px] ${page === label ? "act" : ""} ${live ? "cursor-pointer" : ""}`}
            style={{ height: 55, fontSize: 17 }}>
            <I size={25} strokeWidth={1.5} /><span>{label}</span>
          </div>
        );
      })}
      <div className="absolute left-0 right-0 bottom-0 pl-[37px] pb-[2px] pt-[2px] leading-[18px]" style={{ background: "#262c3d" }}>
        <div className="font-bold text-[15px]">Virtual University Of Pakistan</div>
        <div style={{ color: "#2ec44a", fontSize: 14.5 }}>Federal Government University</div>
      </div>
    </aside>
  );
}
