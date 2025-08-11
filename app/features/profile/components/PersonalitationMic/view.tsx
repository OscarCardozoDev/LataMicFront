// app/features/profile/components/MicModule/view.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SelectionBar } from '@/shared/components/SelectionBar';
import { styles } from './styles';
import { 
  MicModuleState, 
  MicModuleHandlers, 
  CategoryOption,
  MicCategory,
  MicItem 
} from './types';
import Colors from '@/shared/constants/Colors';

interface MicModuleViewProps {
  state: MicModuleState;
  handlers: MicModuleHandlers;
  categoryOptions: CategoryOption[];
  testID?: string;
}

export const MicModuleView: React.FC<MicModuleViewProps> = ({
  state,
  handlers,
  categoryOptions,
  testID,
}) => {
  const { t } = useTranslation();
  
  const { 
    selectedCategory, 
    visibleGridItems, 
    remainingItems, 
    userCoins, 
    isLoading,
    hoveredItemId,
    longPressedItemId,
  } = state;
  
  const { 
    handleCategoryChange, 
    handleItemSelect, 
    handleItemPurchase,
    handleItemHover,
    handleItemLongPress,
  } = handlers;

  // Renderizar item individual del Mic
  const renderMicItem = (item: MicItem, isInHorizontalScroll = false) => {
    const isLocked = item.isPremium && !item.isOwned;
    const isSelected = item.isSelected;
    const showTooltip = hoveredItemId === item.id || longPressedItemId === item.id;
    
    // Props para hover en web
    const webProps = Platform.OS === 'web' ? {
      onMouseEnter: () => handleItemHover(item.id),
      onMouseLeave: () => handleItemHover(null),
    } : {};

    return (
      <View 
        key={item.id} 
        style={isInHorizontalScroll ? styles.horizontalItem : styles.gridItem}
      >
        <TouchableOpacity
          style={[
            styles.micItem,
            isSelected && styles.selectedMicItem,
            isLocked && styles.lockedMicItem,
          ]}
          onPress={() => handleItemSelect(item)}
          onLongPress={() => handleItemLongPress(item.id)}
          delayLongPress={500}
          activeOpacity={0.8}
          testID={`${testID}-item-${item.id}`}
          {...webProps}
        >
          {/* Imagen del item */}
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.micItemImage}
            onError={() => {}}
          />

          {/* Overlay premium */}
          {item.isPremium && <View style={styles.premiumOverlay} />}

          {/* Badge premium con corona */}
          {item.isPremium && (
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumIcon}>👑</Text>
            </View>
          )}

          {/* Precio para items premium no poseídos */}
          {item.isPremium && !item.isOwned && item.price && (
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          )}

          {/* Tooltip con nombre */}
          {showTooltip && (
            <View style={styles.nameTooltip}>
              <View style={styles.nameTooltipArrow} />
              <Text style={styles.nameTooltipText}>{item.name}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  // Renderizar estado de carga
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.titlePink} />
        <Text style={styles.loadingText}>
          {t('common.loading', 'Cargando...')}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container} testID={testID}>
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        testID={`${testID}-scroll`}
      >
        {/* SelectionBar para categorías */}
        <View style={styles.categoriesContainer}>
          <SelectionBar
            options={categoryOptions}
            selectedId={selectedCategory}
            onSelectionChange={(id) => handleCategoryChange(id as MicCategory)}
            testID={`${testID}-categories`}
          />
        </View>

        {/* Grid 4x4 principal */}
        <View style={styles.gridContainer}>
          <Text style={styles.gridTitle}>
            {categoryOptions.find(cat => cat.id === selectedCategory)?.label || 'Accesorios'}
          </Text>
          
          {visibleGridItems.length > 0 ? (
            <View style={styles.grid}>
              {visibleGridItems.map(item => renderMicItem(item, false))}
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <View style={styles.emptyIcon}>
                <Text style={styles.emptyIconText}>🎨</Text>
              </View>
              <Text style={styles.emptyTitle}>
                Sin items disponibles
              </Text>
              <Text style={styles.emptySubtitle}>
                No hay elementos en esta categoría
              </Text>
            </View>
          )}
        </View>

        {/* Scroll horizontal para items adicionales */}
        {remainingItems.length > 0 && (
          <View style={styles.horizontalScrollContainer}>
            <Text style={styles.horizontalScrollTitle}>
              Más opciones
            </Text>
            <ScrollView
              horizontal
              style={styles.horizontalScroll}
              contentContainerStyle={styles.horizontalScrollContent}
              showsHorizontalScrollIndicator={false}
              testID={`${testID}-horizontal-scroll`}
            >
              {remainingItems.map(item => renderMicItem(item, true))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
  );
};