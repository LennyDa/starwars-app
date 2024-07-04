#### Start my-widget-manager
<pre>
npm install 
npm run dev;
</pre>


#### Pages
<pre>
SearchPage - main page 
CategoryPage 
</pre>

#### Components
<pre>
App - main wrapper.

SearchBar - input component on search page.

List - shows search results on Search page. 

ViewAllBtn - navigation button to selected category from List component.

Table - shows category data on Category page (includes interface for row data).

GoBackBtn - navigation button from Category page to the main page (Search).

EditButton, DeleteButton, CreateButton, Modal:
reusable components for Table edit. used in Table component 
(this part is not complete in this app, please see similar functionality in my-widget-manager app).


</pre>

#### Hooks
<pre>
useDebounce - for autocomplete search in search page     
</pre>


### actions
<pre>
 action types definition

</pre>

#### api
<pre>
initial call for categories from the api
</pre>

### assets
<pre>
images - all images are Bootstrap svg icons for create/edit/delete options in the app.

</pre>

