import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { PaginationProps } from './types';
import { PaginationView } from './view';
import { usePagination } from './hooks';
import { styles } from './styles';

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    currentPage,
    onPageChange,
    ...restProps
  } = props;

  const {
    visiblePages,
    handleNavigatePrevious,
    handleNavigateNext,
  } = usePagination(props);

  const renderPageButton = useCallback((page: number | string, index: number) => {
    const isEllipsis = page === '...';
    const isActive = page === currentPage;
    const isDisabled = isEllipsis;

    return (
      <TouchableOpacity
        key={`page-${index}-${page}`}
        style={[
          styles.pageButton,
          isActive && styles.activePageButton,
          isDisabled && styles.disabledPageButton,
        ]}
        onPress={() => !isDisabled && typeof page === 'number' && onPageChange(page)}
        disabled={isDisabled}
        activeOpacity={isDisabled ? 1 : 0.7}
      >
        <Text
          style={[
            styles.pageButtonText,
            isActive && styles.activePageButtonText,
            isDisabled && styles.disabledPageButtonText,
          ]}
        >
          {page}
        </Text>
      </TouchableOpacity>
    );
  }, [currentPage, onPageChange]);

  return (
    <PaginationView
      {...restProps}
      currentPage={currentPage}
      visiblePages={visiblePages}
      onPageChange={onPageChange}
      onNavigatePrevious={handleNavigatePrevious}
      onNavigateNext={handleNavigateNext}
      renderPageButton={renderPageButton}
    />
  );
};

export default Pagination;