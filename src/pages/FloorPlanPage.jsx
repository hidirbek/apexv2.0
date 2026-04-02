import { useParams } from "react-router-dom";
import B1FloorPlan from "../components/B1FloorPlan";
import B2FloorPlan from "../components/B2FloorPlan";
import B3FloorPlan from "../components/B3FloorPlan";
import B4FloorPlan from "../components/B4FloorPlan";

const FloorPlanPage = () => {
  const { blockId } = useParams();

  if (blockId === "1") {
    return <B1FloorPlan />;
  }

  if (blockId === "2") {
    return <B2FloorPlan />;
  }
  if (blockId === "3") {
    return <B3FloorPlan />;
  }
  if (blockId === "4") {
    return <B4FloorPlan />;
  }

  return <div>Блок не найден</div>;
};

export default FloorPlanPage;
