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
    {
      title: 'Hero section',
      name: 'heroSection',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'leftButtonLabel', title: 'Left button label', type: 'string' },
        { name: 'leftButtonLink', title: 'Left button link', type: 'url' },
        {
          name: 'rightButtonLabel',
          title: 'Right button label',
          type: 'string',
        },
        { name: 'rightButtonLink', title: 'Right button link', type: 'url' },
        {
          name: 'imageSrc',
          type: 'image',
          title: 'Image source',
        },
      ],
    },
    {
      title: 'About section',
      name: 'aboutSection',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'buttonLabel', title: 'Button label', type: 'string' },
        { name: 'buttonLink', title: 'Button link', type: 'url' },
        { name: 'videoSrc', title: 'Video source', type: 'url' },
      ],
    },
    {
      title: 'Benefit section',
      name: 'benefitSection',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              name: 'item',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                },
                { name: 'description', type: 'text' },
                {
                  name: 'imageSrc',
                  type: 'image',
                  title: 'Image source',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'How it works section',
      name: 'howItWorksSection',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        {
          name: 'items',
          type: 'array',
          of: [
            {
              name: 'item',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                },
                { name: 'description', type: 'text' },
                {
                  name: 'imageSrc',
                  type: 'image',
                  title: 'Image source',
                },
              ],
            },
          ],
        },
        {
          title: 'Treatment areas',
          name: 'treatmentAreas',
          type: 'object',
          fields: [
            { title: 'Area title', name: 'areaTitle', type: 'string' },
            { title: 'Content title', name: 'contentTitle', type: 'string' },
            { name: 'description', type: 'text' },
            {
              name: 'imageSrc',
              type: 'image',
              title: 'Image source',
            },
          ],
        },
      ],
    },
    {
      title: 'Price section',
      name: 'priceSection',
      type: 'object',
      fields: [
        {
          name: 'content',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            { name: 'description', type: 'text' },
            { name: 'buttonLabel', title: 'Button label', type: 'string' },
            { name: 'buttonLink', title: 'Button link', type: 'url' },
          ],
        },
        {
          name: 'lists',
          type: 'array',
          of: [
            {
              name: 'list',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                },
                {
                  name: 'prices',
                  type: 'array',
                  of: [
                    {
                      name: 'price',
                      type: 'object',
                      fields: [
                        {
                          name: 'name',
                          type: 'string',
                        },
                        { name: 'cost', type: 'string' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
