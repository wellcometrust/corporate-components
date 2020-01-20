import React, { useState } from 'react';

import SearchForm from 'SearchForm';

type SolrConnectorProps = {
  solrUrl: string;
};

export const SolrConnector = ({ solrUrl }: SolrConnectorProps) => {
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  /**
   * Handles errors from the form request
   *
   * @param { newError } - object | string: an error object/string
   */
  const handleError = (newError: {} | string) => {
    setError(newError);
    setBusy(false);
    setResults(null);
  };

  /**
   * Handles a successful form request
   *
   * The Solr server returns an object named { response }
   * so we destructure it.
   *
   * @param { newResponse } - object
   */
  const handleSuccess = ({ response }: { response: {} }) => {
    setError(null);
    setBusy(false);
    setResults(response);
  };

  /**
   * Handles <form> submit event.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
   *
   * @param { event } - Form Event
   * @return { void }
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Set to busy, and clear the errors
    setBusy(true);
    setError(null);

    const request = {
      method: 'POST',
      body: JSON.stringify({
        query,
        // set any additional parameters for the query, e.g. limit, offset, sort
        // https://github.com/flaxsearch/react-solr-connector/blob/master/src/react-solr-connector.js#L37
        offset: 0,
        limit: 1,
        params: {
          wt: 'json'
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    try {
      const response = await fetch(solrUrl, request);
      const data = await response.json();

      handleSuccess(data);
    } catch (e) {
      handleError(e);
    }
  };

  /**
   * Handles <input> onChange event.
   * https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
   *
   * - updates 'query' (state) value of component
   *
   * @param { event } - Input Event
   */
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    // Explicitly tell TypeScript the HTMLElement type
    // https://stackoverflow.com/a/42066698/5446361
    const target = event.target as HTMLInputElement;
    setQuery(target.value);
  };

  return (
    <>
      {/* todo: refactor to make this reusable (e.g. HOC, ContextProvider) */}
      <SearchForm
        inputId="search"
        handleSubmit={event => handleSubmit(event)}
        handleInputChange={event => handleInputChange(event)}
        searchQuery={query}
      />
      <div>
        {busy && <div>I&apos;m busy</div>}
        {results && <code>{results && JSON.stringify(results)}</code>}
        {error && <div>{error.toString()}</div>}
      </div>
    </>
  );
};

export default SolrConnector;
