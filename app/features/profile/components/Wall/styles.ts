// app/features/profile/components/WallModule/styles.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: SPACING.xl,
  },

  // === HEADER DEL USUARIO ===
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.sm,
  },

  userNameContainer: {
    flex: 1,
  },

  userName: {
    ...Typography.h2,
    color: Colors.titlePink,
    fontWeight: '600',
    fontSize: 24,
  },

  statsContainer: {
    alignItems: 'flex-end',
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },

  statNumber: {
    ...Typography.body,
    color: Colors.gray800,
    fontWeight: '600',
    marginRight: SPACING.xs,
  },

  statLabel: {
    ...Typography.bodySmall,
    color: Colors.gray600,
  },

  // === DESCRIPCIÓN ===
  descriptionContainer: {
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: Colors.gray200,
    ...SHADOWS.sm,
  },

  descriptionLabel: {
    ...Typography.bodySmall,
    color: Colors.gray600,
    marginBottom: SPACING.sm,
    textAlign: 'center',
    fontWeight: '500',
  },

  descriptionText: {
    ...Typography.body,
    color: Colors.gray800,
    lineHeight: 22,
    textAlign: 'center',
  },

  // === SECCIÓN DE ARTISTAS ===
  artistsSection: {
    marginBottom: SPACING.lg,
  },

  artistsSectionTitle: {
    ...Typography.h3,
    color: Colors.titlePink,
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.sm,
    fontWeight: '600',
  },

  artistsContainer: {
    paddingLeft: SPACING.md,
  },

  artistsScrollContent: {
    paddingRight: SPACING.md,
  },

  artistItem: {
    alignItems: 'center',
    marginRight: SPACING.md,
    width: 80,
  },

  artistAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.gray300,
    marginBottom: SPACING.xs,
    overflow: 'hidden',
  },

  artistAvatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  artistName: {
    ...Typography.caption,
    color: Colors.gray800,
    textAlign: 'center',
    fontWeight: '500',
  },

  // === SELECTIONBAR DE PUBLICACIONES ===
  postsSelectionContainer: {
    marginBottom: SPACING.lg,
  },

  // === CONTENIDO DE PUBLICACIONES (PLACEHOLDER) ===
  postsContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    marginTop: SPACING.lg,
  },

  postsPlaceholderIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.gray300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },

  postsPlaceholderIconText: {
    ...Typography.h2,
    color: Colors.gray500,
  },

  postsPlaceholderTitle: {
    ...Typography.h3,
    color: Colors.gray600,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },

  postsPlaceholderSubtitle: {
    ...Typography.body,
    color: Colors.gray500,
    textAlign: 'center',
    lineHeight: 22,
  },

  // === ESTADOS DE CARGA ===
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },

  loadingText: {
    ...Typography.body,
    color: Colors.gray600,
    marginTop: SPACING.md,
  },

  // === ESTADOS VACÍOS ===
  emptyArtistsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },

  emptyArtistsText: {
    ...Typography.body,
    color: Colors.gray500,
    textAlign: 'center',
  },
});