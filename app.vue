<template>
  <div class="app">
    <SectionHero></SectionHero>
    <main>
      <SectionAbout></SectionAbout>
      <SectionWorks></SectionWorks>
      <SectionSocialLinks></SectionSocialLinks>
    </main>
    <SectionFooter></SectionFooter>
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  background-color: $surface;
  color: $on-surface;
}
</style>
