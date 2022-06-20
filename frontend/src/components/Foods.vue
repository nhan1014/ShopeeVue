<template>
  <v-card class="mx-auto" color="#EE4E2E" flat>
    <v-item-group multiple>
      <v-row>
        <v-col v-for="(item, i) in listFoods" :key="i" cols="12" md="4">
          <v-item v-slot="{}">
            <a>
              <v-img
                :src="`${item.src}`"
                min-height="250"
                class="text-right pa-2"
                @click="toDetails(item)"
              ></v-img>
              <v-tooltip activator="parent" location="mid"
                >{{ item.decs }} - {{ item.ower }}
              </v-tooltip>
            </a>
            <a
              ><h2 @click="toDetails(item)">
                {{ item.decs }} - {{ item.ower }}
              </h2></a
            >
            <p>Địa Chỉ: {{ item.address }}</p>
            <p>Giá: {{ item.price }}</p>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  name: "Foods",
  data: () => ({

  }),
  methods: {
    toDetails(item) {
      Object.keys(this.currentComponents).forEach((key) => {
        if (key.includes('Detail')) {
          this.currentComponents[key] = true;
        } else {
          this.currentComponents[key] = false;
        }
      });
      this.$store.commit("selectedItem", item);
      this.$store.commit("selectedComponent", this.currentComponents);
    },
  },
  computed: {
    listFoods() {
      return this.$store.state.listFoods;
    },
    currentComponents() {
      return this.$store.state.listComponents;
    },
  },
};
</script>
