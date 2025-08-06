// app/shared/components/ChapterCard/styles/index.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING } from '@/shared/constants/Dimensions';

// Estilos compartidos entre ambas variantes
export const sharedStyles = StyleSheet.create({
  // Loading states compartidos
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },

  loadingText: {
    ...Typography.body,
    color: Colors.gray600,
    marginTop: SPACING.md,
  },

  // Empty states compartidos
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xxxl,
  },

  emptyText: {
    ...Typography.body,
    color: Colors.gray600,
    textAlign: 'center',
  },

  // Shimmer overlay compartido
  shimmerOverlay: {
    position: 'absolute',
    top: -50,
    width: 100,
    height: '200%',
    backgroundColor: Colors.white,
    opacity: 0.3,
  },

  // Container principal
  container: {
    flex: 1,
  },
});

// Re-exportar estilos específicos
export { cardStyles } from './card.styles';
export { rowsStyles } from './rows.styles';