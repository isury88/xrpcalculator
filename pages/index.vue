<template>
  <div>
    <v-app id="inspire">
      <v-main>
        <v-container class="mt-3">
          <div class="text-center mb-3">
            <a
              class="hidden-md-and-down"
              href="https://shop.ledger.com/pages/back-to-school?r=e75c94641010"
            >
              <img
                width="728"
                height="90"
                alt="Back to school - Get 20% Off"
                src="https://www.ledgerwallet.com/images/promo/banners/ledger_banner_7-2-8x9-0.jpg"
              />
            </a>
            <a
              class="hidden-md-and-up"
              href="https://shop.ledger.com/pages/back-to-school?r=e75c94641010"
              ><img
                width="250"
                height="100"
                alt="Back to school - Get 20% Off"
                src="https://www.ledgerwallet.com/images/promo/banners/ledger_banner_2-5-0x1-0-0.jpg"
            /></a>
          </div>
          <h1 class="text-h5 text-md-h3 text-center">
            <span
              class="xrp-logo"
              :style="{
                backgroundImage: $vuetify.theme.dark
                  ? backgroundwhiteBg
                  : backgrounddarkBg
              }"
            ></span>
            XRP Planner and Profit Calculator
          </h1>
          <h2 class="text-h6 text-md-h5 text-center">
            Pick your service
          </h2>
          <v-row justify="end" align="center">
            <span
              class="mr-3"
              v-text="'Switch to ' + ($vuetify.theme.dark ? 'Light' : 'Dark')"
            ></span
            ><v-switch v-model="$vuetify.theme.dark"></v-switch>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" xl="10" class="text-center">
              <v-btn
                class="mx-3 my-3"
                to="/profit-calculator"
                dark
                color="primary"
                type="submit"
              >
                Profit Calculator
              </v-btn>
              <v-btn
                class="mx-3 my-3"
                to="/profit-planner"
                dark
                color="primary"
                type="submit"
              >
                Profit Planner
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import whiteBg from "../assets/img/xrp-logo-white.svg";
import darkBg from "../assets/img/xrp-logo.svg";
export default {
  data: () => {
    return {
      backgroundwhiteBg: `url(${whiteBg})`,
      backgrounddarkBg: `url(${darkBg})`
    };
  }
};
</script>
<style lang="scss">
.xrp-logo {
  display: block;
  margin: 0 auto;
  width: 70px;
  height: 70px;
  padding-bottom: 10px;
}
</style>
