export const PARAMETERS = ['pm25', 'pm10', 'so2', 'no2', 'o3','co', 'bc'];
export const COUNTRIES = ['Poland', 'Germany', 'Spain', 'France'];
export const COUNTRIES_CODES = ['PL', 'GE', 'ES', 'FR'];
export const COUNTRIES_CODE_MAP = new Map(COUNTRIES.map((country, index)=> [country, COUNTRIES_CODES[index]]));
export const DESCRIPTION = 'Ranking for most polluted cities';
export const HEADER_TEXT = 'Polluted Cities';
export const FOOTER_TEXT = 'Respect the greenery';