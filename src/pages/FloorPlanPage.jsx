import React from "react";
import { useParams } from "react-router-dom";
import B1FloorPlan from "../components/B1FloorPlan";
// import B2FloorPlan from "../components/B2FloorPlan";

const FloorPlanPage = () => {
  const { blockId } = useParams();

  if (blockId === "1") {
    return <B1FloorPlan />;
  }

  // if (blockId === "2") {
  //   return <B2FloorPlan />;
  // }

  return <div>Блок не найден</div>;
};

export default FloorPlanPage;
