import { create } from '@storybook/theming/create';

export default create({
    base: 'light',

    // Branding
    brandTitle: 'Kijewoku Storybook',
    brandImage: './kijewoku-logo.png',
    brandTarget: '_self',

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Colors (Kijewoku brand colors)
    colorPrimary: '#cf54a5', // Rose
    colorSecondary: '#55cacf', // Bleu

    // UI
    appBg: '#ffffff', // Fond de l'application en blanc pour un thème light
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#bddfe0',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10121c', // Noir
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#55cacf', // Bleu
    barHoverColor: '#55cacf',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#d5e1e1', // Noir
    inputTextColor: '#10121c', // Noir
    inputBorderRadius: 2,
});
