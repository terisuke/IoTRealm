/**
 * Common style utilities and classes for IoTRealm
 */

export const styles = {
  // Border radius utilities
  rounded: {
    default: 'rounded-[45px]',
    full: 'rounded-full',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },

  // Card styles
  card: {
    base: 'rounded-[45px]',
    bordered: 'rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]',
  },

  // Common padding values
  padding: {
    card: 'p-[60px]',
    cardSm: 'p-8 sm:p-[50px]',
  },

  // Typography styles
  text: {
    greenhead: 'greenhead',
    whitehead: 'whitehead',
  },

  // Background colors
  bg: {
    gray: 'bg-[#F3F3F3]',
    green: 'bg-green',
    dark: 'bg-dark',
    white: 'bg-white',
  },

  // Common flex utilities
  flex: {
    center: 'flex justify-center items-center',
    between: 'flex justify-between items-center',
    col: 'flex flex-col',
    colCenter: 'flex flex-col items-center',
  },

  // Grid utilities
  grid: {
    responsive: 'grid lg:grid-cols-2 lg:grid-rows-1',
  },

  // Transitions
  transition: {
    default: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },
} as const;

/**
 * Utility function to combine multiple style classes
 */
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get responsive class names for mobile/desktop variants
 */
export function responsive(
  mobileClass: string,
  desktopClass: string,
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' = 'sm'
) {
  return `${mobileClass} ${breakpoint}:${desktopClass}`;
}