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
          {title: 'TBD', value: 'TBD'},
          {title: 'Olivia Solsiden', value: 'Olivia Solsiden'},
          {title: 'Graffi Grill Midtbyen', value: 'Graffi Grill Midtbyen'},
        ],
      },
    },
    {
      name: 'start_datetime',
      type: 'datetime',
      title: 'Event start',
    },
    {
      name: 'end_datetime',
      type: 'datetime',
      title: 'Event end',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
}
