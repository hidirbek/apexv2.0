import "../styles/floorPlans.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { blocksData } from "../data";

const B2FloorPlan = () => {
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
      return `${process.env.PUBLIC_URL}/assets/b2FloorPlans/3-Floor.png`;
    }

    if (floorNumber === 13) {
      return `${process.env.PUBLIC_URL}/assets/b2FloorPlans/13-Floor.png`;
    }
    if (floorNumber === 15) {
      return `${process.env.PUBLIC_URL}/assets/b2FloorPlans/15-Penthouse-Floor.png`;
    }

    return `${process.env.PUBLIC_URL}/assets/b2FloorPlans/Typical-Floor.png`;
  };

  if (!currentBlock) {
    return <div>Блок не найден</div>;
  }

  if (!currentFloor) {
    return <div>Этаж не найден</div>;
  }

  const getApartmentKey = (entranceName, apartment) => {
    return `${entranceName}-${apartment.apartment}`;
  };

  const sendCommandToEsp = async (apartment, entranceName) => {
    try {
      await fetch("http://localhost:3001/api/esp/select-apartment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blockId: Number(blockId),
          floorId: Number(floorId),
          entrance: entranceName,
          apartmentId: apartment.apartment,
          apartmentNumber: apartment.apartment,
          svg: apartment.svg,
        }),
      });
    } catch (error) {
      console.error("Ошибка отправки команды на ESP:", error);
    }
  };

  const handleApartmentClick = async (apartment, entranceName) => {
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

    await sendCommandToEsp(apartment, entranceName);
  };

  const renderApartment = (apartment, entranceName) => {
    const apartmentKey = getApartmentKey(entranceName, apartment);
    const isActive = selectedApartment?.key === apartmentKey;

    return (
      <div
        key={apartmentKey}
        className={`apartment-item b2_apartment-item b2_apartment-item${entranceName + apartment.apartment} ${isActive ? "active" : ""}`}
        onClick={() => handleApartmentClick(apartment, entranceName)}
      >
        <div className={`apartment-svg ${isActive ? "active" : ""}`}>
          {isActive ? (
            <div
              className="active_apart-svg b2_active_apart-svg"
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
              className="nonactive_apart-svg b2_nonactive_apart-svg"
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

        <div className={`apartment-label  ${isActive ? "active" : ""}`}>
          {entranceName}: {apartment.apartment}
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
                {item.floor} этаж
              </button>
            );
          })}
        </div>
      </aside>

      <div
        className="floor-plan_bg"
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

export default B2FloorPlan;
