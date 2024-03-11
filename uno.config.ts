// uno.config.ts
import { defineConfig } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetWind from '@unocss/preset-wind';

export default defineConfig({
	presets: [
		presetIcons({
			collections: {
				tabler: () => import('@iconify-json/tabler/icons.json').then((i) => i.default)
			}
		}),
		presetWebFonts({
			provider: 'google',
			fonts: {
				oxygen: [
					{
						name: 'Oxygen',
						weights: ['400', '700'],
						italic: true
					},
					{
						name: 'sans-serif',
						provider: 'none'
					}
				]
			}
		}),
		presetWind()
	]
});
