/**
@module ember
*/

import { compileList } from "@glimmer/runtime";
  /**
    The `let` helper receives one or more positional arguments and yields
    them out as block params.

    This allows the developer to introduce shorter names for certain computations
    in the template.

    This is especially useful if you are passing properties to a component
    that receives a lot of options and you want to clean up the invocation.

    For the following example, the template receives a `post` object with
    `content` and `title` properties.

    We are going to call the `my-post` component, passing a title which is
    the title of the post suffixed with the name of the blog, the content
    of the post, and a series of options defined in-place.

    ```handlebars
    {{#let
        (concat post.title ' | The Ember.js Blog')
        post.content
        (hash
          theme="high-contrast"
          enableComments=true
        )
        as |title content options|
    }}
      {{my-post title=title content=content options=options}}
    {{/let}}
  ```

  @method let
  @for Ember.Templates.helpers
  @public
*/
export function blockLetMacro(params: any, _hash: any, _default: any, _inverse: any, builder: any) {
  compileList(params, builder);
  builder.invokeStatic(_default, params.length);
}
