let inProdEnvironment = false;

if (process && process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
  inProdEnvironment = true;
}

export { inProdEnvironment };