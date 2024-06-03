<script setup></script>

<template>
  <section class="w-100 border-b container aboutsection">
    <div class="grid-wrapper-left">
      <div class="sticky content"><h2>About Us</h2></div>
    </div>
    <div class="grid-wrapper-right content">
      <p class="overline">OUR STORY</p>
      <h3 class="title">Jeet Art_Blooms</h3>
      <p class="sub-title">
        Welcome to Jeet Art_Blooms, where we transform emotions into art. With a
        passion for creativity, we curate an array of exquisite paintings that
        inspire and captivate. Our journey began with a simple love for art, and
        over 56 years, we've evolved into a destination that brings stories to
        life through every brushstroke.
      </p>
      <p class="sub-title">
        Feel free to customize this version to suit your shop's narrative.
      </p>
      <a class="button">Learn more</a>
    </div>
  </section>
</template>

<style scoped>
.grid-wrapper-left .sticky {
  top: 4.56dvw;
}

.grid-wrapper-right {
  border-left: 1px solid #000000;
}

.grid-wrapper-right .overline {
  margin-bottom: 1.7vw;
  text-transform: uppercase;
  font-weight: bold;
}

.grid-wrapper-right .title {
  margin-bottom: 1.12vw;
}

.grid-wrapper-right .sub-title {
  margin-bottom: 3dvw;
  color: rgba(18, 18, 18, 0.9);
}
</style>
