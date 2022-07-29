<template>
  <li>
    <h2>{{ name }}</h2>

    <button @click="toggleDetails">{{ detailsButtonText }}</button>

    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'friend-contact',
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
  ],
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    detailsButtonText() {
      if (this.showDetails) {
        return 'Hide Details';
      }

      return 'Show Details';
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style></style>
