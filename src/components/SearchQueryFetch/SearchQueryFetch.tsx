import React from 'react';
// @ts-ignore
import SolrConnector from 'react-solr-connector';
import SearchQueryFetchConnector from './SearchQueryFetchConnector';

export class SearchQueryFetch extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      searchParams: null
    }
  }

  // @ts-ignore
  doSearch(searchParams) {
    this.setState({searchParams});
  }

  render() {
    return(
      // @todo fix typescript error. #5943 
      // @ts-ignore
      <SolrConnector searchParams={this.state.searchParams}>
        <SearchQueryFetchConnector doSearch={this.doSearch.bind(this)}/>
      </SolrConnector>
    );
  }
}
 
export default SearchQueryFetch;
