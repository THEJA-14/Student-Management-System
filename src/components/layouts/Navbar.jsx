import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'courses', label: 'Courses' },
    { key: 'blog', label: 'Blog' },
    { key: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav
        style={{
          background: 'linear-gradient(135deg, #0a4d4e 0%, #1a7a7c 100%)',
          padding: '16px 24px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                background: '#5dd8d0',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
              }}
            >
              🎓
            </div>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              SkillNest
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
            }}
            className="desktop-menu"
          >
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
              }}
              theme="dark"
            />
            <div style={{ display: 'flex', gap: 12 }}>
              <Button
                size="large"
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 8,
                }}
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
              <Button
                size="large"
                style={{
                  background: '#5dd8d0',
                  border: 'none',
                  color: '#0a4d4e',
                  fontWeight: 600,
                  borderRadius: 8,
                }}
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Button>
            </div>
          </div>

          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24, color: '#fff' }} />}
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-menu-button"
            style={{ display: 'none' }}
          />
        </div>
      </nav>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{ border: 'none', marginBottom: 24 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button
            size="large"
            block
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/login');
            }}
          >
            Sign In
          </Button>
          <Button
            type="primary"
            size="large"
            block
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/register');
            }}
          >
            Sign Up
          </Button>
        </div>
      </Drawer>

      <style>{`
        @media (max-width: 992px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}