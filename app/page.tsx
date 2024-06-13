import Image from "next/image";
import { Hero, CustomFilter, SearchBar } from "@/components"


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x
      padding-y max-width" id="discover"
      >
        <div className="home__text-container">
          <h1 className="tex-4x1
          font-extrabold">Car Catalogue</h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className="home_filters">
          <SearchBar />

          <div
          className="home_filter-containner">
            <CustomFilter title="fuel"/>
            <CustomFilter title="fuel"/>

          </div>
        </div>


      </div>
    </main>
  )
}
