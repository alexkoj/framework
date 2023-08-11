<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;
use Illuminate\Http\Request;

return [
    (new Extend\Frontend('forum'))
        ->route(
            '/embed/{id:\d+(?:-[^/]*)?}[/{near:[^/]*}]',
            'embed.discussion',
            function (Document $document, Request $request) {
                // Add the discussion content to the document so that the
                // payload will be included on the page and the JS app will be
                // able to render the discussion immediately.
                resolve(Flarum\Forum\Content\Discussion::class)($document, $request);

                resolve(Flarum\Frontend\Content\Assets::class)->forFrontend('embed')($document, $request);
            }
        ),

    (new Extend\Frontend('embed'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
];
