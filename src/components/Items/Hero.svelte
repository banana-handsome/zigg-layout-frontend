<script>
    let count = $state(0)
</script>
<div class="hero min-h-screen">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <h1 class="text-5xl font-bold">Zigg</h1>
            <p class="py-6">
                Zigg merupakan layout frontend yang di buat dengan library <span class="text-red-500">Svelte</span> dan <span class="text-teal-400">Daisy</span> + <span class="text-cyan-400">Tailwindcss</span>. Zigg memiliki kecepatan awal sebesar <span class="font-semibold">~5ms</span> dan ukuran bundle sebesar <span class="font-semibold">~6KB</span>. Proyek ini bersifat open source
            </p>
            <button class="btn btn-primary" onclick={() => count++}>Hitung {count}</button>
        </div>
    </div>
</div>