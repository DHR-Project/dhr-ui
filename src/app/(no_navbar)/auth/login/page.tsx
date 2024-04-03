import Button from "@/components/atoms/Button";
import PageWrapper from "../PageWrapper";
import Form from "@/components/atoms/Form";
import Textfield from "@/components/atoms/Form/Textfield";
import Label from "@/components/atoms/Form/Label";
import Field from "@/components/atoms/Form/Field";
import Message from "@/components/atoms/Form/Message";
import Submit from "@/components/atoms/Form/Submit";

export default function LoginPage() {
  return (
    <PageWrapper asChild>
      <Form>
        <div className="vertical gap-8">
          <Field name="email">
            <Label>Email</Label>
            <Textfield placeholder="Email@company.com" type="email" required />
            <Message match="valueMissing">Please enter email</Message>
            <Message match="typeMismatch">Email is invalid</Message>
          </Field>
          <Field name="password">
            <Label>Password</Label>
            <Textfield placeholder="Password" required type="password" />
            <Message match="valueMissing">Please enter password</Message>
          </Field>
        </div>
        <Submit className="horizontal sticky bottom-0 inset-x-0" asChild>
          <Button className="w-full">Login</Button>
        </Submit>
      </Form>
    </PageWrapper>
  );
}
