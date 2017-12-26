/* eslint react/prop-types: 0 */

import React from 'react';
import {
  InstantSearch,
  HierarchicalMenu,
  RefinementList,
  SortBy,
  Stats,
  ClearRefinements,
  RatingMenu,
  RangeInput,
  Highlight,
  Configure,
} from 'react-instantsearch/dom';
import {
  connectSearchBox,
  connectRefinementList,
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch/connectors';
import 'react-instantsearch-theme-algolia/style.scss';

export default function App() {
  return (
    <InstantSearch
      appId="latency"
      apiKey="6be0576ff61c053d5f9a3225e2a90f76"
      indexName="ikea"
    >
      <Configure hitsPerPage={16} />
      <Header />
      <div className="content-wrapper">
        <Facets />
        <CustomResults />
      </div>
    </InstantSearch>
  );
}

const Header = () => (
  <header className="content-wrapper">
    <a
      href="https://community.algolia.com/react-instantsearch/"
      className="is-logo"
    >
      <img
        src="https://res.cloudinary.com/hilnmyskv/image/upload/w_100,h_100,dpr_2.0//v1461180087/logo-instantsearchjs-avatar.png"
        width={40}
      />
    </a>
    <a href="./" className="logo">
      aeki
    </a>
    <ConnectedSearchBox />
  </header>
);

const Facets = () => (
  <aside>
    <ClearRefinements
      translations={{
        reset: 'Clear all filters',
      }}
    />

    <section className="facet-wrapper">
      <div className="facet-category-title facet">Show results for</div>
      <HierarchicalMenu
        key="categories"
        attributes={['category', 'sub_category', 'sub_sub_category']}
      />
    </section>

    <section className="facet-wrapper">
      <div className="facet-category-title facet">RefineBy</div>
      <RefinementList
        attributeName="type"
        operator="or"
        limitMin={5}
        withSearchBox
        renderHeader={() => 'Type'}
      />

      <RefinementList
        attributeName="materials"
        operator="or"
        limitMin={5}
        withSearchBox
        renderHeader={() => 'Materials'}
      />

      <ConnectedColorRefinementList attributeName="colors" operator="or" />

      <RatingMenu
        attributeName="rating"
        max={5}
        renderHeader={() => 'Rating'}
      />

      <RangeInput
        key="price_input"
        attributeName="price"
        renderHeader={() => 'Price'}
      />
    </section>

    <div className="thank-you">
      Data courtesy of <a href="http://www.ikea.com/">ikea.com</a>
    </div>
  </aside>
);

const CustomSearchBox = ({ currentRefinement, refine }) => (
  <div className="input-group">
    <input
      type="text"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      autoComplete="off"
      className="form-control"
      id="q"
    />
    <span className="input-group-btn">
      <button className="btn btn-default">
        <i className="fa fa-search" />
      </button>
    </span>
  </div>
);

const ColorItem = ({ item, createURL, refine }) => {
  const active = item.isRefined ? 'checked' : '';
  return (
    <a
      className={`${active} facet-color`}
      href={createURL(item.value)}
      onClick={e => {
        e.preventDefault();
        refine(item.value);
      }}
      data-facet-value={item.label}
    />
  );
};

const CustomColorRefinementList = ({ items, refine, createURL }) =>
  items.length > 0 ? (
    <div>
      <div className={'ais-header'}>Colors</div>
      {items.map(item => (
        <ColorItem
          key={item.label}
          item={item}
          refine={refine}
          createURL={createURL}
        />
      ))}
    </div>
  ) : null;

function CustomHits({ hits, refine, hasMore }) {
  const loadMoreButton = hasMore ? (
    <button onClick={refine} className="btn btn-primary btn-block">
      Load more
    </button>
  ) : (
    <button disabled className="btn btn-primary btn-block">
      Load more
    </button>
  );
  return (
    <main id="hits">
      {hits.map(hit => <Hit item={hit} key={hit.objectID} />)}
      {loadMoreButton}
    </main>
  );
}

const Hit = ({ item }) => {
  const icons = [];
  for (let i = 0; i < 5; i++) {
    const suffix = i >= item.rating ? '_empty' : '';
    icons.push(
      <label key={i} className={`ais-RatingMenu__ratingIcon${suffix}`} />
    );
  }
  return (
    <article className="hit">
      <div className="product-picture-wrapper">
        <div className="product-picture">
          <img
            src={`https://res.cloudinary.com/hilnmyskv/image/fetch/h_300,q_100,f_auto/${
              item.image
            }`}
          />
        </div>
      </div>
      <div className="product-desc-wrapper">
        <div className="product-name">
          <Highlight attributeName="name" hit={item} />
        </div>
        <div className="product-type">
          <Highlight attributeName="type" hit={item} />
        </div>
        <div className="ais-RatingMenu__ratingLink">
          {icons}
          <div className="product-price">${item.price}</div>
        </div>
      </div>
    </article>
  );
};

const CustomResults = connectStateResults(({ searchState, searchResult }) => {
  if (searchResult && searchResult.nbHits === 0) {
    return (
      <div className="results-wrapper">
        <div className="no-results">
          No results found matching{' '}
          <span className="query">{searchState.query}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="results-wrapper">
        <section id="results-topbar">
          <div className="sort-by">
            <label>Sort by</label>
            <SortBy
              items={[
                { value: 'ikea', label: 'Featured' },
                { value: 'ikea_price_asc', label: 'Price asc.' },
                { value: 'ikea_price_desc', label: 'Price desc.' },
              ]}
              defaultRefinement="ikea"
            />
          </div>
          <Stats />
        </section>
        <ConnectedHits />
      </div>
    );
  }
});

const ConnectedSearchBox = connectSearchBox(CustomSearchBox);
const ConnectedColorRefinementList = connectRefinementList(
  CustomColorRefinementList
);
const ConnectedHits = connectInfiniteHits(CustomHits);
