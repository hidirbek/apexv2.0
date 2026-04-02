import "../styles/aparts.css";

const floorsConfig = {
  3: {
    start: 95,
    map: {
      1: "R3_3K-01",
      2: "R3_2K-01",
      3: "R3_2K-02",
      4: "R3_2K-03",
      5: "R3_2K-04",
      6: "R3_4K-01",
      7: "R3_3K-02",
    },
  },
  15: {
    start: 95 + (15 - 3) * 7,
    map: {
      1: "R1_3K-01",
      2: "R1_2K-01",
    },
  },

  default: {
    start: (floor) => 95 + (floor - 3) * 7,
    map: {
      1: "R3_3K-01",
      2: "R3_2K-01",
      3: "R3_2K-02",
      4: "R3_2K-03",
      5: "R3_2K-04",
      6: "R3_4K-01",
      7: "R3_3K-02",
    },
  },
};

function getPlanCode(floor, apartmentId) {
  const config = floorsConfig[floor] || floorsConfig.default;

  const start =
    typeof config.start === "function" ? config.start(floor) : config.start;

  const localId = apartmentId - start + 1;

  // console.log(localId);

  return config.map[localId];
}

function getFloorFolder(floor) {
  if (floor === 3) return "floor_3_mebel";
  if (floor === 15) return "floor_15_mebel";
  return "floor_typical_mebel";
}

const R3Aparts = ({ floor, apartmentId }) => {
  const planCode = getPlanCode(floor, apartmentId);

  if (!planCode) {
    return <p>Нет планировки</p>;
  }

  const folder = getFloorFolder(floor);

  // const src = `/assets/r3Aparts/${folder}/${planCode}.png`;
  const src = `${process.env.PUBLIC_URL}/assets/r3Aparts/${folder}/${planCode}.png`;
  return (
    <img
      src={src}
      alt={planCode}
      className="apart_img"
      onError={(e) => (e.target.src = "/fallback.png")}
    />
  );
};

export default R3Aparts;
