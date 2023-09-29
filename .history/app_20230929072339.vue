<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script>
export default {
  mounted() {
    if (process.client) {
      const scripts = [
       
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      ];

      scripts.forEach((src) => {
        const externalScript = document.createElement("script");
        externalScript.setAttribute("src", src);
        document.head.appendChild(externalScript);
      });
    }
  },
};
</script>