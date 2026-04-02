import "../styles/aparts.css";

const floorsConfig = {
  3: {
    start: 57,
    map: {
      1: "R2_4K-01",
      2: "R2_2K-01",
      3: "R2_3K-01",
      4: "R2_3K-02",
    },
  },

  12: {
    start: 57 + (12 - 3) * 4, // = 93
    map: {
      1: "R2_3K-01",
      2: "R2_2K-01",
    },
  },

  default: {
    start: (floor) => 57 + (floor - 3) * 4, // 🔥 ВОТ ГЛАВНОЕ
    map: {
      1: "R2_4K-01",
      2: "R2_2K-01",
      3: "R2_3K-01",
      4: "R2_3K-02",
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
  if (floor === 12) return "floor_12_mebel";
  return "floor_typical_mebel";
}

const R2Aparts = ({ floor, apartmentId }) => {
  const planCode = getPlanCode(floor, apartmentId);

  if (!planCode) {
    return <p>Нет планировки</p>;
  }

  const folder = getFloorFolder(floor);

  // const src = `/assets/r2Aparts/${folder}/${planCode}.png`;
  const src = `${process.env.PUBLIC_URL}/assets/r2Aparts/${folder}/${planCode}.png`;
  return (
    <img
      src={src}
      alt={planCode}
      className="apart_img"
      onError={(e) => (e.target.src = "/fallback.png")}
    />
  );
};

export default R2Aparts;
