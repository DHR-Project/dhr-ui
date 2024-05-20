import { type DialogProps, Root } from "@radix-ui/react-dialog";

interface IDialog extends DialogProps {}

export default function Dialog(props: IDialog) {
  return <Root {...props} />;
}
