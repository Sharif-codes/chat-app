import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";  
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/UseAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {

  const {authUser, checkAuth, isCheckingAuth}= useAuthStore();
  const {theme}=useThemeStore()
  useEffect(()=>{

    checkAuth()
  },[checkAuth])
  console.log({authUser});

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
<Loader className="size-10 animate-spin"></Loader>
    </div>
    )
  }

  return (
    <div data-theme= {theme}>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={ authUser? <HomePage></HomePage>: <Navigate to="/login"></Navigate>} ></Route>
    
      <Route path="/signup" element={!authUser?<SignupPage></SignupPage>: <Navigate to="/"></Navigate>}></Route>
      <Route path="/login" element={!authUser?<LoginPage></LoginPage>: <Navigate to="/"></Navigate>}></Route>
      <Route path="/settings" element={<SettingPage></SettingPage>}></Route>
      <Route path="/profile" element={authUser? <ProfilePage></ProfilePage>: <Navigate to="/login"></Navigate>}></Route>
     </Routes>
     <Toaster></Toaster>
    </div>
  );
};

export default App;