import { Layout, Hero, Gallery, Events, Sponsors } from "../../Components";
import Download from "../../Components/Landing/Downloads";
import ExecutivesRow from "../../Components/Landing/ExecutivesRow";
import { events } from "../../helpers/data";

function LandingPage() {
  return (
    <Layout>
      <Hero />
      <ExecutivesRow />
      <Events events={events} type="UPCOMING EVENTS" />
      <Gallery />
      <Download />
      <Sponsors />
    </Layout>
  );
}

export default LandingPage;
