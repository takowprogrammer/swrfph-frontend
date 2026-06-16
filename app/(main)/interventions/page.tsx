import { InterventionAreas } from "./Interventionareas";
import { InterventionCTA } from "./Interventioncta";
import { InterventionHero } from "./Interventionhero";
import { InterventionImageBreak } from "./Interventionimagebreak";
import { InterventionIntro } from "./Interventionintro";
import { InterventionPartners } from "./Interventionpartners";


export default function InterventionPage() {
  return (
    <div className="bg-white">
      <InterventionHero />
      <InterventionIntro />
      <InterventionAreas />
      {/* <InterventionImageBreak /> */}
      <InterventionPartners />
      {/* <InterventionCTA /> */}
    </div>
  )
}