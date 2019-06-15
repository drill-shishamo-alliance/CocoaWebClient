type JuniorFeelingsResponse = {
  uuid: string;
  name: string;
  week_feelings: {
    monday: {
      date: string;
      attendance: {
        feeling_id: string;
        is_input: boolean;
      };
      leaving: {
        feeling_id: string;
        is_input: boolean;
      };
    };
    tuesday: {
      date: string;
      attendance: {
        feeling_id: string;
        is_input: boolean;
      };
      leaving: {
        feeling_id: string;
        is_input: boolean;
      };
    };
    wednesday: {
      date: string;
      attendance: {
        feeling_id: string;
        is_input: boolean;
      };
      leaving: {
        feeling_id: string;
        is_input: boolean;
      };
    };
    thursday: {
      date: string;
      attendance: {
        feeling_id: string;
        is_input: boolean;
      };
      leaving: {
        feeling_id: string;
        is_input: boolean;
      };
    };
    friday: {
      date: string;
      attendance: {
        feeling_id: string;
        is_input: boolean;
      };
      leaving: {
        feeling_id: string;
        is_input: boolean;
      };
    };
  };
}[];

export default JuniorFeelingsResponse;
