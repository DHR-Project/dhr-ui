import Button from "@/components/atoms/Button";
import Form from "@/components/atoms/Form";
import Textfield from "@/components/atoms/Form/Textfield";
import FieldLabel from "@/components/atoms/Form/FieldLabel";
import Field from "@/components/atoms/Form/Field";
import Message from "@/components/atoms/Form/Message";
import Submit from "@/components/atoms/Form/Submit";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import AppPageWrapper from "@/components/molecules/AppPageWrapper";
import Container from "@/components/atoms/Container";

export default function LoginPage() {
  return (
    <AppPageWrapper
      id="Authenticate"
      slotProps={{ className: "min-h-max h-full flex-1" }}
      className="flex-1"
    >
      <Container className="flex-1">
        <Form className="gap-5 h-full relative vertical justify-between">
          <div className="vertical gap-4">
            <div className="vertical gap-8">
              <Field name="email">
                <FieldLabel>Email</FieldLabel>
                <Textfield
                  placeholder="Email@company.com"
                  type="email"
                  required
                  slots={{
                    leading: <EnvelopeClosedIcon width={20} height={20} />,
                  }}
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
                  slots={{
                    leading: <LockClosedIcon width={20} height={20} />,
                  }}
                />
                <Message match="valueMissing">Please enter password</Message>
              </Field>
            </div>
            <Link href="forgot-password" className="text-secondary underline">
              Forgot password?
            </Link>
          </div>

          <Submit className="horizontal" asChild>
            <Button className="w-full">Login</Button>
          </Submit>
        </Form>
      </Container>
    </AppPageWrapper>
  );
}
