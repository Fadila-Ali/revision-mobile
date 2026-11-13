import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  background: "#FFF9F0",
  primary: "#087F8C",
  text: "#24343B",
  secondary: "#74838A",
  white: "#FFFFFF",
};

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>← Retour</Text>
        </Pressable>

        <View style={styles.header}>
          <Text style={styles.mascot}>🦁</Text>
          <Text style={styles.title}>Bon retour !</Text>
          <Text style={styles.description}>
            Connecte-toi pour continuer à apprendre.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Adresse e-mail ou téléphone</Text>
          <TextInput
            style={styles.input}
            placeholder="Ton e-mail ou numéro"
            placeholderTextColor="#9AA5AA"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Code PIN</Text>
          <TextInput
            style={styles.input}
            placeholder="Entre ton code PIN"
            placeholderTextColor="#9AA5AA"
            keyboardType="number-pad"
            secureTextEntry
            maxLength={6}
          />

          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Se connecter</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Tu n'as pas encore de compte ?</Text>
          <Pressable onPress={() => router.push("/(auth)/register")}>
            <Text style={styles.link}>Créer un compte</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 28,
    justifyContent: "space-between",
  },
  backButton: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  header: {
    alignItems: "center",
  },
  mascot: {
    fontSize: 65,
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.text,
  },
  description: {
    fontSize: 15,
    color: COLORS.secondary,
    textAlign: "center",
    marginTop: 10,
  },
  form: {
    gap: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
  },
  input: {
    height: 55,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: "#E4E8E5",
    borderRadius: 13,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 10,
    color: COLORS.text,
  },
  primaryButton: {
    height: 56,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    alignItems: "center",
    gap: 8,
  },
  footerText: {
    color: COLORS.secondary,
    fontSize: 14,
  },
  link: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: "700",
  },
});
