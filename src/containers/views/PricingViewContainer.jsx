import { PricingView } from "../../components/PricingView";
import { useAuth } from "../../hooks/useAuth";
import { useNav } from "../../hooks/useNav";
import { usePlans } from "../../hooks/usePlans";
export const PricingViewContainer = () => {
  const { user } = useAuth();
  const { nav } = useNav();
  const { plans } = usePlans();

  return <PricingView plans={plans} user={user} nav={nav} />;
};
