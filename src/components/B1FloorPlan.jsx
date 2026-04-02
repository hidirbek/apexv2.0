import "../styles/floorPlans.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { blocksData } from "../data";
import { ESP32_CONFIG } from "../config/esp32";

const B1FloorPlan = () => {
  const { blockId, floorId } = useParams();
  const navigate = useNavigate();
  const floorNumber = Number(floorId);

  const [selectedApartment, setSelectedApartment] = useState(null);

  const currentBlock = blocksData.find((block) => block.id === Number(blockId));
  const currentFloor = currentBlock?.floors?.find(
    (item) => item.floor === floorNumber,
  );

  const getBackgroundImage = () => {
    if (floorNumber === 3) {
      return `${process.env.PUBLIC_URL}/assets/b1FloorPlans/3-Floor.png`;
    }

    if (floorNumber === 12) {
      return `${process.env.PUBLIC_URL}/assets/b1FloorPlans/12-Penthouse-Floor.png`;
    }

    return `${process.env.PUBLIC_URL}/assets/b1FloorPlans/Typical-Floor.png`;
  };

  const getApartmentKey = (entranceName, apartment) => {
    return `${entranceName}-${apartment.apartment}`;
  };

  const sendCommandToEsp = async (apartment) => {
    const path = `/l?h=${Number(blockId)}&f=${Number(floorId) - 2}&r=${apartment.apart_id}`;
    console.log(path);

    try {
      await fetch(ESP32_CONFIG.baseUrl + path, {
        mode: "no-cors",
      });
    } catch (error) {
      // ничего не выводим, если не подключён к Wi-Fi
    }
  };

  const sendFloorToEsp = async () => {
    const path = `/l?h=${Number(blockId)}&f=${Number(floorId) - 2}`;
    console.log(path);

    try {
      await fetch(ESP32_CONFIG.baseUrl + path, {
        mode: "no-cors",
      });
    } catch (error) {
      // ничего не выводим, если не подключён к Wi-Fi
    }
  };

  useEffect(() => {
    if (!currentFloor) return;

    setSelectedApartment(null);
    sendFloorToEsp();
  }, [currentFloor, blockId, floorId]);

  if (!currentBlock) {
    return <div>Блок не найден</div>;
  }

  if (!currentFloor) {
    return <div>Этаж не найден</div>;
  }

  const handleApartmentClick = async (e, apartment, entranceName) => {
    e.stopPropagation();

    const apartmentKey = getApartmentKey(entranceName, apartment);
    const isSameApartment = selectedApartment?.key === apartmentKey;

    if (isSameApartment) {
      navigate(
        `/block/${blockId}/floors/${floorId}/${entranceName}/apartments/${apartment.apartment}`,
      );
      return;
    }

    setSelectedApartment({
      key: apartmentKey,
      entrance: entranceName,
      apartmentNumber: apartment.apartment,
      svg: apartment.svg,
    });

    await sendCommandToEsp(apartment);
  };

  const handleBackgroundClick = () => {
    setSelectedApartment(null);
  };

  const renderApartment = (apartment, entranceName) => {
    const apartmentKey = getApartmentKey(entranceName, apartment);
    const isActive = selectedApartment?.key === apartmentKey;

    return (
      <div
        key={apartmentKey}
        className={`apartment-item b1_apartment-item b1_apartment-item${entranceName + apartment.apartment} ${
          isActive ? "active" : ""
        }`}
        onClick={(e) => handleApartmentClick(e, apartment, entranceName)}
      >
        <div className={`apartment-svg ${isActive ? "active" : ""}`}>
          {isActive ? (
            <div
              className="active_apart-svg"
              dangerouslySetInnerHTML={{ __html: apartment.svg }}
              style={{
                top: apartment.top,
                left: apartment.left,
                width: apartment.width,
                height: apartment.height,
              }}
            ></div>
          ) : (
            <div
              className="nonactive_apart-svg"
              dangerouslySetInnerHTML={{ __html: apartment.svg }}
              style={{
                top: apartment.top,
                left: apartment.left,
                width: apartment.width,
                height: apartment.height,
              }}
            ></div>
          )}
        </div>

        <div className={`apartment-label ${isActive ? "active" : ""}`}>
          {apartment.apartment}
        </div>
      </div>
    );
  };

  const sortedFloors = [...currentBlock.floors].sort(
    (a, b) => a.floor - b.floor,
  );

  return (
    <div className="floor-plan-page">
      <button
        className="back-btn"
        onClick={() => navigate(`/block/${blockId}`)}
      >
        ← Назад
      </button>

      <aside className="floors-sidebar">
        <div className="floors-list">
          {sortedFloors.map((item) => {
            const isActiveFloor = item.floor === floorNumber;

            return (
              <button
                key={item.floor}
                className={`floor-btn ${isActiveFloor ? "active" : ""}`}
                onClick={() => {
                  setSelectedApartment(null);
                  navigate(`/block/${blockId}/floors/${item.floor}`);
                }}
              >
                {item.floor} {isActiveFloor ? "этаж" : ""}
              </button>
            );
          })}
        </div>
      </aside>

      <div
        className="floor-plan_bg"
        onClick={handleBackgroundClick}
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
        }}
      >
        <div className="apartments-list">
          {Object.entries(currentFloor.entrances).map(
            ([entranceName, apartments]) =>
              apartments.map((apart) => renderApartment(apart, entranceName)),
          )}
        </div>
      </div>
    </div>
  );
};

export default B1FloorPlan;
