export default {
  name: 'frontpage',
  type: 'document',
  title: 'Frontpage',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
