<template>
  <!-- Navigation header starts -->
  <section class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="/assets/images/news.svg" width="112" height="28" />
          <span class="nav-heading">News app</span>
        </router-link>
        <!-- Mobile handburger starts -->
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!-- Mobile handburger ends -->
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Home </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item"></div>
        </div>
      </div>
    </nav>
  </section>

  <!-- Navigation header ends -->
</template>

<script>
export default {
  name: "AppHeader",
  mounted() {
    this.toggleNavBurger();
  },
  methods: {
    /**
     * Adds isactive class for the header handburger to show and close
     * in mobile view only
     */
    toggleNavBurger() {
      const navBurger = this.getDoccumentEl(".navbar-burger");
      const navMenu = this.getDoccumentEl(".navbar-menu");

      navBurger.addEventListener("click", function () {
        navBurger.classList.toggle("is-active");
        navMenu.classList.toggle("is-active");
      });
    },
    /**
     * Finds and returns a element in the Dom
     * @param {String}
     * @returns {Element} - Dom element
     */
    getDoccumentEl(selector) {
      return document.querySelector(selector);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand img {
  max-height: 2.75rem;
}
.nav-heading {
  font-weight: 500;
}
</style>
