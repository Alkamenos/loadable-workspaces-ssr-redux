import * as React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

type Props = {};

const MainPage: React.FC<Props> = ({}: Props) => {
  const location = useLocation();



  return (
    <div>
      <p>123</p>
      <Link to="/about">123sdfsdf</Link>
    </div>
  );
};

export default React.memo(MainPage);
