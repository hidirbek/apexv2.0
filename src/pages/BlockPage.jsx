import { useParams } from "react-router-dom";

import B1Floors from "../components/B1Floors";
import B2Floors from "../components/B2Floors";
import B3Floors from "../components/B3Floors";
import B4Floors from "../components/B4Floors";

const blocks = {
  1: B1Floors,
  2: B2Floors,
  3: B3Floors,
  4: B4Floors,
};

const BlockPage = () => {
  const { blockId } = useParams();

  const BlockComponent = blocks[blockId];

  return <BlockComponent />;
};

export default BlockPage;
