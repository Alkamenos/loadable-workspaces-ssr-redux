import React from 'react';
import { useDispatch } from 'react-redux';
import { loadTopPage } from '../../../actions/pages';



export const NotFound: React.FC = () => {
  const dispatch = useDispatch();

  // TODO: fix
  dispatch(loadTopPage());

  return (
    <>
      <div>[404] Not Found</div>
    </>
  );
};
