import { useQuery } from "@tanstack/react-query";

// Tipe data sesuai response dari endpoint http://spidah.my.id/dimana.php
export interface StaffLocation {
  status: string;
  updatedAt: string;
  location: string;
}

const API_URL = "http://spidah.my.id/dimana.php";

// Fungsi untuk mengambil data
const fetchStaffLocation = async (): Promise<StaffLocation> => {
  const response = await fetch(`${API_URL}?nocache=${Date.now()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

// Custom hook
export const useStaffLocation = () => {
  return useQuery<StaffLocation, Error>({
    queryKey: ["staffLocation"], // Kunci unik untuk query ini
    queryFn: fetchStaffLocation,
    staleTime: 0, // data selalu dianggap stale
  });
};
