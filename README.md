1. React Server Components can talk to database and eliminate the need of an API/endpoint 
2. `export default async function` allows you to use Promise i.e. `await`
3. `unstable_noStore()` to prevent data from being cached -- dynamic rendering
4. Since we are using `await`, we are creating request-waterfall 
   1. i.e. one promise can start only when the previous one is done
   2. Use await `Promise.all(...promises)` to start all the Promises all the same time.
5. Use `loading.tsx` to show a skeleton while the page is loading.
6. The skeleton is inherited by the child pages as well.
7. `RouteGroup`: Create a folder with parentheses like `(overview)` and move `loading.tsx` as well as `page.tsx` inside it.
   1. This will ensure that the children pages do noto inherit the skeleton.
   2. Also, such directories are not included in the path.
   3. You won't be able to create two such directories.
      1. ```error
         You cannot have two parallel pages that 
         resolve to the same path. Please check 
         /dashboard/(killer)/page and /dashboard/(overview)/page.
         ```
8. Use `Suspense` to load just the slow data.
   1. Move the data load to the specific component.
   2. ```<Suspense fallback={<RevenueChartSkeleton/>}><RevenueChart/></Suspense>```
   3. Use a wrapper-pattern if you want `Suspense + multiple Promises` 
9. Data Loading/Fetching strategies:
   1. You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
   2. You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
   3. You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.


## CSS Notes
1. Paddings: `px-3 py-11`
2. Screen overrides: (mobile) `xs: py-11` (desktop)`md: px-3`
3. Margins: `mr-2`
4. Flex containers: `flex`
   1. Align-items - Align items on cross-axis
   2. Justify-content - Align items on main-axis
