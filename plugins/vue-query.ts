import type { DehydratedState, VueQueryPluginOptions } from '@tanstack/vue-query';
import type { NuxtApp } from '#app';
import { VueQueryPlugin, QueryClient, hydrate, dehydrate } from '@tanstack/vue-query';
// Nuxt 3 app aliases
import { defineNuxtPlugin, useState } from '#imports';

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  const vueQueryState = useState<DehydratedState | null>('vue-query');

  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });
  const options: VueQueryPluginOptions = { queryClient };

  // ✅ Используем `nuxt.vueApp` → `nuxt.$app`
  nuxt.vueApp?.use(VueQueryPlugin, options);

  if (import.meta.server) {
    // ✅ Заменяем `nuxt.hooks.hook()` → `nuxt.hook()`
    nuxt.hook('app:rendered', () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }

  if (import.meta.client) {
    hydrate(queryClient, vueQueryState.value);
  }
});
