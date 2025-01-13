import { useGetDummy } from "@/features/dummy/api/dummy.api";
import { useEffect } from "react";
import { toast } from "react-toastify";

type Props = {};

const About = (props: Props) => {
  const { data, isError, error } = useGetDummy();

  return <div>A NEW ROUTE</div>;
};

export default About;
