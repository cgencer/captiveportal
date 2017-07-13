import React from 'react';
import {Link} from 'react-router';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';
import Card from './Card';

import '../styles/wizard.css';

// Since this component is simple and static, there's no parent container for it.
const PreSPage = () => {
  return (
    <Card leftContent={
      // left
      <div className="vcenter">
        <h5>WiFi Erişimi</h5>
        <p className="card-text">Günlük toplam 360 dakika ücretsiz WiFi kullanabilmek için SMS aracılığıyla kaydolun.</p>
      </div>
    } riteContent={
      // right
      <div>
      </div>      
    } footerContent="Powered by Turkcell" />
  );
};

export default PreSPage;
