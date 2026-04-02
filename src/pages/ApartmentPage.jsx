// import { useParams, useNavigate } from "react-router-dom";
// import { blocksData } from "../data";

// const ApartmentPage = () => {
//   const { blockId, floorId, entranceName, apartmentId } = useParams();
//   const navigate = useNavigate();

//   const currentBlock = blocksData.find((block) => block.id === Number(blockId));
//   const currentFloor = currentBlock?.floors?.find(
//     (floor) => floor.floor === Number(floorId),
//   );

//   const currentApartment = currentFloor?.entrances?.[entranceName]?.find(
//     (item) => item.apartment === Number(apartmentId),
//   );

//   if (!currentBlock) {
//     return <div>Блок не найден</div>;
//   }

//   if (!currentFloor) {
//     return <div>Этаж не найден</div>;
//   }

//   if (!currentApartment) {
//     return <div>Апартамент не найден</div>;
//   }

//   return (
//     <div>
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Назад
//       </button>
//       <h1>{currentBlock.name}</h1>
//       <h2>Этаж {currentFloor.floor}</h2>
//       <h3>
//         {entranceName} / Апартамент {currentApartment.apartment}
//       </h3>

//       <img
//         src={currentApartment.svg}
//         alt={`Apartment ${currentApartment.apartment}`}
//         style={{ maxWidth: "400px", width: "100%" }}
//       />
//     </div>
//   );
// };

// export default ApartmentPage;

import { useParams, useNavigate } from "react-router-dom";

import R1Aparts from "../components/R1Aparts";
import R2Aparts from "../components/R2Aparts";
import R3Aparts from "../components/R3Aparts";
import R4Aparts from "../components/R4Aparts";
import R5Aparts from "../components/R5Aparts";
import R6Aparts from "../components/R6Aparts";
import { apartsData } from "../data/aparts";

import "../styles/aparts.css";

const ApartmentPage = () => {
  const navigate = useNavigate();
  const { blockId, floorId, apartmentId, entranceName } = useParams();
  const currentApart = apartsData.find(
    (apart) => apart.apart_id === Number(apartmentId),
  );
  // console.log(currentApart);

  const floorNumber = Number(floorId);

  const aptId = Number(apartmentId);

  // 📌 выбираем компонент по подъезду
  const renderApartment = () => {
    switch (entranceName) {
      case "r1":
        return <R1Aparts floor={floorNumber} apartmentId={aptId} />;
      case "r2":
        return <R2Aparts floor={floorNumber} apartmentId={aptId} />;
      case "r3":
        return <R3Aparts floor={floorNumber} apartmentId={aptId} />;
      case "r4":
        return <R4Aparts floor={floorNumber} apartmentId={aptId} />;
      case "r5":
        return <R5Aparts floor={floorNumber} apartmentId={aptId} />;
      case "r6":
        return <R6Aparts floor={floorNumber} apartmentId={aptId} />;
      default:
        return <p>Нет данных для этого подъезда</p>;
    }
  };

  return (
    <div className="apart-pg_wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>
      <div className="apart-content" style={{ textAlign: "center" }}>
        <div class="info">
          <div class="item">
            <div class="value">{blockId}</div>
            <div class="line"></div>
            <div class="label">БЛОК</div>
          </div>

          <div class="item">
            <div class="value">{entranceName}</div>
            <div class="line"></div>
            <div class="label">Подъезд</div>
          </div>
          <div class="item">
            <div class="value">{floorId}</div>
            <div class="line"></div>
            <div class="label">ЭТАЖ</div>
          </div>

          <div class="item">
            <div class="value">№{apartmentId}</div>
            <div class="line"></div>
            <div class="label">КВАРТИРА</div>
          </div>

          <div class="item">
            <div class="value">{currentApart.rooms}</div>
            <div class="line"></div>
            <div class="label">КОМНАТЫ</div>
          </div>
        </div>
        {renderApartment()}
      </div>
    </div>
  );
};

export default ApartmentPage;
