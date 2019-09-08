export const PARAMETERS = ['pm25', 'pm10', 'so2', 'no2', 'o3', 'co'];
export const COUNTRIES = ['Poland', 'Germany', 'Spain', 'France'];
export const COUNTRIES_CODES = ['PL', 'DE', 'ES', 'FR'];
export const COUNTRIES_CODE_MAP = new Map(COUNTRIES.map((country, index) => [country, COUNTRIES_CODES[index]]));

export const ERROR = 'error';
export const OPENAQ_FETCH_ERR_TITLE = 'openAQ service error';
export const OPENAQ_FETCH_ERR_MESSAGE = 'Could not fetch data from openAQ service';
export const WIKIPEDIA_FETCH_ERR_TITLE = 'wikipedia service error';
export const WIKIPEDIA_FETCH_ERR_MESSAGE = 'Could not fetch city details from wikipedia service';

export const DESCRIPTION_TITLE = 'Ranking';
export const DESCRIPTION_1ST_ROW = 'Most polluted cities';
export const HEADER_TEXT = 'Polluted Cities';
export const FOOTER_TEXT = 'Respect the greenery';