import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import { Search } from '../Components/Search';
import { Categories } from '../Components/Categories';
import Carrousel from '../Components/Carrousel';
import CarrouselItem from '../Components/CarrouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrousel>
            {myList.map((item) => <CarrouselItem key={item.id} {...item} />)}
          </Carrousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrousel>
          {trends.map((item) => <CarrouselItem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='Originales'>
        <Carrousel>
          {originals.map((item) => <CarrouselItem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
