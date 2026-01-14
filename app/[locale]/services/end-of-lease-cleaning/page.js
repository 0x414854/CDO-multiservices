import ServicePage from "@/components/page/servicePage";
import EndOfLeaseCleaningImg from "@/public/images/pageServices/endOfLeaseCleaning.png";

export default function HousekeeperPage() {
  return (
    <ServicePage
      translationKey="EndOfLeaseCleaningPage"
      image={EndOfLeaseCleaningImg}
    />
  );
}
