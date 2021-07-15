export type CustomResponseType<T> = {
  message: string;
  status: number;
  data: T;
};
