import axios from "axios";
import { BASE_URL, SERVICE_KEY } from "@constants";
import { IHoliday, IHolidayApiRequest, IHolidayResponseData } from "@typings";

const holidayApi = async ({ solYear, solMonth }: IHolidayApiRequest): Promise<IHoliday[]> => {
  const queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    SERVICE_KEY +
    "&" +
    encodeURIComponent("solYear") +
    "=" +
    encodeURIComponent(solYear) +
    "&" +
    encodeURIComponent("solMonth") +
    "=" +
    encodeURIComponent(solMonth.toString().padStart(2, "0"));

  const { data } = await axios.get<IHolidayResponseData>(BASE_URL + queryParams);
  const { item } = data.response.body.items;
  const holidayData: IHoliday[] = [];

  if (Array.isArray(item)) {
    item.forEach((v: { dateName: string; locdate: number }) => {
      const newObj = {
        holName: v.dateName,
        holMonth: Number(v.locdate.toString().substring(4, 6)),
        holDate: Number(v.locdate.toString().substring(6)),
      };

      holidayData.push(newObj);
    });
  } else if (!Array.isArray(item) && typeof item === "object") {
    const newObj = {
      holName: item.dateName,
      holMonth: Number(item.locdate.toString().substring(4, 6)),
      holDate: Number(item.locdate.toString().substring(6)),
    };

    holidayData.push(newObj);
  }

  return holidayData;
};

export default holidayApi;
