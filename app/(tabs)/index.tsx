import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

const API_URL = "http://spidah.my.id/dimana.php";

interface LocationData {
  status: string;
  updatedAt: string;
  location: string;
}

export default function HomeScreen() {
  const [data, setData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (str: string) =>
    `${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(6, 8)} ${str.slice(8, 10)}:${str.slice(10, 12)}`;

  const getLocationEmoji = (loc: string) => {
    switch (loc) {
      case "Kampus Palembang":
        return "🏢";
      case "Kampus Inderalaya":
        return "🏣";
      default:
        return "🚗";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 STALOS</Text>
      <Text style={styles.subtitle}>Status Lokasi Kepala Jurusan TI</Text>

      {loading ? (
        <ActivityIndicator size="large" color="rgba(20, 20, 30, 1)" />
      ) : error ? (
        <Text style={styles.error}>❌ Gagal memuat data: {error}</Text>
      ) : data ? (
        <View style={styles.card}>
          <Text style={styles.locationEmoji}>{getLocationEmoji(data.location)}</Text>

          <Text style={styles.label}>Lokasi Saat Ini:</Text>
          <Text style={styles.value}>{data.location}</Text>

          <Text style={styles.label}>Status Sistem:</Text>
          <Text style={[styles.value, data.status === "OK" ? styles.ok : styles.errorText]}>
            {data.status}
          </Text>

          <Text style={styles.label}>Diperbarui:</Text>
          <Text style={styles.value}>{formatDate(data.updatedAt)}</Text>
        </View>
      ) : (
        <Text style={styles.info}>Tidak ada data.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>🔄 Perbarui Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f8fc",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgba(20, 20, 30, 1)",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  locationEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#777",
  },
  value: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  ok: {
    color: "green",
  },
  errorText: {
    color: "red",
  },
  button: {
    backgroundColor: "rgba(20, 20, 30, 1)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  info: {
    color: "#555",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
});
