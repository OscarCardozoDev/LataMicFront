export type AuthStackParamList = {
    login: undefined;
    register: undefined;
};

export type RootStackParamList = {
    Welcome: undefined;
    auth: { screen: keyof AuthStackParamList };
};