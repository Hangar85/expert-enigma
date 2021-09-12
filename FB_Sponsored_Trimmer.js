document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-e5166b4d030f8e8959a9301d130be86e.css">')
document.write('<div id=\"gist38942961\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-removefbsponsoredposts-user-js\" class=\"file my-2\">\n    \n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// ==UserScript==<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@name<\/span>         Remove FB Sponsored Posts<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@namespace<\/span>    https://gist.github.com/CricketofLocusts/6109689af6c78b5e2ee23258970eaffa.js<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@description<\/span>  A Tampermonkey script to remove Sponsored posts from your newsfeed on Facebook.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@version<\/span>      1.21<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@author<\/span>       Cricket<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@include<\/span>      https://www.facebook.com/?ref=tn_tnmn<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@include<\/span>      https://www.facebook.com<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// <span class=pl-k>@require<\/span>      http://code.jquery.com/jquery-latest.min.js<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c>// ==/UserScript==<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>function<\/span> <span class=pl-v>CheckForADPosts<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-v>RemovePost<\/span><span class=pl-kos>(<\/span> <span class=pl-s>&quot;span:contains(&#39;Suggested Post&#39;)&quot;<\/span> <span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-v>RemovePost<\/span><span class=pl-kos>(<\/span> <span class=pl-s>&quot;a:contains(&#39;Sponsored&#39;)&quot;<\/span> <span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-en>setTimeout<\/span><span class=pl-kos>(<\/span><span class=pl-v>CheckForADPosts<\/span><span class=pl-kos>,<\/span> <span class=pl-c1>100<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>function<\/span> <span class=pl-v>RemovePost<\/span><span class=pl-kos>(<\/span><span class=pl-s1>subquery<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC22\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>var<\/span> <span class=pl-s1>query<\/span> <span class=pl-c1>=<\/span> <span class=pl-s>&quot;div[id*=&#39;substream_&#39;]&quot;<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC23\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>var<\/span> <span class=pl-s1>len<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s1>query<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>find<\/span><span class=pl-kos>(<\/span><span class=pl-s1>subquery<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-c1>length<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>for<\/span> <span class=pl-kos>(<\/span><span class=pl-k>var<\/span> <span class=pl-s1>i<\/span><span class=pl-c1>=<\/span><span class=pl-c1>0<\/span><span class=pl-kos>;<\/span> <span class=pl-s1>i<\/span><span class=pl-c1>&lt;<\/span><span class=pl-s1>len<\/span><span class=pl-kos>;<\/span> <span class=pl-s1>i<\/span><span class=pl-c1>++<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC26\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC27\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>var<\/span> <span class=pl-s1>elem<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s1>query<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>find<\/span><span class=pl-kos>(<\/span><span class=pl-s1>subquery<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>get<\/span><span class=pl-kos>(<\/span><span class=pl-s1>i<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC28\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>if<\/span> <span class=pl-kos>(<\/span><span class=pl-c1>!<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC29\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>continue<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC30\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC31\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>while<\/span><span class=pl-kos>(<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC32\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>{<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC33\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>if<\/span> <span class=pl-kos>(<\/span><span class=pl-k>typeof<\/span> <span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>attr<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;id&#39;<\/span><span class=pl-kos>)<\/span> <span class=pl-c1>!==<\/span> <span class=pl-k>typeof<\/span> <span class=pl-c1>undefined<\/span> <span class=pl-c1>&amp;&amp;<\/span> <span class=pl-c1>!<\/span><span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>attr<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;id&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>includes<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;substream_&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC34\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-k>break<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC35\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC36\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-s1>elem<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>parent<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>get<\/span><span class=pl-kos>(<\/span><span class=pl-c1>0<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC37\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC38\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC39\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>if<\/span> <span class=pl-kos>(<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC40\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s1>elem<\/span><span class=pl-kos>)<\/span><span class=pl-kos>.<\/span><span class=pl-en>remove<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC41\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-kos>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC42\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC43\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-removefbsponsoredposts-user-js-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-removefbsponsoredposts-user-js-LC44\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-en>setTimeout<\/span><span class=pl-kos>(<\/span><span class=pl-v>CheckForADPosts<\/span><span class=pl-kos>,<\/span> <span class=pl-c1>500<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/CricketofLocusts/6109689af6c78b5e2ee23258970eaffa/raw/f985c00d755db69a5ae1db77ed4668ee8da5732e/RemoveFBSponsoredPosts.user.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/CricketofLocusts/6109689af6c78b5e2ee23258970eaffa#file-removefbsponsoredposts-user-js\">RemoveFBSponsoredPosts.user.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')