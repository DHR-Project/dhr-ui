import Container from "@/components/atoms/Container";
import Form, { Field, Textfield } from "@/components/atoms/Form";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Toolbar from "@/components/molecules/Toolbar";

export default function SearchPage() {
  return (
    <AppPageWrapper>
      <Toolbar
        className="[&>.leading]:w-full [&_.leading]:items-center"
        hasBack
        slots={{
          leading: (
            <div className="horizontal gap-2 items-center flex-1">
              <Form method="GET" className="flex-1">
                <Field name="search" autoFocus>
                  <Textfield />
                </Field>
              </Form>
            </div>
          ),
        }}
      />
      <Container>Search content</Container>
    </AppPageWrapper>
  );
}
