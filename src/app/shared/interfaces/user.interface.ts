export interface IUser {
    tokens: {
        jwt: string;
        refreshToken: string
    };
    firstName: string;
    lastName: string;
    displayName: string;
    businesses: [
        {
            businessKey: string;
            displayId: string;
            businessName: string;
            businessAddress1: string;
            businessAddress2: string;
            businessCity: string;
            businessState: string;
            businessPostalCode: string;
            businessLatitude: string;
            businessLongitude: string;
            businessPhone: string;
            businessFax: string;
            businessWebsiteURL: string;
            businessEmail: string
        }
    ];
    sessionId: string;
    status: number;
    isOk: boolean;
    errorMessage: string;
}
