import { Divider } from "@mantine/core";

export default function SectionHeader({ header }: { header: string }): JSX.Element {
  return (
    <>
      <Divider size="sm" className="mb-24 w-4/5 mx-auto" id={header} />

      <div className="flex justify-center items-center font-poppins font-semibold leading-none">
        <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl leading-none text-white">
          {header}
        </div>
      </div>
    </>
  );
}
