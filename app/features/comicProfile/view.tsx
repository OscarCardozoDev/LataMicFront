// app/features/mangaProfile/view.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/components/AvatarMenu';
import { Tag } from '@/shared/components/CategoryTag';
import { ChapterCard } from '@/shared/components/ChapterCard';
import { styles } from './styles';
import { MangaProfileViewProps } from './types';
import { useResponsive } from '@/shared/hooks/useResponsive';
import Colors from '@/shared/constants/Colors';

const { width: screenWidth } = Dimensions.get('window');

export const MangaProfileView: React.FC<MangaProfileViewProps> = ({
  state,
  handlers,
  animations,
  testID,
}) => {
  const { t } = useTranslation();
  const { isTablet } = useResponsive();

  const {
    manga,
    selectedChapter,
    isLoading,
    error,
  } = state;

  const {
    handleChapterSelect,
    handleChapterLongPress,
    handleGenrePress,
    handleAuthorPress,
    handleContactPress,
    handleBackPress,
  } = handlers;

  // Loading state
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.fourth} />
          <Text style={styles.loadingText}>
            {t('manga.loading', 'Cargando manga...')}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Error state
  if (error || !manga) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error || t('manga.notFound', 'Manga no encontrado')}
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleBackPress}>
            <Text style={styles.retryButtonText}>
              {t('common.goBack', 'Volver')}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Renderizar sección del autor
  const renderAuthorSection = () => (
    <Animated.View style={[styles.authorSection, animations.slideUpStyle]}>
      <TouchableOpacity 
        style={styles.authorAvatar}
        onPress={handleAuthorPress}
        activeOpacity={0.8}
      >
        <Avatar
          source={manga.author.avatar}
          name={manga.author.name}
          size="xxxl"
          showBorder
          borderColor={Colors.fourth}
          borderWidth={3}
          onPress={handleAuthorPress}
        />
      </TouchableOpacity>
      
      <Text style={styles.authorName}>
        {manga.author.name}
      </Text>
      
      {manga.author.description && (
        <Text style={styles.authorDescription}>
          {manga.author.description}
        </Text>
      )}
      
      <TouchableOpacity 
        style={styles.contactButton}
        onPress={handleContactPress}
        activeOpacity={0.8}
      >
        <Text style={styles.contactButtonText}>
          {t('manga.contactAuthor', 'Forma de contacto autor')}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );

  // Renderizar información del manga
  const renderMangaInfo = () => (
    <Animated.View style={[styles.mangaInfoSection, animations.slideUpStyle]}>      
      <Text style={styles.mangaDescription}>
        {manga.description}
      </Text>
      
      {/* Géneros */}
      <View style={styles.genresSection}>
        <View style={styles.genresContainer}>
          {manga.genres.map((genre, index) => (
            <Tag
              key={genre}
              label={genre}
              onPress={() => handleGenrePress(genre)}
              size="sm"
              variant="filled"
              color={Colors.fourth}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );

  // Renderizar sección de capítulos
  const renderChaptersSection = () => (
    <Animated.View style={[styles.chaptersSection, animations.slideUpStyle]}>
      <View style={styles.chaptersHeader}>
        <Text style={styles.chaptersTitle}>
          {t('manga.chapters', 'Capítulos')}
        </Text>
        <View style={styles.chaptersSort}>
          <Text style={styles.chaptersSortText}>
            {t('manga.sortBy', 'Ordenar por')}
          </Text>
          <Text style={styles.chaptersSortText}>
            {t('manga.chapterNumber', 'Título del capítulo')}
          </Text>
        </View>
      </View>
      
      <View style={styles.chaptersList}>
        <ChapterCard
          chapters={manga.chapters}
          variant='rows'
          selectedChapter={selectedChapter}
          onChapterSelect={handleChapterSelect}
          onChapterLongPress={handleChapterLongPress}
          itemHeight={40}
          showTitles={false}
          sortBy="number"
          sortOrder="asc"
          testID="manga-chapters"
        />        
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container} testID={testID}>
      {/* Hero Section */}
      <Animated.View style={[styles.heroSection, animations.fadeInStyle]}>
        <Animated.Image
          source={{ uri: manga.heroImage }}
          style={[styles.heroImage, animations.heroParallaxStyle]}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay} />
        <Animated.View style={[styles.heroContent, animations.slideUpStyle]}>
          <Text style={styles.heroTitle}>
            {manga.title}
          </Text>
        </Animated.View>
      </Animated.View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <View style={[
          styles.contentLayout,
          !isTablet && styles.mobileLayout
        ]}>
          {/* Left Column - Author Info */}
          <View style={styles.leftColumn}>
            {renderAuthorSection()}
          </View>

          {/* Right Column - Manga Info + Chapters */}
          <View style={styles.rightColumn}>
            {renderMangaInfo()}
            {renderChaptersSection()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};