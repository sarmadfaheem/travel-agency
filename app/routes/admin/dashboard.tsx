import { Header } from "components";

const Dashboard = () => {
  const user = {
    name: "Sarmad",
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destination in real time"
      />
      DashBoard Page Content
    </main>
  );
};

export default Dashboard;
