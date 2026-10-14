import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import LavalampBG from '../components/LavalampBG';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-9.82z"/>
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"/>
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
  </svg>
);

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    resetEmail: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo auth attempt:', formData);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Demo password reset for:', formData.resetEmail);
  };

  const handleGoogleAuth = () => {
    console.log('Demo Google authentication');
  };

  if (showForgotPassword) {
    return (
      <LavalampBG variant="default" blur={50} opacity={0.85}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          position: 'relative'
        }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--border-primary)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          maxWidth: '90%',
          zIndex: 10
        }}>
          <AlertCircle size={18} color="var(--primary)" />
          <span style={{ fontSize: '13px', color: 'var(--text-main)' }}>
            <strong style={{ color: 'var(--primary)' }}>Demo Mode:</strong> This is a non-functional authentication interface for demonstration purposes only
          </span>
        </div>

        <div className="glass-panel" style={{
          width: '100%',
          maxWidth: '440px',
          padding: '40px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          marginTop: '60px'
        }}>
          <button
            onClick={() => setShowForgotPassword(false)}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            Back to Login
          </button>

          <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '20px' }}>
            <div style={{
              fontFamily: 'var(--font-brand)',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '3px',
              color: 'var(--text-main)',
              marginBottom: '8px'
            }}>
              FIXORA<span style={{ color: 'var(--primary)' }}>.</span>
            </div>
            <div style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'var(--accent)',
              fontFamily: 'var(--font-cyber)'
            }}>
              PASSWORD RECOVERY
            </div>
          </div>

          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--text-main)',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            Reset Your Password
          </h2>

          <p style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginBottom: '32px',
            lineHeight: 1.6
          }}>
            Enter your email address and we will send you a link to reset your password
          </p>

          <form onSubmit={handleForgotPassword}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-main)',
                marginBottom: '8px'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-dim)'
                  }}
                />
                <input
                  type="email"
                  name="resetEmail"
                  value={formData.resetEmail}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 44px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'var(--primary)',
                color: 'var(--bg-main)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                boxShadow: '0 0 20px var(--primary-glow)',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-hover)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 0 30px var(--primary-glow)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--primary)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 0 20px var(--primary-glow)';
              }}
            >
              Send Reset Link
            </button>
          </form>

          <div style={{
            marginTop: '24px',
            padding: '12px',
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            textAlign: 'center'
          }}>
            Password reset links expire after 1 hour for security
          </div>
        </div>
      </div>
      </LavalampBG>
    );
  }

  return (
    <LavalampBG variant="default" blur={50} opacity={0.85}>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative'
      }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--bg-subtle)',
        border: '1px solid var(--border-primary)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '90%',
        zIndex: 10
      }}>
        <AlertCircle size={18} color="var(--primary)" />
        <span style={{ fontSize: '13px', color: 'var(--text-main)' }}>
          <strong style={{ color: 'var(--primary)' }}>Demo Mode:</strong> This is a non-functional authentication interface for demonstration purposes only
        </span>
      </div>

      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '480px',
        padding: '48px 40px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        marginTop: '60px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            fontFamily: 'var(--font-brand)',
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: 'var(--text-main)',
            marginBottom: '8px'
          }}>
            FIXORA<span style={{ color: 'var(--primary)' }}>.</span>
          </div>
          <div style={{
            fontSize: '11px',
            letterSpacing: '2px',
            color: 'var(--accent)',
            fontFamily: 'var(--font-cyber)',
            marginBottom: '20px'
          }}>
            GSM TECH & FIRMWARE
          </div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--text-main)',
            marginBottom: '8px'
          }}>
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            {isSignUp ? 'Sign up to access the GSM portal' : 'Sign in to your account'}
          </p>
        </div>

        <button
          onClick={handleGoogleAuth}
          type="button"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-main)',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '24px',
            transition: 'var(--transition-fast)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--bg-card-hover)';
            e.target.style.borderColor = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--bg-card)';
            e.target.style.borderColor = 'var(--border-medium)';
          }}
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-light)' }}></div>
          <span style={{ fontSize: '12px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
            Or continue with email
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-light)' }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-main)',
                marginBottom: '8px'
              }}>
                Username
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  size={18}
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-dim)'
                  }}
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                  required={isSignUp}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 44px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-main)',
              marginBottom: '8px'
            }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-dim)'
                }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 44px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-main)',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-main)',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={18}
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-dim)'
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 44px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-main)',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-dim)',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-dim)'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isSignUp && (
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '24px'
            }}>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--primary)'}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: 'var(--primary)',
              color: 'var(--bg-main)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
              boxShadow: '0 0 20px var(--primary-glow)',
              letterSpacing: '0.5px',
              marginBottom: '20px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--primary-hover)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 0 30px var(--primary-glow)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--primary)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 0 20px var(--primary-glow)';
            }}
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          fontSize: '14px',
          color: 'var(--text-muted)'
        }}>
          {isSignUp ? 'Already have an account?' : 'Do not have an account?'}
          {' '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-hover)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--primary)'}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>

        <div style={{
          marginTop: '24px',
          padding: '14px',
          backgroundColor: 'var(--bg-elevated)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '12px',
          color: 'var(--text-dim)',
          textAlign: 'center',
          lineHeight: 1.6
        }}>
          By continuing, you agree to the Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
    </LavalampBG>
  );
}
