import SlugInput from 'sanity-plugin-prefixed-slug';
import { slugGenerator } from '../utilities/slug-generator.js';

export default {
  name: 'category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        source: 'name',
        maxLength: 30,
        slugify: (input) => slugGenerator(input),
      },
    },
  ],
};
