import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';

import '../styles/wizard.css';

// Since this component is simple and static, there's no parent container for it.
const WizardPage = () => {
  return (
    <Card leftContent="test area" riteContent="" footerContent="" />
  );
};

export default WizardPage;
