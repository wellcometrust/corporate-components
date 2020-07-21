function getUrlParameters(url: string) {
  const arr = url.split('&');

  return arr.reduce((acc, item) => {
    const pair = item.split('=');
    return { ...acc, [pair[0]]: pair[1] };
  }, {}) as any;
}

export default getUrlParameters;
