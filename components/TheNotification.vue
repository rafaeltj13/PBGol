<template>
  <div
    :class="{ 'translate-y-24 z-50': notification && notification.title }"
    class="w-[350px] absolute top-0 transition duration-300 left-0 right-0 mx-auto bg-sidebar dark:bg-sidebar-dark border border-primary dark:border-primary shadow-xl rounded-lg"
  >
    <div class="flex items-center justify-between p-4">
      <div>
        <p class="text-primary dark:text-primary-dark">
          {{ notification?.title }}
        </p>
        <p class="text-secondary dark:text-secondary-dark">
          {{ notification?.content }}
        </p>
      </div>
      <TheIcon
        customClass="text-primary dark:text-primary-dark hover:scale-110 transition-transform cursor-pointer top-5 right-5 h-5 w-5"
        faIcon="fa-solid fa-close"
        @click="() => setNotification(null)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { notification, setNotification } = useNotification();
const displayNotification = ref(false);

watch(notification, () => {
  displayNotification.value = !!notification.value?.title;
});
</script>
