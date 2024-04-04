import Container from "@/components/atoms/Container";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Toolbar from "@/components/molecules/Toolbar";
import NoHistory from "@/components/organisms/NoHistory";

export default function HistoryPage() {
  return (
    <AppPageWrapper>
      <Toolbar title="History" />
      <Container className="flex-1 horizontal">
        <NoHistory />
      </Container>
    </AppPageWrapper>
  );
}
