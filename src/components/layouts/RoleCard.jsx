import { Card } from 'antd';

export default function RoleCard({ icon, title, description, onClick }) {
  return (
    <Card
      hoverable
      onClick={onClick}
      style={{
        width: 280,
        textAlign: 'center',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
      bodyStyle={{ padding: '40px 20px' }}
    >
      <div style={{ fontSize: 48, marginBottom: 16, color: '#5B7FFF' }}>
        {icon}
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8, color: '#262626' }}>
        {title}
      </h2>
      <p style={{ fontSize: 14, color: '#8c8c8c', margin: 0 }}>
        {description}
      </p>
    </Card>
  );
}