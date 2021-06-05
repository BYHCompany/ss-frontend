export interface PaginatorProps {
  allPagesCount: number;
  currentPage: number;
  callback: (index: number) => void;
}
