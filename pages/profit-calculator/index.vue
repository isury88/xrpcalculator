<template>
  <section class="section has-text-centered">
    <div class="container">
      <a href="https://shop.ledger.com/pages/back-to-school?r=e75c94641010">
        <img
          width="728"
          height="90"
          alt="Back to school - Get 20% Off"
          src="https://www.ledgerwallet.com/images/promo/banners/ledger_banner_7-2-8x9-0.jpg"
        />
      </a>
      <v-col cols="12" class="text-center mb-3">
        <v-btn
          class="mx-3"
          to="/"
          dark
          color="primary"
          type="submit"
          style="margin-bottom: 15px"
        >
          Home
        </v-btn>
        <v-btn
          class="mx-3 mb-3"
          to="/profit-planner"
          dark
          color="primary"
          type="submit"
          style="margin-bottom: 15px"
        >
          Profit Planner
        </v-btn>
      </v-col>
      <h1 class="title is-3 is-md-1">XRP Profit Calculator</h1>
      <h2 class="subtitle is-4">
        A simple tool to calculate your XRP holdings
      </h2>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <b-field custom-class="is-white" label="Units of XRP held:">
            <b-input
              v-model="holdings"
              type="number"
              min="0"
              max="9999999999"
              placeholder="Units of XRP held"
              size="is-medium"
              icon="account"
            ></b-input>
          </b-field>
          <b-field custom-class="is-white" label="Average Price Paid Per XRP:">
            <b-input
              v-model="averagePrice"
              type="number"
              step="any"
              placeholder="Average Price Paid Per XRP"
              size="is-medium"
              icon="currency-usd"
            ></b-input>
          </b-field>
          <b-field
            custom-class="is-white"
            label="Percentage of holdings to sell"
          >
            <b-input
              v-model="percentage"
              type="number"
              size="is-medium"
              icon="percent-outline"
              placeholder="Percentage of holdings to sell"
            ></b-input>
          </b-field>
          <b-field>
            <b-slider
              tooltip-type="is-black"
              track-type="is-black"
              size="is-large"
              v-model="percentage"
            ></b-slider>
          </b-field>
          <b-field
            custom-class="is-white"
            label="Price you think XRP will reach:"
          >
            <b-input
              v-model="futurePrice"
              type="number"
              step="any"
              placeholder="Price you think XRP will reach"
              size="is-medium"
              icon="currency-usd"
            ></b-input>
          </b-field>
          <div class="message is-info">
            <div class="message-header centered">
              Your Original holding value:
            </div>
            <div class="message-body">
              {{ originalHoldingValue() | toCurrency }}
            </div>
          </div>
          <div class="message is-info">
            <div class="message-header centered">
              Your Current holding value:
            </div>
            <div class="message-body">
              {{ currentHoldingValue() | toCurrency }}
            </div>
          </div>
          <div class="message is-info">
            <div class="message-header centered">Your Potential Return:</div>
            <div class="message-body">{{ potentialReturn() | toCurrency }}</div>
          </div>
          <div class="message is-info">
            <div class="message-header centered">LIVE PRICE</div>
            <div class="message-body">
              <p>${{ livePrice.USD }}</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://shop.ledger.com/pages/back-to-school?r=e75c94641010">
        <img
          width="728"
          height="90"
          alt="Back to school - Get 20% Off"
          src="https://www.ledgerwallet.com/images/promo/banners/ledger_banner_7-2-8x9-0.jpg"
        />
      </a>
    </div>
  </section>
</template>

<script>
import metaImg from "../../assets/img/xrp-social.jpg";
export default {
  name: "HomePage",

  data: () => {
    return {
      averagePrice: "",
      holdings: "",
      futurePrice: "",
      livePrice: "",
      percentage: 100
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
            "Profit calculator will help you see the value of your original holdings as well as your future value based on a price prediction set by you."
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
  },
  mounted() {
    this.getPrice();
  },
  methods: {
    originalHoldingValue() {
      return this.holdings * this.averagePrice;
    },
    currentHoldingValue() {
      return this.holdings * this.livePrice.USD;
    },
    potentialReturn() {
      return ((this.holdings * this.percentage) / 100) * this.futurePrice;
    },
    async getPrice() {
      let res = await this.$axios.get();
      return (this.livePrice = res.data);
    }
  }
};
</script>
<style lang="scss">
@import "/assets/scss/mystyles.scss";
.centered {
  justify-content: center;
  margin-top: 3rem;
}
.section {
  background-image: url("~assets/img/xrp-logo.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 0;
  // background-color: rgba($color: #027196, $alpha: .3);
}
.is-white {
  color: #ffffff;
}
.column {
  color: $black;
  background: rgba($color: #000000, $alpha: 0.8);
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 30px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.b-slider.is-primary .b-slider-fill {
  background: $title-color !important;
}
</style>
