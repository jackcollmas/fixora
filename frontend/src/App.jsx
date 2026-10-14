import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ServicesPage from './pages/ServicesPage';
import FirmwarePage from './pages/FirmwarePage';
import ImeiPage from './pages/ImeiPage';
import ToolsPage from './pages/ToolsPage';
import ResellersPage from './pages/ResellersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <ServicesPage />
          </Layout>
        } />
        <Route path="/firmware" element={
          <Layout>
            <FirmwarePage />
          </Layout>
        } />
        <Route path="/imei" element={
          <Layout>
            <ImeiPage />
          </Layout>
        } />
        <Route path="/tools" element={
          <Layout>
            <ToolsPage />
          </Layout>
        } />
        <Route path="/resellers" element={
          <Layout>
            <ResellersPage />
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
