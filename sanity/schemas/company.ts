export default {
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'logo',
      type: 'string',
      title: 'Logo (url)',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Homepage (url)',
    },
  ],
}
