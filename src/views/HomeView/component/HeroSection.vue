<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="bg-secondary relative py-40 pb-56 xl:py-56 3xl:py-64">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold pb-5">
            {{ heroSectionContent.heading }}
          </h1>
          <h3 class="text-2xl lg:text-2xl 2xl:text-4.5xl py-4 lg:pt-3 lg:pb-8">
            {{ heroSectionContent.subHeading }}
          </h3>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.accent }}
            </SiteButton>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute right-0 bottom-0">
      <img class="w-3/4 2xl:w-full ml-auto" :src="heroSectionContent.heroImage" :alt="heroSectionContent.alt">
    </div>
  </section>
</template>
