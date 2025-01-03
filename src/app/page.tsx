import { HelloUniverseLabel } from "@/components/hello-universe-label";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloUniverseLabel />
        </div>
      </div>
    </main>
  );
}
