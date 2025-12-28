import CardApp from '@/components/app/card';
import NavbarMenu from '@/components/app/navbar';
import { ChartLineLinear } from '@/components/app/statistic/linear-chart';
import { ChartPie } from '@/components/app/statistic/pie-chart';
import ProbList from '@/components/app/statistic/prob-list';
import AppTables from '@/components/app/table';
import { adminDb } from '@/config/firebase-admin.init';
import { FiStar, FiTrash, FiUserPlus, FiUsers } from 'react-icons/fi';
type AppUser = {
  id: string;
  username: string;
  phoneNumber: string;
  lang: string;
  imageUrl: string;
  freePeriod: number;
  createdAt: string;
  address: string;
  goals: any[];
  validatedAccount: boolean;
};
export default async function Dashboard() {
  // fetch data server-side
  const snapshot = await adminDb.collection("users").get();
  const users = snapshot.docs.map((doc) => {
    const data = doc.data() as Omit<AppUser, 'id'>;
    return {
      id: doc.id,
      ...data,
    };
  }) as AppUser[];
  return (
    <div className="min-h-screen bg-white">
      <NavbarMenu />

      {/* Header */}
      <div className="p-5 flex justify-between mr-4 ml-4 bg-gray-100 rounded-xl my-4">
        <p className="text-gray-800 text-3xl font-semibold">
          Dashboard
        </p>

        <div className="flex gap-4">
          <div className="group cursor-pointer">
            <div className="rounded-full bg-gradient-to-r from-blue-950 to-[#4e4db0] 
                            w-44 h-12 flex items-center
                            justify-center 
                            group-hover:scale-105 transition shadow-md">
              <FiUserPlus className="mx-4 text-white" size={20} />
              <p className="text-white mx-6 font-medium">Add User</p>
            </div>
          </div>

          <button className="h-12 w-44 bg-white rounded-full font-semibold shadow hover:shadow-lg">
            <p className="bg-gradient-to-r from-blue-900 to-[#4e4db0] 
                          bg-clip-text text-transparent font-bold text-lg">
              Import Data
            </p>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-4 px-4">
        
        {/* LEFT COLUMN (pagination only) */}
        <div className="bg-gray-100 rounded-xl p-4 w-[380px]">
          <ProbList />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col gap-4">
          
          {/* Stats cards */}
          <div className="bg-gray-100 rounded-xl p-4 flex gap-4 justify-around">
            <CardApp icon={<FiUsers color="#4e4db0" size={20} />} title="Total User" stat={users.length}/>
            <CardApp icon={<FiTrash color="#4e4db0" size={20} />} title="Deleted Accounts" stat="0"/>
            <CardApp icon={<FiStar color="#4e4db0" size={20} />} title="Rating" stat="4.2"/>
          </div>

          {/* Charts */}
          <div className="bg-gray-100 rounded-xl p-4 flex gap-4">
            <ChartLineLinear />
            <ChartPie data={users} />
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white rounded-xl p-6 shadow border m-4">
        <AppTables data={users} />
      </div>
    </div>
  );
}
