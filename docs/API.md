## Components
Maybe:
Inspired by the Maybe data structure, the Maybe component does away with messy React expressions.

```js
<section>
  {isLoading && <LoadingIndicator />}
  {posts && posts.length > 0 &&
    posts.map((post) => <Post post={post} />)
  }
</section>
```

```js
import { Section } from 'openUI';
import { Maybe } from 'functional-components';
<Section>
  <Maybe predicate={isLoading}>
    <LoadingIndicator />
  </Maybe>
  <Maybe predicate={posts && posts.length > 0}>
    {posts.map((post) =>
      <Post post={post} /> // Take a look at the Map component
    )}
  </Maybe>
</Section>
```
