import { HelloWorldLabel } from "@/components/hello-world-label";

export default function Home() {
  // let age = 30;
  // age = "thirty";
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <HelloWorldLabel />
        </div>
      </div>
    </main>
  );
};
