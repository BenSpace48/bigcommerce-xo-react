/* eslint-disable react/no-unescaped-entities */
import { withSearchProps } from "../../WithSearch";
import { Configuration } from "./Configuration";

type ContainerProps = { config: Configuration } & withSearchProps;

const ConfigurableContainer = (props: ContainerProps) => {
  const SortOrder = props.config.componentMap.sort;
  const ItemGrid = props.config.componentMap.grid;
  const Pagination = props.config.componentMap.pagination;
  const Facets = props.config.componentMap.facets;
  const Summary = props.config.componentMap.summary;

  return (
    <div className="xo__container">
      <Summary {...props} />
      <SortOrder
        active={props.activeSortOrder}
        available={props.availableSortOrders}
        setActive={props.setActiveSortOrder}
      />
      <Facets
        active={props.selectedFacets}
        available={props.facets}
        setActive={props.setSelectedFacets}
        facetComponentResolver={props.config.facetResolver}
      />
      <ItemGrid
        items={props.items}
        componentMap={{
          contentCard: props.config.componentMap.contentCard,
          productCard: props.config.componentMap.productCard,
        }}
      />
      <Pagination
        current={props.currentPage}
        total={props.totalPages}
        setCurrent={props.setCurrentPage}
      />
    </div>
  );
};

export default ConfigurableContainer;
