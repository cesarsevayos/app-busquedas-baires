import { useState, useEffect } from "react";
import { getMap } from "../app/services/map.services";
import { useAppContext } from "../Context";

const useMap = () => {
  const { setPositionMap } = useAppContext();

  const getPositionMap = async (value: string) => {
    console.log("Fetching map data for:", value);
    try {
      const data = await getMap(value);
      return {
        lat: data?.lat,
        lon: data?.lon,
      };
    } catch (error) {
      console.error("Error fetching map data:", error);
      return null;
    }
  };
  return { getPositionMap };
};

export default useMap;
