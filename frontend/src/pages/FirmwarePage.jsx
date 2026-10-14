import React, { useState } from 'react';
import { Download, Search, CheckCircle2, ShieldCheck, Database, FileCode2, ArrowDownToLine } from 'lucide-react';
import { FIRMWARE_DATABASE } from '../data/portalData';

export default function FirmwarePage() {
  const [firmwareSearch, setFirmwareSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [downloadingId, setDownloadingId] = useState(null);

  const firmwareBrands = ['All', 'Samsung', 'Xiaomi', 'Tecno', 'Infinix', 'Oppo', 'Motorola', 'Google'];

  const filteredFirmwares = FIRMWARE_DATABASE.filter(fw => {
    const matchesBrand = selectedBrand === 'All' || fw.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesQuery = fw.model.toLowerCase().includes(firmwareSearch.toLowerCase()) || 
                         fw.buildNumber.toLowerCase().includes(firmwareSearch.toLowerCase()) ||
                         fw.region.toLowerCase().includes(firmwareSearch.toLowerCase()) ||
                         fw.brand.toLowerCase().includes(firmwareSearch.toLowerCase());
    return matchesBrand && matchesQuery;
  });

  const handleSimulateDownload = (fwId) => {
    setDownloadingId(fwId);
    setTimeout(() => {
      setDownloadingId(null);
      alert('Download started from high-speed mirror (Fixora CDN Server 01 - Germany Direct).');
    }, 1200);
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
          <Database size={14} color="var(--primary)" /> 240,000+ VERIFIED ROMS
        </div>
        <h1 style={{ fontFamily: 'var(--font-cyber)', fontSize: '32px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Download color="var(--primary)" /> Official Firmware & Flash File Archives
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
          Direct factory stock ROMs, scatter files, Odin multi-binary packages, and unbrick dumps verified against OEM checksums.
        </p>
      </div>

      {/* Search and Metadata Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ position: 'relative', minWidth: '320px', flex: '1 1 320px' }}>
          <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            value={firmwareSearch} 
            onChange={(e) => setFirmwareSearch(e.target.value)}
            placeholder="Filter by model, build, or region..." 
            style={{ 
              width: '100%', 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-medium)', 
              color: 'var(--text-main)', 
              padding: '12px 14px 12px 40px', 
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
          <ShieldCheck size={16} color="var(--status-online)" />
          <span>All packages cryptographically signed & verified</span>
        </div>
      </div>

      {/* Brand Selector Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '28px' }}>
        {firmwareBrands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            style={{
              backgroundColor: selectedBrand === brand ? 'var(--primary)' : 'var(--bg-card)',
              color: selectedBrand === brand ? '#11100E' : 'var(--text-muted)',
              border: '1px solid',
              borderColor: selectedBrand === brand ? 'var(--primary)' : 'var(--border-light)',
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'var(--transition-fast)'
            }}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Firmware List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {filteredFirmwares.map((fw) => (
          <div 
            key={fw.id}
            className="glow-hover"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-light)', 
              borderRadius: 'var(--radius-md)', 
              padding: '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(249, 115, 22, 0.1)', 
                border: '1px solid var(--border-primary)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--primary)',
                flexShrink: 0
              }}>
                <FileCode2 size={24} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                    {fw.model}
                  </h3>
                  <span style={{ 
                    backgroundColor: 'rgba(255,255,255,0.06)', 
                    color: 'var(--accent)', 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    padding: '2px 8px', 
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {fw.region}
                  </span>
                  <span style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                    color: 'var(--status-online)', 
                    fontSize: '11px', 
                    padding: '2px 8px', 
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <CheckCircle2 size={11} /> {fw.androidVersion}
                  </span>
                </div>

                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Build: {fw.buildNumber}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>
                  Package Type: {fw.fileType}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                  {fw.fileSize}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
                  {fw.downloadCount.toLocaleString()} downloads
                </div>
              </div>

              <button 
                onClick={() => handleSimulateDownload(fw.id)}
                disabled={downloadingId === fw.id}
                style={{ 
                  backgroundColor: downloadingId === fw.id ? 'var(--bg-elevated)' : 'var(--primary)', 
                  color: downloadingId === fw.id ? 'var(--text-muted)' : '#11100E', 
                  border: 'none', 
                  padding: '11px 20px', 
                  borderRadius: 'var(--radius-sm)', 
                  fontWeight: 700, 
                  fontSize: '13px', 
                  cursor: downloadingId === fw.id ? 'wait' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'var(--transition-fast)'
                }}
              >
                <ArrowDownToLine size={16} /> 
                {downloadingId === fw.id ? 'Generating Direct Link...' : 'DIRECT DOWNLOAD'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
