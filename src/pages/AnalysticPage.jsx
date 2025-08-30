import OverviewCards from "../components/Analystic/OverviewCards";
import RevenueChart from "../components/Analystic/RevenueChart";
import ChannelPerformance from "../components/Analystic/ChannelPerformance";
import ProductPerformance from "../components/Analystic/ProductPerformance";
import UserRetention from "../components/Analystic/UserRetention";
import CustomerSegmentation from "../components/Analystic/CustomerSegmentation";
import AIPoweredInsights from "../components/Analystic/AIPoweredInsights";

function AnalysticPage() {
  return (
    <div className="space-y-8">
      <OverviewCards />
      <RevenueChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChannelPerformance />
        <ProductPerformance />
        <UserRetention />
        <CustomerSegmentation />
      </div>
      <AIPoweredInsights />
    </div>
  );
}

export default AnalysticPage;
