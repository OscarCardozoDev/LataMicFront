const Colors = {
  // Paleta principal de LataMic - Nuevos colores base
  first: '#FAF7F3',   // Crema cálido - Base principal cálida
  second: '#FFF2EB',  // Durazno suave - Fondos delicados
  thirth: '#FFE6E6',  // Rosa muy claro - Highlights sutiles
  fourth: '#E69DB8',  // Rosa medio - Elementos secundarios
  five: '#FF7E9D',    // Rosa del título - Elementos principales
  
  // Nuevos colores base integrados
  cream: '#FAF7F3',      // Crema principal - Base cálida
  peach: '#FFF2EB',      // Durazno suave - Fondos delicados
  blush: '#FFE6E6',      // Rosa muy claro - Highlights sutiles
  rosePink: '#E69DB8',   // Rosa medio - Elementos secundarios
  titlePink: '#FF7E9D',  // Rosa del título - Elementos principales
  deepRose: '#B9375D',   // Rosa profundo - Acentos y CTAs
  
  // Variaciones para estados y interacciones
  firstDark: '#F5F0E8',     // Crema más oscuro (hover/pressed)
  firstLight: '#FEFCFA',    // Crema más claro (backgrounds sutiles)
  secondLight: '#FFF8F3',   // Durazno más claro (cards, sections)
  secondDark: '#FFEDE0',    // Durazno más oscuro (hover states)
  fourthLight: '#F0C4D2',   // Rosa medio claro (active states)
  fourthDark: '#D4547A',    // Rosa medio oscuro (text on light)
  
  // Variaciones de los nuevos colores rosa
  titlePinkLight: '#FFB3CC',  // Rosa título claro (hover suave)
  titlePinkDark: '#E6578A',   // Rosa título oscuro (pressed)
  deepRoseLight: '#D4547A',   // Rosa profundo claro (hover)
  deepRoseDark: '#9A2E4F',    // Rosa profundo muy oscuro (pressed)
  rosePinkLight: '#F0C4D2',   // Rosa medio claro (backgrounds)
  
  // Grises actualizados con tonos más cálidos
  black: '#000000',
  white: '#FFFFFF',
  cream50: '#FEFCFA',      // Crema ultra claro
  cream100: '#FAF7F3',     // Crema base
  cream200: '#F5F0E8',     // Crema medio
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#E5E5E5',
  gray300: '#D4D4D4',
  gray400: '#A3A3A3',
  gray500: '#737373',
  gray600: '#525252',
  gray700: '#404040',
  gray800: '#262626',
  gray900: '#171717',
  
  // Estados de la aplicación con integración rosa
  success: '#10B981',       // Verde para éxito
  successLight: '#D1FAE5',  // Verde claro para backgrounds
  warning: '#F59E0B',       // Naranja para advertencias
  warningLight: '#FEF3C7',  // Naranja claro
  error: '#EF4444',         // Rojo para errores
  errorLight: '#FEE2E2',    // Rojo claro
  info: '#FF7E9D',          // Rosa principal para información (cambio del azul)
  infoLight: '#FFE6E6',     // Rosa claro para info backgrounds
  
  // Overlays y máscaras actualizados
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  cardOverlay: 'rgba(255, 126, 157, 0.15)', // Overlay rosa para comic cards
  pinkOverlay: 'rgba(185, 55, 93, 0.1)',    // Overlay rosa suave
  
  // Colores específicos para LataMic - Usando nueva paleta
  comic: {
    featured: '#FF7E9D',      // Rosa principal para comics destacados
    new: '#E69DB8',          // Rosa medio para comics nuevos
    trending: '#FFE6E6',     // Rosa claro para comics trending
    completed: '#B9375D',    // Rosa profundo para comics completados
    romantic: '#FF7E9D',     // Rosa principal para género romántico
    drama: '#B9375D',        // Rosa profundo para dramas
  },
  
  // Sistema de monedas actualizado
  coin: '#FF7E9D',           // Rosa principal para monedas
  coinShadow: '#E6578A',     // Sombra de monedas
  premium: '#B9375D',        // Rosa profundo para elementos premium
  
  // Avatares y personalización con tonos rosa
  avatar: {
    background: '#FFE6E6',   // Fondo rosa claro para avatares
    border: '#FF7E9D',       // Borde rosa principal
    premium: '#B9375D',      // Rosa profundo para items premium
    female: '#E69DB8',       // Rosa medio para avatares femeninos
    accent: '#FAF7F3',       // Crema para acentos
  },
  
  // Chat con integración de colores rosa
  chat: {
    myMessage: '#FF7E9D',    // Mis mensajes en rosa principal
    otherMessage: '#FAF7F3', // Mensajes de otros en crema
    accent: '#FFE6E6',       // Acentos en rosa claro
    online: '#10B981',       // Indicador online en verde
    typing: '#E69DB8',       // Indicador escribiendo en rosa medio
    timestamp: '#B9375D',    // Timestamps en rosa profundo
  },
  
  // Nuevas categorías específicas
  ui: {
    background: '#FAF7F3',   // Fondo principal
    surface: '#FFF2EB',      // Superficies elevadas
    card: '#FFFFFF',         // Cards y contenedores
    border: '#FFE6E6',       // Bordes suaves
    divider: '#E69DB8',      // Divisores más visibles
  },
  
  // Botones y elementos interactivos
  button: {
    primary: '#FF7E9D',      // Botón principal
    primaryHover: '#E6578A', // Hover del botón principal
    secondary: '#E69DB8',    // Botón secundario
    secondaryHover: '#D4547A', // Hover del secundario
    outline: '#B9375D',      // Botones outline
    disabled: '#FFE6E6',     // Botones deshabilitados
  },
  
  // Gradientes sugeridos
  gradients: {
    primary: 'linear-gradient(135deg, #FF7E9D, #B9375D)',
    soft: 'linear-gradient(135deg, #FFE6E6, #FFF2EB)',
    warm: 'linear-gradient(135deg, #FAF7F3, #FFE6E6)',
    accent: 'linear-gradient(135deg, #E69DB8, #FF7E9D)',
  },
  
  // Transparencias
  transparent: 'transparent',
};

export default Colors;