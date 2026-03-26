import Header from "@/components/Header";
import HeroAboutServices from "@/components/HeroAboutServices";
import PortfolioPricesDocuments from "@/components/PortfolioPricesDocuments";
import ReviewsContacts from "@/components/ReviewsContacts";

export default function Index() {
  return (
    <div className="font-body bg-site text-site-text min-h-screen">
      <Header />
      <HeroAboutServices />
      <PortfolioPricesDocuments />
      <ReviewsContacts />
    </div>
  );
}
