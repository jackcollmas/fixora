import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Cpu, Download, Search, HardDrive, Users, LogIn, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVER_STATUSES } from '../data/portalData';
import LavalampBG from './LavalampBG';

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer when route changes or resize to desktop
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home', icon: Zap },
    { path: '/services', label: 'GSM Services', icon: Cpu },
    { path: '/firmware', label: 'Firmware ROMs', icon: Download },
    { path: '/imei', label: 'IMEI Check', icon: Search },
    { path: '/tools', label: 'Desktop Tools', icon: HardDrive },
    { path: '/resellers', label: 'Resellers', icon: Users }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Lava Lamp Organic Motion Background */}
      <LavalampBG fixed={true} variant="default" blur={50} opacity={0.8} />

      {/* 1. TOP HEADER & TELEMETRY BAR */}
      <header style={{ 
        backgroundColor: 'rgba(13, 12, 10, 0.85)', 
        borderBottom: '1px solid var(--border-light)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50,
        backdropFilter: 'blur(16px)'
      }}>
        {/* Top Info Strip */}
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '8px 20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '12px',
          color: 'var(--text-muted)',
          borderBottom: '1px solid rgba(255,255,255,0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ 
                width: '7px', 
                height: '7px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--status-online)',
                animation: 'livePulse 2s infinite'
              }}></span>
              <strong style={{ color: 'var(--text-main)' }}>Fixora Network:</strong> All Server Nodes Operational
            </span>
            <span className="nav-top-subtext" style={{ color: 'var(--text-dim)' }}>Latency: 38ms</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <span style={{ color: 'var(--accent)' }}>@fixora_support</span>
            <span className="nav-top-vip" style={{ color: 'var(--text-dim)' }}>|</span>
            <span className="nav-top-vip" style={{ color: 'var(--primary)', fontWeight: 600 }}>VIP Auth 24/7</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '14px 20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <div style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '10px', 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-primary)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(249, 115, 22, 0.3)',
              overflow: 'hidden',
              padding: '6px'
            }}>
              <img 
                src="/favicon.png" 
                alt="Fixora Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 4px rgba(249, 115, 22, 0.4))'
                }} 
              />
            </div>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-brand)', 
                fontSize: '22px', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                color: 'var(--text-main)',
                lineHeight: 1
              }}>
                FIXORA<span style={{ color: 'var(--primary)' }}>.</span>
              </div>
              <div style={{ 
                fontSize: '10px', 
                letterSpacing: '3px', 
                color: 'var(--accent)', 
                fontFamily: 'var(--font-cyber)',
                marginTop: '4px' 
              }}>
                GSM TECH & FIRMWARE
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop-links">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid transparent',
                    backgroundColor: isActive ? 'var(--primary-subtle)' : 'transparent',
                    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <Icon size={16} /> {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop & Mobile Header Actions */}
          <div className="nav-desktop-actions">
            <Link 
              to="/auth"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--bg-main)',
                textDecoration: 'none',
                padding: '9px 18px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 0 16px var(--primary-glow)',
                transition: 'var(--transition-fast)'
              }}
            >
              <LogIn size={14} /> GET STARTED
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown / Drawer Panel */}
        {mobileMenuOpen && (
          <div 
            style={{
              position: 'fixed',
              top: '100%',
              left: 0,
              right: 0,
              height: 'calc(100vh - 100%)',
              minHeight: 'calc(100dvh - 100%)',
              backgroundColor: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div 
              style={{
                backgroundColor: '#161411',
                borderBottom: '2px solid var(--border-primary)',
                padding: '20px 20px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
                minHeight: 'max-content'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                fontSize: '11px',
                fontFamily: 'var(--font-cyber)',
                color: 'var(--text-dim)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--border-light)',
                marginBottom: '6px'
              }}>
                Portal Navigation
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isActive ? 'var(--primary-subtle)' : 'var(--bg-card)',
                      border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                      color: isActive ? 'var(--primary)' : 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '15px',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        padding: '6px',
                        borderRadius: '6px',
                        backgroundColor: isActive ? 'rgba(249, 115, 22, 0.2)' : 'rgba(255,255,255,0.05)',
                        color: isActive ? 'var(--primary)' : 'var(--accent)'
                      }}>
                        <Icon size={18} />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight size={16} color={isActive ? 'var(--primary)' : 'var(--text-dim)'} />
                  </Link>
                );
              })}

              {/* Mobile Quick Action Banner */}
              <div style={{
                marginTop: '12px',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(249, 115, 22, 0.08)',
                border: '1px dashed var(--border-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 700, fontSize: '13px' }}>
                  <ShieldCheck size={16} /> 24/7 GSM Server Authorization
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                  Instant MTK, Qualcomm, Xiaomi, Samsung, and Apple IMEI services directly synchronized with official provider gateways.
                </p>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#11100E',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '13px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    marginTop: '4px'
                  }}
                >
                  ACCESS SERVER SERVERS NOW
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. LIVE CYBER MARQUEE (Equivalent to service.d2gtech.com AK-DAY ticker) */}
      <div style={{ 
        backgroundColor: '#161411', 
        borderBottom: '1px solid var(--border-light)', 
        overflow: 'hidden', 
        position: 'relative',
        padding: '10px 0'
      }}>
        <div style={{ 
          display: 'flex', 
          width: 'max-content',
          animation: 'marqueeScroll 45s linear infinite'
        }}>
          {[...SERVER_STATUSES, ...SERVER_STATUSES].map((srv, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid var(--border-light)', 
                borderRadius: '8px', 
                padding: '6px 14px', 
                marginRight: '12px',
                fontSize: '12px',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                backgroundColor: srv.status === 'online' ? 'var(--status-online)' : 'var(--status-busy)',
                boxShadow: srv.status === 'online' ? '0 0 8px #22c55e' : '0 0 8px #eab308'
              }}></span>
              <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{srv.name}</span>
              <span style={{ color: 'var(--text-dim)' }}>|</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{srv.latency}</span>
              <span style={{ 
                backgroundColor: srv.status === 'online' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                color: srv.status === 'online' ? '#4ade80' : '#facc15',
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px',
                textTransform: 'uppercase'
              }}>
                {srv.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Child View from Router */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* 3. SHARED FOOTER */}
      <footer style={{ 
        backgroundColor: 'rgba(10, 9, 8, 0.92)', 
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border-light)', 
        padding: '48px 20px 24px',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', marginBottom: '36px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-brand)', fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '2px' }}>
              FIXORA<span style={{ color: 'var(--primary)' }}>.</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '10px', lineHeight: 1.6 }}>
              The high-performance GSM software infrastructure for professional mobile technicians, repair labs, and wholesale resellers worldwide.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
              Core Operations
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Xiaomi Auth Flashing</Link>
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Samsung FRP Removal</Link>
              <Link to="/imei" style={{ color: 'inherit', textDecoration: 'none' }}>Apple GSX Audit Checks</Link>
              <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Transsion MDM Removal</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
              Firmware Mirrors
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <Link to="/firmware" style={{ color: 'inherit', textDecoration: 'none' }}>Samsung Odin Firmwares</Link>
              <Link to="/firmware" style={{ color: 'inherit', textDecoration: 'none' }}>Xiaomi Fastboot TGZ</Link>
              <Link to="/firmware" style={{ color: 'inherit', textDecoration: 'none' }}>Tecno & Infinix Scatters</Link>
              <Link to="/firmware" style={{ color: 'inherit', textDecoration: 'none' }}>Pixel Factory Images</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
              Security & Reliability
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              All flashing files are cryptographically verified and factory signed. Remote operations are conducted through encrypted point-to-point tunnels.
            </div>
          </div>
        </div>

        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          paddingTop: '24px', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '12px',
          color: 'var(--text-dim)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>© 2026 Fixora GSM Network & Technology. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Terms of Service</span>
            <span>API Docs</span>
            <span>Server Heartbeat</span>
            <span style={{ color: 'var(--primary)' }}>Engine v3.8.2-prod</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
