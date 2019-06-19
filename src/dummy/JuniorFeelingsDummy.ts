import JuniorFeelingsResponse from 'src/apis/JuniorFeelingsApi/JuniorFeelingsResponse';

export const JuniorFeelingsDummy: JuniorFeelingsResponse[] = [
  {
    uuid: 'id_1',
    name: 'tozastation',
    week_feelings: {
      monday: {
        date: '2019-06-15T01:29:27.164Z',
        attendance: {
          feeling_id: '1',
          is_input: true,
        },
        leaving: {
          feeling_id: '1',
          is_input: true,
        },
      },
      tuesday: {
        date: '2019-06-16T01:29:27.164Z',
        attendance: {
          feeling_id: '2',
          is_input: true,
        },
        leaving: {
          feeling_id: '2',
          is_input: true,
        },
      },
      wednesday: {
        date: '2019-06-17T01:29:27.164Z',
        attendance: {
          feeling_id: '3',
          is_input: true,
        },
        leaving: {
          feeling_id: '3',
          is_input: true,
        },
      },
      thursday: {
        date: '2019-06-18T01:29:27.164Z',
        attendance: {
          feeling_id: '4',
          is_input: true,
        },
        leaving: {
          feeling_id: '4',
          is_input: true,
        },
      },
      friday: {
        date: '2019-06-19T01:29:27.164Z',
        attendance: {
          feeling_id: '5',
          is_input: true,
        },
        leaving: {
          feeling_id: '5',
          is_input: true,
        },
      },
    },
  },
];
