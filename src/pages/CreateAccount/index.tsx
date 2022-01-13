import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateAccount: React.FC = () => {
  return (
    <>
      <Navbar title="Create Account" />
      <div className="createAccount">
        <p className="createAccount-description">
          This is how you can make a link <Link to={pathLinks.createAccount}>by using the Link tag from react router</Link>
        </p>
      </div>
    </>
  );
};

export default CreateAccount;
