import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Subscribe from "./pages/Subscribe/Subscribe";
import Dashboard from "./pages/Dashboard/Dashboard";
import FanDashboard from "./pages/FanDashboard/FanDashboard";
import CreatorDashboard from "./pages/CreatorDashboard/CreatorDashboard";
import CreatorProfile from "./pages/CreatorProfile/CreatorProfile";
import CreatePost from "./pages/CreatePost/CreatePost";
import MyPosts from "./pages/MyPosts/MyPosts";
import PaymentRequests from "./pages/Admin/PaymentRequests";
// NEW
import CreatorProfilePublic from "./pages/Public/CreatorProfilePublic";

// Admin Pages
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Creators from "./pages/Admin/Creators";
import Fans from "./pages/Admin/Fans";
import Posts from "./pages/Admin/Posts";
import Analytics from "./pages/Admin/Analytics";
import Earnings from "./pages/Admin/Earnings";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* ===========================
          Public Routes
      =========================== */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* NEW PUBLIC CREATOR PROFILE */}
      <Route
        path="/creator/:username"
        element={<CreatorProfilePublic />}
      />

      {/* ===========================
          Creator Routes
      =========================== */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      

      <Route
        path="/fan-dashboard"
        element={
          <ProtectedRoute>
            <FanDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/creator-dashboard"
        element={
          <ProtectedRoute>
            <CreatorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/creator-profile"
        element={
          <ProtectedRoute>
            <CreatorProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-post"
        element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-posts"
        element={
          <ProtectedRoute>
            <MyPosts />
          </ProtectedRoute>
        }
      />
      <Route
    path="/subscribe/:username"
    element={<Subscribe />}
/>
      <Route
    path="/admin-payments"
    element={<PaymentRequests />}
/>

      {/* ===========================
          Admin Routes
      =========================== */}

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      <Route path="/admin-creators" element={<Creators />} />

      <Route path="/admin-fans" element={<Fans />} />

      <Route path="/admin-posts" element={<Posts />} />

      <Route path="/admin-analytics" element={<Analytics />} />

      <Route path="/admin-earnings" element={<Earnings />} />

      <Route path="/admin-reports" element={<Reports />} />

      <Route path="/admin-settings" element={<Settings />} />

    </Routes>
  );
}

export default App;