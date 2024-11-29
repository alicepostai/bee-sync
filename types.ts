export type RootStackParams = {
    hiveList: never;
    data: never;
    map: never;
    history: never;
    Profile: UserData;
    AppSettings: never;
    Hive: HiveData;
    HiveRegistration: never;
    QRCodes: never;
};

export type BottomTabParams = {
    hiveList: never;
    Data: never;
    Map: never;
    History: never;
    Profile: UserData;
};

export type AuthStackParams = {
    Home: never;
    Login: never;
    SignUp: never;
    PasswordRecovery: never;
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

