import App from 'common/app';
import ScreenView from './views/screen';
import {Broker} from 'vendor/libs';

var screenView;

/*
 options = {
    type: string ('snap', 'normal', 'no-header')
    title: string,
    leftButtonOpts: {
        class: string,
        callback: function
    },
    rightButtonOpts: {
        class: string,
        callback: function
    },
    contentView: view
 };
 */

function start(options) {
    screenView = new ScreenView(options);
    App.showView(screenView);
    screenView.getRegion('content').show(options.contentView);
}

//
// API
//

Broker.channel.on({
    'screen:start': start
});

export default {
    start: start
};