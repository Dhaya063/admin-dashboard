import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100" style={{textAlign: 'center'}}>
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
