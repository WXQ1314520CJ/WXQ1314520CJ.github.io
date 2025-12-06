import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ServiceDetail from "@/pages/ServiceDetail";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 处理index.html路径，直接渲染Home组件 */}
        <Route path="/index.html" element={<Home />} />
        {/* 服务详情页面路由 */}
        <Route path="/service-volunteer.html" element={<ServiceDetail />} />
        <Route path="/service-career.html" element={<ServiceDetail />} />
        <Route path="/service-job.html" element={<ServiceDetail />} />
        <Route path="/service-studyabroad.html" element={<ServiceDetail />} />
        <Route path="/service-mental.html" element={<ServiceDetail />} />
        {/* 支持带ID参数的路由格式 */}
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </AuthContext.Provider>
  );
}
