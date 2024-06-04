import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="aspect-video border">FAST</div>
        <div className="aspect-video border">
          <Suspense fallback={<Skeleton className="size-full" />}>
            <SlowComponent />
          </Suspense>
        </div>
        <div className="aspect-video border">FAST</div>
      </div>
    </div>
  );
}

export async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>重いコンポーネントです</div>;
}
