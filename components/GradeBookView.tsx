import { User, Calendar, Layers, Calculator, Presentation, type LucideIcon } from "lucide-react";
import { EXEMPTED } from "@/lib/data";

const UPDATED_GRADES: string[][] = [
  ["Summer 2026","CS302","Digital Logic Design","2.30","C","63.00","72.00"],
  ["Summer 2026","MGT503","Principles of Management","3.00","B","72.00","85.00"],
  ["Spring 2026","PSC201","International Relations","3.00","B","73.50","88.00"],
  ["Spring 2026","ENG301","Business Communication","2.70","B-","69.00","75.00"],
  ["Spring 2026","MGT301","Principles of Marketing","2.70","B-","68.50","70.00"],
  ["Spring 2026","SOC101","Introduction to Sociology","3.00","B","72.00","80.00"],
  ["Spring 2026","VU001","Introduction to e-Learning","","P","",""],
  ["Spring 2026","ACC501","Business Finance","2.30","C","63.00","72.00"],
  ["Spring 2026","ECO403","Macroeconomics","2.70","B-","69.00","74.00"],
  ["Spring 2026","ISL202","Islamic Studies","3.00","B","75.00","82.00"],
  ["Fall 2025","IT430","E-Commerce","2.47","C","65.98","61.66"],
  ["Fall 2025","CS507","Information Systems","1.20","D","52.20","10.37"],
  ["Fall 2025","ACC501","Business Finance","0.00","F","28.96","13.87"],
  ["Fall 2025","ECO402","Microeconomics","1.50","D","55.50","64.99"],
  ["Fall 2025","MGT402","Cost & Management Accounting","0.00","F","39.26","51.69"],
  ["Fall 2025","MGT503","Principles of Management","1.40","D","54.40","19.36"],
  ["Fall 2025","SOC101","Introduction to Sociology","0.00","F","32.28","7.77"],
  ["Spring 2025","PAK301","Pakistan Studies",EXEMPTED],
  ["Spring 2025","ISL202","Islamic Studies","1.90","D","59.90","15.63"],
  ["Spring 2025","VU001","Introduction to e-Learning","","F","0.00","0.00"],
  ["Spring 2025","ACC501","Business Finance","0.00","F","32.09","11.79"],
  ["Spring 2025","CS304","Object Oriented Programming",EXEMPTED],
  ["Spring 2025","CS403","Database Management Systems",EXEMPTED],
  ["Spring 2025","CS101","Introduction to Computing",EXEMPTED],
  ["Spring 2025","CS201","Introduction to Programming",EXEMPTED],
  ["Spring 2025","CS302","Digital Logic Design","0.00","F","27.74","6.12"],
  ["Spring 2025","CS601","Data Communication",EXEMPTED],
  ["Spring 2025","CS610","Computer Networks",EXEMPTED],
  ["Spring 2025","ENG101","English Comprehension",EXEMPTED],
  ["Spring 2025","ENG201","Business and Technical English Writing",EXEMPTED],
  ["Spring 2025","MGT101","Financial Accounting",EXEMPTED],
  ["Spring 2025","MGT211","Introduction To Business",EXEMPTED],
  ["Spring 2025","MGT301","Principles of Marketing","0.00","F","32.13","2.70"]
];

