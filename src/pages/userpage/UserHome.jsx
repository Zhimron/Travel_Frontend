import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Usernav from "./usernav/UserNav";
import Archive from "./contents/Archive";
import NavHome from "./contents/Navhome";
import Delete from "./contents/Deletes";

const Home = () => {
  const [showUser, setShowUser] = useState(true);
  const [showArchive, setShowArchive] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [selectedLink, setSelectedLink] = useState();

  const handleLinkClick = (path) => {
    setSelectedLink(path);
  };

  useEffect(() => {
    if (selectedLink === "User") {
      setShowUser(true);
      setShowArchive(false);
      setShowDeleted(false);
    } else if (selectedLink === "archive") {
      setShowUser(false);
      setShowArchive(true);
      setShowDeleted(false);
    } else if (selectedLink === "deleted") {
      setShowUser(false);
      setShowArchive(false);
      setShowDeleted(true);
    }
  }, [selectedLink]);

  return (
    <>
      <div className="fixed top-0 left-0 shadow-md  z-10 bg-white w-screen">
        <Usernav handleLinkClick={handleLinkClick} />
      </div>
      <div>
        {showUser && <NavHome />}
        {showArchive && <Archive />}
        {showDeleted && <Delete />}
      </div>
    </>
  );
};

export default Home;
