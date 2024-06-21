import Container from "@/components/atoms/Container";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Toolbar from "@/components/molecules/Toolbar";
import SearchBar from "@/components/organisms/SearchBar";
import SearchNotFound from "@/components/templates/SearchNotFound";

export default function SearchRoutePage() {
  return (
    <>
      <header>
        <Toolbar className="justify-normal gap-2" hasBack>
          <SearchBar />
        </Toolbar>
      </header>
      <AppPageWrapper id="SearchPage" slotProps={{ className: "min-h-[auto]" }}>
        <Container className="flex-1">
          <SearchNotFound />
        </Container>
      </AppPageWrapper>
    </>
  );
}
