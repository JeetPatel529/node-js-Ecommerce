<template>
  <section class="w-100 border-b container herosection">
    <div class="grid-wrapper-left">
      <div class="sticky content">
        <div class="hero-row1">
          <h1 class="title">
            Jeet <br />
            Art_Blooms
          </h1>
          <p class="subtitle">
            Explore Exquisite Artistry and Gifts for Every Moment: Share Delight
            through Our
            <i> Online Art Gallery</i>
          </p>
        </div>
        <div class="hero-row2">
          <div class="column1">
            <img src="/img/dancing-in-the-Rain.jpg" />
          </div>
          <div class="column2">
            <p class="caption-small">
              Embrace the Bliss of Expression at Our Contemporary Art Studio.
              Shop Online to Send Artistic Creations and Gifts Today.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-wrapper-right"></div>
  </section>
</template>

<style scoped>
.herosection .hero-row1 .title {
  margin-bottom: 2.08vw;
}

.herosection .hero-row2 .column1 {
  padding-right: 3.125vw;
}

.herosection .hero-row2 .column1 img {
  height: 32vw;
}

.herosection .hero-row2 .column1 {
  width: 50%;
  border-right: 1px solid #000;
  padding-right: 1.7vw;
  position: relative;
  overflow: hidden;
}

.herosection .hero-row2 .column1 img {
  width: 100%;
  height: 13.9dvw;
  -o-object-fit: cover;
  object-fit: cover;
  display: block;
}

.herosection .title {
  margin-bottom: 1.12vw;
}

.herosection .sub-title {
  margin-bottom: 1.12vw;
}

.herosection .hero-row2 {
  border-top: 1px solid #000;
  align-items: flex-start;
  margin-top: 1.7vw;
  padding-top: 1.7vw;
  display: flex;
  overflow: hidden;
}
</style>
