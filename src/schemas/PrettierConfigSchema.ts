export const PrettierConfigSchema = {
  type: 'object',
  properties: {
    parser: {
      type: 'string'
    },
    printWidth: {
      min: 1,
      type: 'number'
    },
    singleQuote: {
      type: 'boolean'
    },
    tabWidth: {
      type: 'number'
    },
    useTabs: {
      type: 'boolean'
    }
  }
}