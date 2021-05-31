export type IconObject = {
  href: string;
  icon: React.ReactNode;
};
export interface PaymentProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  icons: IconObject[];
}
