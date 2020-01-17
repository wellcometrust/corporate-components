// TODO refactor as functional component, fix type errors
// @ts-nocheck
import React from 'react';
import SolrConnector from 'react-solr-connector';
import SearchQueryFetchConnector from './SearchQueryFetchConnector';

export class SearchQueryFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: null
    };
  }

  doSearch(searchParams) {
    this.setState({ searchParams });
  }

  render() {
    return (
      // @todo fix typescript error. #5943
      <SolrConnector searchParams={this.state.searchParams}>
        {/* eslint-disable-next-line */}
        <SearchQueryFetchConnector doSearch={this.doSearch.bind(this)} />
      </SolrConnector>
    );
  }
}

export default SearchQueryFetch;
