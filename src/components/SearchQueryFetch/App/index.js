import React from 'react';
// @ts-ignore
import SolrConnector from 'react-solr-connector';
import SolrConnectorDemo from '../SolrConnectorDemo';

class App extends React.Component {
  // // @ts-ignore
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
      // @ts-ignore
    <SolrConnector searchParams={this.state.searchParams}>
      <SolrConnectorDemo doSearch={this.doSearch.bind(this)}/>
    </SolrConnector>
    );
  }
}

export default App;