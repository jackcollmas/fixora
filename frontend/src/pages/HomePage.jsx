import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Cpu, 
  Download, 
  Search, 
  Radio, 
  Smartphone, 
  CheckCircle2, 
  Clock, 
  Key, 
  HardDrive,
  Users,
  Copy,
  Check,
  Send,
  X,
  ArrowRight
} from 'lucide-react';
import { 
  SERVER_STATUSES, 
  GSM_SERVICES, 
  FIRMWARE_DATABASE, 
  DESKTOP_TOOLS, 
  AUTHORIZED_RESELLERS 
} from '../data/portalData';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('services'); // 'services' | 'firmware' | 'imei' | 'tools' | 'resellers'
  const [serviceSearch, setServiceSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Firmware State
  const [firmwareSearch, setFirmwareSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  
  // Order Modal
  const [orderModalService, setOrderModalService] = useState(null);
  const [orderImei, setOrderImei] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [copiedOrderId, setCopiedOrderId] = useState(false);

  // IMEI Quick Checker
  const [checkImeiInput, setCheckImeiInput] = useState('');
  const [imeiReport, setImeiReport] = useState(null);
  const [checkingImei, setCheckingImei] = useState(false);

  // Firmware Download Feedback
  const [downloadingId, setDownloadingId] = useState(null);

  // Categories list
  const serviceCategories = ['All', 'Xiaomi / Redmi', 'Samsung', 'Apple / iPhone', 'Transsion (Tecno/Infinix)', 'Motorola', 'Modems & Routers'];
  const firmwareBrands = ['All', 'Samsung', 'Xiaomi', 'Tecno', 'Infinix', 'Oppo', 'Motorola', 'Google'];

  // Filtered Services
  const filteredServices = GSM_SERVICES.filter(service => {
    const matchesCat = selectedCategory === 'All' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesQuery = service.name.toLowerCase().includes(serviceSearch.toLowerCase()) || 
                         service.description.toLowerCase().includes(serviceSearch.toLowerCase()) ||
                         service.supportedModels.some(m => m.toLowerCase().includes(serviceSearch.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  // Filtered Firmwares
  const filteredFirmwares = FIRMWARE_DATABASE.filter(fw => {
    const matchesBrand = selectedBrand === 'All' || fw.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchesQuery = fw.model.toLowerCase().includes(firmwareSearch.toLowerCase()) ||
                         fw.buildNumber.toLowerCase().includes(firmwareSearch.toLowerCase()) ||
                         fw.region.toLowerCase().includes(firmwareSearch.toLowerCase());
    return matchesBrand && matchesQuery;
  });

  const handleSimulateImeiCheck = (e) => {
    e.preventDefault();
    if (!checkImeiInput || checkImeiInput.trim().length < 14) {
      alert('Please enter a valid 14 or 15-digit IMEI number');
      return;
    }
    setCheckingImei(true);
    setImeiReport(null);
    setTimeout(() => {
      setCheckingImei(false);
      setImeiReport({
        imei: checkImeiInput.trim(),
        device: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
        modelNumber: 'A3106 (Global)',
        serialNumber: 'L' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        carrier: 'Unlocked / Sim-Free (Global Factory)',
        fmiStatus: 'OFF (iCloud Clean)',
        blacklistStatus: 'CLEAN (Not Reported Lost/Stolen)',
        warranty: 'Active AppleCare+ until Nov 2026',
        mdmStatus: 'OFF (No Company Profile)',
        simLock: 'UNLOCKED'
      });
    }, 1200);
  };

  const handleSimulateDownload = (fwId) => {
    setDownloadingId(fwId);
    setTimeout(() => {
      setDownloadingId(null);
      alert('Download started from high-speed mirror (Fixora CDN Server 01 - Germany Direct).');
    }, 1400);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO SHOWCASE SECTION */}
      <section style={{ 
        background: 'radial-gradient(ellipse at 50% -10%, rgba(249, 115, 22, 0.2), transparent 70%), rgba(17, 16, 14, 0.6)',
        backdropFilter: 'blur(8px)',
        padding: '52px 20px 40px',
        borderBottom: '1px solid var(--border-light)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: 'var(--primary-subtle)', 
            border: '1px solid var(--border-primary)',
            padding: '6px 14px',
            borderRadius: '999px',
            marginBottom: '18px'
          }}>
            <Radio size={14} color="var(--primary)" />
            <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px' }}>
              NEXT-GEN GSM REMOTE ENGINE & OFFICIAL FIRMWARE REPO
            </span>
          </div>

          <h1 style={{ 
            fontFamily: 'var(--font-cyber)', 
            fontSize: '44px', 
            fontWeight: 800, 
            letterSpacing: '-1px',
            lineHeight: 1.15,
            marginBottom: '16px'
          }}>
            UNLOCK, FLASH & REPAIR <br />
            <span className="orange-gradient-text">AT LIGHTNING VELOCITY</span>
          </h1>

          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '16px', 
            lineHeight: 1.6, 
            maxWidth: '680px', 
            margin: '0 auto 28px' 
          }}>
            Direct server authorization for Xiaomi Mi Auth, Samsung FRP, Motorola, and Apple Carrier checks, coupled with 200,000+ verified factory stock ROMs, DA agents, and repair files.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-grid">
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--primary)' }}>99.98%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Server Uptime</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--accent)' }}>2 - 5 Min</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Avg Delivery Speed</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: 'var(--text-main)' }}>240,000+</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>ROMs & Flash Files</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 700, color: '#4ade80' }}>24/7</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Live Auth Tokens</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB SELECTOR BAR */}
      <div style={{ 
        maxWidth: '1280px', 
        margin: '28px auto 0', 
        padding: '0 20px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px', 
        flexWrap: 'wrap' 
      }}>
        {[
          { id: 'services', label: 'GSM Remote Services', icon: Cpu },
          { id: 'firmware', label: 'Firmware Repository', icon: Download },
          { id: 'imei', label: 'IMEI & GSX Check', icon: Search },
          { id: 'tools', label: 'Desktop Tools', icon: HardDrive },
          { id: 'resellers', label: 'Authorized Resellers', icon: Users }
        ].map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: isSelected ? 'var(--primary)' : 'var(--bg-card)',
                color: isSelected ? '#11100E' : 'var(--text-main)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isSelected ? '0 0 20px rgba(249, 115, 22, 0.35)' : 'none'
              }}
            >
              <Icon size={16} /> {tab.label}
            </button>
          );
        })}
      </div>

      {/* 3. MAIN SECTION CONTAINER */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 20px', width: '100%' }}>
        
        {/* ================= TAB 1: GSM SERVICES ================= */}
        {activeTab === 'services' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-cyber)', fontSize: '26px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cpu color="var(--primary)" /> GSM Remote Server Services
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
                  Select an authorized server operation to order immediate remote technician dispatch.
                </p>
              </div>

              {/* Search Services */}
              <div style={{ position: 'relative', minWidth: '320px' }}>
                <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text" 
                  value={serviceSearch} 
                  onChange={(e) => setServiceSearch(e.target.value)}
                  placeholder="Search service, model, or brand..." 
                  style={{ 
                    width: '100%', 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-medium)', 
                    color: 'var(--text-main)', 
                    padding: '10px 14px 10px 38px', 
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '24px' }}>
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                    color: selectedCategory === cat ? '#11100E' : 'var(--text-muted)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-light)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              {filteredServices.map((service) => (
                <div 
                  key={service.id} 
                  className="glow-hover"
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '24px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {service.popular && (
                    <div style={{ 
                      position: 'absolute', 
                      top: '16px', 
                      right: '16px', 
                      backgroundColor: 'rgba(249, 115, 22, 0.15)', 
                      color: 'var(--primary)', 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      padding: '4px 8px', 
                      borderRadius: '4px',
                      border: '1px solid var(--border-primary)',
                      textTransform: 'uppercase'
                    }}>
                      🔥 Hot Service
                    </div>
                  )}

                  <div>
                    <span style={{ 
                      fontSize: '11px', 
                      color: 'var(--accent)', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px', 
                      fontWeight: 700 
                    }}>
                      {service.category}
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', margin: '8px 0 10px', lineHeight: 1.3 }}>
                      {service.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '16px' }}>
                      {service.description}
                    </p>

                    <div style={{ marginBottom: '16px', backgroundColor: '#161411', padding: '10px 12px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 600 }}>
                        Supported Models Sample:
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-main)' }}>
                        {service.supportedModels.join(' • ')}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>SERVER FEE</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 800, color: 'var(--primary)' }}>
                          ${service.priceUSD.toFixed(2)}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                          <Clock size={12} /> {service.estimatedTime}
                        </div>
                        <div style={{ fontSize: '11px', color: '#4ade80', fontWeight: 600, marginTop: '2px' }}>
                          {service.status}
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        setOrderModalService(service);
                        setOrderSubmitted(false);
                      }}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--primary)',
                        color: '#11100E',
                        border: 'none',
                        padding: '11px',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <Key size={16} /> ORDER INSTANT SERVER ACCESS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 2: FIRMWARE REPOSITORY ================= */}
        {activeTab === 'firmware' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-cyber)', fontSize: '26px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Download color="var(--primary)" /> Official Firmware & Flash File Archives
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
                  Verified factory ROMs, Scatter files, Odin 4-File packages, and EDL unbrick dumps.
                </p>
              </div>

              {/* Firmware Search */}
              <div style={{ position: 'relative', minWidth: '340px' }}>
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
                    padding: '10px 14px 10px 38px', 
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '20px' }}>
              {firmwareBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  style={{
                    backgroundColor: selectedBrand === brand ? 'var(--primary)' : 'var(--bg-card)',
                    color: selectedBrand === brand ? '#11100E' : 'var(--text-muted)',
                    border: '1px solid',
                    borderColor: selectedBrand === brand ? 'var(--primary)' : 'var(--border-light)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Firmware Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredFirmwares.map((fw) => (
                <div 
                  key={fw.id}
                  className="glow-hover"
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '18px 24px',
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
                      borderRadius: '8px', 
                      backgroundColor: 'rgba(249, 115, 22, 0.08)', 
                      border: '1px solid var(--border-primary)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ 
                          backgroundColor: '#26221D', 
                          color: 'var(--accent)', 
                          fontSize: '11px', 
                          fontWeight: 700, 
                          padding: '2px 8px', 
                          borderRadius: '4px' 
                        }}>
                          {fw.brand}
                        </span>
                        <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                          {fw.model}
                        </h4>
                        {fw.verified && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4ade80', fontSize: '12px' }}>
                            <CheckCircle2 size={14} /> Verified Factory
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                        <span><strong>Build:</strong> <code style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{fw.buildNumber}</code></span>
                        <span><strong>OS:</strong> {fw.androidVersion}</span>
                        <span><strong>Region:</strong> {fw.region}</span>
                        <span><strong>Security:</strong> {fw.securityPatch}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '4px' }}>
                        Package Type: {fw.fileType}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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
                        padding: '10px 18px',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: downloadingId === fw.id ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Download size={15} /> {downloadingId === fw.id ? 'Generating Direct Link...' : 'DIRECT DOWNLOAD'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: IMEI CHECKER ================= */}
        {activeTab === 'imei' && (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '14px', 
                backgroundColor: 'rgba(249, 115, 22, 0.1)', 
                border: '1px solid var(--border-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '16px'
              }}>
                <Search size={28} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-cyber)', fontSize: '28px', color: 'var(--text-main)' }}>
                Official GSX & IMEI Intelligence Portal
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '580px', margin: '8px auto 0' }}>
                Query carrier locks, iCloud Find My iPhone status, Blacklist/Clean checks, and warranty info directly from OEM databases.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-medium)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '28px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
            }}>
              <form onSubmit={handleSimulateImeiCheck}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>
                  ENTER 15-DIGIT IMEI OR APPLE SERIAL NUMBER:
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <input 
                    type="text" 
                    value={checkImeiInput}
                    onChange={(e) => setCheckImeiInput(e.target.value)}
                    placeholder="e.g. 354892091823901"
                    maxLength={16}
                    style={{ 
                      flex: 1, 
                      backgroundColor: '#11100E', 
                      border: '1px solid var(--border-medium)', 
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 16px',
                      color: 'var(--text-main)',
                      fontSize: '16px',
                      fontFamily: 'var(--font-mono)',
                      outline: 'none'
                    }}
                  />
                  <button 
                    type="submit"
                    disabled={checkingImei}
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: '#11100E',
                      border: 'none',
                      padding: '0 24px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: checkingImei ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {checkingImei ? 'Checking GSX...' : 'RUN AUDIT'}
                  </button>
                </div>
              </form>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '12px', color: 'var(--text-dim)' }}>
                <span>Try sample:</span>
                <button 
                  onClick={() => setCheckImeiInput('356984112938472')} 
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  iPhone 15 Pro Max
                </button>
                •
                <button 
                  onClick={() => setCheckImeiInput('863920194820192')} 
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Samsung S24 Ultra
                </button>
              </div>

              {imeiReport && (
                <div style={{ marginTop: '24px', borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontWeight: 700, fontSize: '14px' }}>
                      <CheckCircle2 size={18} /> Official Carrier Audit Report Generated
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Timestamp: Just now</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', backgroundColor: '#13110E', padding: '18px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>DEVICE MODEL</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>{imeiReport.device}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>SIM LOCK STATUS</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#4ade80', marginTop: '2px' }}>{imeiReport.simLock}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>FMI (ICLOUD STATUS)</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#4ade80', marginTop: '2px' }}>{imeiReport.fmiStatus}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>BLACKLIST / CLEAN</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#4ade80', marginTop: '2px' }}>{imeiReport.blacklistStatus}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>CARRIER / NEXT TETHER</div>
                      <div style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '2px' }}>{imeiReport.carrier}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>MDM STATUS</div>
                      <div style={{ fontSize: '13px', color: '#4ade80', marginTop: '2px' }}>{imeiReport.mdmStatus}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 4: DESKTOP TOOLS ================= */}
        {activeTab === 'tools' && (
          <div>
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-cyber)', fontSize: '26px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HardDrive color="var(--primary)" /> Fixora GSM Technician Software & Drivers
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
                Essential certified utilities for USB remote bridging, COM port emulation, and Fastboot automated flashing.
              </p>
            </div>

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
                        backgroundColor: 'rgba(249, 115, 22, 0.1)', 
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

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                      {tool.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '12px' }}>
                      Version: {tool.version}
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '16px' }}>
                      {tool.description}
                    </p>

                    <div style={{ backgroundColor: '#14120F', padding: '12px', borderRadius: '6px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '6px' }}>CORE FEATURES:</div>
                      {tool.features.map((feat, i) => (
                        <div key={i} style={{ fontSize: '12px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--primary)' }}>•</span> {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => alert(`Starting download for ${tool.name}`)}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      color: 'var(--primary)',
                      border: '1px solid var(--primary)',
                      padding: '10px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <Download size={15} /> DOWNLOAD INSTALLER (.EXE)
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: RESELLERS ================= */}
        {activeTab === 'resellers' && (
          <div>
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-cyber)', fontSize: '26px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Users color="var(--primary)" /> Fixora Global Resellers & Payment Partners
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
                Recharge your Fixora server credits locally via bank transfer, USDT, or mobile money through verified master distributors.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              {AUTHORIZED_RESELLERS.map((res) => (
                <div 
                  key={res.id}
                  className="glow-hover"
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '24px' 
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>{res.name}</h3>
                      <div style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '2px' }}>{res.region}</div>
                    </div>
                    <span style={{ 
                      backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                      color: '#4ade80', 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      padding: '3px 8px', 
                      borderRadius: '4px' 
                    }}>
                      {res.reputation}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', marginBottom: '16px' }}>
                    <div><strong style={{ color: 'var(--text-dim)' }}>Telegram:</strong> <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{res.telegram}</span></div>
                    <div><strong style={{ color: 'var(--text-dim)' }}>Phone / WhatsApp:</strong> <span style={{ color: 'var(--text-main)' }}>{res.contact}</span></div>
                    <div><strong style={{ color: 'var(--text-dim)' }}>Orders Filled:</strong> <span style={{ color: 'var(--text-main)' }}>{res.ordersCompleted}</span></div>
                  </div>

                  <div style={{ backgroundColor: '#14120F', padding: '10px 12px', borderRadius: '6px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginBottom: '4px' }}>ACCEPTED PAYMENT METHODS:</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-main)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {res.paymentMethods.map((pm, idx) => (
                        <span key={idx} style={{ backgroundColor: '#211D19', padding: '2px 8px', borderRadius: '4px' }}>
                          {pm}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://t.me/${res.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: 'var(--primary)',
                      color: '#11100E',
                      textDecoration: 'none',
                      padding: '10px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 700,
                      fontSize: '13px'
                    }}
                  >
                    <Send size={15} /> CONTACT VIA TELEGRAM
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* 4. ORDER SERVICE MODAL */}
      {orderModalService && (
        <div style={{ 
          position: 'fixed', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.85)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 100,
          padding: '20px'
        }}>
          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            border: '1px solid var(--border-primary)', 
            borderRadius: 'var(--radius-lg)', 
            maxWidth: '540px', 
            width: '100%', 
            padding: '28px',
            position: 'relative',
            boxShadow: '0 0 40px rgba(249, 115, 22, 0.25)'
          }}>
            <button 
              onClick={() => setOrderModalService(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {!orderSubmitted ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ backgroundColor: 'var(--primary-subtle)', color: 'var(--primary)', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                    {orderModalService.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#4ade80' }}>● Server Slot Ready</span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {orderModalService.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
                  {orderModalService.description}
                </p>

                <div style={{ backgroundColor: '#13110E', padding: '14px', borderRadius: '8px', marginBottom: '20px', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Required Service Fee:</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>${orderModalService.priceUSD.toFixed(2)} USD</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-dim)' }}>Estimated Time:</span>
                    <span style={{ color: 'var(--accent)' }}>{orderModalService.estimatedTime}</span>
                  </div>
                </div>

                <form onSubmit={handlePlaceOrder}>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-main)', fontWeight: 600, marginBottom: '6px' }}>
                      DEVICE IMEI / SERIAL / SN:
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 863920194820192 or Fastboot Serial"
                      value={orderImei}
                      onChange={(e) => setOrderImei(e.target.value)}
                      style={{ 
                        width: '100%', 
                        backgroundColor: '#11100E', 
                        border: '1px solid var(--border-medium)', 
                        padding: '10px 14px', 
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-main)', fontWeight: 600, marginBottom: '6px' }}>
                      REMOTE DESKTOP ID (ANYDESK / ULTRAVIEWER ID):
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. AnyDesk ID 918 203 192 (optional for instant API checks)"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      style={{ 
                        width: '100%', 
                        backgroundColor: '#11100E', 
                        border: '1px solid var(--border-medium)', 
                        padding: '10px 14px', 
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-main)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--primary)',
                      color: '#11100E',
                      border: 'none',
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 800,
                      fontSize: '14px',
                      letterSpacing: '0.5px',
                      cursor: 'pointer'
                    }}
                  >
                    CONFIRM & DISPATCH REMOTE AGENT
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ 
                  width: '54px', 
                  height: '54px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(34, 197, 94, 0.15)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#4ade80',
                  marginBottom: '16px'
                }}>
                  <CheckCircle2 size={30} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Order Successfully Dispatched!
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Your request has been routed to our automated server queue. An authorized technician has been assigned.
                </p>

                <div style={{ backgroundColor: '#13110E', padding: '16px', borderRadius: '8px', marginBottom: '20px', textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>TICKET ID</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--primary)', fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>FIX-{(Math.random() * 900000 + 100000).toFixed(0)}</span>
                    <button 
                      onClick={() => {
                        setCopiedOrderId(true);
                        setTimeout(() => setCopiedOrderId(false), 2000);
                      }}
                      style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}
                    >
                      {copiedOrderId ? <Check size={14} /> : <Copy size={14} />} {copiedOrderId ? 'Copied' : 'Copy Ticket'}
                    </button>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
                    Target Device: <strong>{orderImei || 'Specified IMEI'}</strong>
                  </div>
                </div>

                <button 
                  onClick={() => setOrderModalService(null)}
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-medium)',
                    padding: '10px 24px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
