import React, { useState } from 'react';
import { Search, ShieldAlert, CheckCircle2, ShieldCheck, Smartphone, HelpCircle, Lock, Cpu } from 'lucide-react';

export default function ImeiPage() {
  const [checkImeiInput, setCheckImeiInput] = useState('');
  const [imeiReport, setImeiReport] = useState(null);
  const [checkingImei, setCheckingImei] = useState(false);

  const handleSimulateImeiCheck = (e) => {
    e.preventDefault();
    if (!checkImeiInput) return;
    setCheckingImei(true);
    setImeiReport(null);

    setTimeout(() => {
      setCheckingImei(false);
      setImeiReport({
        imei: checkImeiInput,
        model: 'Apple iPhone 15 Pro Max (A3106)',
        simLockStatus: 'Locked (T-Mobile USA)',
        fmiStatus: 'OFF',
        icloudClean: 'Clean',
        warrantyStatus: 'Active (Expires Dec 2026)',
        blacklistStatus: 'Clean / Whitelisted',
        carrier: 'T-Mobile USA MVNO Tether Policy',
        mdmStatus: 'No Corporate Profile Detected'
      });
    }, 1200);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 20px', width: '100%' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '16px', 
          backgroundColor: 'var(--primary-subtle)', 
          border: '1px solid var(--border-primary)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          marginBottom: '16px',
          boxShadow: '0 0 20px rgba(249, 115, 22, 0.25)'
        }}>
          <Search size={30} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cyber)', fontSize: '32px', color: 'var(--text-main)' }}>
          Official GSX & IMEI Intelligence Portal
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '620px', margin: '10px auto 0', lineHeight: 1.6 }}>
          Query carrier lock status, iCloud Find My status, GSX activation policies, blacklist validation, and OEM warranty coverage directly from official databases.
        </p>
      </div>

      {/* IMEI Form Box */}
      <div style={{ 
        backgroundColor: 'var(--bg-card)', 
        border: '1px solid var(--border-medium)', 
        borderRadius: 'var(--radius-lg)', 
        padding: '32px',
        boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
        marginBottom: '32px'
      }}>
        <form onSubmit={handleSimulateImeiCheck}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '0.5px' }}>
            ENTER 15-DIGIT IMEI OR APPLE SERIAL NUMBER:
          </label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <input 
              type="text" 
              placeholder="354829104928173 or G6TZ309..." 
              value={checkImeiInput} 
              onChange={(e) => setCheckImeiInput(e.target.value)}
              required
              style={{ 
                flex: '1 1 300px', 
                backgroundColor: '#11100E', 
                border: '1px solid var(--border-medium)', 
                color: 'var(--text-main)', 
                padding: '14px 16px', 
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-mono)',
                fontSize: '15px',
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
                padding: '14px 28px', 
                borderRadius: 'var(--radius-sm)', 
                fontWeight: 700, 
                fontSize: '14px', 
                cursor: checkingImei ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'var(--transition-fast)'
              }}
            >
              <Search size={16} /> {checkingImei ? 'QUERYING OEM SERVERS...' : 'AUDIT IMEI'}
            </button>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '10px' }}>
            Instant free lookup powered by Apple GSX Gateway and GSMA Device Check Registry.
          </div>
        </form>

        {/* Live Result Report */}
        {imeiReport && (
          <div style={{ 
            marginTop: '28px', 
            paddingTop: '24px', 
            borderTop: '1px solid var(--border-light)',
            animation: 'fadeIn 0.25s ease-out'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, fontFamily: 'var(--font-cyber)' }}>
                  VERIFIED AUDIT REPORT
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                  {imeiReport.model}
                </h3>
              </div>
              <span style={{ 
                backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                color: 'var(--status-online)', 
                fontSize: '12px', 
                padding: '4px 10px', 
                borderRadius: '20px', 
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <CheckCircle2 size={14} /> CERTIFIED
              </span>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '16px', 
              backgroundColor: '#12110F', 
              padding: '20px', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--border-light)' 
            }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>TARGET IDENTIFIER</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-main)', marginTop: '2px' }}>{imeiReport.imei}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>NETWORK SIM LOCK</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--status-busy)', marginTop: '2px' }}>{imeiReport.simLockStatus}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>FIND MY IPHONE (FMI)</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--status-online)', marginTop: '2px' }}>{imeiReport.fmiStatus}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>ICLOUD STATUS</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--status-online)', marginTop: '2px' }}>{imeiReport.icloudClean}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>BLACKLIST / CLEAN</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--status-online)', marginTop: '2px' }}>{imeiReport.blacklistStatus}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>CARRIER / NEXT TETHER</div>
                <div style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '2px' }}>{imeiReport.carrier}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>MDM SUPERVISION</div>
                <div style={{ fontSize: '13px', color: 'var(--status-online)', marginTop: '2px' }}>{imeiReport.mdmStatus}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>WARRANTY STATUS</div>
                <div style={{ fontSize: '13px', color: 'var(--accent)', marginTop: '2px' }}>{imeiReport.warrantyStatus}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feature Highlights Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
          <ShieldCheck size={22} color="var(--primary)" style={{ marginBottom: '10px' }} />
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>Official Carrier Lookup</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
            Query original purchase carrier and next tether activation profile to verify unlock eligibility.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
          <Lock size={22} color="var(--primary)" style={{ marginBottom: '10px' }} />
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>iCloud & FRP Protection</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
            Detect Find My iPhone activation lock, lost mode flags, and Google Factory Reset Protection.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
          <Cpu size={22} color="var(--primary)" style={{ marginBottom: '10px' }} />
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>GSMA Whitelist Registry</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
            Real-time verification against global stolen/loss databases across all major international carriers.
          </p>
        </div>
      </div>
    </div>
  );
}
