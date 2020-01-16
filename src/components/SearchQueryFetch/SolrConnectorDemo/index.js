import React from 'react';

class SolrConnectorDemo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      solrSearchUrl: "http://drupalvm.corporate:8983/solr/d7/select",
      query: "memory",
      filter: "",
      fetchFields: ""
    }
  }

  onSubmit(event) {
  // onLoad(event) {
    event.preventDefault();
    let searchParams = {
      solrSearchUrl: this.state.solrSearchUrl,
      query: this.state.query,
      filter: [this.state.filter],
      fetchFields: this.state.fetchFields.split(" "),
      offset: 0,
      limit: 10,
      facet: {
        item_bundle: {
          type: "terms",
          field: "ss_item_bundle",
          limit: 20
        },
        topics: {
          type: "terms",
          field: "ss_node$type",
          limit: 20
        },
      },
      highlightParams: {
        "hl": "true",
        "hl.fl": "content",
        "hl.snippets": 1,
        "hl.fragsize": 500
      }
    };
    this.props.doSearch(searchParams);
  }

  render() {
    return <div>
      <form className="inputForm" onSubmit={(e) =>  this.onSubmit(e)}>
      {/* <form className="inputForm" onSubmit={this.onSubmit.bind(this)}> */}
        <h4>searchParams: TOGO</h4>
        <p>
          solrSearchUrl: {" "}
          <input type="text" value={this.state.solrSearchUrl}
                 onChange={e => {this.setState({ solrSearchUrl: e.target.value })}} />
        </p>
        <p>
          query: {" "}
          <input type="text" value={this.state.query}
                 onChange={e => {this.setState({ query: e.target.value })}} />
          {" "}
          filter: {" "}
          <input type="text" value={this.state.filter}
                 onChange={e => {this.setState({ filter: e.target.value })}} />
        </p>
        <p>
          fetchFields: {" "}
          <input type="text" value={this.state.fetchFields}
                 onChange={e => {this.setState({ fetchFields: e.target.value })}} />
        </p>
        <p>
          <button type="submit">Search</button>
        </p>
      </form>
      <div className="jsonOutput">
        <pre>
          this.props.solrConnector: {"\n\n"}
          { JSON.stringify(this.props.solrConnector, null, 2) }
        </pre>
      </div>
    </div>;
  }
}

export default SolrConnectorDemo;
