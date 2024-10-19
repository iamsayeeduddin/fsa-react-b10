import { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState("react");
  return (
    <div>
      <div className="flex gap-4">
        <p className={`${tab === "react" ? "text-green-700 bg-green-200" : ""} px-2 py-4`} onClick={() => setTab("react")}>
          React
        </p>
        <p className={`${tab === "node" ? "text-green-700 bg-green-200" : ""} px-2 py-4`} onClick={() => setTab("node")}>
          Node JS
        </p>
        <p className={`${tab === "express" ? "text-green-700 bg-green-200" : ""} px-2 py-4`} onClick={() => setTab("express")}>
          Express JS
        </p>
      </div>
      <div className="bg-green-200">
        <p>
          {tab === "react" ? "React" : tab === "node" ? "Node" : "Express"} JS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          dolores, harum eaque quam error voluptatum adipisci placeat, non, illo quisquam saepe nemo sit totam doloremque. Temporibus quibusdam
          repellat porro accusantium?
        </p>
        {/* {tab === "react" && (
          <p>
            React JS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolores, harum eaque quam error voluptatum adipisci placeat, non,
            illo quisquam saepe nemo sit totam doloremque. Temporibus quibusdam repellat porro accusantium?
          </p>
        )}
        {tab === "node" && (
          <p>
            Node JS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolores, harum eaque quam error voluptatum adipisci placeat, non,
            illo quisquam saepe nemo sit totam doloremque. Temporibus quibusdam repellat porro accusantium?
          </p>
        )}
        {tab === "express" && (
          <p>
            Express JS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolores, harum eaque quam error voluptatum adipisci placeat,
            non, illo quisquam saepe nemo sit totam doloremque. Temporibus quibusdam repellat porro accusantium?
          </p>
        )} */}
      </div>
    </div>
  );
}

export default Tabs;
