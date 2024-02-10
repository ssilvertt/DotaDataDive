import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import './index.css'
import router from './router.tsx'
import client from './utils/apollo.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
		<ApolloProvider client={client}>
				<RouterProvider router={router} />
		</ApolloProvider>
	</ThemeProvider>
)
	