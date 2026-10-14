import React from 'react';
import { Users, Send, CheckCircle2, ShieldCheck, CreditCard, MessageSquare } from 'lucide-react';
import { AUTHORIZED_RESELLERS } from '../data/portalData';

export default function ResellersPage() {
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
          <ShieldCheck size={14} color="var(--primary)" /> VERIFIED DISTRIBUTOR NETWORK
        </div>
        <h1 style={{ fontFamily: 'var(--font-cyber)', fontSize: '32px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Users color="var(--primary)" /> Fixora Global Resellers & Payment Partners
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
          Recharge your Fixora server credits locally via bank transfer, USDT, or mobile money through verified regional distributors.
        </p>
      </div>

      {/* Reseller Grid */}
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
                color: 'var(--status-online)', 
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

            <div style={{ backgroundColor: '#14120F', padding: '10px 12px', borderRadius: '6px', marginBottom: '16px', border: '1px solid var(--border-light)' }}>
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
                width: '100%', 
                backgroundColor: 'var(--bg-elevated)', 
                border: '1px solid var(--border-primary)', 
                color: 'var(--primary)', 
                padding: '10px', 
                borderRadius: 'var(--radius-sm)', 
                fontWeight: 700, 
                fontSize: '13px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                boxSizing: 'border-box',
                transition: 'var(--transition-fast)'
              }}
            >
              <Send size={15} /> CONTACT ON TELEGRAM
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
