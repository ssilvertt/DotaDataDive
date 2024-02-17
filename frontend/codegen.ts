import { CodegenConfig } from '@graphql-codegen/cli';
import { TOKEN } from './src/config';
const config: CodegenConfig = {
	schema: {
		'https://api.stratz.com/graphql': {
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
		},
	},
	documents: ['src/**/*.tsx'],
	generates: {
		'./__generated__/': {
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
};

export default config;
