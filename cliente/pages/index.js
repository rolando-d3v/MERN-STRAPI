import React from "react";
import Mainx from "../components/layout/Mainx";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Mainx />
    </div>
  );
}
