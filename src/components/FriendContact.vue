<template>
  <li>
    <h2>{{ name }} <span v-if="showFavoriteFlag">(favorite)</span></h2>

    <button @click="toggleFavoriteFriend">Favorite Friend</button>

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
  props: {
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      showDetails: false,
      showFavoriteFlag: this.isFavorite,
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
    toggleFavoriteFriend() {
      this.showFavoriteFlag = !this.showFavoriteFlag;
    },
  },
};
</script>

<style></style>
