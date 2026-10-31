import { BookOpenText, Users, CircleHelp, RefreshCcwDot, Megaphone, type LucideIcon } from "lucide-react";
import { COURSES, ACTS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { BookOpenText, Users, CircleHelp, RefreshCcwDot, Megaphone };

export default function HomeView() {
  return (
    <div className="pt-[44px]">
      <h2 className="text-[27px] font-medium text-[#1b1f2a] mb-[34px]">
        My Courses <span className="font-normal">(</span> <span className="font-normal text-[#5b6bd6]">Fall 2026</span> <span className="font-normal">)</span>
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[37px] gap-y-[37px] pb-10">
        {COURSES.map(([title, dept, name, details, badge, img, ann]) => (
          <div key={title} className="course-card bg-white" style={{ boxShadow: "0 6px 8px rgba(0,0,0,.28)", height: 430 }}>
            <div className="banner px-[30px] pt-[16px] text-white" style={{ height: 120 }}>
              <div className="text-[23px] font-medium">{title}</div>
              <div className="text-[16px] mt-[8px] text-white/70">{dept}</div>
              <div className="text-[16px] mt-[6px] text-white/70">3 Credit Hour(s)</div>
            </div>
            <div className="relative px-[18px]" style={{ height: 310 }}>
              <div className="absolute right-[8px] top-[18px] w-[58px] h-[42px] rounded-full border border-[#8fb4f2] text-[#5b6bd6] italic text-[27px] flex items-center justify-center" style={{ background: "#eef4ff" }}>{badge}</div>
              <div className="flex pt-[24px]">
                <div className="w-[120px] h-[148px] p-[3px] rounded-md border border-[#e3e3e8] shadow-sm bg-white overflow-hidden">
                  <img src={`/images/${img}.jpg`} className="w-full h-[140px] object-cover object-top rounded" alt={name} />
                </div>
                <div className="ml-[70px] mt-[12px] text-[13px] leading-[26px] text-[#111]">
                  <div className="font-medium">{name}</div>
                  {details.map((d) => <div key={d}>{d}</div>)}
                </div>
              </div>
              <div className="absolute left-[18px] right-[18px] border-t border-[#ccc] flex" style={{ top: 197, paddingTop: 12 }}>
                {ACTS.map(([label, icon], k) => {
                  const off = label === "Activity";
                  const I = ICONS[icon];
                  return (
                    <div key={label} className={`relative flex flex-col items-center ${off ? "" : "action-item cursor-pointer"}`} style={{ width: k === 4 ? 150 : 114, color: off ? "#bbb" : "#111" }}>
                      <I size={46} strokeWidth={1.4} />
                      <span className="text-[12px] font-bold mt-[4px]">{label}</span>
                      {label === "Announcements" && ann > 0 && (
                        <span className="absolute top-0 right-[22px] w-[17px] h-[17px] rounded-full bg-[#e5393f] text-white text-[11px] flex items-center justify-center">{ann}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
