// TODO refactor as functional component, fix type errors
// @ts-nocheck
import React from 'react';
import SearchForm from 'SearchForm';

class SearchQueryFetchConnector extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      // solrSearchUrl: 'http://drupalvm.corporate:8983/solr/d7/select',
      query: '',
      filter: '',
      fetchFields: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const searchParams = {
      solrSearchUrl: 'http://drupalvm.corporate:8983/solr/d7/select',
      query: this.state.query,
      filter: [this.state.filter],
      fetchFields: this.state.fetchFields.split(' '),
      offset: 0,
      limit: 10,
      facet: {
        item_bundle: {
          type: 'terms',
          field: 'ss_item_bundle',
          limit: 20
        },
        topics: {
          type: 'terms',
          field: 'ss_node$type',
          limit: 20
        }
      },
      highlightParams: {
        hl: 'true',
        'hl.fl': 'content',
        'hl.snippets': 1,
        'hl.fragsize': 500
      }
    };
    this.props.doSearch(searchParams);
  }

  render() {
    return (
      <div>
        <SearchForm
          className="inputForm"
          handleSubmit={e => this.onSubmit(e)}
          // @todo fix typescript error. #5943
          handleInputChange={e =>
            this.setState({
              query: e.target.value
            })
          }
          // @todo fix typescript error. #5943
          searchQuery={this.state.query}
        />
        <div className="jsonOutput">
          <pre>
            this.props.solrConnector: {'\n\n'}
            {JSON.stringify(this.props.solrConnector, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}
export default SearchQueryFetchConnector;
