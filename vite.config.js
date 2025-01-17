import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	build: {
		outDir: '../backend/public',
		emptyOutDir: true,
	},
	define: {
		global: {},
	},
	server: {
		historyApiFallback: true
	}
})
