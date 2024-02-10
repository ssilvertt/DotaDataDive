import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { TOKEN } from '../config'

const httpLink = createHttpLink({
	uri: 'https://api.stratz.com/graphql',
})

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: TOKEN ? `Bearer ${TOKEN}` : '',
		},
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})

export default client
