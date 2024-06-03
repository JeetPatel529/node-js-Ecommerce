<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <li class="w-100">
        <ul class="nav--list">
          <li>
            <RouterLink to="/" class="nav-link link">Shop</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link link">Contact</RouterLink>
          </li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li class="w-100">
        <ul class="nav--list">
          <li></li>
          <li></li>
          <li>
            <RouterLink to="/" class="nav-link link">Sign In</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link link">Cart</RouterLink>
          </li>
        </ul>
      </li>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  border-bottom: 1px solid #000000;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
}

.header .navbar {
  display: flex;
  align-items: stretch;
  width: 100%;
  list-style: none;
  justify-content: space-between;
}

.header .navbar .nav--list {
  display: flex;
  align-items: stretch;
  list-style: none;
  width: 100%;
}

.header .navbar .nav--list .nav-link {
  display: block;
  padding: 2.23vw;
  width: 100%;
  border-right: 1px solid #000000;
  text-transform: capitalize;
  text-align: center;
}

.navbar .w-100:nth-last-child(1) .nav--list {
  justify-content: end;
}

.navbar .nav--list li {
  width: 100%;
}

.header .navbar .w-100:nth-child(1) .nav--list li:nth-last-child(2) {
  border-left: 0;
}

.header .navbar .nav--list li:nth-last-child(2) {
  border-left: 1px solid #000000;
}
</style>
