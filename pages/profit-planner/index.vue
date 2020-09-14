<template>
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
        <v-col cols="12" class="text-center mb-3">
          <v-btn class="mx-3" to="/" dark color="primary" type="submit">
            Home
          </v-btn>
          <v-btn
            class="mx-3"
            to="/profit-calculator"
            dark
            color="primary"
            type="submit"
          >
            Profit Calculator
          </v-btn>
        </v-col>
        <h1 class="text-h5 text-md-h3 text-center">
          <span
            class="xrp-logo"
            :style="{
              backgroundImage: $vuetify.theme.dark
                ? backgroundwhiteBg
                : backgrounddarkBg
            }"
          ></span>
          XRP Profit Planner Calculator
        </h1>
        <h2 class="text-h6 text-md-h5 text-center">
          A simple tool to plan your exit strategy
        </h2>
        <v-row justify="end" align="center">
          <span
            class="mr-3"
            v-text="'Switch to ' + ($vuetify.theme.dark ? 'Light' : 'Dark')"
          ></span
          ><v-switch v-model="$vuetify.theme.dark"></v-switch>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" xl="10">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>XRP Profit Planner</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form
                id="form"
                @submit.prevent="addPlan"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="6" lg="3"
                      ><v-text-field
                        ref="holdings"
                        v-model="holdings"
                        label="Unit of XRP held"
                        name="holdings"
                        prepend-icon="mdi-numeric-1-box-multiple-outline"
                        type="number"
                        :rules="[v => !!v || 'Number of units is required']"
                        required
                      ></v-text-field
                    ></v-col>
                    <v-col cols="12" sm="6" lg="3"
                      ><v-text-field
                        ref="percentage"
                        v-model="percentage"
                        label="Percentage of units to sell"
                        name="percentage"
                        prepend-icon="mdi-percent"
                        type="number"
                        :rules="[
                          v => !!v || 'Percentage of units is required',
                          v => {
                            if (
                              !isNaN(parseFloat(v)) &&
                              v >= 1 &&
                              v <= totalPercentageLeft
                            )
                              return true;
                            return `Number has to be between 1 and ${totalPercentageLeft}`;
                          }
                        ]"
                        required
                      ></v-text-field
                    ></v-col>
                    <v-col cols="12" sm="6" lg="3"
                      ><v-text-field
                        ref="futurePrice"
                        v-model="futurePrice"
                        label="Future Price"
                        name="futurePrice"
                        prepend-icon="mdi-currency-usd"
                        type="number"
                        :rules="[v => !!v || 'Price is required']"
                        required
                      ></v-text-field
                    ></v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      lg="3"
                      align="center"
                      justify="center"
                    >
                      <v-card-actions>
                        <v-btn
                          class="mx-3"
                          fab
                          dark
                          color="primary"
                          type="submit"
                          :disabled="!valid"
                          @click="validate"
                          @submit="addPlan()"
                        >
                          <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
          v-for="card in cards"
          :key="card.cardID"
        >
          <v-col cols="12" xl="10">
            <card-element
              :unitHeld="Number(card.unitInstance)"
              :result="Number(card.result) | toCurrency()"
              :pricePrediction="Number(card.futureInstance)"
              :percentageCalculated="Number(card.percentageInstance)"
            >
            </card-element>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CardElement from "@/components/CardElement";
import whiteBg from "../../assets/img/xrp-logo-white.svg";
import darkBg from "../../assets/img/xrp-logo.svg";
export default {
  components: { CardElement },
  data: () => {
    return {
      valid: true,
      averagePrice: "",
      holdings: "",
      initialHoldings: 0,
      totalHoldingsLeft: 0,
      futurePrice: "",
      livePrice: "",
      percentage: null,
      cardKey: 0,
      unitInstance: 0,
      percentageInstance: 0,
      futureInstance: 0,
      totalPercentageLeft: 100,
      cards: [],
      backgroundwhiteBg: `url(${whiteBg})`,
      backgrounddarkBg: `url(${darkBg})`
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    addPlan() {
      this.totalHoldingsLeft =
        this.holdings - (this.holdings * this.percentage) / 100;
      this.totalPercentageLeft = this.totalPercentageLeft - this.percentage;
      // this.holdings = this.totalHoldingsLeft;
      this.percentage = this.totalPercentageLeft;

      this.cards.push({
        cardID: this.cardKey++,
        unitInstance: this.$refs.holdings.value - this.totalHoldingsLeft,
        percentageInstance: this.$refs.percentage.value,
        futureInstance: this.$refs.futurePrice.value,
        result:
          (this.$refs.holdings.value - this.totalHoldingsLeft) *
          this.$refs.futurePrice.value
      });

      this.futurePrice = null;
    },
    originalHoldingValue() {
      return this.holdings * this.averagePrice;
    },
    currentHoldingValue() {
      return this.holdings * this.livePrice.USD;
    },
    potentialReturn() {
      return ((this.holdings * this.percentage) / 100) * this.futurePrice;
    },
    validate() {
      this.$refs.form.validate();
    }
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
