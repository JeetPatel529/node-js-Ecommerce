<template>
  <section class="w-100">
    <div class="content flex-center border-b">
      <h2>Our Service</h2>
    </div>
    <div class="container w-100 servicesection">
      <div class="grid-wrapper-left">
        <div class="fix-height">
          <img src="/img/service-img.jpg" />
        </div>
      </div>
      <div class="grid-wrapper-right flex-center content">
        <div class="flex-vertical-center text-center">
          <p class="overline">Unveiling Beauty and Emotion</p>
          <h2>Discover Our Artistic Creations</h2>
          <p>
            Immerse yourself in a world of captivating artistry. Our carefully
            curated collection of paintings speaks volumes, evoking emotions and
            adding a touch of elegance to your spaces. Each stroke is a
            testament to our dedication to art and its power to enrich lives.
          </p>
          <a href="#" class="button">Explore Artwork</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.servicesection .grid-wrapper-left .fix-height {
  height: 42vw;
  overflow: hidden;
  position: relative;
}

.servicesection .grid-wrapper-left .fix-height img {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  -o-object-fit: cover;
  object-fit: cover;
}

.servicesection .grid-wrapper-right .flex-vertical-center .overline {
  margin-bottom: 1vw;
}

.servicesection .grid-wrapper-right .flex-vertical-center h2 {
  margin-bottom: 1.12vw;
}

.servicesection .grid-wrapper-right .flex-vertical-center p {
  margin-bottom: 3.5vw;
}
</style>
