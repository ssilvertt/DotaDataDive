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
			authorization: import.meta.env.VITE_TOKEN ? `Bearer ${import.meta.env.VITE_TOKEN}` : '',
		},
	}
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        heroStats: {
          merge(existing, incoming) {
            return {
              ...existing,
              ...incoming,
              winWeek: [...(existing?.winWeek || []), ...(incoming?.winWeek || [])],
            };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
})

export default client
