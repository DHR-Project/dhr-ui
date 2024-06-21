import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Toolbar from "@/components/molecules/Toolbar";
import SearchBar from "@/components/organisms/SearchBar";
import { ArchiveIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <>
      <Toolbar
        slots={{
          trailing: (
            <>
              <Button isSymbol circle>
                <ArchiveIcon width={20} height={20} />
              </Button>
            </>
          ),
        }}
        title="Delicious Food For You"
      />
      <Container className="flex-1 gap-4 vertical">
        <div className="search-bar">
          <SearchBar clickable />
        </div>
      </Container>
    </>
  );
}
