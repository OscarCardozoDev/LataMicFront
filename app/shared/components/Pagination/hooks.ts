import { useMemo, useCallback } from 'react';
import { PaginationProps } from './types';

export const usePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 7,
}: Pick<PaginationProps, 'currentPage' | 'totalPages' | 'onPageChange' | 'maxVisiblePages'>) => {
  
  // Calcular qué páginas mostrar
  const visiblePages = useMemo(() => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= maxVisiblePages) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar páginas con ellipsis
      const halfVisible = Math.floor(maxVisiblePages / 2);
      
      if (currentPage <= halfVisible + 2) {
        // Mostrar desde el inicio
        for (let i = 1; i <= maxVisiblePages - 2; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfVisible - 1) {
        // Mostrar hacia el final
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - (maxVisiblePages - 3); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Mostrar en el medio
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - halfVisible + 1; i <= currentPage + halfVisible - 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  const handleNavigatePrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNavigateNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, onPageChange]);

  return {
    visiblePages,
    handleNavigatePrevious,
    handleNavigateNext,
  };
};