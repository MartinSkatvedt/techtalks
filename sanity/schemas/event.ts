export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      options: {
        list: [
          {title: 'Sted 1', value: 'sted_1'},
          {title: 'Sted 2', value: 'sted_2'},
        ],
      },
    },
    {
      name: 'start_datetime',
      type: 'datetime',
      title: 'Event start',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
}
