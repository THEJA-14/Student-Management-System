import { useNavigate } from 'react-router-dom';
import { UserOutlined, TeamOutlined, ReadOutlined } from '@ant-design/icons';
import AuthLayout from '../../components/layouts/AuthLayout';
import RoleCard from '../../components/layouts/RoleCard';

export default function RoleSelect() {
  const navigate = useNavigate();

  const roles = [
    {
      key: 'admin',
      icon: <UserOutlined />,
      title: 'Admin',
    },
    {
      key: 'teacher',
      icon: <TeamOutlined />,
      title: 'Teacher',
    },
    {
      key: 'student',
      icon: <ReadOutlined />,
      title: 'Student',
    },
  ];

  const handleRoleSelect = (role) => {
    if (role === 'admin') {
      navigate('/login?role=admin');
    } else if (role === 'teacher') {
      navigate('/login?role=teacher');
    } else {
      navigate('/login?role=student');
    }
  };

  return (
    <AuthLayout>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48, color: '#262626' }}>
          Select Your Role
        </h1>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {roles.map((role) => (
            <RoleCard
              key={role.key}
              icon={role.icon}
              title={role.title}
              description={role.description}
              onClick={() => handleRoleSelect(role.key)}
            />
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}