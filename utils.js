let inDevEnvironment = true;

if (process && process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
  inDevEnvironment = false;
}

export { inDevEnvironment };