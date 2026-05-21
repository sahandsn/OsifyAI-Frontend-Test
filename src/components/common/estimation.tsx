import { Diff } from "lucide-react";

interface IEstimation {
  secondary?: number | string;
  main?: number | string;
}

export default function Estimation(props: Readonly<IEstimation>) {
  const { main, secondary } = props;
  return (
    <span className="flex w-full grow flex-wrap items-center gap-1">
      {main}
      {secondary ? (
        <span className="flex items-center gap-1 text-sm">
          <Diff size={12} /> {secondary}
        </span>
      ) : null}
    </span>
  );
}
