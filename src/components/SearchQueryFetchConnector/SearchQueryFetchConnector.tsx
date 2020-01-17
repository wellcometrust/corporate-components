import React from 'react';
// @ts-ignore
import SolrConnector from 'react-solr-connector';
import SolrConnectorDemo from './SolrQueryFetchConnector';

class SolrQueryFetch extends React.Component {
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
        <SolrConnectorDemo doSearch={this.doSearch.bind(this)}/>
      </SolrConnector>
    );
  }
}

export const SearchQueryFetch = () => {
  return <SolrQueryFetch />
};
 
export default SearchQueryFetch;
