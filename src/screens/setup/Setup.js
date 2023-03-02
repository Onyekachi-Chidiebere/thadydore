import React, { useState } from 'react';
import Address from './Address';
import Gender from './Gender';
import Name from './Name';
import NextOfKin from './NextOfKin';

const Setup = ({ navigation }) => {
  const [stage, setStage] = useState(0)
  if(stage==0)
  return <Name setStage={setStage}/>;
  if(stage==1)
  return <Address setStage={setStage}/>;
  if(stage==2)
  return <Gender setStage={setStage}/>;
  if(stage==3)
  return <NextOfKin setStage={setStage} navigation={navigation}/>;
};

export default Setup;
