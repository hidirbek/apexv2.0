// import { blocksData } from "../data";
// import "../styles/homePage.css";

// const HomePage = () => {
//   return (
//     <div
//       className="home_bg"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/blocks3d.jpg)`,
//       }}
//     >
//       {blocksData.map((block) => (
//         <div key={block.id}>
//           <div
//             className={block.class}
//             dangerouslySetInnerHTML={{ __html: block.svg }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomePage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blocksData } from "../data";
import "../styles/homePage.css";

// const ESP32_URL = "http://192.168.1.100/select"; // замени на адрес своего ESP32

const HomePage = () => {
  const navigate = useNavigate();

  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const handleBlockClick = async (block) => {
    // Первый клик по SVG
    if (selectedBlockId !== block.id) {
      // console.log(block.id);

      // try {
      //   await fetch(`${ESP32_URL}`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ id: block.id }),
      //   });

      //   // Если у тебя ESP32 принимает GET, тогда вместо POST:
      //   // await fetch(`${ESP32_URL}?id=${block.id}`);
      // } catch (error) {
      //   console.error("Ошибка отправки на ESP32:", error);
      // }

      setSelectedBlockId(block.id);
      return;
    }

    // Второй клик по тому же SVG
    navigate(`/block/${block.id}`);
  };

  return (
    <div
      className="home_bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/blocks3d.jpg)`,
      }}
    >
      {blocksData.map((block) => (
        <div key={block.id}>
          <div
            className={`${block.class}
              ${selectedBlockId === block.id ? "selected-svg" : ""}
            `}
            onClick={() => handleBlockClick(block)}
            dangerouslySetInnerHTML={{ __html: block.svg }}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
