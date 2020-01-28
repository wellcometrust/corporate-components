export const fetchNewsletterResponse = async (
  email: string,
  endpointUrl: string
) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email
    })
  };

  const response = await fetch(endpointUrl, requestOptions);
  const data = await response.json();

  return data;
};

export default fetchNewsletterResponse;
