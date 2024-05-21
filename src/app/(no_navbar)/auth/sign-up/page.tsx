import Button from "@/components/atoms/Button";
import Form from "@/components/atoms/Form";
import Textfield from "@/components/atoms/Form/Textfield";
import FieldLabel from "@/components/atoms/Form/FieldLabel";
import Field from "@/components/atoms/Form/Field";
import Message from "@/components/atoms/Form/Message";
import Submit from "@/components/atoms/Form/Submit";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Container from "@/components/atoms/Container";

export default function SignUpPage() {
  return (
    <AppPageWrapper
      id="Sign up"
      className="flex-1"
      slotProps={{ className: "min-h-max h-full flex-1" }}
    >
      <Container className="flex-1">
        <Form className="gap-5 vertical flex-1 justify-between h-full">
          <div className="vertical gap-5">
            <Field name="email">
              <FieldLabel>Email</FieldLabel>
              <Textfield
                placeholder="Email@company.com"
                type="email"
                disabled
              />
              <Message match="valueMissing">Please enter email</Message>
              <Message match="typeMismatch">Email is invalid</Message>
            </Field>
            <Field name="password">
              <FieldLabel>Password</FieldLabel>
              <Textfield
                placeholder="Password"
                required
                type="password"
                disabled
              />
              <Message match="valueMissing">Please enter password</Message>
            </Field>
            <Field name="repassword">
              <FieldLabel>Password</FieldLabel>
              <Textfield
                placeholder="Confirm password"
                required
                type="password"
                disabled
              />
              <Message match="valueMissing">Please enter password</Message>
            </Field>
          </div>
          <div className="bg-amber-200 text-amber-900 px-3 py-2 rounded-lg">
            Work in progress!
          </div>
          <div className="horizontal">
            <Submit asChild>
              <Button className="w-full" disabled>
                Sign up
              </Button>
            </Submit>
          </div>
        </Form>
      </Container>
    </AppPageWrapper>
  );
}
