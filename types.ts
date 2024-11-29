export type RootStackParams = {
    mainApp: MainAppParams;
    authentication: AuthStackParams;
    bottomTab: BottomTabParams;
}

export type MainAppParams = {
    appSettings: never;
    hive: HiveData;
    hiveRegistration: never;
    qrCodes: never;
};

export type BottomTabParams = {
    hiveList: never;
    generalData: never;
    map: never;
    history: never;
    profile: UserData;
};

export type AuthStackParams = {
    home: never;
    login: never;
    signUp: never;
    passwordRecovery: never;
};

export type UserData = {
    name: String;
}

export type HiveData = {
    //species: BeeSpecies;
    id: number;
}

export type ComboBoxProps = {
    list: ListItem[];
    placeholder: string;
    iconName: string;
};

export interface ListItem {
    id: number;
    name: string;
}

export interface BeeSpecies extends ListItem {
    id : number;
    name: string;
    scientificName: string;
    imageUrl: string;
}

