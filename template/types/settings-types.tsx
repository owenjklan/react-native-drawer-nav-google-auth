export type SettingsFieldChangeCallback = (value: any) => void;

export type SettingsEntryFieldProps = {
    name: string;
    label: string;
    onChange: SettingsFieldChangeCallback;
    defaultText?: string;
    hintText?: string;
};

export type SettingsEntryFlagProps = {
    name: string;
    label: string;
    onChange: SettingsFieldChangeCallback;
    defaultValue?: boolean;
    hintText?: string;
};
