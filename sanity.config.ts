import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'Horus Mobility',

  projectId: 'mimsu5oh',
  dataset: 'production',
  plugins: withDocumentI18nPlugin([visionTool()],{languages:['en','fr']}),

  schema: {
    types: schemaTypes,
  },
})
