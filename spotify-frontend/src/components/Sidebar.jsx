import { useNavigate } from 'react-router-dom';
import { assets } from './../assets/frontend-assets/assets';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="w-[250px] min-w-[200px] max-w-[300px] h-screen bg-[#121212] text-white transition-all duration-300 p-3 overflow-hidden">
            {/* Top Section */}
            <div className="bg-[#1a1a1a] h-[15%] rounded-lg flex flex-col justify-around p-4">
                <div 
                    onClick={() => navigate("/")} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#242424] transition cursor-pointer"
                >
                    <img className="w-6" src={assets.home_icon} alt="Home" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#242424] transition cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt="Search" />
                    <p className="font-bold">Search</p>
                </div>
            </div>

            {/* Library Section */}
            <div className="bg-[#1a1a1a] h-[85%] rounded-lg mt-3 p-4 overflow-hidden">
                {/* Library Header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon} alt="Library" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5 cursor-pointer hover:scale-110 transition" src={assets.arrow_icon} alt="Arrow" />
                        <img className="w-5 cursor-pointer hover:scale-110 transition" src={assets.plus_icon} alt="Add" />
                    </div>
                </div>

                {/* Create Playlist */}
                <div className="p-4 bg-[#242424] rounded-lg font-semibold flex flex-col gap-1">
                    <h1 className="text-lg">Create your first playlist</h1>
                    <p className="text-sm font-light">It&apos;s easy, we will help you.</p>
                    <button className="px-4 py-2 bg-white text-black rounded-full mt-4 hover:bg-gray-200 transition">Create Playlist</button>
                </div>

                {/* Follow Podcasts */}
                <div className="p-4 bg-[#242424] rounded-lg font-semibold flex flex-col gap-1 mt-4">
                    <h1 className="text-lg">Let&#39;s find some podcasts to follow</h1>
                    <p className="text-sm font-light">We&apos;ll keep you updated on new episodes.</p>
                    <button className="px-4 py-2 bg-white text-black rounded-full mt-4 hover:bg-gray-200 transition">Browse Podcasts</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
