import { useCallback, useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    if (!value) {
      return alert("please Enter Room Id");
    }

    navigate(`/room/${value}`);
  }, [value, navigate]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <div className="">
          <div className="input bg-gray-900 px-5 py-6 rounded-xl border border-gray-600 shadow-md">
            <div className="flex justify-center mb-8">
              <img className="w-25 border-gray-600" src={Logo} alt="logo" />
            </div>
            <input
              className="bg-gray-950  rounded-lg border border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white"
              type="text"
              placeholder="Enter Room Code"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <button
              className="bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold px-8 py-2 mt-5 rounded-lg w-full"
              type="button"
              onClick={handleJoinRoom}
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
