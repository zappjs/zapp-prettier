export const PrettierConfigSchema = {
  type: 'object',
  properties: {
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