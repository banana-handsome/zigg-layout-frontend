<script>
    // @ts-nocheck

    import Router from "svelte-spa-router";
    import Welcome from "../routes/Welcome/Welcome.svelte";
    import NotFound from "../routes/NotFound/NotFound.svelte";

    const routes = {
      "/" : Welcome,
      "*" : NotFound 
    }
</script>

<Router {routes}/>