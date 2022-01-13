import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateItem: React.FC = () => {
  return (
    <>
      <Navbar title="Create Item" />
      <div className="createItem">
        <p className="createItem-description">
          This is how you can make a link <Link to={pathLinks.createAccount}>by using the Link tag from react router</Link>
        </p>
      </div>
    </>
  );
};

export default CreateItem;
