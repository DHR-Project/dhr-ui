import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

const typographyVariants = cva("", {
  variants: {
    style: {
      largeTitle: "large-title",
      title1: "title1",
      title2: "title2",
      title3: "title3",
      headline: "headline",
      body: "typography-body",
      callout: "callout",
      subheadline: "subheadline",
      footnote: "footnote",
      caption1: "caption1",
      caption2: "caption2",
    },
    variant: {
      regular: "",
      emphasized: "",
      italic: "",
      emphasizedItalic: "",
    },
    color: {
      primary: "text-label-primary",
      secondary: "text-label-secondary",
      tertiary: "text-label-tertiary",
      quaternary: "text-label-quaternary",
      link: "text-blue-500 dark:text-blue-400",
    },
  },
  compoundVariants: [
    {
      style: ["largeTitle", "title1", "title2"],
      variant: ["emphasized"],
      className: ["font-bold"],
    },
    // Emphasized
    {
      style: [
        "title3",
        "body",
        "callout",
        "subheadline",
        "footnote",
        "caption2",
      ],
      variant: ["emphasized"],
      className: ["font-semibold"],
    },
    {
      style: ["caption1"],
      variant: ["emphasized"],
      className: ["font-medium"],
    },
    // Italic
    {
      style: [
        "headline",
        "body",
        "callout",
        "subheadline",
        "footnote",
        "caption2",
      ],
      variant: ["italic"],
      className: ["italic"],
    },
    // Emphasized Italic
    {
      style: ["body", "callout", "subheadline", "footnote", "caption2"],
      variant: ["emphasizedItalic"],
      className: ["italic", "font-semibold"],
    },
    {
      style: ["caption1"],
      variant: ["emphasizedItalic"],
      className: ["italic", "font-medium"],
    },
  ],
  defaultVariants: {
    style: "body",
    variant: "regular",
  },
});

interface ITypography {
  asChild?: boolean;
  className?: string;
}

export default function Typography(
  props: PropsWithChildren<
    ITypography & VariantProps<typeof typographyVariants>
  >
) {
  const Comp = props.asChild ? Slot : "span";

  return (
    <Comp
      className={cn(
        "",
        typographyVariants({
          style: props.style,
          variant: props.variant,
          color: props.color,
        }),
        props.className
      )}
    >
      {props.children}
    </Comp>
  );
}
