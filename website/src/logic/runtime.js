const { PORT, NODE_ENV, SAPPER_EXPORT } = process.env;

export const inDevMode = NODE_ENV === 'development'
export const inExportMode = SAPPER_EXPORT == 'true'
export const port = PORT