import { Platform, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import {
  BORDER_RADIUS,
  getPagePadding,
  SHADOWS,
  SPACING,
  TITLE_LOGO,
} from '../../constants/Dimensions';
import { Typography } from '../../constants/Fonts';

export const styles = StyleSheet.create({
  // Container principal - ALTURA REDUCIDA
  container: {
    backgroundColor: Colors.thirth,
    paddingHorizontal: getPagePadding(),
    paddingVertical: SPACING.xs, // Reducido de SPACING.md
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
    ...SHADOWS.sm,
    paddingTop: Platform.OS === 'ios' ? SPACING.lg : SPACING.xs, // Reducido
  },

  // Contenido principal - ALTURA REDUCIDA
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44, // Reducido de 50 a 44
  },

  // Botón del menú hamburguesa - TAMAÑO REDUCIDO
  menuButton: {
    padding: SPACING.xs, // Reducido de SPACING.sm
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.md,
    width: 44, // Reducido de 75 a 44
    height: 44, // Reducido de 75 a 44
  },

  // Logo centrado - CORREGIDO PARA TABLETS
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.md, // Agregar padding horizontal
  },

  logoText: {
    ...Typography.logoHeader,
    color: Colors.five,
    alignSelf: 'center', // Cambiado de flex-start a center
    fontWeight: 'bold',
    fontSize: TITLE_LOGO,
    textAlign: 'center', // Asegurar texto centrado
  },

  // Search container - ALTURA REDUCIDA
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.full,
    paddingHorizontal: SPACING.sm, // Reducido de SPACING.md
    paddingVertical: SPACING.xs, // Reducido de SPACING.sm
    height: 36, // Reducido de 40 a 36
    borderWidth: 1,
    borderColor: Colors.gray200,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    minWidth: 150,
    maxWidth: 600,
    width: '100%',
  },

  // Versión móvil del search - TAMAÑO REDUCIDO
  mobileSearchContainer: {
    width: 32, // Reducido de 36 a 32
    height: 32, // Reducido de 36 a 32
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.full,
    padding: SPACING.xs, // Reducido de SPACING.sm
    borderWidth: 1,
    borderColor: Colors.gray200,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  // ESTILOS PARA MODAL - NUEVOS/ACTUALIZADOS
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  // Overlay del menú lateral - ACTUALIZADO PARA MODAL
  leftMenuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  // Container del menú lateral - SIMPLIFICADO PARA MODAL
  leftMenuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 280,
    height: '100%',
    backgroundColor: Colors.thirth,
    shadowColor: Colors.black,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    paddingBottom: SPACING.lg,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },

  // Modal de búsqueda móvil - ACTUALIZADO
  mobileSearchModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 100 : 80,
  },

  mobileSearchBox: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    width: '90%',
    maxWidth: 350,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  // Header del menú lateral
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    paddingTop: Platform.OS === 'ios' ? SPACING.xl + 40 : SPACING.lg + 20,
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
    flexGrow: 1,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.lg,
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
    position: 'relative',
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
    backgroundColor: Colors.gray200,
    borderRadius: 10, // Reducido de 12 a 10
    width: 20, // Reducido de 24 a 20
    height: 20, // Reducido de 24 a 20
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6, // Reducido de 8 a 6
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

  // Responsive para tablet - MEJORADO
  tabletContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: SPACING.lg, // Agregar padding en tablets
  },

  // NUEVO: Estilo específico para contenido en tablets medianos
  mediumTabletContent: {
    paddingHorizontal: SPACING.xl,
    gap: SPACING.md, // Espaciado entre elementos
  },
});
