import "../styles/aparts.css";

const floorsConfig = {
  3: {
    start: 181,
    map: {
      1: "R4_3K-01",
      2: "R4_3K-02",
      3: "R4_2K-01",
      4: "R4_2K-02",
      5: "R4_4K-01",
      6: "R4_2K-03",
    },
  },
  15: {
    start: 181 + (15 - 3) * 6,
    map: {
      1: "R4_3K-01",
      2: "R4_2K-01",
    },
  },

  default: {
    start: (floor) => 181 + (floor - 3) * 6,
    map: {
      1: "R4_3K-01",
      2: "R4_3K-02",
      3: "R4_2K-01",
      4: "R4_2K-02",
      5: "R4_4K-01",
      6: "R4_2K-03",
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

const R4Aparts = ({ floor, apartmentId }) => {
  const planCode = getPlanCode(floor, apartmentId);

  if (!planCode) {
    return <p>Нет планировки</p>;
  }

  const folder = getFloorFolder(floor);

  // const src = `/assets/r4Aparts/${folder}/${planCode}.png`;
  const src = `${process.env.PUBLIC_URL}/assets/r4Aparts/${folder}/${planCode}.png`;
  return (
    <img
      src={src}
      alt={planCode}
      className="apart_img"
      onError={(e) => (e.target.src = "/fallback.png")}
    />
  );
};

export default R4Aparts;
