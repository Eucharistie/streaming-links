const { PORT, NODE_ENV } = process.env;

export const inDevMode = NODE_ENV === 'development'
export const port = PORT