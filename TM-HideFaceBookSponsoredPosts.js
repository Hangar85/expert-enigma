// ==UserScript==
// @name         Remove FB Sponsored Posts
// @namespace    https://github.com/Hangar85/expert-enigma/blob/main/TM-HideFaceBookSponsoredPosts.js
// @description  A Tampermonkey script to remove Sponsored posts from your newsfeed on Facebook.
// @version      1.21
// @author       Cricket
// @include      https://www.facebook.com/?ref=tn_tnmn
// @include      https://www.facebook.com
// @require      https://github.com/Hangar85/expert-enigma/blob/main/Jquery-12092021.min.js
// ==/UserScript==

function CheckForADPosts()
{
    RemovePost( "span:contains('Suggested Post')" );
    RemovePost( "a:contains('Sponsored')" );

    setTimeout(CheckForADPosts, 100);
}

function RemovePost(subquery)
{
    var query = "div[id*='substream_']";
    var len = $(query).find(subquery).length;

    for (var i=0; i<len; i++)
    {
        var elem = $(query).find(subquery).get(i);
        if (!elem)
            continue;

        while(elem)
        {
            if (typeof $(elem).attr('id') !== typeof undefined && !$(elem).attr('id').includes('substream_'))
                break;

            elem = $(elem).parent().get(0);
        }

        if (elem)
            $(elem).remove();
    }
}

setTimeout(CheckForADPosts, 500);
