import React from 'react';
import { HardDrive, Download, Cpu, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';
import { DESKTOP_TOOLS } from '../data/portalData';

export default function ToolsPage() {
  const handleDownloadTool = (toolName) => {
    alert(`Downloading ${toolName} installer package (Fixora Verified Mirror).`);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 20px', width: '100%' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--primary-subtle)',
          border: '1px solid var(--border-primary)',
          padding: '4px 12px',
          borderRadius: '999px',
          marginBottom: '14px',
          fontSize: '12px',
          color: 'var(--accent)',
          fontWeight: 600,
          fontFamily: 'var(--font-cyber)',
          letterSpacing: '1px'
        }}>
          <Terminal size={14} color="var(--primary)" /> OFFICIAL TECHNICIAN TOOLKIT
        </div>
        <h1 style={{ fontFamily: 'var(--font-cyber)', fontSize: '32px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HardDrive color="var(--primary)" /> Fixora GSM Technician Software & Drivers
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
          Certified Windows utilities for USB remote bridging, Mediatek/Qualcomm COM port emulation, Samsung Odin direct flasher, and automated ADB/Fastboot scripts.
        </p>
      </div>

      {/* Grid of Tools */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
        {DESKTOP_TOOLS.map((tool) => (
          <div 
            key={tool.id}
            className="glow-hover"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-light)', 
              borderRadius: 'var(--radius-md)', 
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ 
                  backgroundColor: 'var(--primary-subtle)', 
                  color: 'var(--primary)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  padding: '3px 8px', 
                  borderRadius: '4px' 
                }}>
                  {tool.category}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {tool.size}
                </span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                {tool.name}
              </h3>
              <div style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                Release: {tool.version}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '16px' }}>
                {tool.description}
              </p>

              <div style={{ backgroundColor: '#13110E', padding: '12px', borderRadius: '6px', marginBottom: '20px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '6px' }}>CORE FEATURES:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {(tool.features || []).map((feat, idx) => (
                    <div key={idx} style={{ fontSize: '12px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--primary)' }}>•</span> {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleDownloadTool(tool.name)}
              style={{ 
                width: '100%', 
                backgroundColor: 'var(--primary)', 
                color: '#11100E', 
                border: 'none', 
                padding: '11px', 
                borderRadius: 'var(--radius-sm)', 
                fontWeight: 700, 
                fontSize: '13px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'var(--transition-fast)'
              }}
            >
              <Download size={15} /> DOWNLOAD INSTALLER (.EXE)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
