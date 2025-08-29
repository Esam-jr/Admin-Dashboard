import OverviewCards from "../components/Analystic/OverviewCards";
import RevenueChart from "../components/Analystic/RevenueChart";
import ChannelPerformance from "../components/Analystic/ChannelPerformance";
import ProductPerformance from "../components/Analystic/ProductPerformance";
import UserRetention from "../components/Analystic/UserRetention";
import CustomerSegmentation from "../components/Analystic/CustomerSegmentation";
import AIPoweredInsights from "../components/Analystic/AIPoweredInsights";

function AnalysticPage() {
  return (
    <div className=" flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  );
}

export default AnalysticPage;
