export type Link = {
  href: string;
  linkName: string;
  icon?: React.ReactNode;
};

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  items: Link[];
}
