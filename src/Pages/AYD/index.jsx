import { Layout } from "../../Components";
import { useState } from "react";
import AYDModal from "../../Components/Modals/AydModal";

function AYD() {
  const [activeItem] = useState(5);
  return (
    <Layout className="relative">
      <AYDModal activeItem={activeItem} />
    </Layout>
  );
}

export default AYD;
