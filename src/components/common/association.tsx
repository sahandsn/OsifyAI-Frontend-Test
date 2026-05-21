import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface IAssociation {
  Input: JSX.Element;
  Explanation: JSX.Element;
  explanationSuccess?: boolean;
  bordered?: boolean;
  className?: string;
}

function Element({
  Explanation,
  Input,
  explanationSuccess,
  className,
}: Readonly<
  Pick<
    IAssociation,
    "Explanation" | "Input" | "explanationSuccess" | "className"
  >
>) {
  return (
    <section className={cn("flex w-full grow flex-col gap-3", className)}>
      {Input}
      {explanationSuccess ? Explanation : null}
    </section>
  );
}

export default function Association(props: Readonly<IAssociation>) {
  const {
    Explanation,
    Input,
    explanationSuccess = true,
    bordered = true,
    className,
  } = props;

  if (bordered) {
    return (
      <Card className="w-full sm:w-auto">
        <CardHeader className="pb-0"></CardHeader>
        <CardContent>
          <Element
            Explanation={Explanation}
            Input={Input}
            explanationSuccess={explanationSuccess}
            className={className}
          />
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Element
        Explanation={Explanation}
        Input={Input}
        explanationSuccess={explanationSuccess}
        className={className}
      />
    );
  }
}
