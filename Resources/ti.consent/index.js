var PACConsentInformation = require('PersonalizedAdConsent/PACConsentInformation');
var PACConsentForm = require('PersonalizedAdConsent/PACConsentForm');
var NSURL = require('Foundation/NSURL');
var NSMutableArray = require('Foundation/NSMutableArray');

exports.requestConsentInfoUpdateForPublisherIdentifiers = function (args) {
    var publisherIdentifiers = args.publisherIdentifiers;
    var callback = args.callback;

    PACConsentInformation.sharedInstance.requestConsentInfoUpdateForPublisherIdentifiersCompletionHandler(publisherIdentifiers, function (error) {
        callback({ success: error === null });
    });
};

exports.showConsentForm = function (args) {
    var privacyURL = NSURL.URLWithString(args.privacyURL);
    var callback = args.callback;
    
    var form = PACConsentForm.alloc().initWithApplicationPrivacyPolicyURL(privacyURL);

    form.shouldOfferPersonalizedAds = args.shouldOfferPersonalizedAds;
    form.shouldOfferNonPersonalizedAds = args.shouldOfferNonPersonalizedAds;
    form.shouldOfferAdFree = args.shouldOfferAdFree;
    
    form.loadWithCompletionHandler(function (error) {
      if (error !== null) {
        callback({ error: error.localizedDescription });
        return;
      }

      Ti.API.info(TiApp.app().controller.topPresentedController);
  
      form.presentFromViewControllerDismissCompletion(TiApp.app().controller.topPresentedController, function (error, userPrefersAdFree) {
          callback({ userPrefersAdFree: userPrefersAdFree, error: error !== null ? error.localizedDescription : null });
      });
    });
};

exports.getAdProviders = function (callback) {
    var adProviders = PACConsentInformation.sharedInstance.adProviders;
    var result = NSMutableArray.arrayWithCapacity(adProviders.count);
    
    for (var i = 0; i < adProviders.count; i++) {
        var adProvider = adProviders.objectAtIndex(i);
        result.addObject({
            identifier: adProvider.identifier,
            name: adProvider.name,
            privacyPolicyURL: adProvider.privacyPolicyURL
        });
    }
    
    return result;
};

exports.reset = function () {
    PACConsentInformation.sharedInstance.reset();
}