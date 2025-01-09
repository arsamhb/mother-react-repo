import Skeleton from "@/shared/component/UI/Skeleton";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton shape="circle" heightRem={4} widthRem={4}/>
      <Skeleton shape="line" heightRem={4} widthRem={4}/>
      <Skeleton shape="rectangle" heightRem={4} widthRem={4}/>
    </div>
  );
}
