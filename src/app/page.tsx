import { type FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Hello Universe</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
