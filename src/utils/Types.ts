export type RootStackParams = {
    Authentication: undefined;
    BottomTab: undefined;
    MainApp: undefined;
  };

export type MainAppStackParams = {
    History: undefined;
    Data: undefined;
    Map: undefined;
    HiveData: { id: string };
    HiveRegistration: undefined;
    QRCodes: undefined;
    HiveList: undefined;
    Profile: undefined;
    Settings: undefined;
};

export type AuthenticationStackParams = {
    Home: undefined;
    Login: undefined;
    SignUp: undefined;
    PasswordRecovery: undefined;
};

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
    imageUrl: string; // tipar de um jeito que obrigue a URL a ser uma URL válida
}

