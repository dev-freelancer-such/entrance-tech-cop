import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const typographyVariants = cva("block", {
  variants: {
    variant: {
      h1: "text-5xl font-normal leading-9 xlMax:text-4xl xlMax:leading-7 mdMax:text-3xl mdMax:leading-6 ",
      h2: "text-[40px] font-normal leading-[48px]",
      h3: "text-4xl font-normal leading-[42px]",
      h4: "text-[32px] leading-[48px] mdMax:text-2xl smMax:text-xl",
      h5: "text-xl font-normal leading-6 xlMax:text-lg xlMax:leading-5",
      h6: "text-lg",
      lead: "text-[15px] font-normal leading-[18px] lgMax:text-xs",
      paragraph: "text-base font-normal leading-6",
      small: "text-[13px] font-normal leading-4",
      titleCard:
        "text-[44px] leading-[50px] tracking-wide uppercase xlMax:text-3xl smMax:text-3xl ",
      labelSection: "text-3xl uppercase",
      default: "text-sm lgMax:text-xs",
      authenticationTitle: "text-[26px]/[29.9px] tracking-[0.002em]",
    },

    textColor: {
      default: "text-text",
      primary: "text-text-primary",
    },

    fontStyle: {
      default: "normal",
      italic: "italic",
    },

    fontWeight: {
      default: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      black: "font-black",
    },
  },

  defaultVariants: {
    variant: "default",
    fontWeight: "default",
    fontStyle: "default",
    textColor: "default",
  },
});

export interface TypographyStylesType
  extends React.ButtonHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyStylesType>(
  (
    {
      className,
      variant,
      fontWeight,
      fontStyle,
      textColor,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(
          typographyVariants({
            variant,
            textColor,
            fontWeight,
            className,
            fontStyle,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
