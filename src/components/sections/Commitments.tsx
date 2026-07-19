import Reveal from "@/components/ui/Reveal";
import InfoCard from "@/components/sections/InfoCard";
import { commitments } from "@/content/site";

export default function Commitments() {
  return (
    <div className="grid grid-2">
      {commitments.map((c, i) => (
        <Reveal key={c.metric} delay={i * 60}>
          <InfoCard tag="We commit to" title={c.metric} body={c.promise} />
        </Reveal>
      ))}
    </div>
  );
}
