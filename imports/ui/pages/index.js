// import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
// import { Lists } from '../../api/lists/lists.js';

import './index.html';

Template.index.events({
    'click #buttons'() {
        console.log("buttons clicked");
        FlowRouter.go('buttons');
    }
});