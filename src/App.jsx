import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import Navbar from "./layouts/Navbar";
import { dappConfig } from "./common/config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={dappConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen px-5 py-3 sm:py-5 sm:px-[30px] bg-black relative">
          <div className="border-2 border-borderColor rounded-[30px] pt-6 relative overflow-hidden">
            <img
              src="bg_main_screen.png"
              alt=""
              className="absolute top-0 left-0 z-0 object-cover w-full"
            />
            <Navbar />
            <MainLayout />
          </div>
        </div>
        <ToastContainer />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
