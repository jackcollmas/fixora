import React from 'react';
import './LavalampBG.css';

/**
 * LavalampBG Component
 * 
 * Interactive / customizable lava lamp background with morphing blobs,
 * glowing ambient light, subtle floating micro-particles, and optional glass overlay.
 * 
 * Props:
 * - variant: 'default' | 'intense' | 'cyber' | 'subtle'
 * - blur: number (backdrop blur px, default 40)
 * - showControls: boolean (show live color/speed sliders for tuning)
 */
export default function LavalampBG({ 
  variant = 'default',
  speed = 1,
  opacity = 0.85,
  blur = 50,
  fixed = false,
  children 
}) {
  return (
    <div className={`lavalamp-viewport lavalamp-variant-${variant} ${fixed ? 'lavalamp-fixed' : ''}`}>
      {/* Dynamic SVG Gooey Filter for natural organic blob merging */}
      <svg className="lavalamp-svg-filter" aria-hidden="true">
        <defs>
          <filter id="lava-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 24 -9" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Deep Space Background Layer */}
      <div className="lavalamp-backdrop" />

      {/* Blob Stage (Gooey merged liquid blobs) */}
      <div 
        className="lavalamp-stage"
        style={{ 
          opacity, 
          filter: `url(#lava-goo) blur(${blur * 0.25}px)` 
        }}
      >
        {/* Blob 1: Hot Core Orange/Amber Blob */}
        <div className="lava-blob blob-1" />
        
        {/* Blob 2: Vibrant Electric Tangerine */}
        <div className="lava-blob blob-2" />
        
        {/* Blob 3: Deep Magma Crimson */}
        <div className="lava-blob blob-3" />
        
        {/* Blob 4: Gold Honey Plasma */}
        <div className="lava-blob blob-4" />

        {/* Blob 5: Wandering Floating Droplet */}
        <div className="lava-blob blob-5" />

        {/* Blob 6: Gentle Ambient Deep Pool */}
        <div className="lava-blob blob-6" />
      </div>

      {/* Glass Frost Diffuser & Scanline Grid for Cyber feel */}
      <div 
        className="lavalamp-diffuser"
        style={{ backdropFilter: `blur(${blur}px)` }}
      />

      {/* Micro Ember Specks */}
      <div className="lavalamp-embers">
        <span className="ember ember-1" />
        <span className="ember ember-2" />
        <span className="ember ember-3" />
        <span className="ember ember-4" />
        <span className="ember ember-5" />
      </div>

      {/* Content wrapper */}
      {children && (
        <div className="lavalamp-content">
          {children}
        </div>
      )}
    </div>
  );
}