export default function GradeBookView() {
 const tabs: [string, LucideIcon, string][] = [["Student Grade Book",User,"#fff"],["Midterm Result (FALL 2026)",Calendar,"#6a5acd"],["Grading Scheme",Layers,"#37c43f"],["Projected CGPA Calculator",Calculator,"#e0594d"],["COUM/DAC",Presentation,"#d83fb8"]];
 return(<div className="pt-[44px] pb-12">
  <div className="flex items-baseline gap-[26px] mb-[26px]"><h2 className="text-[26px] font-medium text-[#1b1f2a]">Grade Book</h2><span className="text-[13px] text-[#444]">(FALL 2026 - Regular)</span></div>
  <div className="flex text-[13px] pl-[6px]">{tabs.map(([t,Icon,c],k)=>(
   <div key={t} className={`flex items-center gap-2 px-[14px] h-[40px] ${k==0?"text-white rounded-t-md":"text-[#333]"}`} style={k==0?{background:"#6a5acd"}:{}}><Icon size={14} color={k===0?"#fff":c} strokeWidth={2}/>{t}</div>))}</div>
  <div className="bg-white" style={{boxShadow:"0 1px 6px rgba(0,0,0,.12)"}}>
   <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr_0.8fr] mx-[22px] pt-[38px]" style={{borderTop:"1px solid #eee"}}>
    <div className="pr-[16px] pb-[28px] text-[14px]">
     <div className="flex justify-between gap-4 pb-[20px] mb-[14px] border-b border-[#e8e8e8]"><div><b className="text-[17px] font-medium text-[#222]">Name</b><div className="text-[12px] text-[#888] mt-1">S/O TARIQ SAEED KHAN</div></div><div className="text-[#2ec9a0] font-medium text-[17px] text-right leading-[22px]">WAQAS AHMED<br/>KHAN</div></div>
     <div className="flex justify-between gap-4 pb-[20px] mb-[14px] border-b border-[#e8e8e8]"><div><b className="text-[17px] font-medium text-[#222]">Student ID</b><div className="text-[12px] text-[#888] mt-1">020-VU-015352</div></div><div className="text-[#e0457b] font-medium text-[17px]">BC250215973</div></div>
     <div className="flex justify-between gap-4"><div><b className="text-[17px] font-medium text-[#222]">Study Program</b><div className="text-[12px] text-[#888] mt-1 leading-[17px]">Bachelor of Science in Business &amp; Information Technology (4 year program)</div></div><div className="text-[#3b9ede] font-medium text-[15px] text-right leading-[20px] w-[40%]">Bachelor of Business &amp; Information Technology (BBIT)</div></div></div>
    <div className="px-[20px] pb-[28px] lg:border-l border-[#ddd]">
     <div className="flex justify-between pb-[18px] mb-[12px] border-b border-[#e8e8e8]"><b className="text-[17px] font-medium text-[#222]">Total Credits Required</b><span className="text-[#2ec9a0] text-[19px] font-medium">134</span></div>
     <div className="flex justify-between pb-[18px] mb-[12px] border-b border-[#e8e8e8]"><div><b className="text-[17px] font-medium text-[#222]">Total Credits Earned</b><div className="text-[12px] text-[#888] mt-1 leading-[17px]">14 studied course(s) = 36 credit(s)<br/>11 exempted course(s) = 32<br/>credit(s)</div></div><span className="text-[#3b9ede] text-[19px] font-medium self-center">68</span></div>
     <div className="flex justify-between"><b className="text-[17px] font-medium text-[#222]">Remaining Credits</b><span className="text-[#e0457b] text-[19px] font-medium">66</span></div></div>
    <div className="pl-[20px] lg:border-l border-[#ddd]"><div className="flex justify-between pt-[22px] pb-[12px] border-b border-[#2ec9a0]"><b className="text-[17px] font-medium text-[#222]">CGPA</b><span className="text-[#2ec9a0] text-[19px] font-medium">2.9/4.0</span></div></div>
   </div>
   <div className="mx-[22px] mt-[60px] pb-[40px] overflow-x-auto"><table className="w-full text-[12px] min-w-[800px]">
    <thead><tr className="text-white text-center" style={{background:"#6a5acd",height:40}}>{["Semester","Course","Title","Grade Point","Grade","Equivalent Percentage","Percentile"].map((h,i)=><th key={h} className={`font-medium px-3 ${i<3?"text-left":""} ${i==2?"w-[34%]":""}`} style={{borderRight:"1px solid #9086dc"}}>{h}</th>)}</tr></thead>
    <tbody>{UPDATED_GRADES.map((r,i)=>{const ex=r[3]===EXEMPTED;return(
     <tr key={i} style={{background:i%2?"#fff":"#f2f2f4",height:30,borderBottom:"1px solid #e4e4e8"}}>
      <td className="px-3 text-[#333]" style={{borderRight:"1px solid #ddd"}}>{r[0]}</td><td className="px-3" style={{borderRight:"1px solid #ddd"}}>{r[1]}</td><td className="px-3" style={{borderRight:"1px solid #ddd"}}>{r[2]}</td>
      {ex?<><td style={{borderRight:"1px solid #ddd"}}/><td className="px-3 text-[#f0a030]" style={{borderRight:"1px solid #ddd"}}>Exempted</td><td style={{borderRight:"1px solid #ddd"}}/><td/></>:<>
      <td className="px-3 text-right text-[#2ec9a0]" style={{borderRight:"1px solid #ddd"}}>{r[3]}</td>
      <td className="px-3 font-medium" style={{borderRight:"1px solid #ddd",color:r[4]==="F"||r[4]==="P"?"#c23fd0":"#9b2fc9"}}>{r[4]}</td>
      <td className="px-3 text-right text-[#3b9ede]" style={{borderRight:"1px solid #ddd"}}>{r[5]}</td><td className="px-3 text-right text-[#f0a830]">{r[6]}</td></>}
     </tr>)})}</tbody></table></div>
  </div></div>)}