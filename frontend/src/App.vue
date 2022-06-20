<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar shrink-on-scroll prominent fade-img-on-scroll color="#EE4E2E">
        <v-col cols="1">
          <v-img src="../public/shopee-logo.png" color="white"></v-img>
        </v-col>
        <v-tabs align-with-title>
          <v-tab @click="toComponent('Food')"> Thức Ăn </v-tab>
          <v-tab @click="toComponent('Drink')"> Thức Uống </v-tab>
          <v-tab @click="toComponent('Victuals')"> Thực Phẩm </v-tab>
          <v-tab @click="toComponent('Beer')">Bia</v-tab>
          <v-tab @click="toComponent('Flower')">Hoa</v-tab>
          <v-tab @click="toComponent('Market')">Siêu Thị</v-tab>
          <v-tab @click="toComponent('Pharmacy')">Thuốc</v-tab>
          <v-tab @click="toComponent('Pet')">Thú Cưng</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-text-field
          class="mt-2"
          v-model="search"
          @keydown.enter="submitSearch"
        ></v-text-field>
        <v-btn icon @click="submitSearch">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
          <v-icon color="white" size="x-large" class="mr-4" @click="toCart()">mdi-cart-arrow-down</v-icon>
      </v-app-bar>
    </v-card>
    <v-container>
      <v-main>
        <Foods v-if="currentComponents.isFoodsComponent" />
        <Drinks v-if="currentComponents.isDrinksComponent" />
        <Details v-if="currentComponents.isDetailsComponent" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Foods from "./components/Foods.vue";
import Drinks from "./components/Drinks.vue";
import Details from "./components/Details.vue";

export default {
  name: "App",
  components: {
    Foods,
    Drinks,
    Details,
  },
  data: () => ({
    search: "",
    listFoods: [],
  }),
  methods: {
    submitSearch() {
      this.toComponent('Food');
      var newArray = this.listFoods.filter((element) => {
        return (
          element.name.includes(this.search) ||
          element.decs.includes(this.search)
        );
      });
      this.$store.commit("searchItems", newArray);
    },
    toComponent(name) {
      Object.keys(this.currentComponents).forEach((key) => {
        if (key.includes(name)) {
          this.currentComponents[key] = true;
        } else {
          this.currentComponents[key] = false;
        }
      });
    },
    toCart() {
      alert('To Cart')
    }
  },
  created() {
    this.currentComponents.isFoodsComponent = true;
    this.listFoods = this.$store.state.listFoods;
  },
  computed: {
    currentComponents() {
      return this.$store.state.listComponents;
    },
  },
};
</script>
<style>
.v-application__wrap {
  background-color: #ee4e2e;
}
.cart-text {
  height: 50px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.bottom-right {
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: 18px;
}
.cart {
  border-radius: 5px 5px 0px 0px;
}
.payment {
  border-radius: 0px 0px 5px 5px;
}
.v-card-actions {
  display: block;
  text-align: right;
}
</style>
