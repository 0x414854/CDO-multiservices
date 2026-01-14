import ServicePage from "@/components/page/servicePage";
import OfficeCleaningImg from "@/public/images/pageServices/officeCleaning.png";

export default function OfficeCleaningPage() {
  return (
    <ServicePage
      translationKey="OfficeCleaningPage"
      image={OfficeCleaningImg}
    />
  );
}
