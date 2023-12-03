import next from "../../../public/next.svg";
import Image from "next/image";

export default function Page({
  params,
}: {
  params: { board: string };
}) {
  console.log(params);
  return (
    <main className='container mx-auto w-full h-screen flex justify-center items-center border'>
      <h1>Board title</h1>
      <section>
        <div className='w-full h-full'>
          <Image
            src={next}
            width={100}
            height={100}
            alt={"next image"}
          />
        </div>
      </section>
    </main>
  );
}
