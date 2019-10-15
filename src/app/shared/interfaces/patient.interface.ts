export interface IPatient {
    id: string;
    lastName: string;
    displayID: string;
    firstName: string;
    middleName: string;
    nameSuffix: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    dateOfBirth: string;
    gender: string;
    email: string;
    npi: string;
    phone: string;
    imageData: string;
}

export interface IUsersListResponse {
    status: number;
    isOk: true;
    errorMessage: string;
    payload: {
      pageData: IPatient[]
      itemsCount: number;
      pageIndex: number;
      pageSize: number;
    };
}
