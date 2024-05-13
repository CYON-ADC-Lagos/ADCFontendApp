import React, { useEffect, useState } from "react";

import DashboardLayout from "../../../Components/Dashboard/DashboardLayout";
import TitleNav from "../../../Components/Dashboard/Title";
import { fetchAllDeaneries } from "../../../Redux/Api";

function ViewDeanries() {
  const [deaneries, setDeaneries] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchDeanery = async () => {
    try {
      const { data } = await fetchAllDeaneries();
      if (data) {
        console.log(data);
        setDeaneries(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDeanery();
  }, []);

  return (
    <DashboardLayout>
      <div className="sticky top-0 z-[20] bg-white">
        <TitleNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={"View Deaneries"}
        />
      </div>
      <div>
        <table class="table-fixed border w-[80%] mx-auto mt-[2rem]">
          <thead>
            <tr className="border-b">
              <th className=" py-[.5rem]">Name</th>
              <th className=" py-[.5rem]">Phone</th>
            </tr>
          </thead>
          <tbody>
            {deaneries &&
              deaneries?.map((item) => (
                <tr className="text-center border-b">
                  <td className="text-center border py-[.5rem]">
                    {item?.name}
                  </td>
                  <td>{item?.phoneNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default ViewDeanries;
