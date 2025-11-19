import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useStaffLocation } from "@/hooks/use-staff-data";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

function StaffDashboardScreen() {
  const {
    data: staffLocation,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useStaffLocation();
  const { colors } = useColorScheme();

  // State untuk loading awal
  if (isLoading) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.text} />
        <ThemedText style={{ marginTop: 10 }}>
          Memuat data lokasi staff...
        </ThemedText>
      </ThemedView>
    );
  }

  // State jika terjadi error
  if (isError) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ThemedText type="subtitle">Oops! Terjadi kesalahan</ThemedText>
        <ThemedText>{error.message}</ThemedText>
      </ThemedView>
    );
  }

  // Format tanggal agar lebih menarik (Contoh: "13 Nov 2025, 10:30")
  const formattedDate = staffLocation?.updatedAt
    ? new Date(
        staffLocation.updatedAt.replace(
          /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/,
          "$1-$2-$3T$4:$5:00"
        )
      ).toLocaleString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={colors.text}
          />
        }
      >
        <View
          style={[
            styles.card,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <ThemedText type="title" style={styles.headerTitle}>
            STALOS Dashboard
          </ThemedText>
          <ThemedText style={styles.locationText}>
            📍 Lokasi: {staffLocation?.location || "Tidak diketahui"}
          </ThemedText>
          <ThemedText type="small" style={{ color: colors.tint }}>
            Terakhir update: {formattedDate}
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

export default StaffDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    width: 320,
    // Efek bayangan (shadow) untuk tampilan modern
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  headerTitle: {
    marginBottom: 20,
    textAlign: "center",
  },
  locationText: {
    marginVertical: 8,
    fontSize: 16,
  },
});
