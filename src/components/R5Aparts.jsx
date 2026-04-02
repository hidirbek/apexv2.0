import "../styles/aparts.css";

const floorsConfig = {
  3: {
    start: 255,
    map: {
      1: "R5_3K-01",
      2: "R5_2K-01",
      3: "R5_2K-02",
      4: "R5_2K-03",
      5: "R5_2K-04",
      6: "R5_3K-02",
    },
  },
  18: {
    start: 255 + (15 - 3) * 6,
    map: {
      1: "R5_3K-01",
      2: "R5_2K-01",
    },
  },

  default: {
    start: (floor) => 255 + (floor - 3) * 6,
    map: {
      1: "R5_3K-01",
      2: "R5_2K-01",
      3: "R5_2K-02",
      4: "R5_2K-03",
      5: "R5_2K-04",
      6: "R5_3K-02",
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
  if (floor === 18) return "floor_18_mebel";
  return "floor_typical_mebel";
}

const R5Aparts = ({ floor, apartmentId }) => {
  const planCode = getPlanCode(floor, apartmentId);

  if (!planCode) {
    return <p>Нет планировки</p>;
  }

  const folder = getFloorFolder(floor);

  // const src = `/assets/r5Aparts/${folder}/${planCode}.png`;
  const src = `${process.env.PUBLIC_URL}/assets/r5Aparts/${folder}/${planCode}.png`;
  return (
    <img
      src={src}
      alt={planCode}
      className="apart_img"
      onError={(e) => (e.target.src = "/fallback.png")}
    />
  );
};

export default R5Aparts;
