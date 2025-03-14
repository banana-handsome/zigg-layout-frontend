<script>
// @ts-nocheck
    import Footer from "../../components/Items/Footer.svelte";
    import Hero from "../../components/Items/Hero.svelte";
    import Navbar from "../../components/Items/Navbar.svelte";
    import CenterLayout from "../../components/Layouts/CenterLayout.svelte";
    import MainLayout from "../../components/Layouts/MainLayout.svelte";

</script>

<MainLayout theme="dark" padding=4xl>
    <CenterLayout>
        <Navbar/>
    </CenterLayout>
    <Hero/>
    <Footer/>
</MainLayout>