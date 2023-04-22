import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import product from './schemas/product'

export default defineConfig({
  name: 'default',
  title: 'macaron',

  projectId: 'k4mv79ht',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([product]),
  },
})
