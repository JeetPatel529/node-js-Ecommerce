<template>
  <section class="grid-section">
    <div class="grid-wrapper">
      <div class="grid-content">
        <img
          src="https://gallerist.in/cdn/shop/products/best-nature-painting-7_2457x.jpg?v=1664427604"
          alt="Nature Painting"
        />
      </div>
      <div class="grid-content sticky content">
        <h3 class="title">Exquisite Artworks, Expertly Crafted</h3>
        <p class="sub-title">
          At [Your Shop Name], we take immense pride in our team of skilled and
          passionate artists who meticulously bring each painting to life. Every
          stroke of the brush is a testament to our commitment to quality and
          creativity. Collaborating with a network of artists, we ensure that
          each artwork is a masterpiece of craftsmanship and artistic
          expression.
        </p>
      </div>
    </div>
  </section>
  <section class="grid-section">
    <div class="grid-wrapper">
      <div class="grid-content sticky content">
        <h3 class="title">Artworks, Gifts & Inspirational Spaces</h3>
        <p class="sub-title">
          Beyond our captivating artworks, we present an assortment of artistic
          treasures, including sculptures, prints, and curated home decor, all
          thoughtfully curated to enrich your living spaces. Our philosophy is
          to infuse creativity into every aspect of life, which is why we offer
          a collection of unique pieces that inspire and elevate. We strive to
          make art and artistic expression accessible to all, delivering across
          Kyiv with convenient options.
        </p>
      </div>
      <div class="grid-content">
        <img
          src="https://buildingandinteriors.com/wp-content/uploads/2022/08/Feature-Images_Etsy-1000x620.jpg"
          alt="Art Decor"
        />
      </div>
    </div>
  </section>
  <section class="grid-section">
    <div class="grid-wrapper">
      <div class="grid-content">
        <img
          src="https://www.teachingexpertise.com/wp-content/uploads/2021/11/painting-ideas-for-kids.jpg"
          alt="Kids Painting Ideas"
        />
      </div>
      <div class="grid-content sticky content">
        <h3 class="title">Enriching Every Moment</h3>
        <p class="sub-title">
          Our commitment is clear: to enrich every moment and create lasting
          memories for our customers. We are driven by the pursuit of delivering
          not only exceptional artworks but also an unparalleled shopping
          experience. With a dedication to top-tier paintings, attentive
          customer care, and an intuitive online platform, we aim to provide you
          with confidence and contentment in your choices. Thank you for
          selecting [Your Shop Name]. We eagerly anticipate filling your life
          with joy and inspiration through our remarkable artworks and
          thoughtful gifts.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  height: 40dvw;
  overflow: hidden;
  border-bottom: 1px solid black;
}

.grid-wrapper {
  display: flex;
  align-items: flex-start;
  height: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-content img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.grid-content {
  width: 50%;
  height: 100%;
}

.sticky {
  position: sticky;
  top: 4.56dvw;
}

.title {
  margin-bottom: 1.12vw;
}

.sub-title {
  color: rgba(18, 18, 18, 0.9);
}
</style>
