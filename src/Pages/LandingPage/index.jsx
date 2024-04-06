import { Layout, Hero, Gallery, Events, Sponsors } from "../../Components";
import ExecutivesRow from "../../Components/Landing/ExecutivesRow";
import { events } from "../../helpers/data";

function LandingPage() {
  return (
    <Layout className="relative">
      <Hero />
      <ExecutivesRow />
      <Events events={events} type="EVENTS" />
      <Gallery />
      {/* <Download /> */}
      <Sponsors />
    </Layout>
  );
}

export default LandingPage;
