<script setup>
import { ref } from "vue";

const chooseAns = ref([
  {
    ans_title: "Curated Selection",
    ans_description:
      " Our gallery isn't a random collection; it's a masterpiece of intentionality. Each painting you find here is the result of meticulous curation – we choose pieces that tell stories, ignite emotions, and encapsulate the beauty of human expression.",
  },
  {
    ans_title: "Passion-Driven",
    ans_description:
      "[Your Shop Name] was born from the heart of [Founder's Name]. Our love for art isn't just a business endeavor; it's a testament to the profound impact that creativity can have on our lives. Every artwork we present carries the imprint of our genuine passion.",
  },
  {
    ans_title: "Artistry and Diversity",
    ans_description:
      "From the bold strokes of contemporary art to the timeless elegance of traditional pieces, our collection is a vibrant tapestry of artistic styles. We believe that art should be as diverse as the emotions it evokes, ensuring that you find something that resonates with you.",
  },
  {
    ans_title: "Emotions on Canvas",
    ans_description:
      "Our paintings are more than pigment on canvas – they're portals to emotions, memories, and experiences. Each stroke is infused with the artist's soul, inviting you to connect on a deeper level. Choose art that speaks to your heart.",
  },
  {
    ans_title: "Customer Centric",
    ans_description:
      "Your satisfaction is our guiding star. Navigating through our website is effortless, and our secure checkout ensures your peace of mind. We're dedicated to making your art acquisition journey smooth and enjoyable, from the moment you enter our virtual doors.",
  },
  {
    ans_title: "Supporting Artists",
    ans_description:
      "By choosing [Your Shop Name], you're not just acquiring art; you're supporting artists' dreams. We provide a platform for creativity to flourish, ensuring that every stroke of genius finds its rightful place in the world.",
  },
  {
    ans_title: "Bringing Beauty Home",
    ans_description:
      "Transform your spaces into a symphony of aesthetics. When you select a piece from us, you're not just decorating; you're infusing your surroundings with meaning. Let the art you choose be a reflection of your personality and a testament to your appreciation for beauty.",
  },
]);
</script>

<template>
  <section class="w-100 border-b container">
    <div class="grid-wrapper-left">
      <div class="sticky content">
        <h2>Why choose us ?</h2>
      </div>
    </div>
    <ul class="grid-wrapper-right">
      <li class="content" v-for="(item, index) in chooseAns" :key="index">
        <h3 class="title">{{ item.ans_title }}</h3>
        <p class="sub-title">
          {{ item.ans_description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.grid-wrapper-left .sticky {
  top: 4.56dvw;
}

.grid-wrapper-right {
  border-left: 1px solid #000000;
  list-style: none;
}

.grid-wrapper-right .content {
  border-bottom: 1px solid #000000;
}

.grid-wrapper-right .content:nth-last-child(1) {
  border-bottom: 0;
}

.grid-wrapper-right .content .title {
  margin-bottom: 1.12vw;
}
</style>
