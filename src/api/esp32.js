import { ESP32_CONFIG } from "../config/esp32";

const requestEsp32 = async (payload) => {
  const response = await fetch(
    `${ESP32_CONFIG.baseUrl}${ESP32_CONFIG.endpoints.select}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error("Ошибка отправки данных на ESP32");
  }

  return response.json();
};

export const sendBlockToEsp32 = async (blockId) => {
  return requestEsp32({ blockId });
};

export const sendFloorToEsp32 = async (blockId, floorId) => {
  return requestEsp32({ blockId, floorId });
};

export const sendApartmentToEsp32 = async (blockId, floorId, apartmentId) => {
  return requestEsp32({ blockId, floorId, apartmentId });
};
