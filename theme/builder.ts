import { createThemeBuilder } from '@tamagui/theme-builder'

const themesBuilder = createThemeBuilder()
    .addPalettes({
        dark: ['#000', '#111', '#222', '#999', '#ccc', '#eee', '#fff'],
        light: ['#fff', '#eee', '#ccc', '#999', '#222', '#111', '#000'],
    })
    .addTemplates({
        base: {
            background: 0,
            color: -0,
        },
        subtle: {
            background: 1,
            color: -1,
        }
    })
    .addThemes({
        light: {
            template: 'base',
            palette: 'light',
        },
        dark: {
            template: 'base',
            palette: 'dark',
        },
    })
    .addChildThemes({
        subtle: {
            template: 'subtle',
        },
    })

export const themes = themesBuilder.build()