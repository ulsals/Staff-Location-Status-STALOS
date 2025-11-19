import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Tentang STALOS
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          STALOS adalah aplikasi modern yang dirancang untuk membantu Anda
          melacak lokasi dan status staff Anda secara efisien.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          Aplikasi ini mengambil data secara real-time dari sistem internal dan
          menampilkannya dalam antarmuka yang bersih, cepat, dan informatif
          dengan tema monochrome yang elegan.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.subtitle}>
          Fitur Utama
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          • Pelacakan Lokasi Staff
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          • Timestamp Update Terakhir
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          • Refresh Data (Tarik untuk Memuat Ulang)
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          • Tampilan Mode Terang & Gelap Otomatis
        </ThemedText>

        <ThemedText type="small" style={styles.footer}>
          Versi Aplikasi 1.0.0 (2025)
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  title: {
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  footer: {
    marginTop: 48,
    textAlign: "center",
    opacity: 0.7,
  },
});