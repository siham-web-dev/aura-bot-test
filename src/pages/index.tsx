import DesktopSidebar from "@/components/DesktopSidebar";
import MainContainer from "@/components/MainContainer";

export default function IndexPage() {
  return (
    <div className="flex w-full h-screen">
      <DesktopSidebar />
      <MainContainer />
    </div>
  );
}
