type MediaQueryProps = {
  xsmall: '(max-width: 414px)';
  smallMax: '(max-width: 767px)';
  smallMin: '(min-width: 768px)';
  mediumMax: '(max-width: 1023px)';
  mediumMin: '(min-width: 1024px)';
  large: '(min-width: 1200px)';
  xlarge: '(min-width: 1344px)';
  xxlarge: '(min-width: 1500px)';
  landscape: '(orientation: landscape)';
  portrait: '(orientation: portrait)';
};

const mediaQuery = {
  xsmall: '(max-width: 414px)',
  smallMax: '(max-width: 767px)',
  smallMin: '(min-width: 768px)',
  mediumMax: '(max-width: 1023px)',
  mediumMin: '(min-width: 1024px)',
  large: '(min-width: 1200px)',
  xlarge: '(min-width: 1344px)',
  xxlarge: '(min-width: 1500px)',
  landscape: '(orientation: landscape)',
  portrait: '(orientation: portrait)'
} as MediaQueryProps;

export default mediaQuery;
