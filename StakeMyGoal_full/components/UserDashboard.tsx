'use client';
import GoalStreak from './GoalStreak';
import Achievements from './Achievements';
import LeaderboardRealtime from './LeaderboardRealtime';
import NotificationsCenter from './NotificationsCenter';
export default function UserDashboard({ uid }: { uid: string }){
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <GoalStreak uid={uid} />
          <Achievements uid={uid} />
        </div>
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded"><h3 className="font-bold">💰 Total Earned</h3><p className="text-2xl">£0</p></div>
          <LeaderboardRealtime />
        </div>
      </div>
      <NotificationsCenter uid={uid} />
    </div>
  )
}
