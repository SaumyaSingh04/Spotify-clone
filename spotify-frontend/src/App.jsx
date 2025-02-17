import { useContext } from 'react'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black flex flex-col">
      {songsData.length > 0 ? (
        <>
          <div className="flex flex-grow w-full h-full">
            {/* Sidebar */}
            <Sidebar className="w-[250px] min-w-[250px] bg-gray-900" />

            {/* Main Content */}
            <div className="flex-grow overflow-y-auto bg-[#121212]">
              <Display />
            </div>
          </div>

          {/* Music Player */}
          <div className="fixed bottom-0 left-0 w-full">
            <Player />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center flex-grow text-white text-xl">
          Loading Songs...
        </div>
      )}

      <audio ref={audioRef} src={track ? track.file : ""} preload="none"></audio>
    </div>
  );
};

export default App;
