import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug sm:text-start text-center tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Nós somos a <span>Maior Escola de Negócios da Europa</span>
            </h1>

            <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row sm:mt-[80px] mt-5">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-sm font-medium text-center text-white bg-indigo-600 rounded-md ">
                COMECE SUA MUDANÇA
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={"/img/lisboa2.jpg"}
              width="1140"
              height="797"
              className={"object-cover"}
              alt="Hero Illustration"
              style={{
                objectFit: "cover"
              }}

            />
          </div>
        </div>
      </Container>
    </>
  );
}

