import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <div className={"center"}></div>

      <h1>
        Ir al <Link href={"/"}>Index</Link>
      </h1>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
