import Container from "@/components/atoms/Container";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Toolbar from "@/components/molecules/Toolbar";

export default function DevColorPage() {
  return (
    <AppPageWrapper>
      <Toolbar title={"Color"}></Toolbar>
      <Container className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1>Background</h1>
          <ul className="light bg-bg-secondary p-2 grid rounded-lg">
            <li>
              <div className="w-20 h-20 aspect-square bg-bg-primary rounded-full" />
              <span>Primary</span>
            </li>
          </ul>
        </div>
      </Container>
    </AppPageWrapper>
  );
}
