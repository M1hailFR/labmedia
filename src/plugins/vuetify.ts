import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'surface-2': '#F5F5F5',
          'neutrals-1': '#FFFFFF',
          'neutrals-2': '#000000',
          'neutrals-3': '#A1AFC5',
          'neutrals-4': '#63687B',
          'neutrals-5': '#3F3F5F',
          'brand-1': '#0383FE',
          'brand-2': '#0068CC',
          danger: '#EF4444'
        }
      }
    }
  },
  defaults: {
    VBtn: {
      style: 'font-weight: inherit; line-height: inherit;'
    }
  }
});
