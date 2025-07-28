export const getMap = async (search: string) => {
  try {
    const direccion = formatDirection(search);
    console.log("Formatted direction:", direccion);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        direccion
      )}&addressdetails=1&limit=1`
    );

    const data = await res.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      return {
        lat,
        lon,
        displayName: data[0].display_name,
      };
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    throw new Error(
      `Error fetching map data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

const formatDirection = (direction: string) => {
  return direction.replace(/\s+y\s+/i, " & ") + ", CABA";
};
