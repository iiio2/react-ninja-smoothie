import React, { Component } from 'react';
import Ingredients from './Ingredirents';
import Pagination from './common/Pagination';
import SearchBox from './common/Searchbox';

class Home extends Component {
  state = {
    pageSize: 2,
    currentPage: 1,
    searchQuery: '',
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
    });
  };

  render() {
    const { smoothies, deleteSmoothie } = this.props;
    const { pageSize, currentPage, searchQuery } = this.state;
    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />

        <Ingredients
          pageSize={pageSize}
          currentPage={currentPage}
          smoothies={smoothies}
          deleteSmoothie={deleteSmoothie}
          searchQuery={this.state.searchQuery}
        />

        <Pagination
          itemsCount={smoothies.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Home;
