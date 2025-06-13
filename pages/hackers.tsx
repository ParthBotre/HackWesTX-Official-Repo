import { useRouter } from "next/router";
import { useEffect } from "react";

const Hackers = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <></>;
};

export default Hackers;
