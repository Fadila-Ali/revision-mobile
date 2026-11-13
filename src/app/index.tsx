import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  background: "#FFF9F0",
  primary: "#087F8C",
  primaryDark: "#075E68",
  text: "#24343B",
  secondary: "#74838A",
  white: "#FFFFFF",
};

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Brand */}
        <View style={styles.brand}>
          <View style={styles.mascotCircle}>
            <Text style={styles.mascot}>🦁</Text>
          </View>

          <Text style={styles.logo}>Révision</Text>
          <Text style={styles.tagline}>Apprendre. Mémoriser. Réussir.</Text>
        </View>

        {/* Introduction */}
        <View style={styles.hero}>
          <Text style={styles.heading}>
            Apprends tes leçons,{"\n"}
            <Text style={styles.highlight}>à ton rythme !</Text>
          </Text>

          <Text style={styles.description}>
            Découvre une nouvelle façon d'apprendre, de mémoriser tes leçons et
            de progresser chaque jour.
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push("/(auth)/register")}
          >
            <Text style={styles.primaryButtonText}>Créer un compte</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.secondaryButtonText}>J'ai déjà un compte</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Chaque leçon apprise est une victoire ! ✨
        </Text>
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
    paddingHorizontal: 28,
    paddingVertical: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    alignItems: "center",
    marginTop: 25,
  },

  mascotCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#E1F5F3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  mascot: {
    fontSize: 65,
  },

  logo: {
    fontSize: 34,
    fontWeight: "800",
    color: COLORS.primaryDark,
    letterSpacing: -1,
  },

  tagline: {
    fontSize: 13,
    color: COLORS.secondary,
    marginTop: 5,
    letterSpacing: 0.5,
  },

  hero: {
    alignItems: "center",
    paddingHorizontal: 5,
  },

  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
    lineHeight: 41,
  },

  highlight: {
    color: COLORS.primary,
  },

  description: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: "center",
    lineHeight: 25,
    marginTop: 18,
    maxWidth: 310,
  },

  actions: {
    width: "100%",
    gap: 14,
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    height: 58,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  secondaryButtonText: {
    color: COLORS.primaryDark,
    fontSize: 16,
    fontWeight: "700",
  },

  pressed: {
    opacity: 0.8,
  },

  footer: {
    fontSize: 12,
    color: COLORS.secondary,
    textAlign: "center",
    marginTop: 12,
  },
});
