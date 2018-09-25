<template>
  <h1>Hello World</h1>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      viewer: {},
    };
  },
  apollo: {
    viewer: gql`{
      viewer {
        id
        lastName
      }
    }`,
  },
};
</script>
