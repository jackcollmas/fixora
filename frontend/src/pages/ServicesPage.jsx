import React, { useState } from 'react';
import { Cpu, Search, Key, X, CheckCircle2, Clock, Smartphone, Send, ShieldCheck, Zap } from 'lucide-react';
import { GSM_SERVICES } from '../data/portalData';

export default function ServicesPage() {
  const [serviceSearch, setServiceSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [orderModalService, setOrderModalService] = useState(null);
  const [orderImei, setOrderImei] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const serviceCategories = [
    'All', 
    'Xiaomi / Redmi', 
    'Samsung', 
    'Apple / iPhone', 
    'Transsion (Tecno/Infinix)', 
    'Motorola', 
    'Modems & Routers'
  ];

  const filteredServices = GSM_SERVICES.filter(service => {
    const matchesCat = selectedCategory === 'All' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesQuery = service.name.toLowerCase().includes(serviceSearch.toLowerCase()) || 
                         service.description.toLowerCase().includes(serviceSearch.toLowerCase()) ||
                         (service.supportedModels && service.supportedModels.some(m => m.toLowerCase().includes(serviceSearch.toLowerCase())));
    return matchesCat && matchesQuery;
  });

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
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
          <Zap size={14} color="var(--primary)" /> INSTANT REMOTE DISPATCH
        </div>
        <h1 style={{ fontFamily: 'var(--font-cyber)', fontSize: '32px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Cpu color="var(--primary)" /> GSM Remote Server Services
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
          Direct server authorization for official OEM flashing, FRP unlock, MDM profile bypass, and bootloader tokens. Powered by point-to-point USB bridging.
        </p>
      </div>

      {/* Control Bar: Search and Category Pills */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ position: 'relative', minWidth: '320px', flex: '1 1 320px' }}>
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
              padding: '12px 14px 12px 40px', 
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
          <ShieldCheck size={16} color="var(--status-online)" />
          <span>Nodes Active: <strong>{filteredServices.length} Services Available</strong></span>
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '28px' }}>
        {serviceCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              backgroundColor: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
              color: selectedCategory === cat ? '#11100E' : 'var(--text-muted)',
              border: '1px solid',
              borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-light)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'var(--transition-fast)'
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
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <span style={{ 
                  backgroundColor: 'var(--primary-subtle)', 
                  color: 'var(--primary)', 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {service.category}
                </span>

                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '5px', 
                  fontSize: '12px', 
                  color: service.status === 'instant' ? 'var(--status-online)' : 'var(--status-busy)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: service.status === 'instant' ? 'var(--status-online)' : 'var(--status-busy)' 
                  }}></span>
                  {service.status.toUpperCase()}
                </span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                {service.name}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '18px' }}>
                {service.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {(service.supportedModels || []).map((model, mIdx) => (
                  <span 
                    key={mIdx} 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.04)', 
                      border: '1px solid var(--border-light)', 
                      color: 'var(--text-muted)', 
                      fontSize: '11px', 
                      padding: '2px 8px', 
                      borderRadius: '4px' 
                    }}
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Server Auth Fee</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 800, color: 'var(--text-main)' }}>
                    ${service.priceUSD.toFixed(2)} <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>USD</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>Avg Fulfillment</div>
                  <div style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} /> {service.estimatedTime}
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

      {/* Order Modal */}
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
                  <span style={{ fontSize: '12px', color: 'var(--status-online)' }}>Live Server Slot Ready</span>
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
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-main)', fontWeight: 600, marginBottom: '6px' }}>
                      OPERATOR NOTES / USB IP (OPTIONAL):
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. USB Redirector IP 192.168.1.50 port 32032"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      style={{ 
                        width: '100%', 
                        backgroundColor: '#11100E', 
                        border: '1px solid var(--border-medium)', 
                        padding: '10px 14px', 
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-main)',
                        fontSize: '13px',
                        outline: 'none',
                        resize: 'none'
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
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <Send size={16} /> SUBMIT DISPATCH ORDER
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={48} color="var(--status-online)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Server Order Queued
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>
                  Your request has been routed to the primary API gateway. An operator will bridge your session momentarily.
                </p>
                <button 
                  onClick={() => setOrderModalService(null)}
                  style={{ 
                    backgroundColor: 'var(--primary)', 
                    color: '#11100E', 
                    border: 'none', 
                    padding: '10px 24px', 
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  DONE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
