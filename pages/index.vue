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
              class="hidden-lg-and-up"
              href="https://shop.ledger.com/pages/back-to-school?r=e75c94641010"
              ><img
                width="250"
                height="100"
                alt="Back to school - Get 20% Off"
                src="https://www.ledgerwallet.com/images/promo/banners/ledger_banner_2-5-0x1-0-0.jpg"
            /></a>
          </div>
          <h1 class="text-h4 text-md-h2 text-center">
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
          <h2
            class="text-h6 text-md-h5 text-center"
            style="max-width:800px; margin:30px auto"
          >
            If you find yourself wondering how the price of XRP will affect your
            holdings value, check one of the two tools below to help you out.
            Fast and easy to use.
          </h2>
          <v-row justify="end" align="center">
            <span
              class="mr-3"
              v-text="'Switch to ' + ($vuetify.theme.dark ? 'Light' : 'Dark')"
            ></span
            ><v-switch v-model="$vuetify.theme.dark"></v-switch>
          </v-row>
          <v-row
            align="center"
            justify="center"
            style="max-width:900px;margin:0 auto"
          >
            <v-card class="mx-auto mb-4 my-3" width="320">
              <v-img
                class="white--text align-end"
                height="250px"
                :src="profitCalculatorImg"
              >
              </v-img>
              <v-card-text class="text--primary">
                <h3 class="text-h5 mb-3">Profit Calculator</h3>
                <div>
                  Profit calculator will help you see the value of your original
                  holdings as well as your future value based on a price
                  prediction set by you.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="mx-3 my-3"
                  to="/profit-calculator"
                  dark
                  color="primary"
                  type="submit"
                  >Try This out</v-btn
                >
              </v-card-actions>
            </v-card>
            <v-card class="mx-auto mb-4 my-3" width="320">
              <v-img
                class="white--text align-end"
                height="250px"
                :src="plannerCalculatorImg"
              >
              </v-img>
              <v-card-text class="text--primary">
                <h3 class="text-h5 mb-3">Profit Planner</h3>
                <div>
                  Profit Planner can help you set a breakdown of your holdings
                  based on the percentage and price you choose to sell.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="mx-3 my-3"
                  to="/profit-planner"
                  dark
                  color="primary"
                  type="submit"
                >
                  Try this out
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import whiteBg from "../assets/img/xrp-logo-white.svg";
import darkBg from "../assets/img/xrp-logo.svg";
import profitImg from "../assets/img/profit-calculator.png";
import plannerImg from "../assets/img/profit-planner.png";
import metaImg from "../assets/img/xrp-social.jpg";
export default {
  data: () => {
    return {
      backgroundwhiteBg: `url(${whiteBg})`,
      backgrounddarkBg: `url(${darkBg})`,
      profitCalculatorImg: profitImg,
      plannerCalculatorImg: plannerImg
    };
  },
  head() {
    return {
      title: "XRP Profit Calculators",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "If you find yourself wondering how the price of XRP will affect your holdings value, check one of the two tools below to help you out. Fast and easy to use."
        },
        {
          hid: "og:image",
          name: "og:image",
          content: metaImg
        },
        { hid: "og:type", name: "og:type", content: "article" },
        {
          hide: "twitter:card",
          name: "twitter:card",
          content: metaImg
        },
        {
          hide: "twitter:site",
          name: "twitter:site",
          content: metaImg
        }
      ]
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
