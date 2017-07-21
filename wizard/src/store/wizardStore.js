let Store = require('react-store');
import axios from 'axios';

// To prevent parallel ajax requests to the same URL
let _pendingRequests = {};

let wizardStore = Store.extend({
  getJson: function() {
    if (this.jsonData) {
      // we already have the data
      return this.jsonData;
    }
    this.httpGet({
        url: '/spit/out?rand='+Math.floor(Date.now() / 1000),
      }, function(result) {
        this.jsonData = result.body;
      }.bind(this)
    );
  },

  httpGet: function(options, callback) {
    if (!options.url || _pendingRequests[options.url]) {
      return;
    }

    _pendingRequests[options.url] = true;
    let promise = axios.create({
      method: 'POST',
      baseURL: 'http://localhost:3000/api/',
      cache: false
    }).then(res => {
      if(
        res.statusText === "OK"
      ) {
        this.jsonData = res.data.data;
      } 
    }).catch(function(error) {
      console.log(error);
    });
/*
    var promise = $.ajax(options)
      .done(function(data) {
        callback(data);
      })
      .fail(function() {
        callback({
          error: 'Error occured'
        });
      })
      .always(function() {
        delete _pendingRequests[options.url];
      });
*/
    this.updateRootComponent(promise);
  },
});

module.exports = wizardStore;
