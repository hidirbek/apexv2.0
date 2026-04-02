import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blocksData } from "../data";
import "../styles/homePage.css";
import { ESP32_CONFIG } from "../config/esp32";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const [randomMode, setRandomMode] = useState(false);
  const [fasad, setFasad] = useState(false);
  const [magazin, setMagazin] = useState(false);
  const [stolba, setStolba] = useState(false);
  const [school, setSchool] = useState(false);
  const handleToggle = (setter, urlBuilder) => (e) => {
    const checked = e.target.checked;
    setter(checked);
    sendBlockCommand(urlBuilder(checked));
  };

  const sendBlockCommand = async (id) => {
    try {
      const response = await fetch(`${ESP32_CONFIG.baseUrl}` + id, {
        mode: "no-cors",
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      // console.log({ ESP32_CONFIG } + id);
    } catch (error) {
      console.error("Error sending command:", error);
    }
  };

  const handleBlockClick = async (e, block) => {
    e.stopPropagation();

    if (selectedBlockId === block.id) {
      navigate(`/block/${block.id}`);
    } else {
      setSelectedBlockId(block.id);
      await sendBlockCommand(`/l?h=${block.id}`);
    }
  };

  const handleBackgroundClick = () => {
    setSelectedBlockId(null);
  };

  return (
    <div
      className="home_bg"
      onClick={handleBackgroundClick}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg/blocks3d.jpg)`,
      }}
    >
      <aside className="control-panel">
        <h3>Панель</h3>

        <div className="toggle-row">
          <div className="toggle-label">Рандомный режим</div>
          <label className="switch">
            <input
              id="randomMode"
              type="checkbox"
              checked={randomMode}
              onChange={handleToggle(
                setRandomMode,
                (checked) => `/m?e=${checked ? 1 : 0}`,
              )}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div className="toggle-label">Фасад</div>
          <label className="switch">
            <input
              id="fasad"
              type="checkbox"
              checked={fasad}
              onChange={handleToggle(
                setFasad,
                (checked) => `/r?r1=${checked ? 1 : 0}`,
              )}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div className="toggle-label">Магазины</div>
          <label className="switch">
            <input
              id="magazin"
              type="checkbox"
              checked={magazin}
              onChange={handleToggle(
                setMagazin,
                (checked) => `/r?r2=${checked ? 1 : 0}`,
              )}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div className="toggle-label">Улица</div>
          <label className="switch">
            <input
              id="stolba"
              type="checkbox"
              checked={stolba}
              onChange={handleToggle(
                setStolba,
                (checked) => `/r?r3=${checked ? 1 : 0}`,
              )}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="toggle-row">
          <div className="toggle-label">Школа</div>
          <label className="switch">
            <input
              id="school"
              type="checkbox"
              checked={school}
              onChange={handleToggle(
                setSchool,
                (checked) => `/r?r4=${checked ? 1 : 0}`,
              )}
            />
            <span className="slider"></span>
          </label>
        </div>

        <small className="muted">MakTech Innovations</small>
      </aside>
      {blocksData.map((block) => (
        <div key={block.id}>
          <div
            className={`${block.class} ${
              selectedBlockId === block.id ? "selected-svg" : ""
            }`}
            onClick={(e) => handleBlockClick(e, block)}
            dangerouslySetInnerHTML={{ __html: block.svg }}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
