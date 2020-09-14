<template>
  <div>
    <v-card class="elevation-12">
      <v-card-text>
        <v-row>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Units To Sell</p>
            <span class="body-1">{{ unitHeld }}</span>
          </v-col>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Percentage</p>
            <span class="body-1">{{ percentageCalculated }}</span>
          </v-col>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Price Prediction</p>
            <span class="body-1">{{ pricePrediction }}</span>
          </v-col>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Return of sell</p>
            <span class="body-1">{{ result }}</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    unitHeld: {
      type: Number
    },
    percentageCalculated: {
      type: String
    },
    pricePrediction: {
      type: String
    },
    result: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
