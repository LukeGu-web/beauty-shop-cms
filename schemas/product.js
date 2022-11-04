import SlugInput from 'sanity-plugin-prefixed-slug';
import { slugGenerator } from '../utilities/slug-generator.js';

export default {
  name: 'product',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
};
