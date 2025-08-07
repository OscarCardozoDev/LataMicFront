// Configuración de fuentes para LataMic
export const FontFamily = {
    // Fuente principal para texto general y UI
    introvert: 'Introvert-Regular',
    
    // Familia Raleway para títulos y textos importantes
    ralewayBlack: 'Raleway-Black',
    ralewayMedium: 'Raleway-Medium',
    londrinaSketch: 'LondrinaSketch-Regular',
    
    // Fallbacks del sistema para casos de error
    systemDefault: 'System',
    systemSans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    systemMono: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  };
  
  export const FontSize = {
    // Tamaños extra pequeños
    xxs: 10,
    xs: 12,
    
    // Tamaños base
    sm: 14,
    md: 16,    // Base size para body text
    lg: 18,
    
    // Tamaños grandes para títulos
    xl: 20,
    xxl: 24,
    xxxl: 32,
    xxxxl: 40,
    xxxxxl: 48,
    
    // Tamaños específicos para LataMic
    comicTitle: 28,     // Títulos de comics
    chapterTitle: 22,   // Títulos de capítulos
    authorName: 16,     // Nombres de autores
    tagText: 12,        // Texto en tags/categorías
    logoHeader: 42,
  };
  
  export const FontWeight = {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    black: '900' as const,
  };
  
  export const LineHeight = {
    // Line heights proporcionales
    tight: 1.2,    // Para títulos
    normal: 1.4,   // Para texto normal
    relaxed: 1.6,  // Para texto largo
    loose: 1.8,    // Para texto muy espaciado
    
    // Line heights en píxeles (para casos específicos)
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 36,
    xxxl: 48,
    xxxxl: 56,
  };
  
  // Combinaciones predefinidas para textos específicos de LataMic
  export const Typography = {
    // Headers principales
    h1: {
      fontFamily: FontFamily.ralewayBlack,
      fontSize: FontSize.xxxl,
      lineHeight: LineHeight.tight,
      fontWeight: FontWeight.black,
    },
    h2: {
      fontFamily: FontFamily.ralewayBlack,
      fontSize: FontSize.xxl,
      lineHeight: LineHeight.tight,
      fontWeight: FontWeight.black,
    },
    h3: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.xl,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.bold,
    },
    h4: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.lg,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.semibold,
    },
    logoHeader: {
      fontFamily: FontFamily.londrinaSketch,
      fontSize: FontSize.logoHeader,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.regular,
    },
    
    // Texto de cuerpo
    body: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.md,
      lineHeight: LineHeight.xs,
      fontWeight: FontWeight.regular,
    },
    bodyLarge: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.lg,
      lineHeight: LineHeight.relaxed,
      fontWeight: FontWeight.regular,
    },
    bodySmall: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.sm,
      lineHeight: LineHeight.xs,
      fontWeight: FontWeight.regular,
    },
    
    // Texto pequeño y captions
    caption: {
      fontFamily: FontFamily.introvert,
      fontSize: FontSize.xs,
      lineHeight: LineHeight.xs,
      fontWeight: FontWeight.regular,
    },
    overline: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.xxs,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.semibold,
      letterSpacing: 1.5,
    },
    
    // Elementos UI
    button: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.md,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.semibold,
    },
    buttonLarge: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.lg,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.semibold,
    },
    buttonSmall: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.sm,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.medium,
    },
    
    // Específicos para LataMic
    comicTitle: {
      fontFamily: FontFamily.ralewayBlack,
      fontSize: FontSize.comicTitle,
      lineHeight: LineHeight.tight,
      fontWeight: FontWeight.black,
    },
    chapterTitle: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.chapterTitle,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.bold,
    },
    authorName: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.authorName,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.medium,
    },
    categoryTag: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.tagText,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.semibold,
      letterSpacing: 0.5,
    },
    
    // Para el chat
    chatMessage: {
      fontFamily: FontFamily.introvert,
      fontSize: FontSize.md,
      lineHeight: LineHeight.relaxed,
      fontWeight: FontWeight.regular,
    },
    chatTime: {
      fontFamily: FontFamily.introvert,
      fontSize: FontSize.xs,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.regular,
    },
    
    // Para la navegación
    navItem: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.md,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.medium,
    },
    tabItem: {
      fontFamily: FontFamily.ralewayMedium,
      fontSize: FontSize.sm,
      lineHeight: LineHeight.normal,
      fontWeight: FontWeight.medium,
    },
  };