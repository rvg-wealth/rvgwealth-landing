import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "primaryContainer"
  | "secondaryContainer"
  | "outline"
  | "ghost"
  | "light";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  caps?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:shadow-xl hover:-translate-y-1",
  primaryContainer:
    "bg-primary-container text-on-primary-container hover:shadow-[0_8px_30px_rgba(79,99,82,0.2)]",
  secondaryContainer:
    "bg-secondary-container text-on-secondary-container hover:opacity-90",
  outline: "border border-outline text-primary hover:bg-surface-container",
  ghost: "text-primary hover:bg-surface-container-low",
  light: "bg-white text-primary hover:bg-surface-container",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-2 text-sm",
  md: "px-8 py-3",
  lg: "px-10 py-5",
};

export function Button({
  variant = "primary",
  size = "md",
  caps = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}${
        caps ? " font-label-caps uppercase" : ""
      } ${className}`}
      {...props}
    />
  );
}
