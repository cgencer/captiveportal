import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';
import Card from './Card';

import '../styles/wizard.css';

// Since this component is simple and static, there's no parent container for it.
const LoginSPage = () => {
  return (
    <Card leftContent="test area" riteContent="this is the SHORT LOGIN page" footerContent="Powered by Turkcell" />
  );
};

export default LoginSPage;
