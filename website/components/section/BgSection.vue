<template>
  <section class="w-100 content bg-section">
    <div class="wrapper-spacing-center">
      <p class="overline">Discover</p>
      <h2>Your Shop's Unique Offerings</h2>
      <p>
        Explore a world of artistic wonders with our carefully curated
        collection. Our passion for art drives us to present you with a diverse
        range of paintings that resonate with emotions and inspire creativity.
      </p>
      <a href="#" class="button">Browse Artwork</a>
    </div>
  </section>
</template>

<style scoped>
.bg-section {
  height: 50vw;
  background-image: linear-gradient(
      rgba(18, 18, 18, 0.35),
      rgba(18, 18, 18, 0.35)
    ),
    url("https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150146387.jpg");
  background-position: 0 0, 50%;
  background-size: auto, cover;
  background-attachment: scroll, fixed;
  justify-content: center;
  align-items: center;
  display: flex;
}

.bg-section .wrapper-spacing-center {
  width: 65%;
  text-align: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  color: #f5f5f7;
}

.bg-section .wrapper-spacing-center .overline {
  margin-bottom: 1vw;
}

.bg-section .wrapper-spacing-center h2 {
  margin-bottom: 1.12vw;
  color: #f5f5f7;
}

.bg-section .wrapper-spacing-center p {
  margin-bottom: 3.5vw;
}

.bg-section .wrapper-spacing-center .button {
  margin: auto;
  color: #ffffff;
  border: 1px solid #ffffff;
}

.bg-section .wrapper-spacing-center .button:hover {
  background-color: #f5f5f7;
  color: #121212;
}
</style>
