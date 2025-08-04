import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { SPACING, BORDER_RADIUS } from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    backgroundColor: 'transparent',
  },

  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },

  pagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.sm,
  },

  pageButton: {
    minWidth: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
    paddingHorizontal: SPACING.xs,
  },

  activePageButton: {
    backgroundColor: Colors.fourth,
  },

  disabledPageButton: {
    backgroundColor: 'transparent',
  },

  pageButtonText: {
    ...Typography.bodySmall,
    color: Colors.fourth,
    fontWeight: '500',
    fontSize: 14,
  },

  activePageButtonText: {
    color: Colors.white,
    fontWeight: '600',
  },

  disabledPageButtonText: {
    color: Colors.gray400,
  },

  navigationButton: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray300,
  },

  disabledNavigationButton: {
    borderColor: Colors.gray200,
    backgroundColor: Colors.gray100,
  },

  navigationButtonText: {
    ...Typography.h3,
    color: Colors.fourth,
    fontSize: 18,
    fontWeight: '600',
  },

  disabledNavigationButtonText: {
    color: Colors.gray400,
  },

  infoText: {
    ...Typography.bodySmall,
    color: Colors.gray600,
    marginTop: SPACING.xs,
    fontSize: 12,
  },
});