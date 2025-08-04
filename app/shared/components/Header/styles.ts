import { StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS, TITLE_LOGO } from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  // Actualiza estos estilos en tu styles.ts

  // Container principal - sin cambios
  container: {
    backgroundColor: Colors.thirth,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
    ...SHADOWS.sm,
    paddingTop: Platform.OS === 'ios' ? SPACING.xl + 20 : SPACING.md,
  },

  // Contenido principal - layout simplificado
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },

  // Botón del menú hamburguesa
  menuButton: {
    padding: SPACING.sm,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.md,
    width: 75,
    height: 75,
  },

  // Logo centrado
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoText: {
    ...Typography.logoHeader,
    color: Colors.five,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: TITLE_LOGO,
  },

  // Search container - ahora a la derecha
  searchContainer: {
    width: 600,
    minWidth: 350,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.gray200,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  // Versión móvil del search
  mobileSearchContainer: {
    width: 150, // Más pequeño en móvil
    height: 36,
    paddingHorizontal: SPACING.sm,
  },

  // Overlay del menú lateral
  leftMenuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
  },

  // Container del menú lateral
  leftMenuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 280, // Ancho del panel lateral
    height: '100%', // 100vh equivalente
    backgroundColor: Colors.thirth,
    zIndex: 999,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },

  // Header del menú lateral
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    paddingTop: Platform.OS === 'ios' ? SPACING.xl + 20 : SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
    backgroundColor: Colors.five,
  },

  menuHeaderTitle: {
    ...Typography.h2,
    color: Colors.white,
    fontWeight: 'bold',
  },

  menuCloseButton: {
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Contenido del menú
  menuContent: {
    flex: 1,
    paddingTop: SPACING.md,
  },

  // Items del menú - actualizados
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    minHeight: 56,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },

  menuItemPressed: {
    backgroundColor: Colors.gray50,
  },

  menuItemIcon: {
    width: 24,
    height: 24,
    marginRight: SPACING.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuItemText: {
    ...Typography.bodyLarge,
    color: Colors.gray800,
    flex: 1,
    fontWeight: '500',
  },

  // Item de bienvenida - más compacto
  welcomeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray200,
    backgroundColor: Colors.gray50,
  },

  welcomeAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.md,
    backgroundColor: Colors.gray300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    ...Typography.h3,
    color: Colors.fourth,
    flex: 1,
  },

  // Item premium
  premiumItem: {
    backgroundColor: Colors.five,
    borderBottomColor: Colors.titlePinkDark,
  },

  premiumItemText: {
    ...Typography.bodyLarge,
    color: Colors.white,
    fontWeight: '700',
  },

  clearSearchButton: {
    padding: 0,
    marginLeft: 0,
  },

  searchInput: {
    flex: 1,
    ...Typography.body,
    color: Colors.gray800,
    paddingVertical: 0,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.3,
  },

  // Separador
  menuSeparator: {
    height: 1,
    backgroundColor: Colors.gray200,
    marginVertical: SPACING.sm,
    marginHorizontal: SPACING.lg,
  },

  // Badge de notificación
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
  },

  // Responsive para tablet
  tabletContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },

  '@media (min-width: 768px)': {
    leftMenuContainer: {
      width: 320,
    },

    searchContainer: {
      width: 280,
      height: 44,
    },
  },
});
