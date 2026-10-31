"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HomeView from "@/components/HomeView";
import GradeBookView from "@/components/GradeBookView";

export default function Page() {
  const [page, setPage] = useState("Home");
  return (
    <>
      <Sidebar page={page} go={setPage} />
      <TopBar />
      <main
        className="pr-[34px] pl-[37px] min-h-full"
        style={{ marginLeft: "clamp(200px,16.65vw,320px)", paddingTop: 93 }}
      >
        <div key={page} className="view-in">{page === "Home" ? <HomeView /> : <GradeBookView />}</div>
      </main>
    </>
  );
}
