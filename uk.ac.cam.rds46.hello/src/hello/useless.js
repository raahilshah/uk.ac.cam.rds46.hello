function uselessWebButton( button, popup ) {

	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 6;

	// Useless websites: url | uses flash | score (out of 10)
	// Commented out websites which have crashed.
	var sitesList = [
	['http://heeeeeeeey.com/',                                    false, 7],
	['http://eelslap.com/',                                       false, 5],
	['http://www.staggeringbeauty.com/',                          false, 7],
	['http://www.omfgdogs.com/',                                  false, 7],
	['http://burymewithmymoney.com/',                             true,  7],
	['http://www.fallingfalling.com/',                            true,  3],
	['http://www.a-blue-box.com/',                                false, 3],
	['http://ducksarethebest.com/',                               false, 7],
	['http://www.trypap.com/',                                    false, 4],
	['http://www.republiquedesmangues.fr/',                       false, 7],
	['http://www.movenowthinklater.com/',                         false, 6],
		// ['http://www.hristu.net/',                                    true,  6], Down :(
			['http://www.partridgegetslucky.com/',                        false, 6],
		// ['http://hectorsalamanca.com/',                               true,  5], Big fat donate button
		['http://www.rrrgggbbb.com/',                                 true,  7],
		['http://beesbeesbees.com/',                                  false, 3],
		['http://www.sanger.dk/',                                     true,  4],
		// ['http://www.idiotic.com/',			                          true,  7], Down :(
			['http://breakglasstosoundalarm.com/',                        false, 3],
			['http://www.koalastothemax.com/',                            false, 7],
			['http://www.everydayim.com/',                                false, 7],
			['http://www.leduchamp.com/',                                 true,  7],
			['http://www.geodu.de/',                                      false, 4],
			['http://grandpanoclothes.com/',                              false, 6],
			['http://www.haneke.net/',                                    false, 7],
		// ['http://instantostrich.com/',                                true,  7], Lame banner
		['http://r33b.net/',                                          true,  6],
		['http://randomcolour.com/',                                  false, 6],
		['http://cat-bounce.com/',                                    true,  6],
		['http://www.sadforjapan.com/',                               true,  5],
		['http://isitchristmas.com/',                                 false, 5],
		// ['http://infinitefrogs.com/',                                 false, 5],
		['http://www.taghua.com/',                                    true,  5],
		['http://chrismckenzie.com/',                                  true, 6],
		['http://hasthelargehadroncolliderdestroyedtheworldyet.com/', false, 5],
		['http://ninjaflex.com/',                                     false, 4],
		['http://iloveyoulikeafatladylovesapples.com/',               true,  6],
		['http://ihasabucket.com/',                                   false, 4],
		// ['http://www.feedthehead.net/',                               true,  5], Iphone banner
		['http://corndogoncorndog.com/',                              false, 4],
		// ['http://www.oppositeofpoop.com/',                            false, 4], Down :(
			['http://giantbatfarts.com/',                                 true,  4],
			['http://www.ringingtelephone.com/',                          true,  6],
		// ['http://chickenonaraft.com/',                                false, 4], Went down.
		['http://www.pointerpointer.com/',                            false, 4],
		['http://www.pleasedonate.biz/',                              false, 5],
		['http://imaninja.com/',                                      false, 3],
		['http://willthefuturebeaweso.me/',                           false, 3],
		['http://salmonofcapistrano.com/',                            false, 3],
		['http://www.ismycomputeron.com/',                            false, 5],
		['http://www.ooooiiii.com/',                                  true,  3],
		['http://www.wwwdotcom.com/',                                 false, 3],
		['http://www.nullingthevoid.com/',                            true,  6],
		['http://www.muchbetterthanthis.com/',                        true,  5],
		['http://www.ouaismaisbon.ch/',                               true,  3],
		// ['http://cutmeoffmidfunk.com/',                               false, 4], Down now
		['http://iamawesome.com/',                                    false, 3],
		['http://www.pleaselike.com/',                                false, 7],
		['http://crouton.net/',                                       false, 3],
		// ['http://www.clicktoremove.com/',                             false, 3], Lame external link
		// ['http://dastardlydigitofdestiny.com/',                       false, 3], Sloooow
		['http://www.electricboogiewoogie.com/',                      true,  6],
		['http://www.nelson-haha.com/',                               false, 6],
		['http://www.wutdafuk.com/',                                  false, 6],
		['http://unicodesnowmanforyou.com/',                          false, 3],
		['http://tencents.info/',                                     false, 3],
		['http://intotime.com/',                                      true,  4],
		['http://haveahairymovember.com',                             false, 4],
		['http://leekspin.com/',                                      true,  3],
		['http://minecraftstal.com/',                                 false, 4],
		['http://www.riddlydiddly.com/',                              false, 5],
		['http://www.patience-is-a-virtue.org/',                      false, 2],
		['http://whitetrash.nl/',                                     false, 2],
		['http://www.theendofreason.com/',                            false, 2],
		['http://zombo.com',                                          true,  1],
		['http://secretsfornicotine.com/',                            true,  1]
		];

		var sites = null;

	// Prepares and binds the button
	var init = function() {

		button.onclick = onButtonClick;

		// If the browser doesn't support flash. Remove flash websites from the list.
		sites = sitesList.slice(0);

		// If the Browser supports html5 storage
		if ( supportsHtmlStorage() === true ) {

			// Check for past data
			if ( localStorage[ 'sites' ] !== undefined ) {
				loadSites();
			}
		}
	};

	// Removes flash websites from the list
	var removeFlashWebsites = function() {
		
		var i, site;
		var newList = [];

		for ( i = 0; i < sitesList.length; i++ ) {
			
			site = sitesList[i];
			if ( site[1] === false ) {
				newList.push( site )
			}
		}

		sitesList = newList;
	};

	// Selects and removes the next website from the list
	var selectWebsite = function() {

		var site, range, index;
		
		range = randomRange > sites.length ? sites.length : randomRange;
		index = Math.floor( Math.random() * range );

		site = sites[index];
		sites.splice( index, 1 );

		return site;
	};

	// Opens the given url in a new window
	var openSite = function( url ) {
		window.open( url, '_self' );
	};

	var onButtonClick = function() {

		var url = selectWebsite()[0];
    	openSite(url);
		
    	// User has visited ALL the sites... refresh the list.
    	if ( sites.length == 0 ) {

    		// If the browser doesn't support flash. Remove flash websites from the list.
    		sites = sitesList.slice(0);
    	}

    	storeSites();
    };

	// Save the current list of sites for the new user.
	var storeSites = function() {
		localStorage[ 'sites' ] = JSON.stringify( sites );
	}

	// Load the list of sites, so new users see new sites.
	var loadSites = function() {
		sites = JSON.parse( localStorage['sites'] );
	};

	function supportsHtmlStorage() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	}

	init();
}