import Container from "@/components/atoms/Container";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Toolbar from "@/components/molecules/Toolbar";
import SearchBar from "@/components/organisms/SearchBar";
import SearchNotFound from "@/components/templates/SearchNotFound";

export default function SearchPage() {
  return (
    <AppPageWrapper>
      <Toolbar
        className="[&>.leading]:w-full [&_.leading]:items-center w-full"
        hasBack
        slots={{
          leading: (
            <div className="horizontal gap-2 items-center flex-1">
              <SearchBar />
            </div>
          ),
        }}
      />
      <Container className="h-full">
        <SearchNotFound />
      </Container>
    </AppPageWrapper>
  );
}
