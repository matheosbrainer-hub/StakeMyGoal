import Navbar from '@/components/Navbar';
import UserDashboard from '@/components/UserDashboard';

export default function DashboardPage(){
  // In a real app, pass real user uid after auth
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <UserDashboard uid={'demo-user'} />
      </main>
    </div>
  )
}
