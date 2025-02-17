import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";

function Display() {
  const { albumsData } = useContext(PlayerContext);
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((album) => album._id === albumId)?.bgColour : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum, bgColor]);

  return (
    <div ref={displayRef} className="flex-grow m-4 p-6 rounded text-white">
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((album) => album._id === albumId)} />} />
        </Routes>
      ) : null}
    </div>
  );
}

export default Display;
