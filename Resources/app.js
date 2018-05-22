var TiConsentSDK = require('ti.consent');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

win.addEventListener('open', function () {
    TiConsentSDK.requestConsentInfoUpdateForPublisherIdentifiers({
        publisherIdentifiers: [ 'publisher_1', 'publisher_2' ],
        callback: function (e) {
            Ti.API.info('Consent info requested successfully: ' + e.success);
        }
    });

    TiConsentSDK.getAdProviders(function (e) {
        Ti.API.info('Ad-providers');
        Ti.API.info(e);
    })
});
 
var btn = Ti.UI.createButton({
    title: 'Show Consent Form'
});

btn.addEventListener('click', function() {
    TiConsentSDK.showConsentForm({
        privacyURL: 'http://google.com',
        shouldOfferPersonalizedAds: false,
        shouldOfferNonPersonalizedAds: false,
        shouldOfferAdFree: true,
        callback: function (e) {
            if (e.error !== null) {
                Ti.API.error(e.error);
                return;
            }

            Ti.API.info(e);
        }
    });
});
 
win.add(btn);
win.open();