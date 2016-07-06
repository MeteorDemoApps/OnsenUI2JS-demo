import {Template} from 'meteor/templating';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// import ons from 'onsenui/js/onsenui.js';
import ons from 'onsenui';

import './main.html';

Template.buttons.onRendered(() => {
    console.log("body loaded");
    ons.platform.select("android");
    ons.ready(() => {
        console.log("onsenUI loaded");
    });
});


Template.buttons.events({
    'click #android-view'(event) {
        console.log("android-view clicked");
        console.log(ons.platform.isAndroid());
        ons.platform.select("android");
    }
});


