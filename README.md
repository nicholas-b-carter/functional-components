# Functional Components
React component primitives inspired by Functional Programming and Algabraic Data Types

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

Either:

```js
<Either
  predicate={posts && posts.length > 0}
  just={<Posts posts={posts} />}
  none={<NoPosts />}
/>
```

Future:

Map:
It's a common pattern to map over a list and create an element from each unique item in the list. From the Maybe example above:
```js
<Maybe predicate={posts && posts.length > 0}>
  <Map items={posts}>
    <Post />
  </Map>
</Maybe>
```