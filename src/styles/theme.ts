export const theme = {
  // Spacing
  spacing: {
    headerHeight: '60px',
    containerPadding: '1rem',
    sectionGap: 'rem',
    contentMaxWidth: '72rem', // max-w-4xl
  },

  // Colors
  colors: {
    primary: {
      DEFAULT: '#3B82F6', // blue-500
      light: '#60A5FA',   // blue-400
      dark: '#2563EB',    // blue-600
    },
    text: {
      primary: '#111111',  // '#1F2937',   // gray-800
      secondary: '333333', // '#4B5563', // gray-600
      light: '#6B7280',     // gray-500
    },
    background: {
      DEFAULT: '#F9FAFB',   // gray-50
      white: '#FFFFFF',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },

  // Border Radius
  borderRadius: {
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },

  // Links
  links: {
    lab: {
      default: '#1F5AEF',  // indigo-600
      hover: '#6F98FF'     // indigo-500
    },
    navigation: {
      default: '#4B5563',  // gray-600
      hover: '#374151'     // gray-700
    },
    social: {
      default: '#3B82F6',  // blue-600
      hover: '#2563EB'     // blue-700
    },
    project: {
      default: '#059669',  // emerald-600
      hover: '#047857'     // emerald-700
    },
    publication: {
      default: '#7C3AED',  // violet-600
      hover: '#6D28D9'     // violet-700
    }
  },
}; 