import { Layout } from "../../Components";
import { useState } from "react";
import ClosedAYD from "../../Components/Modals/ClosedAYD";

function AYD() {
  const [activeItem] = useState("");
  return (
    <Layout className="relative">
      <ClosedAYD activeItem={activeItem} />
    </Layout>
  );
}

export default AYD;
