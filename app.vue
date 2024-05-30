<template>
  <div class="app">
    <div class="app__background">
      <BlockBackgroundLines></BlockBackgroundLines>
    </div>
    <div class="app__foreground">
      <SectionHero></SectionHero>
      <main class="app__main">
        <SectionAbout></SectionAbout>
        <SectionWorks></SectionWorks>
        <SectionSocialLinks></SectionSocialLinks>
      </main>
      <SectionFooter></SectionFooter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  background-color: $surface;
  color: $on-surface;
}

.app__main {
  position: relative;
  padding: 0 16px;
}
</style>
