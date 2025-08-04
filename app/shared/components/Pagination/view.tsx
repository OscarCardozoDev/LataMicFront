import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { PaginationProps } from './types';
import { styles } from './styles';

interface PaginationViewProps extends PaginationProps {
  visiblePages: (number | string)[];
  onNavigatePrevious: () => void;
  onNavigateNext: () => void;
  renderPageButton: (page: number | string, index: number) => React.ReactNode;
}

export const PaginationView: React.FC<PaginationViewProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage = 20,
  containerStyle,
  visiblePages,
  onNavigatePrevious,
  onNavigateNext,
  renderPageButton,
}) => {
  if (totalPages <= 1) return null;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.paginationContainer}>
        {/* Botón anterior */}
        <TouchableOpacity
          style={[
            styles.navigationButton,
            currentPage === 1 && styles.disabledNavigationButton,
          ]}
          onPress={onNavigatePrevious}
          disabled={currentPage === 1}
        >
          <Text
            style={[
              styles.navigationButtonText,
              currentPage === 1 && styles.disabledNavigationButtonText,
            ]}
          >
            ‹
          </Text>
        </TouchableOpacity>

        {/* Números de página */}
        <View style={styles.pagesContainer}>
          {visiblePages.map((page, index) => renderPageButton(page, index))}
        </View>

        {/* Botón siguiente */}
        <TouchableOpacity
          style={[
            styles.navigationButton,
            currentPage === totalPages && styles.disabledNavigationButton,
          ]}
          onPress={onNavigateNext}
          disabled={currentPage === totalPages}
        >
          <Text
            style={[
              styles.navigationButtonText,
              currentPage === totalPages && styles.disabledNavigationButtonText,
            ]}
          >
            ›
          </Text>
        </TouchableOpacity>
      </View>

      {/* Información de elementos */}
      {totalItems && (
        <Text style={styles.infoText}>
          {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} - {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems}
        </Text>
      )}
    </View>
  );
};