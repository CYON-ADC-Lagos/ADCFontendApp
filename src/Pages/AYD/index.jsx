import { Layout } from "../../Components";

import AYDModal from "../../Components/Modals/AydModal";
import { useState } from "react";

function AYD() {
  const [activeItem] = useState("");
  return (
    <Layout className="relative">
      <AYDModal activeItem={activeItem} />
    </Layout>
  );
}

export default AYD;
