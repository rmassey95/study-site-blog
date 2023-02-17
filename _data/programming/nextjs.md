---
title: "NextJS"
folder: "Programming"
excerpt: "NextJS note focusing specifically on getStaticProps and getStaticPaths"
date: "2023-02-15"
---

## Dynamic Paths

In NextJS you can implement dynamic paths by adding square brackets to a page in the pages folder.

For example, you can have a post with a certain post id that you want to display if the user goes to that url:  
`pages/post/[postid].js`

In the pages directory you add a post folder, inside the post folder you add a new JS or TS file called [postid].js/ts.

Any matches, that is anytime the user goes to /post/2, /post/4, etc.., the matched path parameter (2, 4, etc..) will be sent as a query parameter to the page. That query parameter will be an object that will look like the below as an example for /post/2:  
`{"postid": 2}`

You can also handle multiple dynamic routes in the same manner. The setup is largely the same with just an added folder:  
`pages/post/[postid]/[comment].js`

Finally, you can utilize a catch all route which catches all paths by using three dots (`...`) inside the square brackets:  
`pages/post/[...slug].js`

## getStaticPaths

`getStaticPaths` is useful if you want to statically pre-render pages that use dynamic routes and

- The data comes from a headless CMS (back-end only CMS via RESTful API)
- Data comes from a database
- Data can be publicly cached (not user-specific)
- The page must be pre-rendered (for SEO) and be very fast.

`getStaticPaths` is run on build in production, not called during runtime. `getStaticPaths` allows you to control whcih pages are generated during the build.

#### Requirements

- `getStaticPaths` must be used with `getStaticProps`
- You cannot export `getStaticPaths` from non-page file (e.g. your `components` folder)
- You can export `getStaticPaths` from a Dynamic Route that also uses `getStaticProps`
- You must export `getStaticPaths` as a standalone function, and not a property of the page component

#### Return Values

`getStaticPaths` function should return an object with the following **required** parameters:

- `paths` used to determine which paths will be pre-rendered. Looks like the following:
  ```
  paths: [
    {params: {id: "1"}},
    {params: {id: "2"}}
  ]
  ```
  the params strings are case-sensitive.
- `fallback` this can either be `false`, `true`, or `blocking`
  - With `fallback: false`, any paths not returned by `getStaticPaths` will result in a 404 page. Here, when you run `next build`, ONLY the paths returned by `getStaticPaths` will be built. If you add another page, you will then need to run `next build` again to add the new path.
  - With `fallback: true`, paths that have not been generated at build time will be served by Nextjs as a "fallback" version of the page. This means when a non-generated page is requested, the user sees a loading indicator or skeleton component. Shortly after, `getStaticProps` finishes and the page will be rendered. Now every other request to that same page will be statically pre-rendered.
  - With `fallback: blocking`, new paths not returned by `getStaticPaths` will wait for HTML to be generated and then be cached for future requests so it only happens once per path.

In `fallback` pages the pages props will be empty.

## Pre-rendering

Pre-rendering is useful for SEO and improves the performance of the site. Pre-rendering means NextJS loads the HTML for each page in advance of the user visiting instead of rendering client-side using JS. When the page is loaded, the JS code is run and the page then becomes interactible.

## getStaticProps

If you export a `getStaticProps` function from a page, Nextjs will pre-render this page at build time using the props returned from that function. These returned props will be passed to the page component as props.

```
export async function getStaticProps(context) {
  return {
    props: {}
  }
}
```

`getStaticProps` should be used when

- The data required to render the page is available at build time.
- The data comes from a headless CMS
- The page must be pre-rendered (for SEO) and be very fast
- The data can be publicly cached (not user specific)

`getStaticProps` does not have access to the incoming request (such as query parameters or HTTP headers) as it generates static HTML. `getStaticProps` runs only on the server-side, never the client-side. This means that instead of fetching an API route from `getStaticProps` (that itself fetches data from an external source), you can write the server-side code directly in `getStaticProps`.

When a page with `getStaticProps` is pre-rendered at build time, in addition to the page HTML file, Nextjs generates a JSON file holding the results of running `getStaticProps` which will be used as props later for the page component.
