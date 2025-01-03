import { HelloUniverseLabel } from "@/components/hello-universe-label";
import { env } from "@/env";

export default function Home() {
  const url = env.DEBUG_URL;

  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloUniverseLabel />
          <p className="text-sm text-gray-500">{url}</p>
        </div>
      </div>
    </main>
  );
}
