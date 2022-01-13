import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { createItem } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
// import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateItem: React.FC = () => {
  // const history = useHistory();
  const { apiUrl } = useContext(GlobalContext);
  const [name, setName] = useState('');

  return (
    <>
      <Navbar title="Create Item" />
      <div className="createItem">
        <p className="createItem-description">Add an item to the world’s greatest store</p>
        <TextBox inputType="text" value={name} label="name" onChange={(t) => setName(t)} />

        <Button
          text="Create Item"
          onClick={async () => {
            await createItem(apiUrl, name, 'description', 0);
            // history.push(pathLinks.home); // when we're done, go home to see the new item!
          }}
        />
      </div>
    </>
  );
};

export default CreateItem;
