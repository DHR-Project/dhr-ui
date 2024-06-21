import Container from "@/components/atoms/Container";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Toolbar from "@/components/molecules/Toolbar";
import NoOrder from "@/components/templates/NoOrder";

export default function OrdersPage() {
  return (
    <AppPageWrapper>
      <Toolbar title="Orders" hasBack />
      <Container className="flex-1 horizontal">
        <NoOrder />
      </Container>
    </AppPageWrapper>
  );
}
