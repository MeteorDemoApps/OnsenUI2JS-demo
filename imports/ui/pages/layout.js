import './index.js';
import './buttons.js';
import './icons.js';

import './layout.html';

import 'onsenui/css/font_awesome/css/font-awesome.min.css';
import 'onsenui/css/ionicons/css/ionicons.min.css';
import 'onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// import ons from 'onsenui/js/onsenui.js';
import ons from 'onsenui';
// Thanks https://github.com/frankdiox to help for fix this issue: https://github.com/MeteorDemoApps/OnsenUI2JS-demo/issues/1
ons.platform.select("android");

import { Template } from 'meteor/templating';

Template.index.events({
    'click #buttons'() {
        let options = {
            animation: 'slide' // What animation to use
        };
        let myNavigator = document.querySelector("#myNavigator");
        myNavigator.pushPage("buttons", options);
        // FlowRouter.go('buttons');
    },
    'click #icons'() {
        let options = {
            animation: 'slide' // What animation to use
        };
        let myNavigator = document.querySelector("#myNavigator");
        myNavigator.pushPage("icons", options);
        // FlowRouter.go('icons');
    }
});