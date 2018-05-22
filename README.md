# Google Consent SDK in Titanium

Use the Google Consent SDK in Axway Titanium with Hyperloop!

## API's

### `requestConsentInfoUpdateForPublisherIdentifiers(args)`

Requests consent information update for the provided publisher identifiers. All publisher
identifiers used in the application should be specified in this call. Consent status is reset to
unknown when the ad provider list changes.

### `showConsentForm(args)`

Shows a consent modal form. Arguments:

- `shouldOfferPersonalizedAds` (Boolean)
Indicates whether the consent form should show a personalized ad option. Defaults to `true`.
- `shouldOfferNonPersonalizedAds` (Boolean)
Indicates whether the consent form should show a non-personalized ad option. Defaults to `true`.
- `shouldOfferAdFree` (Boolean)
Indicates whether the consent form should show an ad-free app option. Defaults to `false`.
- `callback` (Function)
Callback to be triggered once the form completes.

### `getAdProviders(callback)`

Array of ad providers.

### `reset()`

Resets consent information to default state and clears ad providers.

## Example
For a full example, check the demo in `Resources/app.js`.

## Author
Hans Knöchel ([@hansemannnn](https://twitter.com/hansemannnn) / [Web](http://hans-knoechel.de))

## License
Apache 2.0

## Contributing
Code contributions are greatly appreciated, please submit a new [Pull-Request](https://github.com/hansemannn/titanium-admob-consent-sdk/pull/new/master)!
