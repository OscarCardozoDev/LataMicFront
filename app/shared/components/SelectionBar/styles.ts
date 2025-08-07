// app/shared/components/SelectionBar/styles.ts
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { SPACING, BORDER_RADIUS } from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  // Contenedor principal
  container: {
    position: 'relative',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: Colors.selectionBar.border || Colors.gray200,
    overflow: 'hidden',
  },

  // Contenedor de las opciones
  optionsContainer: {
    flexDirection: 'row',
    position: 'relative',
    zIndex: 2,
  },

  // Cada opción individual
  option: {
    flex: 1,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.sm,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },

  // Texto de la opción
  optionText: {
    ...Typography.body,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Texto cuando no está seleccionado
  unselectedText: {
    color: Colors.selectionBar.default || '#251D1D',
  },

  // Texto cuando está seleccionado
  selectedText: {
    color: Colors.selectionBar.text || Colors.white,
  },

  // Indicador animado de selección
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Colors.selectionBar.selected || '#3A2D2D',
    borderRadius: BORDER_RADIUS.md,
    margin: 2, // Pequeño margen para que no toque los bordes
    zIndex: 1,
  },

  // Estados de hover (para web)
  optionHover: {
    backgroundColor: 'rgba(58, 45, 45, 0.1)', // Hover sutil
  },

  // Estado de presionado
  optionPressed: {
    backgroundColor: 'rgba(58, 45, 45, 0.2)',
  },

  // Variante compacta (opcional)
  compact: {
    minHeight: 36,
  },

  compactOption: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,
  },

  compactText: {
    fontSize: 12,
  },

  // Responsive para diferentes tamaños
  responsive: {
    maxWidth: '100%',
  },
});