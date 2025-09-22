 import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Particles from "../animations/Particles";

function Layout() {
  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 relative  min-h-screen overflow-hidden bg-black">
        {/* Particles background */}
        <div className="absolute inset-0 z-0">
          {/* <Particles
            backgroundColor="#000000"
            particleColors={["#ffffff", "#e1e8e6ff", "#e9e2e4ff"]}
            particleCount={950}
            particleSpread={15}
            speed={0.2}
            particleBaseSize={120}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          /> */}
        </div>

        {/* Routed content on top */}
        <div className="relative z-10 p-4 text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
