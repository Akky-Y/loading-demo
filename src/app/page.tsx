import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Button asChild>
        <Link href="/slow">重いページへ行く</Link>
      </Button>
      <Button asChild>
        <Link href="/partial-slow">一部が重いページへ行く</Link>
      </Button>
    </div>
  );
}
