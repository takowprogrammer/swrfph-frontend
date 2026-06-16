import { InterventionCTA } from "../interventions/Interventioncta";
import { InterventionPartners } from "../interventions/Interventionpartners";
import { ServicesHero } from "./Serviceshero";
import { ServicesHowWeWork } from "./Serviceshowwework";
import { ServicesSupplyChain } from "./Servicessupplychain";
import { ServicesTraining } from "./Servicestraining";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <ServicesHero />
      <ServicesSupplyChain />
      <ServicesHowWeWork />
      <ServicesTraining />
      <InterventionPartners />
    </div>
  );
}
