export interface IHolidayApiResponse {
  dateKind: string;
  dateName: string;
  isHoliday: string;
  locdate: number;
  seq: number;
}

export interface IHolidayResponseData {
  response: {
    body: {
      items: {
        item: IHolidayApiResponse | IHolidayApiResponse[];
      };
    };
  };
}

export interface IHoliday {
  holName: string;
  holMonth: number;
  holDate: number;
}

export interface IHolidayApiRequest {
  solYear: number;
  solMonth: number;
}
