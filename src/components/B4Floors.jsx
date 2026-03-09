import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blocksData } from "../data";
import "../styles/floors.css";

export default function Block1Page() {
  const navigate = useNavigate();
  const block = blocksData.find((item) => item.id === 4);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [loadingFloor, setLoadingFloor] = useState(null);

  if (!block) {
    return <div>Блок 4 не найден</div>;
  }

  const handleBlockNavigate = (blockId) => {
    navigate(`/block/${blockId}`);
  };

  const handleFloorClick = async (floorObj) => {
    const floorNumber = floorObj.floor;

    // второй клик по уже выбранному этажу -> переход
    if (selectedFloor === floorNumber) {
      navigate(`/block/${block.id}/floors/${floorNumber}`);
      return;
    }

    // первый клик -> отправка на ESP32 + выделение
    try {
      setLoadingFloor(floorNumber);
      // console.log(block.id);
      // console.log(floorNumber);

      // await sendToEsp32(block.id, floorNumber);
      setSelectedFloor(floorNumber);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingFloor(null);
    }
  };

  return (
    <div
      className="block_bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/block3_4.jpg)`,
      }}
    >
      <div className="blocks-nav">
        <button className="block-btn" onClick={() => handleBlockNavigate(1)}>
          B1
        </button>
        <button className="block-btn" onClick={() => handleBlockNavigate(2)}>
          B2
        </button>

        <button className="block-btn" onClick={() => handleBlockNavigate(3)}>
          B3
        </button>
        <button className="block-btn active-block">B4</button>
      </div>

      {[...block.floors].reverse().map((floor) => (
        <div
          key={floor.floor}
          onClick={() => handleFloorClick(floor)}
          className={`
            block_floors
            block_floor${floor.floor}
            ${selectedFloor === floor.floor ? "selected-svg" : ""}
            ${loadingFloor === floor.floor ? "loading-floor" : ""}
          `}
          dangerouslySetInnerHTML={{ __html: floor.svg }}
        />
      ))}
    </div>
  );
}
