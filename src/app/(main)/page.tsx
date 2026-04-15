import Link from "next/link";
import Header from "./_components/headers/Header";
import Banner from "./_components/banners/Banner";
import Title from "../admin/_components/titles/Title";
import IconDefault from "@/_components/icons/IconDefault";
import Button from "./_components/buttons/Button";
import { PackageBenefitsData, PackageData } from "./_data/sample/PackageData";
import PackageSection from "./_components/sections/PackageSection";
import BenefitsSection from "./_components/sections/BenefitsSection";
import FadeSlideIn from "@/_components/effects/FadeSlideIn";



export default function Home() {
  return (
    <>
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <Banner />

      <FadeSlideIn slideDirection="up" duration={1500}>
          <PackageSection />
      </FadeSlideIn>

      <FadeSlideIn slideDirection="up" duration={1500}>
          <BenefitsSection />
      </FadeSlideIn>

      
    </main>


    </>
  );
}
