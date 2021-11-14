import React from 'react';
import { useDispatch } from 'react-redux';
import {Header} from '../../../components/Header';
import { loadTopPage } from '../../../actions/pages';


export const Top: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(loadTopPage());

  return (
    <>
      <Header open={true}/>
      <section>
dsfsfsdf
      </section>
    </>
  );
};
