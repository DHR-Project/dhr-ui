import Container from "@/components/atoms/Container";
import Toolbar from "@/components/molecules/Toolbar";
import { ArchiveIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <>
      <Toolbar
        slots={{ leading: <HamburgerMenuIcon />, trailing: <ArchiveIcon /> }}
        title="Delicious Food For You"
      />
      <Container className="flex-1"></Container>
    </>
  );
}
