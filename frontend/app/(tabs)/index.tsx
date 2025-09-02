import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../theme";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>Aurum<Text style={styles.brandZ}>Z</Text></Text>
        <Text style={styles.subtitle}>Finanças + Carreira, com IA</Text>
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Salário</Text>
          <Text style={styles.cardValue}>R$ 6.500</Text>
          <Text style={styles.cardHint}>Na média de mercado</Text>
          <View style={[styles.badge, { backgroundColor: theme.gold }]} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Objetivo</Text>
          <Text style={styles.cardValue}>Migrar p/ Dados</Text>
          <Pressable style={[styles.btn, { backgroundColor: theme.gold }]}>
            <Text style={[styles.btnText, { color: "#0B1220" }]}>Ver Roadmap</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dívidas</Text>
          <Text style={[styles.cardValue, { color: theme.red }]}>R$ 2.300</Text>
          <Text style={styles.cardHint}>Plano de quitação disponível</Text>
          <Pressable style={[styles.btn, { backgroundColor: theme.red }]}>
            <Text style={styles.btnText}>Ver Plano</Text>
          </Pressable>
        </View>
      </View>

      {/* Investimentos */}
      <View style={styles.investBox}>
        <Text style={styles.sectionTitle}>Investimentos sugeridos</Text>
        <View style={styles.row}>
          {["Tesouro Selic", "CDB 110% CDI", "ETFs Tech"].map((i, idx) => (
            <View key={idx} style={styles.pill}>
              <Text style={styles.pillText}>{i}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionHint}>Baseado no seu perfil (educacional)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg, padding: 20, gap: 20 },
  header: { gap: 6, marginTop: 6 },
  brand: { color: theme.text, fontSize: 28, fontWeight: "800", letterSpacing: 0.5 },
  brandZ: { color: theme.gold },
  subtitle: { color: theme.subtext, fontSize: 14 },

  grid: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
  card: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    width: "31%",
    minWidth: 280,
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  cardTitle: { color: theme.subtext, fontSize: 13, letterSpacing: 0.3 },
  cardValue: { color: theme.text, fontSize: 22, fontWeight: "700" },
  cardHint: { color: theme.subtext, fontSize: 12 },
  badge: { height: 4, width: 50, borderRadius: 2, marginTop: 6 },

  btn: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  btnText: { color: theme.text, fontWeight: "700" },

  investBox: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  sectionTitle: { color: theme.text, fontSize: 16, fontWeight: "700" },
  sectionHint: { color: theme.subtext, fontSize: 12 },
  row: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  pill: {
    backgroundColor: "#0F1A2E",
    borderColor: "#1F2A44",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  pillText: { color: theme.text, fontSize: 12 },
});
