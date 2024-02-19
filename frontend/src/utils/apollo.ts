import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { TOKEN } from '../config'
import { GET_ALL_META } from './queries'

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
