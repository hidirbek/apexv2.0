import { useParams } from "react-router-dom";
import { blocksData } from "../data";

const ApartmentPage = () => {
  const { blockId, floorId, entranceName, apartmentId } = useParams();

  const currentBlock = blocksData.find((block) => block.id === Number(blockId));
  const currentFloor = currentBlock?.floors?.find(
    (floor) => floor.floor === Number(floorId),
  );

  const currentApartment = currentFloor?.entrances?.[entranceName]?.find(
    (item) => item.apartment === Number(apartmentId),
  );

  if (!currentBlock) {
    return <div>Блок не найден</div>;
  }

  if (!currentFloor) {
    return <div>Этаж не найден</div>;
  }

  if (!currentApartment) {
    return <div>Апартамент не найден</div>;
  }

  return (
    <div>
      <h1>{currentBlock.name}</h1>
      <h2>Этаж {currentFloor.floor}</h2>
      <h3>
        {entranceName} / Апартамент {currentApartment.apartment}
      </h3>

      <img
        src={currentApartment.svg}
        alt={`Apartment ${currentApartment.apartment}`}
        style={{ maxWidth: "400px", width: "100%" }}
      />
    </div>
  );
};

export default ApartmentPage;
