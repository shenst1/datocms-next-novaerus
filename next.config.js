require('dotenv').config()


module.exports = {
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  i18n: {
    locales: ['en-US', 'en-UK'], // en-UK could be anything. It is a placeholder for all other locales
    defaultLocale: 'en-UK',
  }
}
