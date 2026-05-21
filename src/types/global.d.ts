type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type StrictExclude<T, U extends T> = Exclude<T, U>;
