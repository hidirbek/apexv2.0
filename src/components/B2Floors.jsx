import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blocksData } from "../data";
import "../styles/floors.css";

export default function Block2Page() {
  const navigate = useNavigate();
  const block = blocksData.find((item) => item.id === 2);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [loadingFloor, setLoadingFloor] = useState(null);

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
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/block2.jpg)`,
      }}
    >
      <button className="back-btn" onClick={() => navigate(`/`)}>
        ← Назад
      </button>
      <div className="blocks-nav">
        <button
          className="block-btn b2fblock1-btn"
          onClick={() => handleBlockNavigate(1)}
        >
          B1
        </button>

        <button className="block-btn active-block b2fblock2-btn">B2</button>

        <button
          className="block-btn b2fblock3-btn"
          onClick={() => handleBlockNavigate(3)}
        >
          B3
        </button>

        <button
          className="block-btn b2fblock4-btn"
          onClick={() => handleBlockNavigate(4)}
        >
          B4
        </button>
      </div>

      <div className="b2_floor_svg-wrapper">
        {[...block.floors].reverse().map((floor) => (
          <div
            key={floor.floor}
            onClick={() => handleFloorClick(floor)}
            className={`block_floors block_floor${floor.floor}  ${selectedFloor === floor.floor ? "selected-svg" : ""} ${loadingFloor === floor.floor ? "loading-floor" : ""}`}
            dangerouslySetInnerHTML={{ __html: floor.svg }}
          />
        ))}
      </div>
    </div>
  );
}
