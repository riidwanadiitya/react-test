import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Headbars from "../components/molecule/headbars";
import Beranda from "../components/pages/beranda";
import DialyAttendance from "../components/pages/dialyAttendance";
import PersonnelList from "../components/pages/personnelList";

function Routing() {
  return (
    <div>
      <HashRouter>
        <Headbars />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/personnel-list" element={<PersonnelList />} />
          <Route path="/daily-attendence" element={<DialyAttendance />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Routing;
