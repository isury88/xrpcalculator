<template>
  <div>
    <v-card class="elevation-12">
      <v-card-text>
        <v-row>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Total Units To Sell</p>
            <span class="body-1">{{ totalUnitToSell }}</span>
          </v-col>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Total Percentage</p>
            <span class="body-1">{{ totalPercentage }}</span>
          </v-col>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold"></p>
            <span class="body-1"></span>
          </v-col>
          <v-col cols="6" sm="6" lg="3">
            <p class="mb-0 subtitle-1 font-weight-bold">Total Return of sell</p>
            <span class="body-1">{{ totalReturnOfSell }}</span>
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
    totalUnitToSell: {
      type: Number
    },
    totalPercentage: {
      type: String
    },
    totalReturnOfSell: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
