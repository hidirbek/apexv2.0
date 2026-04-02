import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blocksData } from "../data";
import "../styles/floors.css";
import { ESP32_CONFIG } from "../config/esp32";

export default function Block4Page() {
  const navigate = useNavigate();
  const block = blocksData.find((item) => item.id === 4);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [loadingFloor, setLoadingFloor] = useState(null);

  if (!block) {
    return <div>Блок 4 не найден</div>;
  }

  const handleBlockNavigate = async (blockId) => {
    navigate(`/block/${blockId}`);

    try {
      await fetch(`${ESP32_CONFIG.baseUrl}/l?h=${blockId}`, {
        mode: "no-cors",
      });

      console.log("ESP command sent:", blockId);
    } catch (error) {
      // ничего не выводим, если не подключён к Wi-Fi
    }
  };

  const sendToEsp32 = async (blockId, floorNumber) => {
    const path = `/l?h=${blockId}&f=${floorNumber - 2}`;

    try {
      await fetch(ESP32_CONFIG.baseUrl + path, {
        mode: "no-cors",
      });
      console.log("Sent:", path);
    } catch (error) {
      // console.error("Error sending command:", error);
    }
  };

  const handleFloorClick = async (e, floorObj) => {
    e.stopPropagation();

    const floorNumber = floorObj.floor;

    if (selectedFloor === floorNumber) {
      navigate(`/block/${block.id}/floors/${floorNumber}`);
      return;
    }

    try {
      setLoadingFloor(floorNumber);
      sendToEsp32(block.id, floorNumber);
      setSelectedFloor(floorNumber);
    } catch (error) {
      // console.error(error);
    } finally {
      setLoadingFloor(null);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedFloor(null);
    }
  };

  return (
    <div
      className="block_bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/block3_4.jpg)`,
      }}
      onClick={handleBackgroundClick}
    >
      <button
        className="back-btn"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/`);
        }}
      >
        ← Назад
      </button>

      <div className="blocks-nav" onClick={(e) => e.stopPropagation()}>
        <button
          className="block-btn b4fblock1-btn"
          onClick={() => handleBlockNavigate(1)}
        >
          B1
        </button>

        <button
          className="block-btn b4fblock2-btn"
          onClick={() => handleBlockNavigate(2)}
        >
          B2
        </button>

        <button
          className="block-btn b4fblock3-btn"
          onClick={() => handleBlockNavigate(3)}
        >
          B3
        </button>

        <button className="block-btn active-block b4fblock4-btn">B4</button>
      </div>

      <div
        className="b4_floor_svg-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        {[...block.floors].reverse().map((floor) => (
          <div
            key={floor.floor}
            onClick={(e) => handleFloorClick(e, floor)}
            className={`block_floors block_floor${floor.floor} ${
              selectedFloor === floor.floor ? "selected-svg" : ""
            } ${loadingFloor === floor.floor ? "loading-floor" : ""}`}
            dangerouslySetInnerHTML={{ __html: floor.svg }}
          />
        ))}
      </div>
    </div>
  );
}
