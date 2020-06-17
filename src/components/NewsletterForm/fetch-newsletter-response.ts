export const fetchNewsletterResponse = async (
  endpointUrl: string,
  email: string,
  type: string,
  researchOption?: number
) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email,
      type,
      researchOption
    })
  };

  console.log(requestOptions);
  // {
  //   email: testt@test.com
  //   type: research
  //   researchOptions: 1
  // }

  try {
    const response = await fetch(endpointUrl, requestOptions);

    // Throw an error if the response is a server error
    if (response.status >= 400 && response.status < 600) {
      throw new Error(
        'Error from fetchNewsletterResponse: Bad response from API'
      );
    }

    // ...else await the JSON of the response and return that
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error from fetchNewsletterResponse: ${error}`);
  }
};

export default fetchNewsletterResponse;
