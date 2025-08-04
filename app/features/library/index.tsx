// screens/Library/index.tsx
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Alert, Dimensions } from 'react-native';
import { LibraryView } from './view';
import { useLibrary } from './hooks';
import { getGridStyle, getGridWidth, getColumnCount } from './styles';
import { LibraryScreenProps, Comic } from './types';

const Library: React.FC<LibraryScreenProps> = () => {
  console.log('Library component rendering...'); // Debug
  
  const [screenData, setScreenData] = useState(() => {
    const { width } = Dimensions.get('window');
    return {
      width,
      columnCount: getColumnCount(width),
      gridStyle: getGridStyle(width),
      gridWidth: getGridWidth(undefined, width),
    };
  });
  
  const libraryData = useLibrary();
  const { comics, currentPage } = libraryData;
  
  const ITEMS_PER_PAGE = 20;

  // Escuchar cambios de dimensiones
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      const newWidth = window.width;
      const newColumnCount = getColumnCount(newWidth);
      const newGridStyle = getGridStyle(newWidth);
      const newGridWidth = getGridWidth(undefined, newWidth);
      
      setScreenData({
        width: newWidth,
        columnCount: newColumnCount,
        gridStyle: newGridStyle,
        gridWidth: newGridWidth,
      });
    });

    return () => subscription?.remove();
  }, []);

  // Manejadores
  const handleComicPress = useCallback((comic: Comic) => {
    console.log('Comic pressed:', comic.title);
  }, []);

  const handleFavoritePress = useCallback((comic: Comic) => {
    libraryData.toggleFavorite(comic.id);
  }, [libraryData]);

  const handleMenuPress = useCallback((comic: Comic) => {
    console.log('Menu pressed for:', comic.title);
  }, []);

  const handleFilterPress = useCallback(() => {
    console.log('Filter pressed');
  }, []);

  // Calcular comics para la página actual
  const currentPageComics = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return comics.slice(startIndex, endIndex);
  }, [comics, currentPage, ITEMS_PER_PAGE]);

  console.log('About to render LibraryView...', { 
    screenWidth: screenData.width, 
    columns: screenData.columnCount,
    gridWidth: screenData.gridWidth 
  }); // Debug

  return (
    <LibraryView
      libraryData={libraryData}
      currentPageComics={currentPageComics}
      gridStyle={screenData.gridStyle}
      gridWidth={screenData.gridWidth}
      onComicPress={handleComicPress}
      onFavoritePress={handleFavoritePress}
      onMenuPress={handleMenuPress}
      onFilterPress={handleFilterPress}
    />
  );
};

export default Library;