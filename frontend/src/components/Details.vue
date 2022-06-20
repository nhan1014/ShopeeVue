<template>
  <v-card class="mx-auto" color="#EE4E2E" flat>
    <v-item-group multiple>
      <v-item v-slot="{}">
        <v-row>
          <v-col cols="3">
            <v-img
              :src="`${selectedItem.src}`"
              height="auto"
              width="auto"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <h2>{{ selectedItem.decs }} - {{ selectedItem.ower }}</h2>
            <p>Địa Chỉ: {{ selectedItem.address }}</p>
            <p>Giá: {{ selectedItem.price }}</p>
          </v-col>
          <v-col cols="3">
            <iframe
              :src="selectedItem.map"
              width="400"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card color="#F49786">
              <v-card-title>
                <v-icon color="white" class="mr-4">mdi-menu</v-icon>Menu
              </v-card-title>
              <v-card-text>
                <v-timeline density="compact" truncate-line="none">
                  <v-timeline-item
                    v-for="item in menu"
                    :key="item.name"
                    :dot-color="item.color"
                    size="x-small"
                  >
                    <div class="font-weight-normal">
                      <a
                        ><strong @click="selecteMenu(item)">{{
                          item.title
                        }}</strong></a
                      >
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
            <v-card color="#F49786" class="mt-4 cart" min-height="200">
              <v-card-title>
                <v-icon color="white" class="mr-4">mdi-cart</v-icon>Giỏ Hàng
              </v-card-title>
              <v-card-text
                v-for="item in cart"
                :key="item.name"
                class="cart-text"
              >
                <v-row class="px-2">
                  <v-col cols="9">
                    <h3>{{ item.decs }}</h3>
                  </v-col>
                  <v-col cols="3">
                    <v-row>
                      <v-col cols="3" class="px-0 py-2 text-center">
                        <v-icon
                          @click="removeFromCart(item)"
                          color="white"
                          size="x-large"
                          >mdi-minus</v-icon
                        >
                      </v-col>
                      <v-col cols="6" class="text-center">
                        {{ item.count }}
                      </v-col>
                      <v-col cols="3" class="px-0 py-2 text-center">
                        <v-icon
                          @click="addToCart(item)"
                          color="white"
                          size="x-large"
                          >mdi-plus</v-icon
                        >
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-card
              color="#F49786"
              class="mt-0 payment"
              height="60"
              v-if="cart.length > 0 ? true : false"
            >
              <v-card-text class="text-right">
                <v-btn color="#ee4e2e" @click="confirmPayment">
                  Thanh Toán
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-card color="#F49786" :title="type">
              <v-card-text
                v-for="item in foods"
                :key="item.name"
                size="x-small"
              >
                <v-row>
                  <v-col cols="3">
                    <v-img
                      :src="`${item.src}`"
                      max-height="70"
                      class="pa-2"
                    ></v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <strong class="pa-2">{{ item.decs }}</strong>
                    </v-row>
                    <v-row class="pa-2">
                      {{ item.detail }}
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="pa-2">
                    <v-row>
                      <v-col cols="7" class="pt-8"
                        ><h3>{{ item.price }}<sup>đ</sup></h3></v-col
                      >
                      <v-col cols="5" class="pa-0 pt-5">
                        <v-btn
                          size="x-small"
                          height="34px"
                          width="34px"
                          color="#ee4e2e"
                          @click="addToCart(item)"
                        >
                          <v-icon color="white" size="x-large">mdi-plus</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-item>
    </v-item-group>
    <div class="text-center">
      <v-dialog v-model="paymentDialog">
        <v-card color="white" width="400">
          <v-card-title> Xác nhận thanh toán </v-card-title>
          <v-card-text>
            Vui lòng kiểm tra chính xác lại danh sách trước khi thanh toán.
          </v-card-text>
          <v-card-actions>
            <v-btn @click="paymentDialog = false">Cancel</v-btn>
            <v-btn @click="paymentDialog = false">Xác nhận</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Details",
  data: () => ({
    paymentDialog: false,
    type: "Đồ Ăn",
    menu: [
      {
        title: "Đồ Ăn",
        name: "Foods",
        color: "yellow",
      },
      {
        title: "Thức Uống",
        name: "Drinks",
        color: "green",
      },
      {
        title: "Combo",
        name: "Combo",
        color: "blue",
      },
    ],
    foods: [
      {
        id: 1,
        src: "https://i.imgur.com/fLnl8G9.jpg",
        name: "banh bao",
        decs: "Bánh Bao",
        price: 20000,
        ower: "ABC",
        detail: "Bánh bao nóng hổi, vừa thổi vừa ăn",
      },
      {
        id: 2,
        src: "https://i.imgur.com/fLnl8G9.jpg",
        name: "banh bao",
        decs: "Bánh Bao",
        price: 20000,
        ower: "ABC",
        detail: "Bánh bao nóng hổi, vừa thổi vừa ăn",
      },
      {
        id: 3,
        src: "https://i.imgur.com/fLnl8G9.jpg",
        name: "banh bao",
        decs: "Bánh Bao",
        price: 20000,
        ower: "ABC",
        detail: "Bánh bao nóng hổi, vừa thổi vừa ăn",
      },
      {
        id: 4,
        src: "https://i.imgur.com/fLnl8G9.jpg",
        name: "banh bao",
        decs: "Bánh Bao",
        price: 20000,
        ower: "ABC",
        detail: "Bánh bao nóng hổi, vừa thổi vừa ăn",
      },
    ],
    cart: [],
  }),
  computed: {
    listFoods() {
      return this.$store.state.listFoods;
    },
    selectedItem() {
      return this.$store.state.selectedItem;
    },
  },
  created() {
    this.selectedItem.map =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.9623992840757!2d108.22686381526474!3d16.01547274512943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a02540afe57%3A0xfc598b0504c638d6!2zNTIgTmd1eeG7hW4gSGnhur9uIEzDqiwgSG_DoCBYdcOibiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1655657894031!5m2!1svi!2s";
  },
  methods: {
    selecteMenu(item) {
      this.type = item.title;
    },
    addToCart(item) {
      if (typeof item.count === "undefined") {
        item.count = 1;
        this.cart.push(item);
      } else if (this.cart.filter((e) => e.id === item.id).length > 0) {
        item.count += 1;
      } else {
        item.count += 1;
        this.cart.push(item);
      }
      console.log(this.cart);
    },
    removeFromCart(item) {
      if (item.count === 1) {
        item.count = 0;
        this.cart = this.cart.filter((e) => e.id !== item.id);
      } else {
        item.count -= 1;
      }
    },
    confirmPayment() {
      this.paymentDialog = true;
    },
  },
};
</script>