import { InterventionPartners } from "../interventions/Interventionpartners";
import { SectionsAll } from "./SectionsAll";
import { SectionsHero } from "./SectionsHero";

export default function SectionsPage() {
  return (
    <div className="bg-white">
      <SectionsHero />
      <SectionsAll />
      <InterventionPartners />
    </div>
  );
}
