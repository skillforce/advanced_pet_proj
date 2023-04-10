type Mods = Record<string, boolean>

export function classNames(
    cls: string,
    mods:Mods = {},
    additional: Array<string|undefined> = [],
):string {
    return [
        cls,
        Object.entries(mods)
            .filter(([modKey, modValue]) => Boolean(modValue))
            .map(([modKey, modValue]) => modKey),
        ...additional.filter(Boolean),
    ].join(' ').replace(',', ' ').trim();
}
