<template>
  <section class="section has-text-centered">
    <div class="container">
      <h1 class="title is-1">XRP Profit Calculator</h1>
      <h2 class="subtitle is-4">A simple tool to calculate your XRP holdings</h2>
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
          <b-field custom-class="is-white" label="Percentage of holdings to sell">
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
          <b-field custom-class="is-white" label="Price you think XRP will reach:">
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
            <div class="message-header centered">Your Original holding value:</div>
            <div class="message-body">{{ originalHoldingValue()|toCurrency }}</div>
          </div>
          <div class="message is-info">
            <div class="message-header centered">Your Current holding value:</div>
            <div class="message-body">{{ currentHoldingValue()|toCurrency }}</div>
          </div>
          <div class="message is-info">
            <div class="message-header centered">Your Potential Return:</div>
            <div class="message-body">{{ potentialReturn()|toCurrency }}</div>
          </div>
          <div class="message is-info">
            <div class="message-header centered">LIVE PRICE</div>
            <div class="message-body">
              <p>${{ livePrice.USD }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",

  data: () => {
    return {
      averagePrice: "",
      holdings: "",
      futurePrice: "",
      livePrice: "",
      percentage: 100,
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
    },
  },
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
