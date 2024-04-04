import Button from "@/components/atoms/Button";
import PageWrapper from "../PageWrapper";
import Form from "@/components/atoms/Form";
import Textfield from "@/components/atoms/Form/Textfield";
import Label from "@/components/atoms/Form/Label";
import Field from "@/components/atoms/Form/Field";
import Message from "@/components/atoms/Form/Message";
import Submit from "@/components/atoms/Form/Submit";
import ScrollArea from "@/components/molecules/ScrollArea";

export default function SignUpPage() {
  return (
    <ScrollArea className="h-[calc(100dvh-370px)]">
      <PageWrapper asChild className="px-0">
        <Form className="gap-8">
          <div className="vertical gap-5 px-12">
            <Field name="email">
              <Label>Email</Label>
              <Textfield
                placeholder="Email@company.com"
                type="email"
                disabled
              />
              <Message match="valueMissing">Please enter email</Message>
              <Message match="typeMismatch">Email is invalid</Message>
            </Field>
            <Field name="password">
              <Label>Password</Label>
              <Textfield
                placeholder="Password"
                required
                type="password"
                disabled
              />
              <Message match="valueMissing">Please enter password</Message>
            </Field>
            <Field name="repassword">
              <Label>Password</Label>
              <Textfield
                placeholder="Confirm password"
                required
                type="password"
                disabled
              />
              <Message match="valueMissing">Please enter password</Message>
            </Field>
          </div>
          <div className="bg-amber-200 text-amber-900 px-3 py-2 rounded-lg mx-12">
            Work in progress!
          </div>
          <div className="horizontal sticky bottom-0 inset-x-0 bg-white px-12">
            <Submit asChild>
              <Button className="w-full" disabled>
                Sign up
              </Button>
            </Submit>
          </div>
        </Form>
      </PageWrapper>
    </ScrollArea>
  );
}
